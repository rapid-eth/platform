"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _QuestCatalogAdd = _interopRequireDefault(require("../QuestCatalogAdd"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- CMS Global Configs --- */
var ROOT = process.env.REACT_APP_DEFAULT_ROOT;
var SPACE = process.env.REACT_APP_DEFAULT_SPACE;
/**
 * @function QuestItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */

var QuestItem = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  /* -------------------- */

  /* Effects
  /* -------------------- */

  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */

  /* -------------------- */

  /* Quest Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return _react.default.createElement(_designSystem.Flex, {
    column: true,
    p: 0
  }, _react.default.createElement(_designSystem.Flex, {
    between: true,
    center: true,
    column: true,
    card: true,
    borderNone: true,
    boxShadow: "sunset",
    flex: 1,
    textAlign: "center",
    p: 0,
    zIndex: 20
  }, _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true,
    card: true,
    circle: true,
    width: 180,
    mt: -20,
    boxShadow: "sunset"
  }, _react.default.createElement(_designSystem.Image, {
    bg: "white",
    maxWidth: 62,
    src: props.properties.image
  })), _react.default.createElement(_designSystem.Box, {
    p: 3
  }, _react.default.createElement(_designSystem.Heading, {
    md: true,
    fontWeight: 300
  }, props.properties.name), _react.default.createElement(_designSystem.Paragraph, {
    fontSize: [1]
  }, props.properties.tagline), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    evenly: true
  }, _react.default.createElement(_designSystem.Panel, {
    content: _react.default.createElement(AddQuestToSpace, {
      alias: props.alias
    }),
    label: "Start Quest"
  }, _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "green"
  }, "Start Quest")), _react.default.createElement(_designSystem.Link, {
    to: "/quest/".concat(props.alias)
  }, _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, "Full Quest")))), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    alignSelf: "flex-end",
    between: true,
    gradient: "gray",
    width: "100%",
    p: 3,
    mt: 'auto'
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    maxWidth: 28,
    src: "https://www.flaticon.com/premium-icon/icons/svg/1329/1329979.svg"
  }), _react.default.createElement(_designSystem.Span, {
    mx: 2
  }, "Comment")), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, {
    mx: 2
  }, "Like"), _react.default.createElement(_designSystem.Image, {
    maxWidth: 15,
    src: "https://www.flaticon.com/premium-icon/icons/svg/232/232456.svg"
  })))));
};

QuestItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
};
QuestItem.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};

var AddQuestToSpace = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Box, {
    width: 350,
    p: 4
  }, _react.default.createElement(_designSystem.Heading, {
    md: true,
    heavy: true
  }, "Quest Journal"), _react.default.createElement(_designSystem.Paragraph, {
    sm: true
  }, _react.default.createElement("strong", null, "Save quests to personal journal."), _react.default.createElement("br", null), " Keep track of your journey."), _react.default.createElement(_dist.BoxAccess, {
    spaceAuto: true,
    threadAuto: true,
    level: "thread",
    space: SPACE,
    threadName: "quest_catalog",
    optionsThread: {
      members: true
    }
  }, _react.default.createElement(_QuestCatalogAdd.default, {
    alias: props.alias
  })));
};

var _default = QuestItem;
exports.default = _default;