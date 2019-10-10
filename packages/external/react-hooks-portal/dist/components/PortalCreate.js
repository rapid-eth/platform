"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactDom = require("react-dom");

var _PortalContext = _interopRequireDefault(require("../PortalContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Portal = (_ref) => {
  var {
    id,
    children
  } = _ref;
  var target = (0, _PortalContext.default)(id);
  return (0, _reactDom.createPortal)(children, target);
};

var _default = Portal;
exports.default = _default;