"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledIs = _interopRequireDefault(require("styled-is"));

var _Text = _interopRequireDefault(require("../Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  text-align: center;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\nfont-size: 54px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\nfont-size: 42px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\nfont-size: 36px;\nline-height: \n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\nfont-size: 28px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\nfont-size: 22px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\nfont-size: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\nfont-size: 12px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", ";\n", ";\n", ";\n", ";\n", ";\n", ";\n", ";\n", ";\n", ";\n\n", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Heading = (0, _styledComponents.default)(_Text.default)(_templateObject(), (0, _styledIs.default)('noMargin')(_templateObject2()), (0, _styledIs.default)('pointer')(_templateObject3()), (0, _styledIs.default)('xs')(_templateObject4()), (0, _styledIs.default)('sm')(_templateObject5()), (0, _styledIs.default)('md')(_templateObject6()), (0, _styledIs.default)('lg')(_templateObject7()), (0, _styledIs.default)('xl')(_templateObject8()), (0, _styledIs.default)('xxl')(_templateObject9()), (0, _styledIs.default)('mega')(_templateObject10()), (0, _styledIs.default)('center')(_templateObject11()));
Heading.defaultProps = {
  as: 'h3'
};
var _default = Heading;
exports.default = _default;