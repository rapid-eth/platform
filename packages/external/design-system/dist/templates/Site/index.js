"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SiteFooter = exports.SiteMain = exports.SiteHeader = exports.FooterStyled = exports.MainStyled = exports.HeaderStyled = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../../index");

var _dist = require("@horizin/react-context-portal/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background-color: #1e1e2d;\n  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);\n  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);\n  color: #FFF;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background-color: #FFF;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: #2e2e48;\n  border-bottom: 3px solid #dc448d;\n  color: #FFF;\n  padding: 12px 20px;\n  width: 100%;\n  z-index: 1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var HeaderStyled = (0, _styledComponents.default)(_index.Box)(_templateObject());
exports.HeaderStyled = HeaderStyled;
HeaderStyled.defaultProps = {
  id: 'site--header',
  as: 'header'
};
var MainStyled = (0, _styledComponents.default)(_index.Flex)(_templateObject2());
exports.MainStyled = MainStyled;
MainStyled.defaultProps = {
  id: 'site--main',
  as: 'main'
};
var FooterStyled = (0, _styledComponents.default)(_index.Box)(_templateObject3());
exports.FooterStyled = FooterStyled;
FooterStyled.defaultProps = {
  id: 'site--footer',
  as: 'footer',
  py: 50
};

var SiteHeader = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_dist.PortalInjection, {
    id: "site--header"
  }, _react.default.createElement(_index.Box, props, children));
};

exports.SiteHeader = SiteHeader;

var SiteMain = (_ref2) => {
  var {
    children
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return _react.default.createElement(_dist.PortalInjection, {
    id: "site--main"
  }, children);
};

exports.SiteMain = SiteMain;

var SiteFooter = (_ref3) => {
  var {
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["children"]);

  return _react.default.createElement(_dist.PortalInjection, {
    id: "site--footer"
  }, children);
};

exports.SiteFooter = SiteFooter;

var _default = (_ref4) => {
  var {
    children
  } = _ref4;
  return _react.default.createElement(_index.Flex, {
    column: true,
    className: "site",
    minHeight: '100vh'
  }, _react.default.createElement(HeaderStyled, null), _react.default.createElement(MainStyled, {
    column: true
  }, children), _react.default.createElement(FooterStyled, null));
};

exports.default = _default;