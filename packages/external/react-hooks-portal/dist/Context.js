"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var Context = (0, _react.createContext)({
  isOpen: false,
  open: () => {},
  close: () => {},
  Content: () => null
});
var _default = Context;
exports.default = _default;