"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _dist = require("@kames/3box-hooks/dist");

var _designSystem = require("@horizin/design-system");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AdventurePublish = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [dispatched, setDispatch] = (0, _react.useState)();
  /* -------------------- */

  /* Actions
  /* -------------------- */

  var onSubmit = values => {
    box.threadPost({
      threadName: props.threadName,
      post: {
        object: 'comment',
        version: '1.0.0.',
        type: 'quest',
        data: values.comment
      }
    });
  };
  /* -------------------- */

  /* Effects
  /* -------------------- */

  /**
   * @function JoinThreadEffect
   */


  var JoinThreadEffect = () => (0, _react.useEffect)(() => {
    if (!dispatched) {
      box.joinThread({
        space: props.space,
        threadName: props.threadName,
        options: props.options
      });
      setDispatch(true);
    }
  }, [box.threads, dispatched]);
  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */


  JoinThreadEffect();
  /* -------------------- */

  /* Adventure Add
  /* Aadd comment to 3Box thread.
  /* type: 'comment_add'
  /* version: 1.0.0.
  /* -------------------- */

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "comment",
    inputAs: "textarea",
    minHeight: 120,
    placeholder: "Adventure"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    variant: "green",
    width: "100%"
  }, "Create Adventure"));
};

AdventurePublish.defaultProps = {
  threadName: 'quest_catalog'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(AdventurePublish, props));

exports.default = _default;