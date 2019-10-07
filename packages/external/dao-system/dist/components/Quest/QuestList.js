"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _dist = require("@kames/3box-hooks/dist");

var _QuestItem = _interopRequireDefault(require("./components/QuestItem"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * @function QuestListComponent
 * @description Manage a generic decentralized comment system.
 * @return {Array} A list of thread posts initialized in component. 
 */
var QuestListComponent = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [isDispatched, setDispatched] = (0, _react.useState)();
  var [list, setList] = (0, _react.useState)();
  /* -------------------- */

  /* Effects
  /* -------------------- */

  /**
   * @function GetEffect
   * @description Watch global state for thread post list.
   */

  var GetEffect = () => (0, _react.useEffect)(() => {
    if (!list && !isDispatched) {
      box.getSpace({
        address: props.address,
        space: props.space,
        key: props.key,
        access: props.access
      });
      setDispatched(true);
    }
  }, [box.spaces]);
  /**
   * @function SetListEffect
   */


  var SetListEffect = () => (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.spaces[props.space].public[props.key])) {
      setList((0, _idx.default)(box, _ => _.spaces[props.space].public[props.key]));
    }
  }, [(0, _idx.default)(box, _ => _.spaces[props.space].public[props.key])]);
  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */


  GetEffect();
  SetListEffect();
  /* -------------------- */

  /* List Component
  /* -------------------- */

  return list && Array.isArray(list) ? list.map(item => !_react.default.isValidElement(props.component) ? _react.default.createElement(props.component, _objectSpread({}, item)) : props.component) : null;
};
/**
 * @function QuestListStateful
 * @description Wrap component with 3Box global state(context).
 * @return {Array} Higher Order(ish) React Component
 */


var QuestListStateful = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(QuestListComponent, props));

QuestListComponent.defaultProps = {
  component: _QuestItem.default,
  key: 'quest'
};
QuestListStateful.defaultProps = {
  members: false,
  component: _QuestItem.default
};
var _default = QuestListStateful;
exports.default = _default;