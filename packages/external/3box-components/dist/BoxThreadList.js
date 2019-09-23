"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _BoxThreadJoin = _interopRequireDefault(require("./BoxThreadJoin"));

var _BoxThreadPostList = _interopRequireDefault(require("./BoxThreadPostList"));

var _BoxThreadPostCreate = _interopRequireDefault(require("./BoxThreadPostCreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var _default = (_ref) => {
  var {
    box,
    thread,
    space,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "thread", "space", "children", "styled"]);

  return !(0, _idx.default)(box, _ => box.spaces[space].threads) ? null : _react.default.createElement(_designSystem.Box, _extends({}, styled, {
    width: 1
  }), box.spaces[space].threads && Array.isArray(box.spaces[space].threads) && box.spaces[space].threads.map((thread, key) => _react.default.createElement(ThreadItem, _extends({
    box: box
  }, thread, {
    threadName: thread.name,
    threadAddress: thread.address,
    space: space
  }))));
};

exports.default = _default;

var ThreadItem = (_ref2) => {
  var {
    box,
    address,
    firstModerator,
    members,
    space,
    name,
    threadAddress,
    threadName,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["box", "address", "firstModerator", "members", "space", "name", "threadAddress", "threadName", "styled"]);

  return _react.default.createElement(_designSystem.Box, {
    card: true
  }, _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Box, {
    flex: 6,
    p: 10
  }, _react.default.createElement(_designSystem.Label, {
    styled: {
      fontSize: 3
    },
    flexDirection: "row",
    noMargin: true,
    label: 'space'
  }, space), _react.default.createElement(_designSystem.Label, {
    styled: {
      fontSize: 4
    },
    noMargin: true,
    label: 'name'
  }, name)), _react.default.createElement(_designSystem.Flex, {
    column: true,
    flex: 3,
    p: 10
  }, _react.default.createElement(_BoxThreadJoin.default, {
    box: box,
    threadAddress: threadAddress,
    threadName: threadName,
    space: "meshhub"
  }))), _react.default.createElement(_BoxThreadPostCreate.default, {
    threadName: threadName
  }), _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_BoxThreadPostList.default, {
    threadName: threadName
  })));
};