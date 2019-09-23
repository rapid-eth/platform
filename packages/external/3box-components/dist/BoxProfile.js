"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  return !box.profile ? null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(ProfileCard, {
    profile: box.profile
  }));
};

exports.default = _default;

var ProfileCard = (_ref2) => {
  var {
    profile
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["profile"]);

  return profile ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    variant: "avatar",
    src: (0, _utilities.GenerateImage)((0, _idx.default)(profile, _ => _.image)),
    width: 120
  })), _react.default.createElement(_designSystem.Box, {
    ml: 10
  }, _react.default.createElement(_designSystem.Heading, {
    md: true,
    heavy: true,
    noMargin: true
  }, (0, _idx.default)(profile, _ => _.name)), _react.default.createElement(_designSystem.Heading, {
    sm: true,
    thin: true,
    noMargin: true,
    level: 4
  }, (0, _idx.default)(profile, _ => _.job)))), _react.default.createElement(_designSystem.Flex, {
    column: true,
    mt: 10
  }, _react.default.createElement(_designSystem.Heading, {
    xs: true,
    thin: true,
    my: '7px',
    level: 5
  }, _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, "employer:"), " ", _react.default.createElement("br", null), " ", (0, _idx.default)(profile, _ => _.employer)), _react.default.createElement(_designSystem.Heading, {
    xs: true,
    thin: true,
    my: '7px',
    level: 5
  }, _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, "school:"), " ", _react.default.createElement("br", null), " ", (0, _idx.default)(profile, _ => _.school)), _react.default.createElement(_designSystem.Heading, {
    xs: true,
    thin: true,
    my: '7px',
    level: 5
  }, _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, "summary:"), " ", _react.default.createElement("br", null), " ", (0, _idx.default)(profile, _ => _.description)))) : null;
};

var VerifiedPanel = (_ref3) => {
  var {
    name,
    job,
    employer,
    role,
    description
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["name", "job", "employer", "role", "description"]);

  return _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Heading, null, "Verified"));
};

var ProfileInteract = (_ref4) => {
  var {
    name,
    job,
    employer,
    role,
    description
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["name", "job", "employer", "role", "description"]);

  return _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Box, {
    flex: 3,
    mr: 30
  }, _react.default.createElement(_designSystem.Heading, {
    lg: true,
    thin: true
  }, name), _react.default.createElement(_designSystem.Paragraph, {
    fontSize: [1],
    mb: [25]
  }, name, " | ", employer, " | ", role), _react.default.createElement(_designSystem.Span, {
    color: "white",
    heavy: true,
    fontSize: [2]
  }, " ", job), _react.default.createElement(_designSystem.Span, {
    color: "white",
    thin: true,
    fontSize: [2]
  }, " ", employer), _react.default.createElement("p", null, description)));
};