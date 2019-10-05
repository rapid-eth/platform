"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var QuestCatalogAdd = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var onSubmit = values => {
    box.threadPost({
      threadName: props.threadName,
      firstModerator: box.address,
      members: true,
      post: {
        object: 'reference',
        version: '1.0.0.',
        type: 'quest',
        data: values.alias,
        meta: {
          notes: values.notes,
          friend: values.friend
        }
      }
    });
  };

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "alias",
    defaultValue: props.alias,
    placeholder: "alias"
  }), _react.default.createElement(_designSystem.Field, {
    name: "notes",
    inputAs: "textarea",
    minHeight: 120,
    placeholder: "Notes"
  }), _react.default.createElement(_designSystem.Field, {
    name: "friend",
    placeholder: "Invite Friend"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    variant: "green",
    width: "100%"
  }, "Start Quest"));
};

QuestCatalogAdd.defaultProps = {
  threadName: 'quest_catalog'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(QuestCatalogAdd, props));

exports.default = _default;