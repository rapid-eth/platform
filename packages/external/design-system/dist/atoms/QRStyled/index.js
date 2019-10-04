"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledBy = _interopRequireDefault(require("styled-by"));

var _styledSystem = require("styled-system");

var _styledIs = _interopRequireDefault(require("styled-is"));

var _Box = _interopRequireDefault(require("../Box"));

var _QRDisplay = _interopRequireDefault(require("../../organisms/QRDisplay"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n/* ------------------- */\n/* Ripple              */\n/* ------------------- */\n  &.loading-ripples {\n    display: inline-block;\n    position: relative;\n    width: 144px;\n    height: 144px;\n    transform: rotate(45deg)\n  }\n  &.loading-ripples div {\n    box-shadow: 0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f;\n    border-radius: 7px;\n    position: absolute;\n    border: 0px solid #fff;\n    opacity: 1;\n    animation: loading-ripples 2.6s cubic-bezier(0, 0.2, 0.8, 1) 3;\n  }\n  &.loading-ripples div:nth-child(2) {\n    animation-delay: -3.5s;\n  }\n  @keyframes loading-ripples {\n    0% {\n      border: 2px solid #fff;\n      top: 28px;\n      left: 28px;\n      width: 0;\n      height: 0;\n      opacity: 1;\n    }\n    100% {\n      border: 0px solid #fff;\n      top: -1px;\n      left: -1px;\n      width: 140px;\n      height: 140px;\n      opacity: 0;\n    }\n  }\n\n/* ------------------- */\n/* Ring           */\n/* ------------------- */\n&.loading-ring {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n&.loading-ring div {\n  box-sizing: border-box;\n  display: block;\n  position: absolute;\n  width: 51px;\n  height: 51px;\n  margin: 6px;\n  border: 6px solid #fff;\n  border-radius: 50%;\n  animation: loading-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  border-color: #fff transparent transparent transparent;\n}\n&.loading-ring div:nth-child(1) {\n  animation-delay: -0.45s;\n}\n&.loading-ring div:nth-child(2) {\n  animation-delay: -0.3s;\n}\n&.loading-ring div:nth-child(3) {\n  animation-delay: -0.15s;\n}\n@keyframes loading-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* ------------------- */\n/* Ellipsis            */\n/* ------------------- */\n&.loading-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 35px;\n}\n&.loading-ellipsis div {\n  background: #FFF;\n  background: ", ";\n  position: absolute;\n  top: 13px;\n  width: 11px;\n  height: 11px;\n  border-radius: 1px;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0);\n}\n&.loading-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: loading-ellipsis1 0.6s infinite;\n}\n&.loading-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: loading-ellipsis2 0.6s infinite;\n}\n&.loading-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: loading-ellipsis2 0.6s infinite;\n}\n&.loading-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: loading-ellipsis3 0.6s infinite;\n}\n@keyframes loading-ellipsis1 {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes loading-ellipsis3 {\n  0% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(0);\n  }\n}\n@keyframes loading-ellipsis2 {\n  0% {\n    transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(19px, 0);\n  }\n}\n\n/* ------------------- */\n/* Grid                */\n/* ------------------- */\n&.loading-grid {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n}\n&.loading-grid div {\n  position: absolute;\n  width: 13px;\n  height: 13px;\n  border-radius: 50%;\n  background: #fff;\n  animation: loading-grid 1.2s linear infinite;\n}\n&.loading-grid div:nth-child(1) {\n  top: 6px;\n  left: 6px;\n  animation-delay: 0s;\n}\n&.loading-grid div:nth-child(2) {\n  top: 6px;\n  left: 26px;\n  animation-delay: -0.4s;\n}\n&.loading-grid div:nth-child(3) {\n  top: 6px;\n  left: 45px;\n  animation-delay: -0.8s;\n}\n&.loading-grid div:nth-child(4) {\n  top: 26px;\n  left: 6px;\n  animation-delay: -0.4s;\n}\n&.loading-grid div:nth-child(5) {\n  top: 26px;\n  left: 26px;\n  animation-delay: -0.8s;\n}\n&.loading-grid div:nth-child(6) {\n  top: 26px;\n  left: 45px;\n  animation-delay: -1.2s;\n}\n&.loading-grid div:nth-child(7) {\n  top: 45px;\n  left: 6px;\n  animation-delay: -0.8s;\n}\n&.loading-grid div:nth-child(8) {\n  top: 45px;\n  left: 26px;\n  animation-delay: -1.2s;\n}\n&.loading-grid div:nth-child(9) {\n  top: 45px;\n  left: 45px;\n  animation-delay: -1.6s;\n}\n@keyframes loading-grid {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n/* ------------------- */\n/* Heart               */\n/* ------------------- */\n&.loading-heart {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px;\n  transform: rotate(45deg);\n  transform-origin: 32px 32px;\n}\n&.loading-heart div {\n  top: 23px;\n  left: 19px;\n  position: absolute;\n  width: 26px;\n  height: 26px;\n  background: #fff;\n  animation: loading-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);\n}\n&.loading-heart div:after,\n&.loading-heart div:before {\n  content: \" \";\n  position: absolute;\n  display: block;\n  width: 26px;\n  height: 26px;\n  background: #fff;\n}\n&.loading-heart div:before {\n  left: -17px;\n  border-radius: 50% 0 0 50%;\n}\n&.loading-heart div:after {\n  top: -17px;\n  border-radius: 50% 50% 0 0;\n}\n@keyframes loading-heart {\n  0% {\n    transform: scale(0.95);\n  }\n  5% {\n    transform: scale(1.1);\n  }\n  39% {\n    transform: scale(0.85);\n  }\n  45% {\n    transform: scale(1);\n  }\n  60% {\n    transform: scale(0.95);\n  }\n  100% {\n    transform: scale(0.9);\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Loading = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledBy.default)('bgLoading'));
Loading.defaultProps = {
  as: 'span',
  type: 'ripples',
  width: 'auto'
};
Loading.propTypes = {
  as: _propTypes.default.string,
  type: _propTypes.default.oneOf(['ring', 'ripples', 'ellipsis', 'grid', 'heart']),
  width: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.array])
};

var _default = (_ref) => {
  var {
    type
  } = _ref,
      props = _objectWithoutProperties(_ref, ["type"]);

  return {
    ring: _react.default.createElement(Loading, _extends({}, props, {
      className: "loading-".concat(type)
    }), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)),
    ripple: _react.default.createElement(Loading, _extends({}, props, {
      className: "loading-ripples"
    }), _react.default.createElement("div", null), _react.default.createElement("div", null)),
    ellipsis: _react.default.createElement(Loading, _extends({}, props, {
      className: "loading-".concat(type)
    }), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null)),
    heart: _react.default.createElement(Loading, _extends({}, props, {
      className: "loading-".concat(type)
    }), _react.default.createElement("div", null)),
    grid: _react.default.createElement(Loading, _extends({}, props, {
      className: "loading-".concat(type)
    }), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null), _react.default.createElement("div", null))
  }[type];
};

exports.default = _default;