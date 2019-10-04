"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 60px;\n  &::before {\n    content: \"\";\n    background-color: #FFF;\n    background: ", ";\n    background-image: -webkit-linear-gradient(", "deg , ", ");\n    background-image: linear-gradient(", "deg , ", " );\n    ", "\n    border-radius: 5px;\n    padding: 15.5px;\n    position: absolute; left: 0; right: 0; top: 0 ; bottom: 0;\n    // left: -70px;\n    // right: -70px;\n    // top: -70px;\n    // bottom: -70px;\n    z-index: -1;\n  }\n\n  &::after {\n    color: #d4d4d4;\n    content: '\"';\n    font-size: 8.5em !important;\n    font-weight: normal;\n    position: absolute;\n    line-height: normal;\n    // left: -49px;\n    // top: -63px;\n    left: 15px;\n    top: -10px;\n    opacity: 1;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n& cite {\n  font-size: 0.9em;\n  font-style: normal;\n}\n\n", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledIs.default)('card')(_templateObject2(), props => props.theme.gradient['white'][0], props => props.gradientDir ? props.gradientDir : '180', props => "".concat(props.theme.gradient['white'][0], ", ").concat(props.theme.gradient['white'][1]), props => props.gradientDir ? props.gradientDir : '180', props => "".concat(props.theme.gradient['white'][0], ", ").concat(props.theme.gradient['white'][1]), props => "box-shadow: ".concat(props.theme.shadows[0], ";")));
Heading.defaultProps = {
  as: 'blockquote',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal'
};
var _default = Heading;
exports.default = _default;