"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxLoginButton = (_ref) => {
  var {
    box,
    variant,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "variant", "children"]);

  return !box.instance ? _react.default.createElement(ButtonLogin, {
    box: box,
    isLoggingIn: box.isLoggingIn,
    variant: variant
  }) : box.profile && box.isLoggedIn ? _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, {
    xs: true,
    mx: 10,
    onClick: box.logout
  }, "Logout"), _react.default.createElement(_designSystem.Button, {
    white: true,
    sm: true,
    variant: variant
  }, box.profile.name)) : _react.default.createElement(ButtonLogin, {
    open: box.open,
    isLoggingIn: box.isLoggingIn,
    variant: variant
  });
};

var ButtonLogin = (_ref2) => {
  var {
    isLoggingIn,
    open,
    variant
  } = _ref2;
  return _react.default.createElement(_designSystem.Button, {
    variant: variant,
    sm: true,
    onClick: () => open()
  }, isLoggingIn ? _react.default.createElement(_designSystem.Span, {
    pl: 10,
    pr: 10
  }, "Loading...") : _react.default.createElement(_designSystem.Span, null, _react.default.createElement("strong", null, "\u039EID"), " Login"));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxLoginButton, props));

exports.default = _default;