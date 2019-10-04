"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactQrSvg = require("react-qr-svg");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QRDisplay = (_ref) => {
  var {
    value,
    dimensions,
    styled,
    styledContainer,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["value", "dimensions", "styled", "styledContainer", "children"]);

  return _react.default.createElement(_index.Box, _extends({}, styledContainer, props, {
    width: dimensions,
    height: dimensions
  }), _react.default.createElement(_reactQrSvg.QRCode, _extends({
    bgColor: "transparent",
    fgColor: "#FFF",
    level: "Q",
    style: {
      width: '100%'
    },
    value: value
  }, styled)));
};

QRDisplay.defaultProps = {
  value: 'ethereum:0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE'
};
var _default = QRDisplay;
exports.default = _default;