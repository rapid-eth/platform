"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _dist = require("@kames/3box-hooks/dist");

var _CommentItem = _interopRequireDefault(require("./components/CommentItem"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function CommentListComponent
 * @description Manage a generic decentralized comment system.
 * @return {Array} A list of thread posts initialized in component. 
 */
var CommentListComponent = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [dispatched, setDispatch] = (0, _react.useState)();
  var [list, setList] = (0, _react.useState)();
  /* -------------------- */

  /* Effects
  /* -------------------- */

  /**
   * @function GetThreadLocalEffect
   * @description Watch global state for thread post list.
   */

  var GetThreadLocalEffect = () => (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.threads[props.threadName].posts)) {
      setList((0, _idx.default)(box, _ => _.threads[props.threadName].posts));
    }
  }, [(0, _idx.default)(box, _ => _.threads[props.threadName].posts)]);
  /**
   * @function GetThreadDispatchEffect
   */


  var GetThreadDispatchEffect = () => (0, _react.useEffect)(() => {
    if (!dispatched) {
      box.getThread({
        space: props.space,
        threadName: props.threadName,
        firstModerator: props.firstModerator,
        members: false,
        options: {
          firstModerator: props.firstModerator,
          members: false
        }
      });
      setDispatch(true);
    }
  }, [box.threads, dispatched]);
  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */


  GetThreadLocalEffect();
  GetThreadDispatchEffect();
  /* -------------------- */

  /* List Component
  /* -------------------- */

  return list && Array.isArray(list) ? list.map(item => !_react.default.isValidElement(props.component) ? _react.default.createElement(props.component, _objectSpread({
    box,
    alias: item.message.data,
    threadName: props.threadName,
    space: props.space
  }, item)) : props.component) : null;
};
/**
 * @function CommentListStateful
 * @description Wrap component with 3Box global state(context).
 * @return {Array} Higher Order(ish) React Component
 */


var CommentListStateful = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(CommentListComponent, props));

CommentListComponent.defaultProps = {
  component: _CommentItem.default
};
CommentListStateful.defaultProps = {
  members: false,
  component: _CommentItem.default
};
var _default = CommentListStateful;
exports.default = _default;