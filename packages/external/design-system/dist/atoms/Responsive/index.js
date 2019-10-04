"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsive = require("react-responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global Dependencies --- */
var Desktop = (_ref) => {
  var {
    children
  } = _ref;
  var isDesktop = (0, _reactResponsive.useMediaQuery)({
    minWidth: 1020
  });
  return isDesktop ? children : null;
};

var Tablet = (_ref2) => {
  var {
    children
  } = _ref2;
  var isTablet = (0, _reactResponsive.useMediaQuery)({
    minWidth: 768,
    maxWidth: 1020
  });
  return isTablet ? children : null;
};

var Mobile = (_ref3) => {
  var {
    children
  } = _ref3;
  var isMobile = (0, _reactResponsive.useMediaQuery)({
    maxWidth: 767
  });
  return isMobile ? children : null;
};

var Default = (_ref4) => {
  var {
    children
  } = _ref4;
  var isNotMobile = (0, _reactResponsive.useMediaQuery)({
    minWidth: 768
  });
  return isNotMobile ? children : null;
};

var Example = (_ref5) => {
  var {
    children,
    mobile,
    tablet,
    desktop,
    defaults
  } = _ref5;
  return _react.default.createElement("div", null, desktop && _react.default.createElement(Desktop, null, desktop), tablet && _react.default.createElement(Tablet, null, tablet), mobile && _react.default.createElement(Mobile, null, mobile), _react.default.createElement(Default, null, children));
};

var _default = Example;
exports.default = _default;