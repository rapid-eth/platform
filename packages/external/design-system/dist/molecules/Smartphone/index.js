"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _dist = require("@horizin/design-system/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n\n  img {\n    max-width: 100% !important;\n    width: 100% !important;\n  }\n  z-index: 10;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = (0, _styledComponents.default)(_dist.Box)(_templateObject());
/* ------ Component ------ */

var _default = props => _react.default.createElement(Wrapper, props, _react.default.createElement(_dist.Absolute, {
  top: true,
  left: true,
  right: true,
  mt: '3%',
  ml: "24%",
  mr: "24%",
  zIndex: 25
}, _react.default.createElement(_dist.Image, {
  src: "https://imgur.com/DQfwV0h.png",
  width: '100%'
})), _react.default.createElement(_dist.Image, {
  src: 'https://imgur.com/JUw4GJI.png'
}), _react.default.createElement(_dist.Absolute, {
  top: true,
  bottom: true,
  left: true,
  right: true,
  borderRadius: 22,
  gradient: "blue",
  mb: ['7.15%'],
  ml: ['5.15%'],
  mr: ['4%'],
  mt: ['5.125%'],
  overflow: "hidden",
  zIndex: [20]
}, props.children));

exports.default = _default;