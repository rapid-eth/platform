"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledIs = _interopRequireDefault(require("styled-is"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n    word-break: break-all;\n  "]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n    text-transform: uppercase;\n  "]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n    font-size: 42px;\n  "]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n    font-size: 36px;\n  "]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n    font-size: 22px;\n  "]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n    font-size: 14px;\n  "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n    font-size: 12px;\n  "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n    font-weight: 900;\n  "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n    font-weight: 700;\n  "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n    font-weight: strong;\n  "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n    font-weight: normal;\n  "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    font-weight: 300;\n  "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 9999px;\n  "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 9999px;\n  "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n  "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display: block;\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      text-align: right;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", ";\n  ", ";\n  ", ";\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Text = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledIs.default)('center')(_templateObject2()), (0, _styledIs.default)('right')(_templateObject3()), (0, _styledIs.default)('pointer')(_templateObject4()), (0, _styledIs.default)('block')(_templateObject5()), (0, _styledIs.default)('inlineBlock')(_templateObject6()), (0, _styledIs.default)('round')(_templateObject7()), (0, _styledIs.default)('circle')(_templateObject8()), (0, _styledIs.default)('thin')(_templateObject9()), (0, _styledIs.default)('normal')(_templateObject10()), (0, _styledIs.default)('strong')(_templateObject11()), (0, _styledIs.default)('heavy')(_templateObject12()), (0, _styledIs.default)('thick')(_templateObject13()), (0, _styledIs.default)('xs')(_templateObject14()), (0, _styledIs.default)('sm')(_templateObject15()), (0, _styledIs.default)('md')(_templateObject16()), (0, _styledIs.default)('lg')(_templateObject17()), (0, _styledIs.default)('xl')(_templateObject18()), (0, _styledIs.default)('uppercase')(_templateObject19()), (0, _styledIs.default)('wordBreakAll')(_templateObject20()));
Text.defaultProps = {
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal',
  width: 'auto'
};
var _default = Text;
exports.default = _default;