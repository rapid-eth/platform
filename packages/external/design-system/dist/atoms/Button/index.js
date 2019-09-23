"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledTheme = require("styled-theme");

var _styledSystem = require("styled-system");

var _styledIs = _interopRequireDefault(require("styled-is"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.95rem;\n  font-weight: 500;\n  line-height: 1.75;\n  letter-spacing: 0.055em;\n  padding: .65rem 1rem;\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  font-size: 0.85rem;\n  font-weight: 500;\n  line-height: 1.25;\n  letter-spacing: 0.055em;\n  padding: .65rem 1rem;\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 0.65rem;\n    font-weight: 500;\n    line-height: 1.25;\n    letter-spacing: 0.055em;\n    padding: .65rem 1.25rem;\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    text-transform: uppercase;\n  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", " !important;\n  border-color: ", " !important;\n  color: #FFF !important;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nbox-shadow: 0 6px 8px -5px rgba(88,103,221,0.15);\nborder-width: 0px;\nborder-style: solid;\nborder-radius: .25rem;\ncursor: pointer;\ndisplay: inline-flex;\nalign-items: center;\nfont-size: 1rem;\nfont-weight: 470;\njustify-content: center;\nline-height: 1.5;\nletter-spacing: 0.015em;\npadding: .65rem 1rem;\npadding-left: 2.5rem;\npadding-right: 2.5rem;\nvertical-align: middle;\ntransition: top 1s;\ntext-align: center;\noutline: 0!important;\n\n", "\n", "\n\n", ";\n\n\n\n", ";\n  \n  ", ";\n\n", ";\n\n", ";\n\n&:hover {\n\n  box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);\n  transition: top 1s;\n  top: -1px;\n}\n\n// Button States\n&:active {\n  top: -3px;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Gradient = (gradient, direction, theme) => "\nbackground: ".concat((0, _idx.default)(theme, _ => _.gradient[gradient][0]), ";\nbackground-image: -webkit-linear-gradient(").concat(direction ? direction : '-90', "deg , ").concat((0, _idx.default)(theme, _ => _.gradient[gradient][0]), ");\nbackground-image: linear-gradient(").concat(direction ? direction : '180', "deg , ").concat((0, _idx.default)(theme, _ => _.gradient[gradient][0]), ")\n");

var Button = (0, _styledComponents.default)(_Box.default)(_templateObject(), (0, _styledSystem.variant)({
  variants: {
    white: {
      color: '#3e3e3e',
      bg: '#FFF'
    },
    primary: {
      border: 'none',
      color: 'white',
      bg: 'primary'
    },
    secondary: {
      bg: 'secondary',
      color: 'white'
    },
    blue: {
      bg: 'blue',
      color: 'white'
    },
    green: {
      color: 'white',
      bg: 'green'
    },
    orange: {
      color: 'white',
      bg: 'rust'
    },
    red: {
      color: 'white',
      bg: 'red'
    }
  }
}), props => (0, _styledSystem.variant)({
  prop: 'gradient',
  variants: {
    white: {
      color: '#3e3e3e',
      bg: 'white'
    },
    primary: {
      color: 'white',
      bg: 'primary'
    },
    secondary: {
      bg: 'secondary',
      color: 'white'
    },
    blue: {
      color: 'white',
      gradient: Gradient('blue', '180', props.theme)
    },
    green: {
      color: 'white',
      gradient: Gradient('green', '0', props.theme)
    },
    orange: {
      color: 'white',
      gradient: Gradient('orange', '180', props.theme)
    },
    red: {
      color: 'white',
      gradient: Gradient('orange', '180', props.theme)
    }
  }
}), (0, _styledIs.default)('disabled')(_templateObject2(), (0, _styledTheme.palette)('gray', 2), (0, _styledTheme.palette)('gray', 2)), (0, _styledIs.default)('uppercase')(_templateObject3()), (0, _styledIs.default)('xs')(_templateObject4()), (0, _styledIs.default)('sm')(_templateObject5()), (0, _styledIs.default)('lg')(_templateObject6()));
Button.defaultProps = {
  as: 'button',
  cursor: 'pointer',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal',
  variant: 'white',
  width: 'auto'
};
var _default = Button;
exports.default = _default;