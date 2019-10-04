"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _utilities = require("./utilities");

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _BoxThreadPostList = _interopRequireDefault(require("./BoxThreadPostList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxCommentList = (_ref) => {
  var {
    threadName,
    space,
    component,
    members,
    box,
    image,
    role,
    employer,
    variant,
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["threadName", "space", "component", "members", "box", "image", "role", "employer", "variant", "children", "styled"]);

  var actionHandler = values => {
    try {
      box.threads[threadName].instance.post(values);
    } catch (error) {}
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Form, {
    callback: actionHandler
  }, _react.default.createElement(_designSystem.Field, {
    name: "comment",
    inputAs: "textarea",
    minHeight: "200px",
    placeholder: "Comment"
  }), _react.default.createElement(_designSystem.Button, {
    variant: "dark",
    width: "100%"
  }, "Create Comment")), _react.default.createElement(_BoxThreadPostList.default, {
    threadName: threadName,
    component: component,
    space: space,
    members: members
  })));
};

BoxCommentList.defaultProps = {
  component: BoxComment
};

var BoxComment = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Heading, null, "Comment"));
};

BoxCommentList.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxCommentList, props));

exports.default = _default;