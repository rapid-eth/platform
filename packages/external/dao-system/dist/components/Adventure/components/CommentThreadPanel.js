"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _datetime = _interopRequireDefault(require("luxon/src/datetime.js"));

var _CommentPublish = _interopRequireDefault(require("../CommentPublish"));

var _CommentList = _interopRequireDefault(require("../CommentList"));

var _CommentItemMinimal = _interopRequireDefault(require("./CommentItemMinimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function CommentThreadPanel
 * @description Manage a decentralized comment thread in panel.
 * @return {Function} A comment component
 */
var CommentThreadPanel = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  /* -------------------- */

  /* Comment Thread Panel
  /* A comment thread panel to display nested comments.
  /* type: 'comment_minimal'
  /* version: 1.0.0.
  /* -------------------- */
  return _react.default.createElement(_designSystem.Box, {
    p: 4,
    minWidth: 380,
    maxWidth: 380
  }, _react.default.createElement(_designSystem.Heading, null, "Comment Thread"), _react.default.createElement(_CommentList.default, {
    component: _CommentItemMinimal.default,
    space: props.space,
    threadName: props.threadName,
    firstModerator: props.firstModerator
  }), _react.default.createElement(_dist.BoxAccess, {
    spaceAuto: true,
    threadAuto: true,
    level: "thread",
    space: props.space,
    threadName: props.threadName,
    optionsThread: {
      members: false,
      firstModerator: props.firstModerator
    }
  }, _react.default.createElement(_CommentPublish.default, {
    threadName: props.threadName,
    space: props.space,
    firstModerator: props.firstModerator
  })));
};

CommentThreadPanel.defaultProps = {
  styled: {}
};
CommentThreadPanel.propTypes = {
  box: _propTypes.default.object
};
var _default = CommentThreadPanel;
exports.default = _default;