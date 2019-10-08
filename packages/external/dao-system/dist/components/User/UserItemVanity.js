"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _utilities = require("../../utilities");

var _UserFollow = _interopRequireDefault(require("./UserFollow"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* --- Global Dependencies --- */

/**
 * @function UserItemSmall
 * @return {Function} React component..
 * @description Small user item component.
 * @type user
 * @version 1.0.0
 */
var UserItemSmall = props => {
  return _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Flex, {
    bg: "dark",
    color: "white",
    minHeight: 200,
    p: 3
  }, props.coverPhoto && _react.default.createElement(_designSystem.BackgroundImage, {
    src: (0, _utilities.GenerateImage)(props.coverPhoto),
    opacity: 0.2
  }), _react.default.createElement(_designSystem.Absolute, {
    layout: "topLeft",
    zIndex: 100
  }, props.alpha && _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "blue"
  }, "Alpha Member")), _react.default.createElement(_designSystem.Absolute, {
    layout: "topRight",
    zIndex: 100
  }, _react.default.createElement(_designSystem.Flex, {
    column: true,
    center: true
  }, _react.default.createElement(_designSystem.Absolute, {
    layout: "default",
    mt: 20
  }, _react.default.createElement(_designSystem.QRStyled, {
    type: "ripple"
  })), _react.default.createElement(_designSystem.QRDisplay, {
    dimensions: 78,
    transform: "rotate(45deg)",
    gradientDir: "145",
    gradient: "purpink",
    card: true,
    boxShadow: 7,
    p: 2
  }), _react.default.createElement(_designSystem.Absolute, {
    top: true,
    left: true,
    right: true,
    bottom: true
  }, _react.default.createElement(_designSystem.Image, {
    maxWidth: 28,
    circle: true,
    mx: 2,
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  }))))), _react.default.createElement(_designSystem.Flex, {
    column: true,
    gradient: "gray",
    minHeight: 300,
    p: 4
  }, props.image && _react.default.createElement(_designSystem.Box, {
    mt: -100
  }, _react.default.createElement(_designSystem.Flex, {
    width: 130,
    height: 130,
    circle: true,
    boxShadow: 0,
    overflow: "hidden"
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    width: "100%",
    src: (0, _utilities.GenerateImage)(props.image)
  })))), _react.default.createElement(_designSystem.Flex, {
    column: true,
    mt: 3
  }, _react.default.createElement(_designSystem.Heading, {
    md: true,
    heavy: true,
    noMargin: true,
    wordBreakAll: true
  }, props.name ? props.name : props.address), _react.default.createElement(_designSystem.Heading, {
    as: "h5",
    sm: true
  }, " ", props.job, " ", props.employer && _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, props.employer))), props.biography && _react.default.createElement(_designSystem.Box, {
    card: true,
    maxHeight: 200,
    overflow: "auto",
    my: 3
  }, _react.default.createElement(_designSystem.Paragraph, {
    xs: true
  }, props.biography))));
};

UserItemSmall.defaultProps = {};
UserItemSmall.propTypes = {
  name: _propTypes.default.string,
  role: _propTypes.default.string,
  employer: _propTypes.default.string,
  image: _propTypes.default.string
};
var _default = UserItemSmall;
exports.default = _default;