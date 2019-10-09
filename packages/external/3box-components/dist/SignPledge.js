"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _ethersReact = require("@rapid/ethers-react");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var SignMessageTyped = (_ref) => {
  var {
    ethers,
    dispatchSignRequest,
    delta,
    label,
    message,
    typed,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["ethers", "dispatchSignRequest", "delta", "label", "message", "typed", "styled"]);

  var [dispatch, setDispatchStatus] = (0, _react.useState)(dispatchSignRequest);
  console.log(ethers.signatures[delta], 'pledge');
  (0, _react.useEffect)(() => {
    console.log(ethers.signatures[delta], 'posting now');

    if (ethers.signatures[delta]) {
      var url = 'https://brn68gkbcf.execute-api.us-east-1.amazonaws.com/cors/dev-pledge';
      window.fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "address": window.ethereum.selectedAddress,
          "payload": ethers.signatures[delta]
        })
      }).then(res => {
        if (res.json) res.json().then(msg => {
          console.log(msg);
        });
      }).catch(err => {
        console.log(err);
      });
    }
  }, [ethers.signatures[delta]]);
  /**
   * @function Dispatch Sign Messages
   * @description Send message signing request to current Web3 provider.
   */

  (0, _react.useEffect)(() => {
    if (dispatch && message) {
      if (typed) {
        ethers.signMessageTyped({
          delta,
          message
        });
      } else {
        ethers.signMessage({
          delta,
          message
        });
      }

      setDispatchStatus(false);
    }
  }, [ethers, dispatch, message, typed, delta]);
  return _react.default.createElement(_designSystem.Button, _extends({}, styled, props, {
    onClick: () => setDispatchStatus(true)
  }), label);
};

SignMessageTyped.propTypes = {
  delta: _propTypes.default.string,
  dispatchSignRequest: _propTypes.default.bool,
  ethers: _propTypes.default.object.isRequired,
  label: _propTypes.default.string,
  message: _propTypes.default.object.isRequired,
  styled: _propTypes.default.object,
  typed: _propTypes.default.bool
};
SignMessageTyped.defaultProps = {
  delta: undefined,
  dispatchSignRequest: undefined,
  label: 'Sign Developer Pledge',
  typed: true,
  message: [{
    type: 'string',
    name: 'pledge',
    value: 'I pledge to help grow the Ethereum ecosystem.'
  }],
  styled: {
    width: '100%'
  }
};

var _default = props => _react.default.createElement(_ethersReact.EthersWrapper, null, _react.default.createElement(SignMessageTyped, props));

exports.default = _default;