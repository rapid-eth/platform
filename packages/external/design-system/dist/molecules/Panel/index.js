"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _dist = require("@horizin/react-context-portal/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global Dependencies --- */
var _default = (_ref) => {
  var {
    content,
    children,
    position
  } = _ref;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dist.PortalProvider, null, _react.default.createElement("span", {
    onClick: () => _dist.PortalApi.open(content, 'panel', position)
  }, children)));
};

exports.default = _default;