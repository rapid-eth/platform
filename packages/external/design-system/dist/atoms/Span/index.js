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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  margin: 0 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n\n", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Span = (0, _styledComponents.default)(_Text.default)(_templateObject(), props => (0, _styledSystem.variant)({
  variants: {
    tag: {
      borderColor: '#ffffff45',
      borderWidth: 1,
      borderStyle: 'inset',
      borderRadius: 80,
      bg: props.highlight,
      padding: 2,
      px: 3,
      color: '#FFF',
      textTransform: 'uppercase',
      fontWeight: 700,
      fontSize: 0
    }
  }
}), (0, _styledIs.default)('center')(_templateObject2()));
Span.defaultProps = {
  as: 'span',
  display: 'inline-block'
};
var _default = Span;
exports.default = _default;