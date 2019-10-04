"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _q = require("q");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxOpenSpace = (_ref) => {
  var {
    box,
    selector,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "selector", "children"]);

  var [loading, setLoading] = (0, _react.useState)(false);
  var [list, setList] = (0, _react.useState)();
  var [selectors, setSelectors] = (0, _react.useState)();
  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   * @todo Add dot notation to access objects.
   */

  (0, _react.useEffect)(() => {
    if (selector) {
      var [space, access, key] = selector.split('.');
      setSelectors({
        space,
        access,
        key
      });
    }
  }, [selector]);
  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   */

  (0, _react.useEffect)(() => {
    var read;

    if (props.space) {
      read = (0, _idx.default)(box, _ => _.spaces[props.space][props.access][props.id]);
      setList(read);
    } else {
      read = (0, _idx.default)(box, _ => _[props.access][props.id]);
      setList(read);
    }
  }, [box.public, box.spaces]);
  return list && list.length > 0 ? props.isRouter ? _react.default.createElement(_designSystem.Router, null, list.map(item => _react.default.createElement(props.component, _objectSpread({}, item.properties, {
    children,
    props
  })))) : list.map(item => _react.default.createElement(props.component, _objectSpread({}, item, {}, item.properties, {
    children,
    props
  }))) : null;
};

BoxOpenSpace.defaultProps = {
  component: () => _react.default.createElement("div", null, "hello world"),
  threadName: undefined,
  labelLoading: 'Loading Space...',
  isRouter: false
};
BoxOpenSpace.propTypes = {
  space: _propTypes.default.string.isRequired,
  isRouter: _propTypes.default.boolean
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxOpenSpace, props));

exports.default = _default;