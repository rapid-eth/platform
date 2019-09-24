"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Aside = exports.Main = exports.Header = exports.MainStyled = exports.HeaderStyled = exports.AsideStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

var _dist = require("@horizin/react-hooks-portal/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: #ecebf2;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #2e2e48;\n  border-bottom: 3px solid #dc448d;\n  color: #FFF;\n  height: 70px;\n  padding: 12px 20px;\n  width: 100%;\n  z-index: 1000;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #1e1e2d;\n  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);\n  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);\n  color: #FFF;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var AsideStyled = (0, _styledComponents.default)(_index.Box)(_templateObject());
exports.AsideStyled = AsideStyled;
AsideStyled.defaultProps = {
  id: 'dashboard--aside',
  as: 'aside',
  flex: 2
};
var HeaderStyled = (0, _styledComponents.default)(_index.Box)(_templateObject2());
exports.HeaderStyled = HeaderStyled;
HeaderStyled.defaultProps = {
  id: 'dashboard--header',
  as: 'div'
};
var MainStyled = (0, _styledComponents.default)(_index.Flex)(_templateObject3());
exports.MainStyled = MainStyled;
MainStyled.defaultProps = {
  id: 'dashboard--main',
  flex: 12
};

var Header = (_ref) => {
  var {
    children
  } = _ref,
    props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_dist.PortalInjection, {
    id: "dashboard--header"
  }, children);
};

exports.Header = Header;

var Main = (_ref2) => {
  var {
    children
  } = _ref2,
    props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement(_dist.PortalInjection, {
    id: "dashboard--main"
  }, children);
};

exports.Main = Main;

var Aside = (_ref3) => {
  var {
    children
  } = _ref3,
    props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement(_dist.PortalInjection, {
    id: "dashboard--aside"
  }, children);
};

exports.Aside = Aside;

var _default = (_ref4) => {
  var {
    children
  } = _ref4;
  return _react.default.createElement(_index.Flex, {
    className: "dashboard",
    height: '100vh'
  }, _react.default.createElement(AsideStyled, null), _react.default.createElement(MainStyled, {
    column: true
  }, _react.default.createElement(HeaderStyled, null), children));
};

exports.default = _default;