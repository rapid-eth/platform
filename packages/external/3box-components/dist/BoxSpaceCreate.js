"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadPostCreate = (_ref) => {
  var {
    box,
    threadName,
    space
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "threadName", "space"]);

  var onSubmit = values => {
    console.log(values, 'valuess');
    box.openSpace({
      space: space,
      options: {
        members: values.consentCallback,
        consentCallback: values.onSyncDone
      }
    });
  };

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    placeholder: "Space Name",
    name: "name"
  }), _react.default.createElement(_designSystem.Field, {
    placeholder: "Open Trigger",
    name: "consentCallback"
  }), _react.default.createElement(_designSystem.Field, {
    placeholder: "Sync Complete Trigger",
    name: "consentCallback"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    sm: true,
    fullWidth: true,
    variant: "green"
  }, "Create Thread"));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPostCreate, props));

exports.default = _default;