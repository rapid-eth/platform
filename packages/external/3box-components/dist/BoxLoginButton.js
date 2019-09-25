"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxLoginButton = (_ref) => {
  var {
    box,
    variant,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "variant", "children", "styled"]);

  return !box.instance ? _react.default.createElement(ButtonLogin, _extends({
    box: box,
    isLoggingIn: box.isLoggingIn,
    variant: variant
  }, styled)) : box.profile && box.isLoggedIn ? _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, {
    xs: true,
    mx: 10,
    onClick: box.logout
  }, "Logout"), _react.default.createElement(_designSystem.Button, _extends({
    white: true,
    variant: variant
  }, styled), box.profile.name)) : _react.default.createElement(ButtonLogin, {
    open: box.open,
    isLoggingIn: box.isLoggingIn,
    variant: variant,
    children: children,
    styled: styled
  });
};

var ButtonLogin = (_ref2) => {
  var {
    children,
    isLoggingIn,
    open,
    variant,
    styled
  } = _ref2;
  return _react.default.createElement(_designSystem.Button, _extends({
    variant: variant,
    onClick: () => open()
  }, styled), isLoggingIn ? _react.default.createElement(_designSystem.Span, {
    pl: 10,
    pr: 10
  }, "Loading...") : _react.default.createElement(_designSystem.Span, null, children ? children : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("strong", null, "\u039EID"), " Login")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxLoginButton, props));

exports.default = _default;