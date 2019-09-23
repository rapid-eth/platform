"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\npadding: 20px;\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = (0, _styledComponents.default)(_Text.default)(_templateObject(), (0, _styledSystem.variant)({
  variants: {
    default: {
      border: '1px solid #f5f5f5',
      borderRadius: 5,
      boxShadow: '0 1px 3px rgba(245,243,243,.05), 0 1px 2px rgba(0,0,0,.15)',
      display: 'block',
      mb: 2,
      p: 15,
      width: '100%'
    }
  }
}));
Input.defaultProps = {
  as: 'input',
  variant: 'default'
};
var _default = Input;
exports.default = _default;