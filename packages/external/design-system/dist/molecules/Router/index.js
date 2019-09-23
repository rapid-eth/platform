"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router = require("@reach/router");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var RouterStyled = (0, _styledComponents.default)(_router.Router)(_templateObject(), _styledSystem.border, _styledSystem.color, _styledSystem.layout, _styledSystem.flexbox, _styledSystem.grid, _styledSystem.background, _styledSystem.typography, _styledSystem.position, _styledSystem.shadow, _styledSystem.space);
RouterStyled.defaultProps = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  minHeight: '100%',
  width: '100%'
};
var _default = RouterStyled;
exports.default = _default;