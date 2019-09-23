"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* ------ Component ------ */
var BackgroundGradient = (_ref) => {
  var props = Object.assign({}, _ref);
  return _react.default.createElement(_Box.default, _extends({
    absolute: true,
    fill: true,
    overflow: "hidden",
    zIndex: 0
  }, props));
};

var _default = BackgroundGradient;
exports.default = _default;