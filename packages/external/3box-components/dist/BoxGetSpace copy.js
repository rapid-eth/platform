"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _q = require("q");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxOpenSpace = (_ref) => {
  var {
    box,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "children"]);

  var [loading, setLoading] = (0, _react.useState)(false);
  var [, setSp] = (0, _react.useState)();
  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   */

  (0, _react.useEffect)(() => {
    if (props.address && props.space) {
      var effect =
      /*#__PURE__*/
      function () {
        var _ref2 = _asyncToGenerator(function* () {
          var read = yield box.static.getSpace(props.address, props.space);
          console.log(read, 'spaceGet');
        });

        return function effect() {
          return _ref2.apply(this, arguments);
        };
      }();

      effect();
    }
  }, [props.address, props.space]);
  return _react.default.createElement(_designSystem.Box, null);
};

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Space...'
};
BoxOpenSpace.propTypes = {
  space: _propTypes.default.string.isRequired
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxOpenSpace, props));

exports.default = _default;