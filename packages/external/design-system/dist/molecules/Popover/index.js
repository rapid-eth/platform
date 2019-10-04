"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = require("styled-components");

var _theme = _interopRequireDefault(require("./theme"));

var _reactTinyPopover = _interopRequireDefault(require("react-tiny-popover"));

var _atoms = require("../../../dist/atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopoverButton = (_ref) => {
  var {
    content,
    label,
    styledLabel,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["content", "label", "styledLabel", "children"]);

  var state = (0, _react.useState)(false);
  var isPopoverOpen = state[0];
  var setPopover = state[1];
  return _react.default.createElement(_reactTinyPopover.default, {
    isOpen: isPopoverOpen,
    position: ['bottom', 'right', 'left', 'bottom'] // if you'd like, supply an array of preferred positions ordered by priority
    ,
    padding: 10 // adjust padding here!
    ,
    onClickOutside: () => setPopover(!isPopoverOpen) // handle click events outside of the popover/target here!
    ,
    content: (_ref2) => {
      var {
        position,
        nudgedLeft,
        nudgedTop,
        targetRect,
        popoverRect
      } = _ref2;
      return _react.default.createElement(_styledComponents.ThemeProvider, {
        theme: _theme.default
      }, children);
    }
  }, _react.default.createElement("div", {
    onClick: () => {
      setPopover(!isPopoverOpen);
    }
  }, _react.default.createElement(_atoms.Span, _extends({
    pointer: true
  }, styledLabel), label)));
};

PopoverButton.defaultProps = {
  label: 'Open Popover'
};
var _default = PopoverButton;
exports.default = _default;