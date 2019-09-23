"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Hero = (_ref) => {
  var {
    title,
    tagline,
    summary,
    button,
    image,
    styled,
    styledBackground,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "tagline", "summary", "button", "image", "styled", "styledBackground", "children"]);

  return _react.default.createElement(_index.Box, _extends({
    gradient: "blue",
    py: [150]
  }, styled, {
    overflow: "hidden"
  }), _react.default.createElement(_index.BackgroundImage, {
    ratio: 0.45,
    opacity: 0.20,
    src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'
  }), _react.default.createElement(_index.BackgroundImage, {
    ratio: 0.15,
    opacity: 0.05,
    src: 'https://ethwallpaper.co/static/wallpapers/536b8c21-f278-4727-a2eb-a3a6b8de7701.jpg'
  }), _react.default.createElement(_index.BackgroundImage, {
    ratio: 0.25,
    opacity: 0.10,
    transform: "rotate(0deg) translate(0px, 50px) scale(2)",
    src: image
  }), _react.default.createElement(_index.Container, {
    maxWidth: 1080
  }, _react.default.createElement(_index.Flex, _extends({
    alignCenter: true
  }, styled, {
    fullWidth: true
  }), _react.default.createElement(_index.Box, {
    flex: 1,
    fullWidth: true
  }, _react.default.createElement(_index.Heading, {
    xxl: true,
    thin: true,
    noMargin: true
  }, title), _react.default.createElement(_index.Heading, {
    md: true,
    heavy: true
  }, tagline), _react.default.createElement(_index.Paragraph, {
    sm: true,
    thin: true
  }, summary), _react.default.createElement(_index.Flex, {
    mt: 40
  }, _react.default.createElement(_index.Button, null, "How It Works"), _react.default.createElement(_index.Button, {
    variant: "orange",
    ml: 15
  }, "Getting Started"))), _react.default.createElement(_index.Box, {
    flex: 1
  }, children))));
};

Hero.defaultProps = {
  title: 'Captivating Title',
  tagline: 'An Interesting Tagline & Introduction',
  summary: ' Cras in ipsum blandit, consectetur ex ac, malesuada est. Nullam aliquet dolor non fringilla ornare. Cras lobortis pulvinar arcu pellentesque accumsan.',
  button: 'Call To Action',
  image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
};
var _default = Hero;
exports.default = _default;