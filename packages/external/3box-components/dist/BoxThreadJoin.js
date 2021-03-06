"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxOpenSpace = (_ref) => {
  var {
    box,
    auto,
    styled,
    styledLoading,
    componentLoading,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "auto", "styled", "styledLoading", "componentLoading", "children"]);

  var [loading, setLoading] = (0, _react.useState)(false);
  console.log(props, 'join thread props');
  /**
   * @function ComponentActionHandler
   * @description Handle component click event. 
   */

  var actionHandler = () => {
    box.joinThread({
      threadAddress: props.threadAddress,
      threadName: props.threadName,
      space: props.space,
      options: props.options
    });
    setLoading(true);
  };
  /**
   * @function AutoEffect
   * @description Automatically connect to space without requiring use input.
   */


  (0, _react.useEffect)(() => {
    if (auto) {
      box.joinThread({
        threadAddress: props.threadAddress,
        threadName: props.threadName,
        space: props.space,
        options: props.options
      });
      setLoading(true);
    }
  }, [auto]);
  return !auto ? loading ? componentLoading ? componentLoading : _react.default.createElement(_designSystem.Box, {
    fullWidth: true
  }, _react.default.createElement(_designSystem.Button, styledLoading, "Loading Space...")) : children ? _react.default.createElement(_designSystem.Span, {
    onClick: actionHandler
  }, children) : _react.default.createElement(_designSystem.Box, {
    fullWidth: true,
    onClick: actionHandler
  }, _react.default.createElement(_designSystem.Button, styled, "open ", _react.default.createElement("strong", null, space), " space")) : null;
};

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Space...',
  styled: {
    fontWeight: 'normal',
    width: '100%'
  },
  styledLoading: {
    width: '100%'
  }
};
BoxOpenSpace.propTypes = {
  space: _propTypes.default.string.isRequired
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxOpenSpace, props));

exports.default = _default;