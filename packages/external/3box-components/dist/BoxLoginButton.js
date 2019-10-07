"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _ethereumBlockiesBase = _interopRequireDefault(require("ethereum-blockies-base64"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxLoginButton = (_ref) => {
  var {
    box,
    isMenuAvailable,
    styled,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "isMenuAvailable", "styled", "children"]);

  var [blockie, setBlockie] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (box.address) {
      var block = (0, _ethereumBlockiesBase.default)(box.address);
      setBlockie(block);
    }
  }, [box.address]);
  /**
  * @function AutoEffect
  * @description Automatically connect to space without requiring use input.
  */

  (0, _react.useEffect)(() => {
    if (props.auto) {
      box.open();
    }
  }, [props.auto]);
  return !props.auto ? !box.address ? _react.default.createElement(_designSystem.Button, {
    variant: "dark",
    onClick: box.enable
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Absolute, {
    top: -10,
    left: -2
  }, _react.default.createElement(_designSystem.Loading, {
    type: "ripple"
  })), _react.default.createElement(_designSystem.Image, {
    maxWidth: 36,
    circle: true,
    mx: 2,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), _react.default.createElement(_designSystem.Span, null, "Enable ETH Blockchain"))) : box.instance && !box.isLoggedIn ? _react.default.createElement(ButtonLogin, _extends({
    box: box,
    isLoggingIn: box.isLoggingIn
  }, styled, props)) : box.profile ? _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Button, _extends({
    white: true,
    fullWidth: true,
    cursor: "unset"
  }, styled, props), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true,
    fullWidth: true,
    ml: -25
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    src: blockie,
    maxWidth: 28,
    boxShadow: 0,
    borderRadius: 7,
    border: "1px solid #FFF",
    mx: 10
  })), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, {
    thin: true,
    fontSize: "0.9em"
  }, _react.default.createElement("strong", null, "\u039EID:"), " ", box.addressShortened), _react.default.createElement(_designSystem.Span, {
    pointer: true,
    onClick: box.logout,
    mt: 1
  }, _react.default.createElement(_designSystem.Image, {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnf--Q71hav8LNlvIbJ8MGNNOU6gLSj7uYfmYYnWP6kiXDrj5-',
    maxWidth: 14,
    ml: 2
  })))), isMenuAvailable && _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true,
    position: "absolute",
    relative: false,
    top: 0,
    bottom: 0,
    right: -10
  }, _react.default.createElement(_designSystem.Toast, {
    label: "Manage Account",
    content: _react.default.createElement(AccountManage, null)
  }, _react.default.createElement(_designSystem.Flex, {
    pointer: true,
    center: true,
    column: true,
    circle: true,
    gradient: "gray",
    boxShadow: 0,
    width: 28,
    height: 28,
    p: 1
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true,
    fontSize: ".9em",
    lineHeight: "0",
    heavy: true,
    textRight: true
  }, _react.default.createElement("strong", null, "\u039E"))))))) : null : null;
};

var AccountManage = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Box, {
    bg: "white",
    p: 20,
    minWidth: 270
  }, _react.default.createElement(_designSystem.Flex, {
    column: true
  }, _react.default.createElement(_designSystem.Span, {
    xs: true
  }, "Profile"), _react.default.createElement(_designSystem.Span, {
    xs: true
  }, "Credentials"), _react.default.createElement(_designSystem.Span, {
    xs: true
  }, "Spaces"), _react.default.createElement(_designSystem.Span, {
    xs: true
  }, "Threads")));
};

var ButtonLogin = (_ref3) => {
  var {
    box,
    isLoggingIn,
    styled,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["box", "isLoggingIn", "styled", "children"]);

  return _react.default.createElement(_designSystem.Button, _extends({}, styled, props, {
    onClick: () => box.open()
  }), isLoggingIn ? _react.default.createElement(_designSystem.Span, {
    pl: 10,
    pr: 10
  }, "Loading...") : _react.default.createElement(_designSystem.Span, null, children ? children : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("strong", null, "\u039EID"), " Login")));
};

BoxLoginButton.defaultProps = {
  isMenuAvailable: true,
  auto: true
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxLoginButton, props));

exports.default = _default;