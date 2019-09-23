"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _BoxThreadPostDelete = _interopRequireDefault(require("./BoxThreadPostDelete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var _default = (_ref) => {
  var {
    box,
    variant,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "variant", "children"]);

  return !box.instance ? _react.default.createElement(Box, _extends({
    card: true
  }, styled), _react.default.createElement(Paragraph, null, message), _react.default.createElement(Heading, {
    sm: true,
    right: true
  }, author), _react.default.createElement(_designSystem.Flex, {
    between: true
  }, _react.default.createElement(_designSystem.Button, {
    xs: true,
    white: true
  }, "Trace"), _react.default.createElement(_BoxThreadPostDelete.default, {
    thread: thread,
    postId: postId
  }))) : null;
};

exports.default = _default;