"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Image = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledSystem.variant)({
  variants: {
    avatar: {
      border: '1px solid #FFF',
      boxShadow: '0px 0px 6px #999',
      borderRadius: 9999,
      maxWidth: 64
    },
    card: {
      border: '2px solid #FFF',
      boxShadow: '0px 0px 6px #999',
      borderRadius: 4
    }
  }
}));
Image.defaultProps = {
  as: 'img',
  height: 'auto',
  maxWidth: '100%'
};
var _default = Image;
exports.default = _default;