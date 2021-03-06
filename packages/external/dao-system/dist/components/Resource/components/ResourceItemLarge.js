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

var AdventureItem = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  /* -------------------- */

  /* Effects
  /* -------------------- */

  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */

  /* -------------------- */

  /* Adventure Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return _react.default.createElement(_designSystem.Flex, {
    card: true,
    p: 0,
    my: 3,
    width: "100%",
    minHeight: 300
  }, _react.default.createElement(_designSystem.Flex, {
    gradient: "black",
    center: true,
    column: true,
    flex: 2,
    p: 4
  }, _react.default.createElement(_designSystem.BackgroundImage, {
    ratio: .65,
    opacity: .2,
    src: props.properties.imageCover
  }), _react.default.createElement(_designSystem.Span, {
    circle: true,
    card: true,
    p: 3
  }, _react.default.createElement(_designSystem.Image, {
    maxWidth: 100,
    src: props.properties.image
  }))), _react.default.createElement(_designSystem.Flex, {
    flex: 5
  }, _react.default.createElement(_designSystem.Box, {
    p: 3
  }, _react.default.createElement(_designSystem.Box, {
    my: 3
  }, _react.default.createElement(_designSystem.Heading, {
    lg: true,
    heavy: true
  }, props.properties.name), _react.default.createElement(_designSystem.Heading, {
    md: true
  }, props.properties.tagline), _react.default.createElement(_designSystem.Paragraph, null, props.properties.summary), _react.default.createElement(_designSystem.Link, {
    to: "/resource/".concat(props.alias)
  }, _react.default.createElement(_designSystem.Button, {
    variant: "green"
  }, "View"))))));
};

AdventureItem.defaultProps = {
  alias: 'test',
  properties: {
    title: 'Start The Quest',
    tagline: 'Start The Quest',
    summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
    content: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
    image: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg',
    imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg',
    imageFeatured: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
  }
};
AdventureItem.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};
var _default = AdventureItem;
exports.default = _default;