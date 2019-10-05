"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _datetime = _interopRequireDefault(require("luxon/src/datetime.js"));

var _CommentPublish = _interopRequireDefault(require("../CommentPublish"));

var _CommentList = _interopRequireDefault(require("../CommentList"));

var _CommentThreadPanel = _interopRequireDefault(require("./CommentThreadPanel"));

var _CommentItemMinimal = _interopRequireDefault(require("./CommentItemMinimal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function CommentItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
var CommentItem = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  var [timeFormatted, setTimeFormated] = (0, _react.useState)();
  /* -------------------- */

  /* Effects
  /* -------------------- */

  /**
   * @function GetThreadLocal
   * @description Watch global state for thread post list.
   */

  var CalculateTime = () => (0, _react.useEffect)(() => {
    if (props.timestamp) {
      var time = _datetime.default.fromMillis(props.timestamp * 1000).toLocaleString({
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });

      setTimeFormated(time);
    }
  }, [props]);
  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */


  CalculateTime();
  /* -------------------- */

  /* Comment Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */

  return _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true,
    card: true,
    flex: 1,
    m: 2,
    width: "100%"
  }, _react.default.createElement(_designSystem.Flex, {
    column: true,
    width: "100%"
  }, _react.default.createElement(_designSystem.Box, {
    cardHeader: true
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true
  }, _react.default.createElement(_dist.BoxProfileRetrieve, {
    address: props.author
  }), _react.default.createElement(_dist.BoxThreadPostDelete, {
    threadName: props.threadName,
    postId: props.postId
  }))), _react.default.createElement(_designSystem.Box, {
    my: 3
  }, _react.default.createElement(_designSystem.Paragraph, null, props.message && props.message.data)), _react.default.createElement(_designSystem.Flex, {
    flex: 1,
    gradient: "gray",
    p: 3,
    mx: -15,
    mb: -15
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true,
    flex: 1
  }, _react.default.createElement(_designSystem.Box, null, timeFormatted), _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Panel, {
    content: _react.default.createElement(_CommentThreadPanel.default, {
      space: 'eth',
      threadName: props.postId,
      firstModerator: props.firstModerator,
      postId: props.postId
    })
  }, _react.default.createElement(_designSystem.Button, {
    xxs: true,
    variant: "white"
  }, "Comment Thread")))))));
};

var _default = CommentItem;
exports.default = _default;