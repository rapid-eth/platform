"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

var _Input = _interopRequireDefault(require("../../atoms/Input"));

var _message = _interopRequireDefault(require("./message"));

var _atoms = require("../../../dist/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var internalLabel = ['radio', 'checkbox'];
/* --- Component --- */

var Field = (_ref) => {
  var {
    inputAs,
    label,
    error,
    errors,
    register,
    validation,
    component,
    styled,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["inputAs", "label", "error", "errors", "register", "validation", "component", "styled", "children"]);

  return !register ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Box, null, !component ? _react.default.createElement(_react.default.Fragment, null, !internalLabel.includes(props.type) && label && _react.default.createElement(_atoms.Span, {
    xs: true,
    as: "label",
    my: "5px"
  }, label), _react.default.createElement(_Input.default, _extends({
    ref: register(_objectSpread({}, validation)),
    label: label,
    variant: props.type,
    as: inputAs
  }, styled, props)), internalLabel.includes(props.type) && label && _react.default.createElement(_atoms.Span, {
    xs: true,
    as: "label",
    my: "5px"
  }, label)) : component, errors[props.name] && errors[props.name].message && _react.default.createElement(_message.default, {
    floating: true,
    name: props.name,
    error: error,
    className: "input-error"
  }, errors[props.name].message)));
};

Field.defaultProps = {};
var _default = Field;
exports.default = _default;