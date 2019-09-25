
import { ethers } from 'ethers'

const effects = (callUseEffect, state, dispatch) => {

  /**
   * @function SetAddress
   */
  callUseEffect( () => { 
    const address = window.ethereum.selectedAddress
    if(address) {
      try {
        dispatch({
          type: 'SET_ADDRESS',
          input: address
        })
      } catch (error) {
        dispatch({
          type: 'SET_ADDRESS_FAILURE',
          input: error
        })
      }
    }
  }, [window.ethereum.selectedAddress])

  /**
   * @function SetWallet
   */
  callUseEffect( () => { 
    if(state.address) {
      const runEffect = async() => {
        try {
          const provider = await networkRouting('metamask');
          const wallet = provider.getSigner()
          dispatch({
            type: 'SET_WALLET_SUCCESS',
            payload: wallet
          })
        } catch (error) {
          dispatch({
            type: 'SET_WALLET_FAILURE',
            payload: error
          })
        }
      }
      runEffect();
    }

  }, [state.address])
  
  /**
   * @function SignMessage
   * @description SIGN_MESSAGE_REQUEST
   */
  callUseEffect( () => {
    
    if(state.store.messages && state.store.messages.length > 0) {
      const runEffect = async() => {
        const messageRequest = state.store.messages[0]
        const message = messageRequest.message
        try {
          const wallet = state.wallet
          if (wallet) {
            const signature = await wallet.signMessage(message)
            dispatch({
              type: 'SIGN_MESSAGE_SUCCESS',
              input: {
                id: messageRequest.id,
                message,
                signature
              }
            })
          }
        } catch (error) {
          dispatch({
            type: 'SIGN_MESSAGE_FAILURE',
            input: {
              id: messageRequest.id,
              error
            }
          })
        }
      }
      runEffect();
    }
	}, [state.store.messages])
  
  /**
   * @function DeployContract
   * @description SIGN_MESSAGE_REQUEST
   */
  callUseEffect( () => {
    
    if(state.store.deploy && state.store.deploy.length > 0) {
      const runEffect = async() => {
        let contract, deployed, transaction
        const request = state.store.deploy[0]
        const { payload } = request
        try {
          const wallet = state.wallet
          if(wallet) {
            contract = new ethers.ContractFactory(payload.contract.abi, payload.contract.bytecode, wallet)
            transaction = contract.getDeployTransaction(...payload.values)
            deployed = await wallet.sendTransaction(transaction);
            dispatch({
              type: 'DEPLOY_CONTRACT_SUCCESS',
              id: request.id,
              delta: request.id,
              payload: deployed
            })
          }
        } catch (error) {
          console.log(error)
        }
      }
      runEffect();
    }
	}, [state.store.deploy])

}

export default effects


/** 
 * @func networkRouting
 * @desc Select network provider.
 * @param {Object} network 
 * @return {Object} provider
 */
export const networkRouting = async network => {
  switch (network) {
    case 'json':
      return window.ethers.providers.json;
    case 'test':
      return window.ethers.providers.test;
    case 'infura':
      return window.ethers.providers.infura;
    case 'metamask':
      return new ethers.providers.Web3Provider(window.web3.currentProvider);
    default:
      return ethers.getDefaultProvider('rinkeby');

  }
}