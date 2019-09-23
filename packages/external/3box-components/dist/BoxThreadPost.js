"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _BoxThreadPostDelete = _interopRequireDefault(require("./BoxThreadPostDelete"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxThreadPosts = (_ref) => {
  var {
    box,
    message,
    author,
    timestamp,
    threadName,
    postId,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "message", "author", "timestamp", "threadName", "postId", "children", "styled"]);

  return _react.default.createElement(_designSystem.Flex, _extends({
    card: true,
    column: true,
    mb: 10
  }, styled), _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Card, message), _react.default.createElement(_designSystem.Box, {
    card: true,
    mt: 20
  }, _react.default.createElement(_designSystem.Heading, {
    cardHeader: true,
    md: true
  }, "Post Data Structure"), _react.default.createElement(_designSystem.Branch, {
    data: message
  }))), _react.default.createElement(_designSystem.Box, {
    mt: 20
  }, _react.default.createElement(_designSystem.Label, {
    styled: {
      fontSize: 2
    },
    noMargin: true,
    label: 'author'
  }, author)), _react.default.createElement(_designSystem.Flex, {
    alignEnd: true
  }, _react.default.createElement(_BoxThreadPostDelete.default, {
    threadName: threadName,
    postId: postId
  })));
};

BoxThreadPosts.defaultProps = {
  variant: 'green'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPosts, props));

exports.default = _default;