"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = (_ref) => {
  var {
    callback
  } = _ref,
      props = _objectWithoutProperties(_ref, ["callback"]);

  var onSubmit = data => alert('Submit');

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    type: "text",
    placeholder: "Address",
    name: "address"
  }), _react.default.createElement(_designSystem.Button, {
    xs: true,
    ml: "4px",
    p: "7px",
    fontSize: "10px",
    variant: "green",
    type: "submit"
  }, "ADD"));
};

exports.default = _default;