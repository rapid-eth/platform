"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ethers = require("ethers");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _designSystem = require("@horizin/design-system");

var _ethersReact = require("@rapid/ethers-react");

var _FieldAddress = _interopRequireDefault(require("./FieldAddress"));

var _ContractInformation = _interopRequireDefault(require("../ContractInformation"));

var _BalanceFormatted = _interopRequireDefault(require("../BalanceFormatted"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
var Transfer = (_ref) => {
  var {
    amount,
    ethers,
    contractAddress,
    contractName,
    delta,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["amount", "ethers", "contractAddress", "contractName", "delta", "styled"]);

  var {
    handleSubmit,
    register,
    errors
  } = (0, _reactHookForm.default)();
  var [message, setMessage] = (0, _react.useState)();
  var [balance, setBalance] = (0, _react.useState)(0);
  var [status, setStatus] = (0, _react.useState)({
    contract: false
  });
  /**
   * @function FormOnSubmit
   * @param {Object} values 
   */

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* (values) {
      try {
        if (ethers.contracts[props.address]) {
          var balanceDecimals = yield ethers.contracts[props.address].balanceOf(values.address);

          var balanceFormatted = _ethers.utils.formatEther(balanceDecimals);

          console.log(balanceFormatted, 'balanceFormatted');
          setBalance(balanceFormatted);
        } else {
          return null;
        }
      } catch (error) {
        console.log(error);
        setMessage('Contract Unavailable');
      }
    });

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * @function StatusEffect
   * @description Display component state to user.
   */


  var StatusEffect = () => (0, _react.useEffect)(() => {
    if (ethers.contracts[props.address]) {
      setStatus({
        contract: true
      });
    }
  }, [ethers.contracts[props.address]]);
  /**
   * @function MessageEffect
   * @description Display component state to user.
   */


  var MessageEffect = () => (0, _react.useEffect)(() => {
    if (message) {} // add toast message

  }, [message]);
  /**
   * @function InitSmartContractEffect
   * @description Initialize contract from abi library with address input.
   * 
   */


  var InitSmartContractEffect = () => (0, _react.useEffect)(() => {
    if (!ethers.contracts[contractAddress] && props.contractName) {
      if (props.library[props.contractName]) {
        ethers.contractInitFromLibrary({
          address: props.address,
          contractName: props.contractName
        });
      }
    }
  }, [ethers.contracts[contractAddress], // Watch contract instance.
  ethers.library[props.contractName] // Watch library reference.
  ]);
  /* --- Init Effects --- */


  StatusEffect();
  MessageEffect();
  if (props.canInitContract) InitSmartContractEffect();
  /* --- Component --- */

  return _react.default.createElement(_react.default.Fragment, null, props.label && _react.default.createElement(_designSystem.Heading, _extends({
    md: true
  }, props.styledLabel), props.label), _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Heading, {
    sm: true,
    heavy: true
  }, "Amount:", _react.default.createElement(_designSystem.Span, {
    thin: true,
    ml: 2
  }, balance))), _react.default.createElement("form", _extends({
    onSubmit: handleSubmit(onSubmit),
    style: {
      width: '100%'
    }
  }, styled), _react.default.createElement(_FieldAddress.default, {
    name: "address",
    register: register,
    errors: errors,
    defaultValue: props.defaults.address,
    placeholder: "Address"
  }), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Button, _extends({
    sm: true,
    type: "submit",
    disabled: !status.contract
  }, props.styledButton), _react.default.createElement(_designSystem.Span, null, "Lookup")), _react.default.createElement(_designSystem.Toast, {
    content: _react.default.createElement(_ContractInformation.default, {
      contractName: props.contractName,
      address: props.address
    })
  }, status.contractName ? _react.default.createElement(_designSystem.Span, {
    ml: 3
  }, _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, "INFO")) : _react.default.createElement(_designSystem.Span, {
    ml: 3
  }, _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "green"
  }, "Connect"))))));
};

Transfer.defaultProps = {
  contractName: undefined,
  canInitContract: true,
  defaults: {},
  label: 'Balance Lookup',
  styled: {
    p: 2
  },
  styledButton: {
    variant: 'green',
    width: '100%'
  },
  styledLabel: {
    fontWeight: 700
  }
};
Transfer.propTypes = {
  address: _propTypes.default.string.isRequired,
  contractName: _propTypes.default.string,
  canInitContract: _propTypes.default.bool,
  defaults: _propTypes.default.object,
  label: _propTypes.default.string,
  styled: _propTypes.default.object,
  styledButton: _propTypes.default.object,
  styledLabel: _propTypes.default.object
};

var _default = props => _react.default.createElement(_ethersReact.EthersWrapper, null, _react.default.createElement(Transfer, props));

exports.default = _default;