"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _utilities = require("./utilities");

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _BoxLoginButtonStateless = _interopRequireDefault(require("./BoxLoginButtonStateless"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxLoginAvatar = (_ref) => {
  var {
    box,
    image,
    role,
    employer,
    variant,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "image", "role", "employer", "variant", "children", "styled"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Flex, _extends({
    column: true,
    center: true
  }, styled), _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Image, {
    variant: "avatar",
    maxWidth: 80,
    src: (0, _utilities.GenerateImagefromHash)(image)
  })), _react.default.createElement(_designSystem.Heading, {
    md: true,
    heavy: true
  }, name), _react.default.createElement(_designSystem.Heading, {
    xs: true,
    as: "h5"
  }, role, " at ", employer), _react.default.createElement(_BoxLoginButton.default, null)));
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

BoxLoginAvatar.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxLoginAvatar, props));

exports.default = _default;