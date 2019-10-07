"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = (_ref) => {
  var {
    selection,
    pass,
    styled,
    key,
    forceRender,
    component
  } = _ref,
      props = _objectWithoutProperties(_ref, ["selection", "pass", "styled", "key", "forceRender", "component"]);

  console.log(styled, pass, selection, 'component stuff');
  var Component = component;
  return selection || forceRender ? Array.isArray(selection) ? selection.map(item => !_react.default.isValidElement(component) ? _react.default.createElement(component, _objectSpread({}, item, {}, pass, {}, styled)) : _react.default.cloneElement(component, _objectSpread({}, item, {}, pass, {}, styled))) : props.spreadObject ? Object.values(selection).map(item => !_react.default.isValidElement(component) ? _react.default.createElement(component, _objectSpread({}, item, {}, pass, {}, styled)) : _react.default.cloneElement(component, _objectSpread({}, item, {}, pass, {}, styled))) : _react.default.isValidElement(component) ? _react.default.createElement(component, _objectSpread({}, selection, {}, pass, {}, styled)) : _react.default.createElement(Component, _extends({}, selection, styled, pass)) : null;
};

Component.defaultProps = {
  component: () => null
};
var _default = Component;
exports.default = _default;