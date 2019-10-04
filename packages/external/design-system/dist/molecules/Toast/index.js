"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHooksPortal = require("@horizin/react-hooks-portal");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global Dependencies --- */
var _default = (_ref) => {
  var {
    content,
    id,
    label,
    styled,
    closeTimer,
    closeOnClick,
    children
  } = _ref;
  return _react.default.createElement(_reactHooksPortal.PortalContext, null, portal => _react.default.createElement("span", {
    onClick: () => portal.openToast({
      content,
      closeTimer,
      closeOnClick,
      label,
      id,
      styled
    })
  }, children));
};

exports.default = _default;