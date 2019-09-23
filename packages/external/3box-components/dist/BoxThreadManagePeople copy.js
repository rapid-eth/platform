"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadManagePeople = (_ref) => {
  var {
    box,
    threadAddress,
    threadName,
    styled
  } = _ref,
    props = _objectWithoutProperties(_ref, ["box", "threadAddress", "threadName", "styled"]);

  return !box.instance ? null : _react.default.createElement(Box, {
    card: true
  }, _react.default.createElement(MemberAdd, {
    threadName: threadName,
    threadAddress: threadAddress
  }), _react.default.createElement(ModeratorAdd, {
    threadName: threadName,
    threadAddress: threadAddress
  }));
};

var MemberAdd = (_ref2) => {
  var {
    threadAddress,
    threadName,
    styled
  } = _ref2,
    props = _objectWithoutProperties(_ref2, ["threadAddress", "threadName", "styled"]);

  return _react.default.createElement(Box, null, _react.default.createElement(Heading, null, "Add Member"), _react.default.createElement(BoxMemberAdd, {
    threadName: threadName,
    threadAddress: threadAddress
  }));
};

var ModeratorAdd = (_ref3) => {
  var {
    threadAddress,
    threadName,
    styled
  } = _ref3,
    props = _objectWithoutProperties(_ref3, ["threadAddress", "threadName", "styled"]);

  return _react.default.createElement(Box, null, _react.default.createElement(Heading, null, "Add Moderator"), _react.default.createElement(BoxModeratorAdd, {
    threadName: threadName,
    threadAddress: threadAddress
  }));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadManagePeople, props));

exports.default = _default;