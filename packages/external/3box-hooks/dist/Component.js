"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _designSystem = require("@horizin/design-system");

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

  _reactDom.default.createPortal(_react.default.createElement(_react.default.createElement("div", null, "hello")), document.getElementById("portal"));

  return !isOpen ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(PortalInjection, {
    id: "portal"
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(className, {
      [activeClassName]: isOpen
    })
  }, _react.default.createElement(_designSystem.BackgroundGradient, {
    bg: "blue",
    opacity: .42,
    onClick: close
  }), position == 'toast' && _react.default.createElement(_designSystem.Box, _extends({
    card: true,
    noPadding: true,
    layout: positionStyle || layoutDefault || position
  }, styledModal), _react.default.createElement("div", null, label && _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true,
    gradient: "blue",
    color: "white",
    p: 10,
    fullWidth: true
  }, _react.default.createElement(_designSystem.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_designSystem.Span, {
    pointer: true,
    sm: true,
    heavy: true,
    pointer: true,
    onClick: close
  }, "X")), _react.default.createElement(_designSystem.Box, {
    p: 10
  }, Content && _react.default.isValidElement(Content) ? _react.default.cloneElement(Content) : Content))), position == 'panel' && _react.default.createElement(_designSystem.Box, _extends({
    card: true,
    noPadding: true,
    height: "100%",
    layout: positionStyle || position
  }, styledModal), _react.default.createElement("div", null, label && _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true,
    gradient: "blue",
    color: "white",
    p: 10,
    fullWidth: true
  }, _react.default.createElement(_designSystem.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_designSystem.Span, {
    pointer: true,
    sm: true,
    heavy: true,
    pointer: true,
    onClick: close
  }, "X")), _react.default.createElement(_designSystem.Box, {
    p: 20
  }, Content && _react.default.isValidElement(Content) ? _react.default.cloneElement(Content) : Content))), position === 'modal' && _react.default.createElement(_designSystem.Box, styledModal, _react.default.createElement("div", {
    className: "portal-content"
  }, label && _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    borderRoundedTop: true,
    between: true,
    gradient: "blue",
    color: "white",
    p: 10,
    fullWidth: true
  }, _react.default.createElement(_designSystem.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_designSystem.Span, {
    pointer: true,
    sm: true,
    heavy: true,
    pointer: true,
    onClick: close
  }, "X")), _react.default.createElement(_designSystem.Box, {
    bg: "white",
    card: true,
    borderCurvedBottom: true
  }, Content && _react.default.isValidElement(Content) ? _react.default.cloneElement(Content) : Content))))));
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