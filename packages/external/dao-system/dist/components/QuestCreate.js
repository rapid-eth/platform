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

var _BoxOpenSpace = _interopRequireDefault(require("@kames/3box-components/dist/BoxOpenSpace"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadPostCreate = (_ref) => {
  var {
    box,
    space,
    threadName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "space", "threadName"]);

  var {
    isLoggedIn
  } = box;
  var spaceLoaded = (0, _idx.default)(box, _ => _.spaces[space].instance);
  var threadLoaded = (0, _idx.default)(box, _ => _.threads[threadName].instance);

  var onSubmit = values => {
    box.threadPost({
      threadName,
      post: values
    });
  };

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "title",
    placeholder: "Title"
  }), _react.default.createElement(_designSystem.Field, {
    name: "tagline",
    placeholder: "Tagline"
  }), _react.default.createElement(_designSystem.Field, {
    name: "summary",
    placeholder: "Summary"
  }), _react.default.createElement(_designSystem.Field, {
    name: "image",
    placeholder: "Image"
  }), _react.default.createElement(_designSystem.Field, {
    name: "imageFeatured",
    placeholder: "Featured Image"
  }), _react.default.createElement(_designSystem.Field, {
    name: "content",
    as: "textarea",
    minHeight: 200,
    fullWidth: true,
    placeholder: "Content"
  }), _react.default.createElement(_designSystem.Box, null, !isLoggedIn && !spaceLoaded && !threadLoaded && _react.default.createElement(_dist2.BoxLoginButton, {
    styled: {
      sm: true
    },
    variant: "blue"
  }), isLoggedIn && !spaceLoaded && _react.default.createElement(_BoxOpenSpace.default, {
    space: "meshhub"
  }, _react.default.createElement(_designSystem.Button, {
    sm: true,
    variant: "blue"
  }, "Open ", space, " Space")), isLoggedIn && spaceLoaded && !threadLoaded && _react.default.createElement(_dist2.BoxThreadJoin, {
    threadName: threadName,
    space: space
  }, _react.default.createElement(_designSystem.Button, {
    sm: true,
    variant: "blue"
  }, "Join ", threadName, " Thread")), isLoggedIn && spaceLoaded && threadLoaded && _react.default.createElement(_designSystem.Button, {
    type: "submit",
    variant: "green"
  }, "Create Quest")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPostCreate, props));

exports.default = _default;