"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadJoin = (_ref) => {
  var {
    box,
    variant,
    threadAddress,
    threadName,
    space,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "variant", "threadAddress", "threadName", "space", "children"]);

  return box.instance ? _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: variant,
    onClick: () => box.joinThread({
      threadAddress: threadAddress,
      threadName: threadName,
      space: space
    })
  }, "Join Thread") : null;
};

BoxThreadJoin.defaultProps = {
  variant: 'green'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadJoin, props));

exports.default = _default;