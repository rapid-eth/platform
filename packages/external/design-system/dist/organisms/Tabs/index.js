"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHooksTabs = require("@horizin/react-hooks-tabs");

var _atoms = require("../../atoms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DefaultComp = (_ref) => {
  var {
    title,
    tagline,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "tagline", "styled"]);

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_atoms.Heading, null, title), _react.default.createElement(_atoms.Heading, {
    xs: true,
    thin: true
  }, tagline));
};

var PanelDefault = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_atoms.Box, null, _react.default.createElement(_atoms.Heading, null, "INSERT DEFAULT PANEL COMPONENT"));
};

var _default = (_ref3) => {
  var {
    id,
    panels,
    panelComponent,
    tabs,
    tabComponent,
    styled
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["id", "panels", "panelComponent", "tabs", "tabComponent", "styled"]);

  tabComponent = tabComponent ? tabComponent : DefaultComp;
  panelComponent = panelComponent ? panelComponent : PanelDefault;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHooksTabs.Tabs, null, _react.default.createElement(_atoms.Flex, {
    column: true,
    flex: 2,
    px: 20
  }, _react.default.createElement(_reactHooksTabs.TabList, {
    id: id,
    tabIdSelected: "first",
    template: props.variant
  }, tabs && Array.isArray(tabs) && tabs.length > 0 && tabs.map(tab => _react.default.createElement(_reactHooksTabs.Tab, {
    id: id,
    tabId: tab.tabId
  }, _react.default.createElement(tabComponent, _objectSpread({}, tab)))))), _react.default.createElement(_atoms.Box, {
    flex: 5
  }, _react.default.createElement(_reactHooksTabs.TabPanelWrapper, {
    p: 20
  }, panels && Array.isArray(panels) && panels.length > 0 && panels.map(panel => _react.default.createElement(_reactHooksTabs.TabPanel, {
    key: panel.tabId,
    tabId: panel.tabId
  }, panel.component))))));
};

exports.default = _default;