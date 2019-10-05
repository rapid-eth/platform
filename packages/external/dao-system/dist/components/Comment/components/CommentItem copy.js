"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _datetime = _interopRequireDefault(require("luxon/src/datetime.js"));

var _CommentList = _interopRequireDefault(require("../CommentList"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CommentItem = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  var [timeFormatted, setTimeFormated] = (0, _react.useState)();
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
  }, [props]); // Run Effects


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
    content: _react.default.createElement(CommentThreadPanel, {
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

var CommentThreadPanel = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Box, {
    p: 4,
    minWidth: 380,
    maxWidth: 380
  }, _react.default.createElement(Heading, null, "Comment Thread"), _react.default.createElement(_CommentList.default, {
    component: CommentItemMinimal,
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
  }, _react.default.createElement(CommentAdd, {
    threadName: props.threadName,
    space: props.space,
    firstModerator: props.firstModerator
  })));
};

var _default = CommentItem;
exports.default = _default;