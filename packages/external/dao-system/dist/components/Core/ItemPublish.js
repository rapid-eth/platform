"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _dist2 = require("@kames/3box-components/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function ItemPublish
 * @description Add comment to decentralized thread
 * @return {Function} React component.
 */
var ItemPublish = (_ref) => {
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
        object: 'item',
        version: '1.0.0.',
        data: values
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
    if (!dispatched && box.data.spaces[props.space]) {
      console.log(props, 'item publish');
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

  /* Comment Add
  /* Add comment to 3Box thread.
  /* type: 'comment_add'
  /* version: 1.0.0.
  /* -------------------- */

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "name",
    placeholder: props.placeholders.name,
    label: "Name"
  }), _react.default.createElement(_designSystem.Field, {
    name: "summary",
    label: "Summary",
    inputAs: "textarea",
    minHeight: 50,
    placeholder: props.placeholders.summary
  }), _react.default.createElement(_designSystem.Field, {
    name: "content",
    label: "Content",
    inputAs: "textarea",
    minHeight: 120,
    placeholder: props.placeholders.content
  }), _react.default.createElement(_designSystem.Field, {
    name: "category",
    label: "Category",
    placeholder: props.placeholders.category,
    placeholder: "ethereum"
  }), _react.default.createElement(_designSystem.Field, {
    name: "tags",
    label: "Tags",
    placeholder: props.placeholders.tags
  }), _react.default.createElement(_dist2.Access, {
    spaceAuto: true,
    threadAuto: true,
    loginAuto: true,
    level: "thread",
    space: props.space,
    threadName: props.threadName,
    optionsThread: props.optionsThread,
    componentLoading: _react.default.createElement(_designSystem.Button, {
      variant: "white",
      width: "100%"
    }, _react.default.createElement(_designSystem.Span, {
      mr: 2
    }, "Loading"), " ", _react.default.createElement(_designSystem.Loading, {
      type: "ring"
    }), " ")
  }, _react.default.createElement(_designSystem.Button, {
    type: "submit",
    variant: "green",
    width: "100%"
  }, props.label)));
};

ItemPublish.defaultProps = {
  label: 'Publish',
  placeholders: {
    name: 'Name',
    summary: 'Summary',
    content: 'Content',
    category: 'ethereum',
    tags: 'solidity, token'
  }
};
ItemPublish.propTypes = {
  alias: _propTypes.default.string
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(ItemPublish, props));

exports.default = _default;