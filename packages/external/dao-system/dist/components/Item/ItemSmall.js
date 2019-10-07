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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ProjectItem = props => {
  console.log(props, 'projects item');
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

  return _react.default.createElement(_designSystem.Flex, _extends({
    card: true,
    alignCenter: true,
    between: true
  }, props.styled), _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Heading, {
    lg: true
  }, props.name)), _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Link, {
    to: "/".concat(props.toPrepend).concat(props.alias)
  }, _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "white"
  }, "View"))));
};

ProjectItem.defaultProps = {
  toPrepend: undefined
};
ProjectItem.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};
var _default = ProjectItem;
exports.default = _default;