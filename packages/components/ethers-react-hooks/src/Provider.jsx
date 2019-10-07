
import React, { useContext, useReducer, useEffect } from "react";
import Context from "./Context";
import reducerActions from "./reducer";
import ProviderEffects from "./effects";
import { hashCode } from "./utilities";

const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context)
  const [state, dispatch] = useReducer(reducerActions, initialState);
  ProviderEffects(useEffect, state, dispatch)
  
  console.log(state, 'Ethers State')
  const stringToArrayPath = data => typeof data === 'string' ? data.split('.') : data
  const idxx = (state, nest) =>
  [state, ...stringToArrayPath(nest)]
  .reduce((branch, index) => {
    if(typeof index === 'string' && branch) {
      return branch[index]
    } else {
      nest = index
    }
  })

  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
      selector: (select) => idxx(state, select),
      enable: () => window.ethereum.enable(),
      setProvider: ({provider, delta}) => dispatch({
        type: 'SET_PROVIDER',
        payload: provider,
      }),
      setProviderStatus: ({provider, delta}) => dispatch({
        type: 'SET_PROVIDER',
        payload: provider,
      }),

      /* --- Library ---- */
      loadContractIntoLibrary: ({ abi, contractName }) => dispatch({
        type: 'LOAD_CONTRACT_INTO_LIBRARY_REQUEST',
        payload: {
          abi,
          contractName
        },
      }),

      /* --- Initialize ---- */
      initContract: ({ abi, address, contractType, delta }) => dispatch({
        type: 'INIT_CONTRACT_REQUEST',
        payload: {
          abi,
          address,
          contractType
        },
        delta: delta || address
      }),
      initContractFromLibrary: ({ address, contractName }) => dispatch({
        type: 'INIT_CONTRACT_FROM_LIBRARY_REQUEST',
        payload: {
          address,
          contractName,
        }
      }),
      deployContract: ({contract, delta, values}) => dispatch({
        type: 'DEPLOY_CONTRACT_REQUEST',
        payload: {
          contract,
          values
        },
        delta: delta || contract && contract.contractName
      }),
      deployContractFromBytecode: (abi, bytecode, delta) => dispatch({
        type: 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST',
        input: bytecode,
        delta: delta || hashCode(abi)
      }),
      signMessageTyped: ({message, delta}) => dispatch({
        type: 'SIGN_TYPED_MESSAGE_REQUEST',
        payload: message,
        id: delta || hashCode(message.toString())
      }),
      signMessage: ({ message, delta }) => dispatch({
        type: 'SIGN_MESSAGE_REQUEST',
        payload: message,
        id: delta || hashCode(message)
      }),
      sendTransaction: (transaction, delta) => dispatch({
        type: 'SIGN_TRANSACTION_REQUEST',
        input: transaction,
        delta
      })
    }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;
