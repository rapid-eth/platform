"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _default = (_ref) => {
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
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "address", "firstModerator", "members", "space", "name", "threadAddress", "threadName", "styled"]);

  return !box.instance ? null : _react.default.createElement(Box, {
    card: true
  }, _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(Box, {
    flex: 6,
    p: 10
  }, _react.default.createElement(Label, {
    styled: {
      fontSize: 4
    },
    noMargin: true,
    label: 'name'
  }, name), _react.default.createElement(Label, {
    styled: {
      fontSize: 3
    },
    noMargin: true,
    label: 'space'
  }, space), _react.default.createElement(_designSystem.Flex, {
    my: 10
  }, _react.default.createElement(Modal, {
    content: _react.default.createElement(PostList, null)
  }, _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "green"
  }, "View Posts")), _react.default.createElement(Modal, {
    content: _react.default.createElement(PostList, null)
  }, _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "orange",
    mx: [10]
  }, "Archive Thread")), _react.default.createElement(Modal, {
    content: _react.default.createElement("div", null, "heelo")
  }, _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "blue",
    mx: [10]
  }, "Send Invitation"))), _react.default.createElement(Label, {
    label: 'moderator'
  }, firstModerator), _react.default.createElement(Label, {
    label: 'private'
  }, members ? 'Yes' : 'No'), _react.default.createElement(Label, {
    label: 'address',
    fontSize: 0,
    palette: ['gray', 2]
  }, address)), _react.default.createElement(_designSystem.Flex, {
    column: true,
    flex: 3,
    p: 10
  }, _react.default.createElement(BoxThreadJoin, {
    box: box,
    threadAddress: threadAddress,
    threadName: threadName,
    space: "meshhub"
  }), _react.default.createElement(Heading, {
    underline: true
  }, "Add Member"), _react.default.createElement(BoxMemberAdd, null), _react.default.createElement(Heading, {
    underline: true
  }, "Add Moderator"), _react.default.createElement(BoxModeratorAdd, null))), _react.default.createElement(Box, null, _react.default.createElement(Heading, {
    borderRoundedTop: true,
    bg: "gray",
    p: 15,
    noMargin: true,
    sm: true,
    heavy: true
  }, "Add Post to Thread"), _react.default.createElement(BoxThreadPostCreate, {
    threadName: threadName
  })));
};

exports.default = _default;

var PostList = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(Box, null, _react.default.createElement(Heading, null, "Posts"));
};