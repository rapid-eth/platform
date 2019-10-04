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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContentTypeAdventure = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  var [index, setIndex] = (0, _react.useState)(false);
  var [loading, setLoading] = (0, _react.useState)(false);
  /* ---------- */

  /* Handlers
  /* ---------- */

  var actionHandler = values => {
    setLoading(true);

    if (props.space && props.insert) {
      box.set({
        inputs: props.contentType,
        space: props.space,
        insert: props.insert,
        access: props.access,
        key: props.contentType.id
      });
    }
  };
  /* ---------- */

  /* Effects
  /* ---------- */

  /**
   * @function ReadState
   */


  (0, _react.useEffect)(() => {
    if (!index && (0, _idx.default)(box, _ => _.spaces[props.space][props.access][props.insert])) {
      var _index = (0, _idx.default)(box, _ => _.spaces[props.space][props.access][props.insert][props.contentType.id]);

      setIndex(_index);
    }
  }, [box.spaces]);
  return _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true,
    card: true,
    textCenter: true
  }, _react.default.createElement(_designSystem.Heading, {
    md: true,
    thin: true
  }, props.title), index ? _react.default.createElement(_designSystem.Button, {
    xxs: true,
    variant: "white",
    onClick: actionHandler
  }, "Type Intalled") : _react.default.createElement(_designSystem.Button, {
    xxs: true,
    variant: "green",
    onClick: actionHandler
  }, !loading ? _react.default.createElement(_designSystem.Span, null, "Install Type") : _react.default.createElement(_designSystem.Span, null, "Loading...")), _react.default.createElement(_designSystem.Span, {
    xxs: true,
    my: 3,
    tag: "white"
  }, "Details"));
};

ContentTypeAdventure.defaultProps = {
  access: 'public',
  insert: 'index'
};
ContentTypeAdventure.propTypes = {
  title: _propTypes.default.string.isRequired,
  space: _propTypes.default.string.isRequired,
  insert: _propTypes.default.string,
  access: _propTypes.default.string
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(ContentTypeAdventure, props));

exports.default = _default;