import { hashCode } from './utilities'

const reducerActions = (state, action) => {
  let filtered
  const { input, delta, id, payload, type } = action
  switch (action.type) {
    case 'SET_ADDRESS':
      return {
        ...state,
        address: input
      }
    case 'SET_ADDRESS_FAILURE':
      return {
        ...state,
        address: input
      }
    case 'SET_WALLET_SUCCESS':
        return {
          ...state,
          wallet: payload
        }
    case 'SIGN_MESSAGE_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          messages: [
            ...state.store.messages,
            {
              message: input,
              id: delta || hashCode(input),
            }
          ]
        }
      }
    case 'SIGN_MESSAGE_SUCCESS':
      filtered = state.store.messages.filter( msg => msg.id !== input.id )
      return {
        ...state,
        store: {
          ...state.store,
          messages: filtered
        },
        signatures: {
          ...state.signatures,
          [input.id]: {
            ...input,
            type: 'signature',
            status: true
          }
        }
      }
    case 'SIGN_MESSAGE_FAILURE':
      filtered = state.store.messages.filter( msg => msg.id !== input.id )
      return {
        ...state,
        store: {
          ...state.store,
          messages: filtered
        },
        signatures: {
          ...state.signatures,
          [input.id]: {
            ...input,
            type: 'signature',
            status: false
          }
        }
      }

      /* ----------------------- */
      /* Contract Initialize     */
      /* ----------------------- */
        case 'INIT_CONTRACT_REQUEST':
          return {
            ...state,
            store: {
              ...state.store,
              contracts: [
                ...state.store.contracts,
                {
                  payload,
                  type,
                  id: delta || hashCode(payload),
                  delta: delta || hashCode(payload),
                }
              ]
            }
          }

        case 'INIT_CONTRACT_SUCCESS':
          return {
            ...state,
            store: {
              ...state.store,
              contracts: []
            },
            contracts: {
            ...state.contracts,
              [id]:{
                id,
                contractType: action.contractType,
                ...payload,
                }
              }
        }

        case 'INIT_CONTRACT_FAILURE':
          return {
            ...state,
            store: {
              ...state.store,
              contracts: []
            }
          }

      /* ----------------------- */
      /* Contract Deployment     */
      /* ----------------------- */
      case 'DEPLOY_CONTRACT_REQUEST':
          return {
            ...state,
            store: {
              ...state.store,
              deploy: [
                ...state.store.deploy,
                {
                  payload,
                  type,
                  id: delta || hashCode(payload),
                  delta: delta || hashCode(payload),
                }
              ]
            }
          }
        case 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST':
          return {
            ...state,
            store: {
              ...state.store,
              deploy: [
                ...state.store.deploy,
                {
                  payload,
                  id: delta || hashCode(input),
                }
              ]
            }
          }
        case 'DEPLOY_CONTRACT_SUCCESS':
            filtered = state.store.messages.filter( msg => msg.id !== input.id )
            return {
              ...state,
              store: {
                ...state.store,
                deploy: filtered
              },
              deployed: [
                ...state.deployed,
                {
                  ...payload,
                  type: 'contractDeployed',
                  status: true
                }
              ]
            }

    default:
      throw new Error('No Reducer Type Set');
  }
}

export default reducerActions