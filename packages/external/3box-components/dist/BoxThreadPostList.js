"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _dist = require("@kames/3box-hooks/dist");

var _BoxThreadPost = _interopRequireDefault(require("./BoxThreadPost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxThreadPosts = (_ref) => {
  var {
    box,
    component,
    variant,
    threadAddress,
    threadName,
    space,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "component", "variant", "threadAddress", "threadName", "space", "children"]);

  var Component = component ? component : _BoxThreadPost.default;
  return !(0, _idx.default)(box, _ => _.threads[threadName].posts) ? null : _react.default.createElement(_react.default.Fragment, null, box.threads[threadName].posts && Array.isArray(box.threads[threadName].posts) && box.threads[threadName].posts.map(post => _react.default.createElement(Component, _extends({
    threadName: threadName
  }, post))));
};

BoxThreadPosts.defaultProps = {
  variant: 'green'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPosts, props));

exports.default = _default;