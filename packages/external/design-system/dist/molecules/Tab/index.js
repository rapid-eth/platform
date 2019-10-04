"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Text = _interopRequireDefault(require("../Text"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 80px;\n    padding: 8px;\n    padding-left: 10px;\n    padding-right: 10px;\n    text-transform: uppercase;\n    font-weight: 700;\n    fontSize: 0;\n    &:hover {\n      color: #FFF;\n      top: -1px;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 30px;\n    padding: 8px;\n    text-transform: uppercase;\n    font-weight: normal;\n    fontSize: 0;\n    &:hover {\n      color: #FFF;\n      top: -1px;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n    margin: 0 auto;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n\n", "\n\n  ", ";\n\n  ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Span = (0, _styledComponents.default)(_Text.default)(_templateObject(), (0, _styledSystem.variant)({
  prop: 'tag',
  variants: {
    white: {
      borderColor: '#eeeded',
      borderWidth: 1,
      borderStyle: 'solid',
      color: '#3e3e3e',
      bg: '#FFF',
      "&:hover": {
        color: '#3e3e3e !important'
      }
    },
    primary: {
      bg: 'primary',
      color: '#ffffffe6'
    },
    secondary: {
      bg: 'secondary',
      color: '#ffffffe6'
    },
    tertiary: {
      bg: 'tertiary',
      color: '#ffffffe6'
    },
    green: {
      bg: 'green',
      color: '#ffffffe6'
    },
    red: {
      bg: 'red',
      color: '#ffffffe6'
    },
    blue: {
      bg: 'blue',
      color: '#ffffffe6'
    },
    rust: {
      bg: 'rust',
      color: '#ffffffe6'
    },
    orange: {
      bg: 'orange',
      color: '#ffffffe6'
    },
    purple: {
      bg: 'purple',
      color: '#ffffffe6'
    }
  }
}), props => (0, _styledSystem.variant)({
  variants: {
    tag: {
      borderColor: '#ffffff45',
      borderWidth: 1,
      borderStyle: 'inset',
      borderRadius: 80,
      bg: props.highlight,
      padding: 2,
      px: 3,
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 0
    }
  }
}), (0, _styledIs.default)('center')(_templateObject2()), (0, _styledIs.default)('gem')(_templateObject3()), (0, _styledIs.default)('tag')(_templateObject4()));
Span.defaultProps = {
  as: 'span',
  display: 'inline-block'
};
var _default = Span;
exports.default = _default;