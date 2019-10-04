"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BackgroundImage = (0, _styledComponents.default)(_Box.default)(_templateObject(), props => "\n  background-image: ".concat(props.src ? "url(".concat(props.src, ")") : null, ";\n  padding-bottom: ").concat((props.ratio || 3 / 4) * 100 + '%', ";\n  height: 100%;\n  width: 100%;\n"));
BackgroundImage.defaultProps = {
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};
/* ------ Component ------ */

var _default = (_ref) => {
  var {
    src,
    ratio,
    styledContainer,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["src", "ratio", "styledContainer", "styled"]);

  return _react.default.createElement(_Box.default, _extends({
    absolute: true,
    fill: true,
    overflow: "hidden"
  }, styledContainer), _react.default.createElement(BackgroundImage, _extends({
    src: src,
    ratio: ratio
  }, styled, props)));
};

exports.default = _default;