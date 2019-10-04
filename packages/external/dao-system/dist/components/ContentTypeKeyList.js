"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContentTypeList = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  var [index, setIndex] = (0, _react.useState)();
  var [isDispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!index && !isDispatched && (0, _idx.default)(box, _ => _.spaces[props.space].instance)) {
      box.get({
        space: props.space,
        key: 'index',
        access: 'public'
      });
      setDispatched(true);
    }
  }, [box.spaces]);
  (0, _react.useEffect)(() => {
    if (!index && (0, _idx.default)(box, _ => _.spaces[props.space].public.index.payload)) {
      var _index = (0, _idx.default)(box, _ => _.spaces[props.space].public.index.payload);

      setIndex(_index);
    }
  }, [box.spaces]);
  return _react.default.createElement(_designSystem.Heading, {
    sm: true
  }, "Index Keys:", index && Array.isArray(Object.keys(index)) && Object.keys(index).length > 0 && Object.values(index).map(item => _react.default.createElement(IndexItem, item)));
};

var IndexItem = (_ref2) => {
  var {
    importHandler,
    deleteHandler,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["importHandler", "deleteHandler", "styled"]);

  return _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, props.id);
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(ContentTypeList, props));

exports.default = _default;