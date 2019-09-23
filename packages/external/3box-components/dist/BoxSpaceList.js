"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxLoginButton = (_ref) => {
  var {
    box,
    variant,
    to,
    styled,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "variant", "to", "styled", "children"]);

  return !box.spaces ? _react.default.createElement(_designSystem.Span, styledNoData, "No Spaces Available") : _react.default.createElement(_react.default.Fragment, null, Object.keys(box.spaces).map(space => {
    var isEnabled = box.spaces[space];
    return _react.default.createElement(_designSystem.Flex, _extends({
      card: true,
      cardHover: true,
      m: 2,
      between: true
    }, styled), _react.default.createElement(_designSystem.Link, {
      to: "".concat(to, "/").concat(space)
    }, _react.default.createElement(_designSystem.Span, null, space)), _react.default.createElement(BoxOpenButton, {
      openSpace: box.openSpace,
      isEnabled: isEnabled,
      space: space
    }));
  }));
};

var BoxOpenButton = (_ref2) => {
  var {
    box,
    openSpace,
    isEnabled,
    space,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["box", "openSpace", "isEnabled", "space", "styled"]);

  var [isLoading, setLoading] = (0, _react.useState)(false);
  return _react.default.createElement(_designSystem.Box, null, isEnabled ? _react.default.createElement(_designSystem.Button, null, _react.default.createElement(_designSystem.Span, null, "Active")) : _react.default.createElement(_designSystem.Button, {
    xs: true,
    onClick: () => {
      openSpace(space);
      setLoading(true);
    },
    variant: "green"
  }, isLoading ? 'Loading...' : 'Open'));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxLoginButton, props));

exports.default = _default;