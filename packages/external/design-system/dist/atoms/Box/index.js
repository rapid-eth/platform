"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledIs = _interopRequireDefault(require("styled-is"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject48() {
  var data = _taggedTemplateLiteral(["\n    align-items: stretch;\n  "]);

  _templateObject48 = function _templateObject48() {
    return data;
  };

  return data;
}

function _templateObject47() {
  var data = _taggedTemplateLiteral(["\n    align-items: baseline;\n  "]);

  _templateObject47 = function _templateObject47() {
    return data;
  };

  return data;
}

function _templateObject46() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n  "]);

  _templateObject46 = function _templateObject46() {
    return data;
  };

  return data;
}

function _templateObject45() {
  var data = _taggedTemplateLiteral(["\n    align-items: flex-end;\n  "]);

  _templateObject45 = function _templateObject45() {
    return data;
  };

  return data;
}

function _templateObject44() {
  var data = _taggedTemplateLiteral(["\n    align-items: flex-start;\n  "]);

  _templateObject44 = function _templateObject44() {
    return data;
  };

  return data;
}

function _templateObject43() {
  var data = _taggedTemplateLiteral(["\n    align-content: stretch; /* default */\n  "]);

  _templateObject43 = function _templateObject43() {
    return data;
  };

  return data;
}

function _templateObject42() {
  var data = _taggedTemplateLiteral(["\n    align-content: space-around;\n  "]);

  _templateObject42 = function _templateObject42() {
    return data;
  };

  return data;
}

function _templateObject41() {
  var data = _taggedTemplateLiteral(["\n    align-content: space-between;\n  "]);

  _templateObject41 = function _templateObject41() {
    return data;
  };

  return data;
}

function _templateObject40() {
  var data = _taggedTemplateLiteral(["\n    align-content: center;\n  "]);

  _templateObject40 = function _templateObject40() {
    return data;
  };

  return data;
}

function _templateObject39() {
  var data = _taggedTemplateLiteral(["\n    align-content: flex-end;\n  "]);

  _templateObject39 = function _templateObject39() {
    return data;
  };

  return data;
}

function _templateObject38() {
  var data = _taggedTemplateLiteral(["\n    align-content: flex-start;\n  "]);

  _templateObject38 = function _templateObject38() {
    return data;
  };

  return data;
}

function _templateObject37() {
  var data = _taggedTemplateLiteral(["\n    justify-content: space-around;\n  "]);

  _templateObject37 = function _templateObject37() {
    return data;
  };

  return data;
}

function _templateObject36() {
  var data = _taggedTemplateLiteral(["\n    justify-content: space-between;\n  "]);

  _templateObject36 = function _templateObject36() {
    return data;
  };

  return data;
}

function _templateObject35() {
  var data = _taggedTemplateLiteral(["\n    justify-content: center;\n  "]);

  _templateObject35 = function _templateObject35() {
    return data;
  };

  return data;
}

function _templateObject34() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-end;\n  "]);

  _templateObject34 = function _templateObject34() {
    return data;
  };

  return data;
}

function _templateObject33() {
  var data = _taggedTemplateLiteral(["\n    justify-content: flex-start; /* default */\n  "]);

  _templateObject33 = function _templateObject33() {
    return data;
  };

  return data;
}

function _templateObject32() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap-reverse;\n  "]);

  _templateObject32 = function _templateObject32() {
    return data;
  };

  return data;
}

function _templateObject31() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: wrap;\n  "]);

  _templateObject31 = function _templateObject31() {
    return data;
  };

  return data;
}

function _templateObject30() {
  var data = _taggedTemplateLiteral(["\n    flex-wrap: nowrap; /* default */\n  "]);

  _templateObject30 = function _templateObject30() {
    return data;
  };

  return data;
}

function _templateObject29() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column-reverse;\n  "]);

  _templateObject29 = function _templateObject29() {
    return data;
  };

  return data;
}

function _templateObject28() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: column;\n  "]);

  _templateObject28 = function _templateObject28() {
    return data;
  };

  return data;
}

function _templateObject27() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row-reverse;\n  "]);

  _templateObject27 = function _templateObject27() {
    return data;
  };

  return data;
}

function _templateObject26() {
  var data = _taggedTemplateLiteral(["\n    flex-direction: row; /* default */\n  "]);

  _templateObject26 = function _templateObject26() {
    return data;
  };

  return data;
}

function _templateObject25() {
  var data = _taggedTemplateLiteral(["\n    text-align: right;\n  "]);

  _templateObject25 = function _templateObject25() {
    return data;
  };

  return data;
}

function _templateObject24() {
  var data = _taggedTemplateLiteral(["\n    text-align: center;\n  "]);

  _templateObject24 = function _templateObject24() {
    return data;
  };

  return data;
}

