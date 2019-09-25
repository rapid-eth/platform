"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utilities = require("./utilities");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducerActions = (state, action) => {
  var filtered;
  var {
    input,
    delta,
    id,
    payload,
    type
  } = action;

  switch (action.type) {
    case 'SET_ADDRESS':
      return _objectSpread({}, state, {
        address: input
      });

    case 'SET_ADDRESS_FAILURE':
      return _objectSpread({}, state, {
        address: input
      });

    case 'SET_WALLET_SUCCESS':
      return _objectSpread({}, state, {
        wallet: payload
      });

    case 'SIGN_MESSAGE_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: [...state.store.messages, {
            message: input,
            id: delta || (0, _utilities.hashCode)(input)
          }]
        })
      });

    case 'SIGN_MESSAGE_SUCCESS':
      filtered = state.store.messages.filter(msg => msg.id !== input.id);
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: filtered
        }),
        signatures: _objectSpread({}, state.signatures, {
          [input.id]: _objectSpread({}, input, {
            type: 'signature',
            status: true
          })
        })
      });

    case 'SIGN_MESSAGE_FAILURE':
      filtered = state.store.messages.filter(msg => msg.id !== input.id);
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          messages: filtered
        }),
        signatures: _objectSpread({}, state.signatures, {
          [input.id]: _objectSpread({}, input, {
            type: 'signature',
            status: false
          })
        })
      });

    /* ----------------------- */

    /* Contract Deployment     */

    /* ----------------------- */

    case 'DEPLOY_CONTRACT_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            type,
            id: delta || (0, _utilities.hashCode)(payload),
            delta: delta || (0, _utilities.hashCode)(payload)
          }]
        })
      });

    case 'DEPLOY_CONTRACT_FROM_BYTECODE_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: [...state.store.deploy, {
            payload,
            id: delta || (0, _utilities.hashCode)(input)
          }]
        })
      });

    case 'DEPLOY_CONTRACT_SUCCESS':
      filtered = state.store.messages.filter(msg => msg.id !== input.id);
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deploy: filtered
        }),
        deployed: _objectSpread({}, state.deployed, {
          [id]: _objectSpread({}, payload, {
            type: 'contractDeployed',
            status: true
          })
        })
      });

    default:
      throw new Error('No Reducer Type Set');
  }
};

var _default = reducerActions;
exports.default = _default;