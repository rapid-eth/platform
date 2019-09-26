"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.networkRouting = exports.default = void 0;

var _ethers = require("ethers");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var effects = (callUseEffect, state, dispatch) => {
  /**
   * @function EthereumEnable
   */
  callUseEffect(() => {
    window.ethereum.enable();
  }, [state.enable]);
  /**
   * @function SetAddress
   */

  callUseEffect(() => {
    var address = window.ethereum.selectedAddress;

    if (address) {
      try {
        dispatch({
          type: 'SET_ADDRESS',
          input: address
        });
      } catch (error) {
        dispatch({
          type: 'SET_ADDRESS_FAILURE',
          input: error
        });
      }
    }
  }, [window.ethereum.selectedAddress]);
  /**
   * @function SetWallet
   */

  callUseEffect(() => {
    if (state.address) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref = _asyncToGenerator(function* () {
          try {
            var provider = yield networkRouting('metamask');
            var wallet = provider.getSigner();
            dispatch({
              type: 'SET_WALLET_SUCCESS',
              payload: wallet
            });
          } catch (error) {
            dispatch({
              type: 'SET_WALLET_FAILURE',
              payload: error
            });
          }
        });

        return function runEffect() {
          return _ref.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.address]);
  /**
   * @function SignMessage
   * @description SIGN_MESSAGE_REQUEST
   */

  callUseEffect(() => {
    if (state.store.messages && state.store.messages.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(function* () {
          var messageRequest = state.store.messages[0];
          var message = messageRequest.message;

          try {
            var wallet = state.wallet;

            if (wallet) {
              // const signature = await wallet.signMessage(message)
              var provider = new _ethers.ethers.providers.Web3Provider(window.web3.currentProvider);
              var MSG = [{
                type: 'string',
                name: 'Message',
                value: 'hell world'
              }, {
                type: 'uint256',
                name: 'num',
                value: 10
              }];
              var signature = yield provider.send('eth_signTypedData', [MSG, window.ethereum.selectedAddress]);
              dispatch({
                type: 'SIGN_MESSAGE_SUCCESS',
                input: {
                  id: messageRequest.id,
                  message,
                  signature
                }
              });
            }
          } catch (error) {
            console.log(error);
            dispatch({
              type: 'SIGN_MESSAGE_FAILURE',
              input: {
                id: messageRequest.id,
                error
              }
            });
          }
        });

        return function runEffect() {
          return _ref2.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.messages]);
  /**
   * @function DeployContract
   * @description SIGN_MESSAGE_REQUEST
   */

  callUseEffect(() => {
    if (state.store.deploy && state.store.deploy.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(function* () {
          var contract, deployed, transaction;
          var request = state.store.deploy[0];
          var {
            payload
          } = request;

          try {
            var wallet = state.wallet;

            if (wallet) {
              contract = new _ethers.ethers.ContractFactory(payload.contract.abi, payload.contract.bytecode, wallet);
              transaction = contract.getDeployTransaction(...payload.values);
              deployed = yield wallet.sendTransaction(transaction);
              dispatch({
                type: 'DEPLOY_CONTRACT_SUCCESS',
                id: request.id,
                delta: request.id,
                payload: deployed
              });
            }
          } catch (error) {
            console.log(error);
          }
        });

        return function runEffect() {
          return _ref3.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.deploy]);
  /**
   * @function InitializeContract
   * @description INIT_CONTRACT_REQUEST
   */

  callUseEffect(() => {
    if (state.store.contracts && state.store.contracts.length > 0) {
      var runEffect =
      /*#__PURE__*/
      function () {
        var _ref4 = _asyncToGenerator(function* () {
          var contract, deployed, transaction;
          var request = state.store.contracts[0];
          var {
            payload
          } = request;

          try {
            var wallet = state.wallet;

            if (wallet) {
              contract = new _ethers.ethers.Contract(payload.address, payload.abi, wallet);
              dispatch({
                type: 'INIT_CONTRACT_SUCCESS',
                id: request.id,
                delta: request.id,
                payload: contract,
                contractType: payload.contractType
              });
            }
          } catch (error) {
            console.log(error);
            dispatch({
              type: 'INIT_CONTRACT_FAILURE',
              id: request.id,
              delta: request.id,
              payload: error
            });
          }
        });

        return function runEffect() {
          return _ref4.apply(this, arguments);
        };
      }();

      runEffect();
    }
  }, [state.store.contracts]);
};

var _default = effects;
/** 
 * @func networkRouting
 * @desc Select network provider.
 * @param {Object} network 
 * @return {Object} provider
 */

exports.default = _default;

var networkRouting =
/*#__PURE__*/
function () {
  var _ref5 = _asyncToGenerator(function* (network) {
    switch (network) {
      case 'json':
        return window.ethers.providers.json;

      case 'test':
        return window.ethers.providers.test;

      case 'infura':
        return window.ethers.providers.infura;

      case 'metamask':
        return new _ethers.ethers.providers.Web3Provider(window.web3.currentProvider);

      default:
        return _ethers.ethers.getDefaultProvider('rinkeby');
    }
  });

  return function networkRouting(_x) {
    return _ref5.apply(this, arguments);
  };
}();

exports.networkRouting = networkRouting;