function _templateObject23() {
  var data = _taggedTemplateLiteral(["\n    text-transform: uppercase;\n  "]);

  _templateObject23 = function _templateObject23() {
    return data;
  };

  return data;
}

function _templateObject22() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 !important;\n"]);

  _templateObject22 = function _templateObject22() {
    return data;
  };

  return data;
}

function _templateObject21() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 99999px;\n"]);

  _templateObject21 = function _templateObject21() {
    return data;
  };

  return data;
}

function _templateObject20() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 0 15px 15px !important;\n"]);

  _templateObject20 = function _templateObject20() {
    return data;
  };

  return data;
}

function _templateObject19() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 15px 15px 0 0 !important;\n"]);

  _templateObject19 = function _templateObject19() {
    return data;
  };

  return data;
}

function _templateObject18() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 40px;\n"]);

  _templateObject18 = function _templateObject18() {
    return data;
  };

  return data;
}

function _templateObject17() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px 8px 0 0 !important;\n"]);

  _templateObject17 = function _templateObject17() {
    return data;
  };

  return data;
}

function _templateObject16() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 0 0 8px 8px !important;\n"]);

  _templateObject16 = function _templateObject16() {
    return data;
  };

  return data;
}

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 8px;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n  cursor: pointer;\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n  word-break: break-all;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  margin: 0px !important;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  padding: 0px !important;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  position: fixed !important;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  position: absolute !important;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  position: relative\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: #f3f3f3;\n  padding: 15px;\n  border-radius: 10px 10px 0 0;\n  margin-top: -16px;\n  margin-left: -16px;\n  margin-right: -16px;\n  margin-bottom: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n&:hover {\n  box-shadow: ", ";\n}\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  background: ", ";\n  background-image: -webkit-linear-gradient(", "deg , ", ");\n  background-image: linear-gradient(", "deg , ", " );\n  ", "\n  border-radius: 5px;\n  padding: 15.5px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbox-sizing: border-box;\n/* --------------- */\n/*      System     */\n/* --------------- */\n", "\n", "\n", "\n", "\n", "\n", "\n", "\n/* --------------- */\n/*     Card     */\n/* --------------- */\n", ";\n\n", "\n\n", ";\n\n", "\n\n/* --------------- */\n/*     General     */\n/* --------------- */\n", "\n", "\n", "\n", "\n", "\n\n", "\n\n", "\n\n", "\n\n", "\n\n\n\n/* --------------- */\n/*     Helpers     */\n/* --------------- */\n", ";\n\n", ";\n", ";\n", ";\n\n", ";\n", ";\n", ";\n\n", ";\n\n\n", ";\n\n  /* --------------- */\n  /*       Text      */\n  /* --------------- */\n  ", ";\n  ", ";\n  ", ";\n\n  /* --------------- */\n  /*     Gradient     */\n  /* --------------- */\n  ", "\n  &:hover {\n    ", "\n    ", "\n  }\n\n\n  /* --------------- */\n  /*     General     */\n  /* --------------- */\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*       Wrap      */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*     Justify     */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  /* --------------- */\n  /*      Align      */\n  /* --------------- */\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n\n  ", ";\n  ", "\n", "\n", "\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = (0, _styledComponents.default)((0, _utils.withoutProps)(_utils.ignoreList)('div'))(_templateObject(), (0, _styledSystem.system)({
  opacity: {
    property: 'opacity'
  },
  transform: {
    property: 'transform'
  }
}), _styledSystem.layout, _styledSystem.flexbox, _styledSystem.grid, _styledSystem.background, _styledSystem.typography, _styledSystem.position, (0, _styledIs.default)('card')(_templateObject2(), props => props.theme.gradient['white'][0], props => props.gradientDir ? props.gradientDir : '180', props => "".concat(props.theme.gradient['white'][0], ", ").concat(props.theme.gradient['white'][1]), props => props.gradientDir ? props.gradientDir : '180', props => "".concat(props.theme.gradient['white'][0], ", ").concat(props.theme.gradient['white'][1]), props => "box-shadow: ".concat(props.theme.shadows[0], ";")), (0, _styledIs.default)('shadowMedium')(_templateObject3(), props => "box-shadow: ".concat(props.theme.shadows[4], ";")), (0, _styledIs.default)('cardHover')(_templateObject4(), props => (0, _idx.default)(props, _ => _.theme.shadows['lightHover'])), (0, _styledSystem.variant)({
  prop: 'layout',
  variants: {
    toast: {
      position: 'fixed !important',
      top: 0,
      right: 0,
      marginTop: 20,
      marginRight: 20,
      minWidth: 180
    },
    panel: {
      position: 'fixed !important',
      top: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      minWidth: 360,
      maxWidth: 360
    },
    panelRight: {
      position: 'fixed !important',
      relative: false,
      top: 0,
      bottom: 0,
      right: 0,
      height: '100%',
      minWidth: 360,
      maxWidth: 360
    },
    panelLeft: {
      position: 'fixed !important',
      relative: false,
      top: 0,
      bottom: 0,
      left: 0,
      height: '100%',
      minWidth: 360,
      maxWidth: 360
    }
  }
}), (0, _styledIs.default)('cardHeader')(_templateObject5()), (0, _styledIs.default)('fullWidth')(_templateObject6()), (0, _styledIs.default)('fill')(_templateObject7()), (0, _styledIs.default)('relative')(_templateObject8()), (0, _styledIs.default)('absolute')(_templateObject9()), (0, _styledIs.default)('fixed')(_templateObject10()), (0, _styledIs.default)('noPadding')(_templateObject11()), (0, _styledIs.default)('noMargin')(_templateObject12()), (0, _styledIs.default)('wordBreakAll')(_templateObject13()), (0, _styledIs.default)('pointer')(_templateObject14()), (0, _styledIs.default)('rounded')(_templateObject15()), (0, _styledIs.default)('borderRoundedBottom')(_templateObject16()), (0, _styledIs.default)('borderRoundedTop')(_templateObject17()), (0, _styledIs.default)('curved')(_templateObject18()), (0, _styledIs.default)('borderCurvedTop')(_templateObject19()), (0, _styledIs.default)('borderCurvedBottom')(_templateObject20()), (0, _styledIs.default)('circle')(_templateObject21()), (0, _styledIs.default)('borderNone')(_templateObject22()), (0, _styledIs.default)('uppercase')(_templateObject23()), (0, _styledIs.default)('textCenter')(_templateObject24()), (0, _styledIs.default)('textRight')(_templateObject25()), props => props.gradient && (0, _idx.default)(props, _ => _.theme.gradient[props.gradient]) ? "\n      background: ".concat((0, _idx.default)(props, _ => _.theme.gradient[props.gradient][0]), ";\n      background-image: -webkit-linear-gradient(").concat(props.gradientDir ? props.gradientDir : '180', "deg , ").concat((0, _idx.default)(props, _ => _.theme.gradient[props.gradient]), ");\n      background-image: linear-gradient(").concat(props.gradientDir ? props.gradientDir : '180', "deg , ").concat((0, _idx.default)(props, _ => _.theme.gradient[props.gradient]), ");\n      ") : null, props => (0, _idx.default)(props, _ => _.hover.boxShadow) && "box-shadow: ".concat((0, _idx.default)(props, _ => _.theme.shadows[props.hover.boxShadow]), ";"), props => (0, _idx.default)(props, _ => _.hover.zIndex) > 0 && "z-index: ".concat(props.hover.zIndex), (0, _styledIs.default)('row')(_templateObject26()), (0, _styledIs.default)('rowReverse')(_templateObject27()), (0, _styledIs.default)('column')(_templateObject28()), (0, _styledIs.default)('columnReverse')(_templateObject29()), (0, _styledIs.default)('nowrap')(_templateObject30()), (0, _styledIs.default)('wrap')(_templateObject31()), (0, _styledIs.default)('wrapReverse')(_templateObject32()), (0, _styledIs.default)('justifyStart')(_templateObject33()), (0, _styledIs.default)('justifyEnd')(_templateObject34()), (0, _styledIs.default)('justifyCenter')(_templateObject35()), (0, _styledIs.default)('justifyBetween')(_templateObject36()), (0, _styledIs.default)('justifyAround')(_templateObject37()), (0, _styledIs.default)('contentStart')(_templateObject38()), (0, _styledIs.default)('contentEnd')(_templateObject39()), (0, _styledIs.default)('contentCenter')(_templateObject40()), (0, _styledIs.default)('contentSpaceBetween')(_templateObject41()), (0, _styledIs.default)('contentSpaceAround')(_templateObject42()), (0, _styledIs.default)('contentStretch')(_templateObject43()), (0, _styledIs.default)('alignStart')(_templateObject44()), (0, _styledIs.default)('alignEnd')(_templateObject45()), (0, _styledIs.default)('alignCenter')(_templateObject46()), (0, _styledIs.default)('alignBaseline')(_templateObject47()), (0, _styledIs.default)('alignStretch')(_templateObject48()), _styledSystem.border, _styledSystem.color, _styledSystem.shadow, _styledSystem.space);
Box.propTypes = {
  curved: _propTypes.default.string,
  rounded: _propTypes.default.string,
  pointer: _propTypes.default.string
};
Box.defaultProps = {
  relative: true,
  zIndex: 10
};
var _default = Box;
exports.default = _default;