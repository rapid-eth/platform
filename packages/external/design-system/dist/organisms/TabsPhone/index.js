"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Desktop = exports.Mobile = exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _dist = require("@horizin/design-system/dist");

var _reactHooksTabs = require("@horizin/react-hooks-tabs");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var FeaturesWithPhoneCenter = (_ref) => {
  var {
    title,
    content,
    image,
    images,
    list,
    styledTitle,
    styledContent
  } = _ref;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_dist.Flex, {
    center: true,
    column: true
  }, title && _react.default.isValidElement(title) ? title : _react.default.createElement(_dist.Heading, _extends({
    lg: true
  }, styledTitle), title), content && _react.default.isValidElement(content) ? content : _react.default.createElement(_dist.Paragraph, _extends({
    children: content
  }, styledContent))), _react.default.createElement(Desktop, {
    list: list,
    title: title,
    content: content
  }), "}");
};

FeaturesWithPhoneCenter.propTypes = {
  title: _propTypes.default.string,
  content: _propTypes.default.string,
  list: _propTypes.default.arrayOf(_propTypes.default.element),
  image: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  images: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element])
};
var _default = FeaturesWithPhoneCenter;
/* ============================= */
// Responsive Components

/* ============================= */

/** 
 * @function Mobile
 */

exports.default = _default;

var Mobile = (_ref2) => {
  var {
    title,
    content,
    image,
    list,
    styledTitle,
    styledContent
  } = _ref2;
  return _react.default.createElement(_react.default.Fragment, null, title && _react.default.isValidElement(title) ? title : _react.default.createElement(_dist.Heading, _extends({
    lg: true
  }, styledTitle), title), content && _react.default.isValidElement(content) ? content : _react.default.createElement(_dist.Paragraph, _extends({
    children: content
  }, styledContent)), image && _react.default.isValidElement(image) ? image : _react.default.createElement(_dist.Image, {
    src: image
  }), _react.default.createElement(_dist.Flex, {
    column: true
  }, list && Array.isArray(list) && list.map((item, index) => _react.default.createElement(Feature, {
    title: item.tab.title,
    content: item.tab.content,
    image: item.tab.image
  }))));
};
/** 
 * @function Desktop
 */


exports.Mobile = Mobile;

var Desktop = (_ref3) => {
  var {
    list,
    title,
    content,
    styledTitle,
    styledContent
  } = _ref3;
  // const statenes = useState(0);
  // const [index, setIndex] = statenes
  return _react.default.createElement(_reactHooksTabs.Tabs, {
    className: "tabs simple"
  }, _react.default.createElement(_dist.Flex, {
    alignCenter: true
  }, _react.default.createElement(_dist.Flex, {
    column: true,
    flex: 3,
    p: 20
  }), _react.default.createElement(_dist.Flex, {
    flex: 2,
    mx: 20
  }, _react.default.createElement(_dist.Smartphone, null, _react.default.createElement(_dist.Heading, null, "hello"))), _react.default.createElement(_dist.Flex, {
    column: true,
    flex: 3,
    p: 20
  })));
};

exports.Desktop = Desktop;

var Feature = (_ref4) => {
  var {
    styled
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["styled"]);

  return _react.default.createElement(_dist.Box, null, "test");
};