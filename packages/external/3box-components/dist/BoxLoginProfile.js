"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _utilities = require("./utilities");

var _BoxProfile = _interopRequireDefault(require("./BoxProfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var _default = (_ref) => {
  var {
    box,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "children", "styled"]);

  return _react.default.createElement(_designSystem.Flex, _extends({
    ac: true,
    zIndex: 10
  }, styled), _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Span, {
    xs: true,
    pointer: true,
    bg: "blue",
    color: "white",
    borderRadius: "5px 0 0 5px",
    px: 10,
    py: "5px",
    mr: '-10px',
    onClick: box.login
  }, !box.instance ? _react.default.createElement(ButtonLogin, {
    box: box
  }) : _react.default.createElement(BoxProfileName, {
    box: box
  }))), _react.default.createElement(_designSystem.Box, {
    width: "unset"
  }, _react.default.createElement(_designSystem.Modal, {
    content: _react.default.createElement(LoginPopover, {
      box: box
    })
  }, (0, _idx.default)(box.profile, _ => _.image) && box.instance ? _react.default.createElement(_designSystem.Image, {
    variant: "avatar",
    width: 40,
    opacity: 1,
    src: (0, _utilities.GenerateImage)((0, _idx.default)(box.profile, _ => _.image))
  }) : _react.default.createElement(_designSystem.Image, {
    variant: "avatar",
    width: 40,
    opacity: 0.7,
    src: (0, _utilities.GenerateImage)((0, _idx.default)(box.profile, _ => _.image))
  }))));
};

exports.default = _default;

var LoginPopover = (_ref2) => {
  var {
    box,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["box", "styled"]);

  return _react.default.createElement(_designSystem.Box, null);
};

var ButtonLogin = (_ref3) => {
  var {
    box
  } = _ref3;
  return box.isLoggingIn ? _react.default.createElement(_designSystem.Span, {
    pl: 10,
    pr: 10
  }, "Loading...") : _react.default.createElement(_designSystem.Span, {
    onClick: box.open,
    px: [10]
  }, "3ID Login");
};

var BoxProfileName = (_ref4) => {
  var {
    box,
    styled
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["box", "styled"]);

  return box.profile && box.isLoggedIn ? _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, {
    px: 10
  }, box.profile.name)) : _react.default.createElement(_designSystem.Span, {
    onClick: box.open,
    px: [10]
  }, "3ID Login");
};