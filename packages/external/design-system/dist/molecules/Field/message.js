"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _styledSystem = require("styled-system");

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  top: 0\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ErrorField = (0, _styledComponents.default)(_index.Span)(_templateObject(), (0, _styledSystem.variant)({
  variants: {
    float: {
      background: '#FFF',
      boxShadow: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: 'gray',
      p: 10,
      right: 10,
      top: -10,
      position: 'absolute !important'
    }
  }
}), (0, _styledIs.default)('withLabel')(_templateObject2()));
ErrorField.defaultProps = {
  color: 'red',
  fontSize: 0,
  fontWeight: 'normal',
  variant: 'float'
};
var _default = ErrorField;
exports.default = _default;