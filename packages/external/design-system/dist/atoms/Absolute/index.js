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
  var data = _taggedTemplateLiteral(["\n", "\n\n  position: absolute;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Absolute = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledSystem.variant)({
  prop: 'layout',
  variants: {
    default: {},
    bottomRight: {
      bottom: 0,
      right: 0
    },
    bottomLeft: {
      bottom: 0,
      left: 0
    },
    topRight: {
      top: 0,
      right: 0
    }
  }
}));
Absolute.defaultProps = {
  layout: 'default',
  relative: false,
  absolute: true
};
var _default = Absolute;
exports.default = _default;