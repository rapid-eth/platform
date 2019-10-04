"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

var _QRDisplay = _interopRequireDefault(require("../QRDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QRDisplayModal = (_ref) => {
  var {
    value,
    styled,
    styledContainer,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["value", "styled", "styledContainer", "children"]);

  return _react.default.createElement(_index.Modal, {
    content: _react.default.createElement(_QRDisplay.default, {
      value: value,
      styled: styled,
      styledContainer: styledContainer
    })
  }, children);
};

var _default = QRDisplayModal;
exports.default = _default;