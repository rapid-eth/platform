"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _datetime = _interopRequireDefault(require("luxon/src/datetime.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function CommentItemMinimal
 * @description Manage a generic decentralized comment system.
 * @return {Function} A comment component
 */
var CommentItemMinimal = (_ref) => {
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
      var time = _datetime.default;
      time.fromMillis(props.timestamp * 1000).toLocaleString({
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

  /* Comment Minimal
  /* A minimal comment display component.
  /* type: 'comment_minimal'
  /* version: 1.0.0.
  /* -------------------- */

  return _react.default.createElement(_designSystem.Flex, {
    flex: 1,
    column: true
  }, _react.default.createElement(_designSystem.Flex, {
    flex: 1
  }, _react.default.createElement(_dist.BoxProfileRetrieve, {
    address: props.author
  })), _react.default.createElement(Span, {
    xxs: true,
    tag: "white"
  }, timeFormatted, " "), _react.default.createElement(_designSystem.HorizontalRule, null), _react.default.createElement(_designSystem.Box, {
    my: 3
  }, props.message && props.message.data));
};

CommentItemMinimal.defaultProps = {
  styled: {}
};
CommentItemMinimal.propTypes = {
  box: _propTypes.default.object
};
var _default = CommentItemMinimal;
exports.default = _default;