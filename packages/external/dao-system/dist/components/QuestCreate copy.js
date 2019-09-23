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
    threadName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "threadName"]);

  var onSubmit = values => {
    console.log(values, 'valuess');
    box.threadPost({
      threadName,
      post: values
    });
  };

  return !(0, _idx.default)(box, _ => _.threads[threadName].instance) ? _react.default.createElement(_designSystem.Button, null, _react.default.createElement(_designSystem.Span, null, "Join Thread")) : _react.default.createElement(_designSystem.Box, {
    card: true,
    m: 10
  }, _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "title",
    placeholder: "Title"
  }), _react.default.createElement(_designSystem.Field, {
    name: "tagline",
    placeholder: "Tagline"
  }), _react.default.createElement(_designSystem.Field, {
    name: "summary",
    placeholder: "Summary"
  }), _react.default.createElement(_designSystem.Field, {
    name: "image",
    placeholder: "Image"
  }), _react.default.createElement(_designSystem.Field, {
    name: "imageFeatured",
    placeholder: "Featured Image"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    sm: true,
    variant: "green"
  }, "Create Post")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPostCreate, props));

exports.default = _default;