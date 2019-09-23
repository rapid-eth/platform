"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Heading = _interopRequireDefault(require("../../atoms/Heading"));

var _Span = _interopRequireDefault(require("../../atoms/Span"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Label = (0, _styledComponents.default)(_Span.default)(_templateObject(), (0, _styledSystem.variant)({
  prop: 'variant',
  variants: {
    xs: {
      color: 'charcoal',
      fontSize: 1
    }
  }
}));
Label.defaultProps = {
  variant: 'xs'
};

var LabelCollection = (_ref) => {
  var {
    label,
    direction,
    variant,
    styled,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["label", "direction", "variant", "styled", "children"]);

  return direction === 'column' ? _react.default.createElement(_Heading.default, _extends({
    wordBreakAll: true,
    as: "h5",
    display: "flex",
    flexDirection: 'column'
  }, styled, props), _react.default.createElement(Label, {
    variant: variant,
    xs: true,
    heavy: true
  }, label), _react.default.createElement(_Span.default, null, children)) : _react.default.createElement(_Heading.default, _extends({
    alignCenter: true,
    wordBreakAll: true,
    as: "h5",
    display: "flex",
    flexDirection: 'row'
  }, styled, props), _react.default.createElement(Label, {
    variant: variant,
    xs: true,
    heavy: true
  }, label), _react.default.createElement(_Span.default, null, children));
};

LabelCollection.defaultProps = {
  direction: 'column'
};
var _default = LabelCollection;
exports.default = _default;