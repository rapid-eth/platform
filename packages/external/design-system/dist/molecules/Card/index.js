"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global Dependencies --- */
var shadowBlue = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4';
var shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f';

var Card = (_ref) => {
  var {
    title,
    tagline,
    id,
    to,
    actionLabel,
    content,
    summary,
    image,
    images,
    imageFeatured
  } = _ref;
  return _react.default.createElement(_index.Box, {
    cardHover: true,
    p: 0
  }, _react.default.createElement(_index.Flex, {
    column: true,
    height: "100%"
  }, _react.default.createElement(_index.Flex, {
    column: true,
    flex: 1,
    p: 15,
    minHeight: 120
  }, _react.default.createElement(_index.BackgroundGradient, {
    gradient: "blue"
  }), _react.default.createElement(_index.BackgroundImage, {
    src: imageFeatured,
    opacity: 0.2,
    ratio: 0.3
  }), _react.default.createElement(_index.Flex, {
    alignCenter: true,
    between: true
  }, _react.default.createElement(_index.Box, null, _react.default.createElement(_index.Span, {
    xs: true,
    color: "white",
    highlight: "blue",
    alignSelf: "flex-start"
  }, "Feb 27, 2019")), _react.default.createElement(_index.Span, {
    variant: "tag",
    highlight: "green",
    alignSelf: "flex-end"
  }, "Tag"))), _react.default.createElement(_index.Box, {
    card: true,
    borderNone: true,
    flex: 1,
    textAlign: "center",
    p: 15,
    py: 30,
    zIndex: 20
  }, image && _react.default.createElement(_index.Box, {
    inlineBlock: true,
    circle: true,
    boxShadow: shadowSunset,
    p: 35,
    gradient: "white",
    maxWidth: 150,
    mx: "auto",
    mt: -70
  }, _react.default.createElement(_index.Image, {
    src: image
  })), _react.default.createElement(_index.Heading, {
    lg: true,
    mt: 0,
    fontWeight: 300
  }, title), _react.default.createElement(_index.Paragraph, {
    fontSize: [1],
    mb: [25]
  }, tagline), _react.default.createElement(_index.Flex, {
    column: true
  }, _react.default.createElement(_index.Panel, {
    content: _react.default.createElement("div", null, "yo"),
    label: "Credential Type Details"
  }, _react.default.createElement(_index.Link, {
    to: "".concat(to, "/").concat(id)
  }, _react.default.createElement(_index.Button, {
    sm: true,
    variant: "green"
  }, " Details"))))), _react.default.createElement(_index.Box, {
    card: true,
    flex: 1,
    p: 10
  }, _react.default.createElement(_index.BackgroundGradient, {
    gradient: "gray"
  }), _react.default.createElement(_index.Flex, {
    between: true,
    fullWidth: true
  }, _react.default.createElement(_index.Span, null, _react.default.createElement(_index.Button, {
    xs: true
  }, "0xfA67ddE98...34a48cE")), _react.default.createElement(_index.Span, null, _react.default.createElement(_index.Button, {
    xs: true
  }, "Share"))))));
};

Card.defaultProps = {
  title: 'Interesting Title',
  tagline: 'A Tagline to To Intrigue',
  image: 'https://static.thenounproject.com/png/1603446-200.png',
  background: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
};
var _default = Card;
exports.default = _default;