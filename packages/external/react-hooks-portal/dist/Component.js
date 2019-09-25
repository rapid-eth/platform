"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Portal = _interopRequireDefault(require("./Portal"));

var _dist = require("@horizin/design-system/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Component = (_ref) => {
  var {
    isOpen,
    close,
    Content,
    className,
    activeClassName,
    backgroundClassName,
    label,
    layoutDefault,
    position,
    positionStyle,
    styled,
    styledBackground,
    styledModal
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isOpen", "close", "Content", "className", "activeClassName", "backgroundClassName", "label", "layoutDefault", "position", "positionStyle", "styled", "styledBackground", "styledModal"]);

  var portalElement = document.createElement('div');
  return !isOpen ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Portal.default, {
    id: "portal"
  }, _react.default.createElement(_dist.BackgroundGradient, {
    bg: "black",
    fixed: true,
    absolute: false,
    opacity: .25,
    onClick: close
  }), position == 'toast' && _react.default.createElement(_dist.Box, _extends({
    card: true,
    noPadding: true,
    maxWidth: 200,
    layout: positionStyle || layoutDefault || position
  }, styledModal), _react.default.createElement("div", null, label && _react.default.createElement(_dist.Flex, {
    alignCenter: true,
    between: true,
    gradient: "blue",
    color: "white",
    p: 10,
    fullWidth: true
  }, _react.default.createElement(_dist.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_dist.Span, {
    pointer: true,
    sm: true,
    heavy: true,
    pointer: true,
    onClick: close
  }, "X")), _react.default.createElement(_dist.Box, {
    p: 10
  }, Content && _react.default.isValidElement(Content) ? _react.default.cloneElement(Content) : Content))), position == 'panel' && _react.default.createElement(_dist.Box, _extends({
    card: true,
    noPadding: true,
    height: "100%",
    layout: positionStyle || position
  }, styledModal), _react.default.createElement("div", null, label && _react.default.createElement(_dist.Flex, {
    alignCenter: true,
    between: true,
    gradient: "blue",
    color: "white",
    p: 10,
    fullWidth: true
  }, _react.default.createElement(_dist.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_dist.Span, {
    pointer: true,
    sm: true,
    heavy: true,
    pointer: true,
    onClick: close
  }, "X")), _react.default.createElement(_dist.Box, {
    p: 20
  }, Content && _react.default.isValidElement(Content) ? _react.default.cloneElement(Content) : Content))), position === 'modal' && _react.default.createElement(_dist.Box, _extends({
    fixed: true,
    zIndex: 100,
    maxWidth: 600
  }, styledModal), label && _react.default.createElement(_dist.Flex, {
    alignCenter: true,
    borderRoundedTop: true,
    between: true,
    gradient: "blue",
    color: "white",
    p: 10,
    fullWidth: true
  }, _react.default.createElement(_dist.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_dist.Span, {
    pointer: true,
    sm: true,
    heavy: true,
    pointer: true,
    onClick: close
  }, "X")), _react.default.createElement(_dist.Box, {
    bg: "white",
    card: true,
    borderCurvedBottom: true
  }, Content && _react.default.isValidElement(Content) ? _react.default.cloneElement(Content) : Content))));
};

Component.propTypes = {
  isOpen: _propTypes.default.bool,
  close: _propTypes.default.func,
  open: _propTypes.default.func,
  Content: _propTypes.default.func,
  className: _propTypes.default.string,
  activeClassName: _propTypes.default.string,
  backgroundClassName: _propTypes.default.string
};
var _default = Component;
exports.default = _default;