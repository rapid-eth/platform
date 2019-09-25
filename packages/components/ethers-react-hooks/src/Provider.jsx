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
  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
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
      signMessage: (message, delta) => dispatch({
        type: 'SIGN_MESSAGE_REQUEST',
        input: message,
        delta
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
