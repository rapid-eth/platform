"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _markdownToJsx = _interopRequireDefault(require("markdown-to-jsx"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentOverrides = {
  p: {
    component: _index.Paragraph,
    props: {
      className: 'foo',
      serif: true
    }
  },
  h1: {
    component: _index.Heading,
    props: {
      as: 'h1'
    }
  },
  h2: {
    component: _index.Heading,
    props: {
      as: 'h2'
    }
  }
};

var MarkdownFormat = (_ref) => {
  var {
    children
  } = _ref;
  return _react.default.createElement(_markdownToJsx.default, {
    options: {
      overrides: ComponentOverrides
    },
    children: children
  });
};

var _default = MarkdownFormat;
exports.default = _default;