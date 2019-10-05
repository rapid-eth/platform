"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var OrganizationItem = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  /* -------------------- */

  /* Effects
  /* -------------------- */

  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */

  /* -------------------- */

  /* Organization Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true,
    p: 60
  }, _react.default.createElement(_designSystem.Box, {
    card: true
  }, _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Flex, {
    card: true,
    circle: true,
    borderRadius: 70,
    boxShadow: "sunset",
    maxWidth: 420,
    width: 470,
    minHeight: 130,
    mt: -80,
    mb: 20,
    mx: 80,
    overflow: "hidden"
  }, _react.default.createElement(_designSystem.BackgroundImage, {
    ratio: .65,
    src: props.data.imageCover
  })), _react.default.createElement(_designSystem.HorizontalRule, {
    dash: true,
    center: true
  }), _react.default.createElement(_designSystem.Image, {
    circle: true,
    card: true,
    maxWidth: 100,
    mt: -150,
    src: props.data.image
  }), _react.default.createElement(_designSystem.Box, {
    my: 3,
    textCenter: true
  }, _react.default.createElement(_designSystem.Heading, {
    lg: true
  }, props.data.name), _react.default.createElement(_designSystem.Paragraph, {
    px: 4
  }, props.data.summary), _react.default.createElement(_designSystem.Link, {
    to: "/organization/".concat(props.alias)
  }, _react.default.createElement(_designSystem.Button, {
    variant: "green"
  }, "Organization"))))));
};

OrganizationItem.defaultProps = {
  alias: 'test',
  data: {},
  meta: {}
};
OrganizationItem.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};
var _default = OrganizationItem;
exports.default = _default;