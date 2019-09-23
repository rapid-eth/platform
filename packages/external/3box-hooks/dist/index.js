"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "BoxProvider", {
  enumerable: true,
  get: function get() {
    return _Provider.default;
  }
});
Object.defineProperty(exports, "BoxComponent", {
  enumerable: true,
  get: function get() {
    return _Component.default;
  }
});
Object.defineProperty(exports, "BoxContext", {
  enumerable: true,
  get: function get() {
    return _withContext.default;
  }
});
Object.defineProperty(exports, "BoxWrapper", {
  enumerable: true,
  get: function get() {
    return _withContextPassed.default;
  }
});
Object.defineProperty(exports, "BoxApi", {
  enumerable: true,
  get: function get() {
    return _api.default;
  }
});
Object.defineProperty(exports, "BoxAPI", {
  enumerable: true,
  get: function get() {
    return _api.default;
  }
});

var _Provider = _interopRequireDefault(require("./Provider"));

var _Component = _interopRequireDefault(require("./Component"));

var _withContext = _interopRequireDefault(require("./withContext"));

var _withContextPassed = _interopRequireDefault(require("./withContextPassed"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }