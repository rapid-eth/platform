"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = require("@reach/router");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledBy = _interopRequireDefault(require("styled-by"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    opacity: 0.7;\n    &:hover {\n      color: #4f6ee4;\n      opacity: 1;\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    &:hover {\n      ", "\n      opacity: 0.9;\n    }\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", ";\n  &:hover {\n    ", "\n  }\n  ", ";\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LinkStyled = (0, _styledComponents.default)(_router.Link)(_templateObject(), _styledSystem.border, _styledSystem.color, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.grid, _styledSystem.background, _styledSystem.typography, _styledSystem.position, _styledSystem.shadow, _styledSystem.space, (0, _styledIs.default)('fullWidth')(_templateObject2()), (0, _styledBy.default)('colorHover', props => "color: ".concat(props.colorHover)), (0, _styledIs.default)('active')(_templateObject3(), _styledSystem.color), (0, _styledIs.default)('opaque')(_templateObject4()));
LinkStyled.defaultProps = {
  colorHover: '#2879c7'
};
var _default = LinkStyled;
exports.default = _default;