"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledTheme = require("styled-theme");

var _styledIs = _interopRequireDefault(require("styled-is"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    &:after {\n      background-color: #FFF;\n      color: ", ";\n      content: 'OR';\n      display: block;\n      margin: 0 auto;\n      position: absolute;\n      overflow: hidden;\n      right: 0;\n      left: 0;\n      top: -9.5px;\n      height: 17px;\n      text-align: center\n      width: 55px;\n    }\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    &:after {\n      background-color: #FFF;\n      background-image: url('", "');\n      background-size: 10px;\n      background-position:  center;\n      background-repeat: no-repeat\n      border-radius: 99999px;\n      border-color: ", ";\n      border-style: solid;\n      border-width: 1px;\n      content: '';\n      display: block;\n      margin: 0 auto;\n      position: absolute;\n      overflow: hidden;\n      right: 0;\n      left: 0;\n      top: -9.5px;\n      height: 17px;\n      width: 25px;\n    }\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    margin-left: auto;\n    margin-right: auto;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    width: 20px;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["border-bottom: none;"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-color: ", ";\n  ", "\n  ", "\n  border-style: solid;\n  position: relative;\n  overflow: visible;\n  ", "\n  ", "\n  ", ";\n  \n  ", ";\n\n  ", ";\n  // Icon\n\n  ", ";\n  ", ";\n  \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/* --------------------------- Styled Component ----------------------------- */
var HorizontalRule = _styledComponents.default.hr(_templateObject(), (0, _styledTheme.palette)('grayscale', 1, true), _styledSystem.boxShadow, _styledSystem.borderColor, _styledSystem.space, _styledSystem.width, (0, _styledIs.default)('thin')(_templateObject2()), (0, _styledIs.default)('dash')(_templateObject3()), (0, _styledIs.default)('center')(_templateObject4()), (0, _styledIs.default)('iconic')(_templateObject5(), '', (0, _styledTheme.palette)('grayscale', 1, true)), (0, _styledIs.default)('or')(_templateObject6(), (0, _styledTheme.palette)('grayscale', 1, true)));

HorizontalRule.defaultProps = {
  borderColor: 'grayLine',
  mx: 0,
  width: 1,
  style: {
    borderImageSlice: 1
  }
};
var _default = HorizontalRule;
exports.default = _default;