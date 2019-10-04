"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _dist2 = require("@kames/3box-components/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QuestCatalogAdd = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [dispatched, setDispatch] = (0, _react.useState)();
  var [list, setList] = (0, _react.useState)();
  /**
   * @function GetThreadLocal
   */

  (0, _react.useEffect)(() => {
    if (!list && (0, _idx.default)(box, _ => _.threads[props.threadName].posts)) {
      setList((0, _idx.default)(box, _ => _.threads[props.threadName].posts));
    }
  }, [list, box.threads]);
  /**
   * @function GetThreadDispatch
   */

  (0, _react.useEffect)(() => {
    if (!dispatched) {
      box.getThread({
        space: props.space,
        threadName: props.threadName,
        firstModerator: props.address,
        members: props.members
      });
      setDispatch(true);
    }
  }, [box.threads, dispatched]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Flex, {
    column: true
  }, list && Array.isArray(list) && list.map(item => _react.default.createElement(QuestFeaturedItem, _extends({
    box: box,
    alias: item.message.alias,
    threadName: props.threadName
  }, item)))));
};

QuestCatalogAdd.defaultProps = {
  space: 'eth',
  threadName: 'quest_catalog',
  members: true
};

var QuestFeaturedItem = (_ref2) => {
  var {
    box,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["box", "styled"]);

  return _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    between: true,
    card: true,
    flex: 1,
    m: 2,
    width: "100%"
  }, _react.default.createElement(QuestSelector, {
    box: box,
    alias: props.alias,
    space: "eth",
    selector: "quest"
  }), _react.default.createElement(_designSystem.Modal, {
    content: _react.default.createElement(FeaturedQuestDetails, {
      threadName: props.threadName,
      postId: props.postId
    }),
    position: "fullScreen",
    variant: "fullScreen",
    styled: {
      position: 'fullScreen',
      m: 80
    }
  }, _react.default.createElement(_designSystem.Span, {
    justifySelf: "flex-end",
    xxs: true,
    tag: "white"
  }, "View")));
};

var QuestSelector = (_ref3) => {
  var {
    box,
    styled
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["box", "styled"]);

  var [item, setItem] = (0, _react.useState)();
  /**
   * @function Selector
   */

  (0, _react.useEffect)(() => {
    if (!item && (0, _idx.default)(box, _ => _.spaces[props.space].public[props.selector])) {
      var list = box.spaces[props.space].public[props.selector];

      var _item = list.filter(ITEM => ITEM.alias === props.alias).map(i => i);

      console.log(_item, 'item selection');
      if (_item.length > 0) setItem(_item[0].properties);
    }
  }, [item, box.spaces]);
  return !item ? 'No Item' : _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    maxWidth: 45,
    src: item.image
  })), _react.default.createElement(_designSystem.Box, {
    ml: 2,
    textAlign: "left"
  }, _react.default.createElement(_designSystem.Heading, {
    noMargin: true,
    sm: true
  }, item.name), _react.default.createElement(_designSystem.Heading, {
    noMargin: true,
    xs: true
  }, item.tagline)));
};

var FeaturedQuestDetails = (_ref4) => {
  var {
    styled
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["styled"]);

  return _react.default.createElement(_designSystem.Flex, {
    height: "100%",
    width: "100%",
    bg: "white"
  }, _react.default.createElement(_designSystem.Flex, {
    gradient: "gray",
    flex: 1
  }, _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_dist2.BoxThreadPostDelete, {
    threadName: props.threadName,
    postId: props.postId
  }))), _react.default.createElement(_designSystem.Flex, {
    flex: 4
  }, _react.default.createElement(_designSystem.Heading, null, "Information")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(QuestCatalogAdd, props));

exports.default = _default;