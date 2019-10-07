"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _dist = require("@kames/3box-hooks/dist");

var _Component = _interopRequireDefault(require("./Component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var StorageSelector = (_ref) => {
  var {
    box,
    type,
    selector
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "type", "selector"]);

  var [selection, setSelection] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    setSelection((0, _dotPropImmutableChain.default)(box).get("data.messaging.".concat(selector)).value());
  }, [(0, _dotPropImmutableChain.default)(box).get(selector).value()]);
  return _react.default.createElement(_Component.default, {
    selection: selection,
    component: props.component
  });
};

StorageSelector.defaultProps = {
  component: () => null
};
StorageSelector.propTypes = {
  component: _propTypes.default.func,
  type: _propTypes.default.string,
  selector: _propTypes.default.string
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(StorageSelector, props));

exports.default = _default;