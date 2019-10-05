"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ResourceItem = (_ref) => {
  var {
    box,
    address,
    title,
    tagline,
    id,
    to,
    actionLabel,
    content,
    summary,
    image,
    images,
    imageFeatured,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "address", "title", "tagline", "id", "to", "actionLabel", "content", "summary", "image", "images", "imageFeatured", "styled"]);

  /* -------------------- */

  /* Effects
  /* -------------------- */

  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */

  /* -------------------- */

  /* Resource Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return _react.default.createElement(_designSystem.Box, {
    cardHover: true,
    p: 0
  }, _react.default.createElement(_designSystem.Flex, {
    column: true,
    height: "100%"
  }, _react.default.createElement(_designSystem.Flex, {
    column: true,
    flex: 1,
    p: 2,
    minHeight: 10
  }, _react.default.createElement(_designSystem.BackgroundGradient, {
    gradient: "purpink",
    gradientDir: "140"
  })), _react.default.createElement(_designSystem.Box, {
    card: true,
    borderNone: true,
    flex: 1,
    textAlign: "center",
    p: 15,
    py: 30,
    zIndex: 20
  }, props.properties.image && _react.default.createElement(_designSystem.Box, {
    inlineBlock: true,
    circle: true,
    boxShadow: "sunset",
    p: 15,
    gradient: "white",
    maxWidth: 150,
    mx: "auto",
    mt: -70
  }, _react.default.createElement(_designSystem.Image, {
    circle: true,
    src: props.properties.image,
    boxShadow: "sunset",
    p: 20
  })), _react.default.createElement(_designSystem.Heading, {
    lg: true,
    mt: -20,
    fontWeight: 300
  }, props.properties.title), _react.default.createElement(_designSystem.Paragraph, {
    fontSize: [1]
  }, props.properties.tagline), _react.default.createElement(_designSystem.Flex, {
    column: true
  }, _react.default.createElement(_designSystem.Panel, {
    content: _react.default.createElement("div", null, "yo"),
    label: "Start Quest"
  }, _react.default.createElement(_designSystem.Link, {
    to: "".concat(to, "/").concat(id)
  }, _react.default.createElement(_designSystem.Button, {
    sm: true,
    variant: "green"
  }, "View Resource")))), _react.default.createElement(_designSystem.Paragraph, {
    xs: true,
    mt: [25],
    px: 40
  }, props.properties.summary)), _react.default.createElement(_designSystem.Box, {
    card: true,
    flex: 1,
    p: 10
  }, _react.default.createElement(_designSystem.BackgroundGradient, {
    gradient: "gray"
  }), _react.default.createElement(_designSystem.Flex, {
    between: true,
    fullWidth: true
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Button, {
    xs: true
  }, "0xfA67ddE98...34a48cE")), _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Button, {
    xs: true
  }, "View on Etherscan"))))));
};

ResourceItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
};
ResourceItem.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};
var _default = ResourceItem;
exports.default = _default;