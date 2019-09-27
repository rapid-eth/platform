"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _styledBreakpoints = require("styled-breakpoints");

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    & > * {\n      flex: 1;\n      width: 22%;\n      margin-right: 30px;\n    }\n    & > *:nth-child(4) {\n      margin-right: 0;\n    }\n    & > *:nth-child(n+5) {\n      margin-top: 30px;\n    }\n\n    ", " {\n      flex-wrap: wrap;\n      & > * {\n        width: 45%;\n        margin-right: 30px;\n      }\n      & > *:nth-child(2) {\n        margin-right: 0;\n      }\n\n      & > *:nth-child(n+3) {\n        margin-top: 20px;\n      }\n    }\n\n    ", " {\n      & > * {\n        margin: 0;\n        width: 100% !important;\n      }\n      & > *:nth-child(n+1) {\n        margin-top: 10px;\n      }\n    }\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    & > * {\n      width: 30%;\n      margin-right: 5%;\n    }\n    & > *:nth-child(3n) {\n      // align-self: flex-end;\n      margin-right: 0;\n    }\n    & > *:nth-child(n+4) {\n      margin-top: 50px;\n    }\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n    & > * {\n      flex: 1;\n      width: 45%;\n      margin-right: 5%;\n      max-width: 50%;\n    }\n    & > *:nth-child(2n) {\n      margin-right: 0;\n    }\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 100%;\n    flex-basis: 100%;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    justify-content: center;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    justify-content: center;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-evenly;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  justify-content: space-between;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n\n\n  /* --------------- */\n  /*    Shorthand    */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  /* --------------- */\n  /*     Gutters     */\n  /* --------------- */\n\n  // Gutter 2\n  ", ";\n\n  // Gutter 3\n  ", ";\n\n  // Gutter 4\n  ", ";\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Flex = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledIs.default)('between')(_templateObject2()), (0, _styledIs.default)('evenly')(_templateObject3()), (0, _styledIs.default)('center')(_templateObject4()), (0, _styledIs.default)('jc')(_templateObject5()), (0, _styledIs.default)('ac')(_templateObject6()), (0, _styledIs.default)('full')(_templateObject7()), (0, _styledIs.default)('gutter2')(_templateObject8()), (0, _styledIs.default)('gutter3')(_templateObject9()), (0, _styledIs.default)('gutter4')(_templateObject10(), (0, _styledBreakpoints.down)('desktop'), (0, _styledBreakpoints.down)('tablet')));
Flex.propTypes = {};
Flex.defaultProps = {
  width: 'auto'
};
var _default = Flex;
exports.default = _default;