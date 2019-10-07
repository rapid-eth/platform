"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _QuestCompleteForm = _interopRequireDefault(require("./QuestCompleteForm"));

var _QuestCompleteFormTransaction = _interopRequireDefault(require("./QuestCompleteFormTransaction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QuestCatalogItem = (_ref) => {
  var {
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styled"]);

  return !props.properties ? 'no props' : _react.default.createElement(_designSystem.Flex, _extends({
    between: true,
    card: true,
    width: "100%"
  }, styled, props), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    flex: 3
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    maxWidth: 45,
    src: props.properties.image
  })), _react.default.createElement(_designSystem.Box, {
    ml: 2,
    textAlign: "left"
  }, _react.default.createElement(_designSystem.Heading, {
    noMargin: true,
    sm: true,
    heavy: true
  }, props.properties.name), _react.default.createElement(_designSystem.Heading, {
    noMargin: true,
    xs: true
  }, props.properties.tagline))), console.log(props, 'qciisiqi'), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    flex: 1,
    justifyContent: "flex-end"
  }, _react.default.createElement(_designSystem.Link, {
    to: "/quest/".concat(props.alias)
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true,
    justifySelf: "flex-end",
    xxs: true,
    tag: "white"
  }, "View")), _react.default.createElement(_designSystem.Modal, {
    content: _react.default.createElement(FeaturedQuestDetails, _extends({
      threadName: props.threadName,
      postId: props.postId
    }, props)),
    position: "fullScreen",
    variant: "fullScreen",
    styled: {
      position: 'fullScreen',
      m: 80
    }
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true,
    justifySelf: "flex-end",
    xxs: true,
    mx: 3,
    tag: "white"
  }, "Manage")), props.validation && _react.default.createElement(FormSelection, props)));
};

var FormSelection = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Box, null, props.validation.type === 'balance' ? _react.default.createElement(_designSystem.Modal, {
    content: _react.default.createElement(_QuestCompleteForm.default, {
      threadName: props.threadName,
      postId: props.postId,
      lambo: props.validation.lambdaURL
    }),
    position: "default",
    variant: "default",
    styled: {
      position: 'default',
      m: 80
    }
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true,
    xxs: true,
    justifySelf: "flex-end",
    mx: 2,
    tag: "red"
  }, "Submit Balance")) : _react.default.createElement(_designSystem.Modal, {
    content: _react.default.createElement(_QuestCompleteFormTransaction.default, {
      threadName: props.threadName,
      postId: props.postId,
      lambo: props.validation.lambdaURL
    }),
    position: "default",
    variant: "default",
    styled: {
      position: 'default',
      m: 80
    }
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true,
    xxs: true,
    justifySelf: "flex-end",
    mx: 2,
    tag: "red"
  }, "Submit Transaction")));
};

var FeaturedQuestDetails = (_ref3) => {
  var {
    styled
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["styled"]);

  return _react.default.createElement(_designSystem.Flex, {
    height: "100%",
    width: "100%",
    bg: "white"
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    gradient: "gray",
    flex: 1
  }, _react.default.createElement(_designSystem.Box, {
    p: 3
  }, _react.default.createElement(_dist.BoxAccess, {
    spaceAuto: true,
    threadAuto: true,
    level: "thread",
    space: "eth",
    threadName: props.threadName
  }, _react.default.createElement(_dist.BoxThreadPostDelete, {
    threadName: props.threadName,
    postId: props.postId
  })))), _react.default.createElement(_designSystem.Flex, {
    flex: 4,
    p: 3
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    flex: 3
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    maxWidth: 45,
    src: props.properties.image
  })), _react.default.createElement(_designSystem.Box, {
    ml: 2,
    textAlign: "left"
  }, _react.default.createElement(_designSystem.Heading, {
    noMargin: true,
    sm: true,
    heavy: true
  }, props.properties.name), _react.default.createElement(_designSystem.Heading, {
    noMargin: true,
    xs: true
  }, props.properties.tagline)))));
};

var _default = QuestCatalogItem;
exports.default = _default;