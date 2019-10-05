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

var AdventureList = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  var [listItems, setList] = (0, _react.useState)();
  var [isDispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (!listItems && !isDispatched && (0, _idx.default)(box, _ => _.spaces[props.space].instance)) {
      box.get({
        space: props.space,
        key: props.key,
        access: props.access
      });
      setDispatched(true);
    }
  }, [box.spaces]);
  (0, _react.useEffect)(() => {
    if (!listItems && (0, _idx.default)(box, _ => _.spaces[props.space].public[props.key])) {
      var list = (0, _idx.default)(box, _ => _.spaces[props.space].public[props.key]);
      setList(list);
    }
  }, [box.spaces]);
  return !listItems ? props.loadingInformation ? _react.default.createElement(_designSystem.Span, null, "No listItems") : null : _react.default.createElement(_designSystem.Flex, {
    column: true
  }, listItems && Object.keys(listItems).length > 0 && Object.values(listItems).map(item => _react.default.createElement(Item, item)));
};

AdventureList.defaultProps = {
  listItemsKey: 'listItems',
  key: 'adventure',
  access: 'public'
};
AdventureList.propTypes = {
  append: _propTypes.default.string,
  space: _propTypes.default.string,
  access: _propTypes.default.string
};

var Item = (_ref2) => {
  var {
    importHandler,
    deleteHandler,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["importHandler", "deleteHandler", "styled"]);

  return _react.default.createElement(_designSystem.Flex, {
    card: true,
    between: true,
    m: 3,
    width: "100%"
  }, _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Heading, null, "id: ", props.id), _react.default.createElement(_designSystem.Heading, {
    sm: true,
    thin: true
  }, "type: ", props.type)), _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "white",
    m: 2
  }, "Fields")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(AdventureList, props));

exports.default = _default;