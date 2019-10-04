"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _dist = require("@horizin/design-system/dist");

var _reactTransitionGroup = require("react-transition-group");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

var Panel = (0, _styledComponents.default)(_dist.Box)(_templateObject(), (0, _styledSystem.variant)({
  prop: 'position',
  variants: {
    default: {
      right: 0,
      top: 0,
      bottom: 0,
      minHeight: 280,
      minWidth: [300, 340, 450]
    },
    left: {
      left: 0,
      top: 0,
      bottom: 0,
      minWidth: 300
    },
    right: {
      right: 0,
      top: 0,
      bottom: 0,
      minWidth: 300
    },
    bottom: {
      bottom: 0,
      right: 0,
      left: 0
    }
  }
}));
Panel.defaultProps = {
  bg: 'white',
  boxShadow: 0,
  fixed: true,
  relative: false,
  position: 'default',
  overflow: 'auto'
};

var PanelActions = (_ref) => {
  var {
    portal,
    label,
    content,
    styled,
    styledLabel,
    id
  } = _ref,
      props = _objectWithoutProperties(_ref, ["portal", "label", "content", "styled", "styledLabel", "id"]);

  var [isAnimating, setIsAnimating] = (0, _react.useState)(false);
  var [isOpening, setIsOpening] = (0, _react.useState)(false);

  var closeHandler = () => {
    setIsAnimating(false);
    setTimeout(() => {
      portal.closePanels();
    }, 300);
  };

  (0, _react.useEffect)(() => {
    if (!isOpening && !isAnimating) {
      setIsOpening(true);
      setIsAnimating(true);
    }
  }, [isOpening, isAnimating]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: isAnimating,
    timeout: 300,
    classNames: "fadeInLeft"
  }, _react.default.createElement(_dist.BackgroundGradient, {
    bg: "black",
    fixed: true,
    absolute: false,
    opacity: .2,
    onClick: closeHandler
  })), _react.default.createElement(_reactTransitionGroup.CSSTransition, {
    in: isAnimating,
    timeout: 300,
    classNames: "fadeInLeft"
  }, !isOpening ? _react.default.createElement("div", null) : _react.default.createElement(Panel, _extends({}, styled, styled), label && _react.default.createElement(_dist.Flex, _extends({
    alignCenter: true,
    between: true,
    fullWidth: true,
    gradient: "gray",
    p: 10
  }, styledLabel), _react.default.createElement(_dist.Span, {
    fontSize: [3]
  }, label), _react.default.createElement(_dist.Span, {
    pointer: true,
    md: true,
    heavy: true,
    pointer: true,
    onClick: closeHandler
  }, "X")), _react.default.createElement(_dist.Box, null, content && _react.default.isValidElement(content) ? _react.default.cloneElement(content) : content))));
};

var _default = PanelActions;
exports.default = _default;