"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadPostCreate = (_ref) => {
  var {
    box,
    threadName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "threadName"]);

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* (values) {
      box.threads[threadName].instance.post(values);
    });

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return !(0, _idx.default)(box, _ => _.threads[threadName].instance) ? null : _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    border: 'none',
    minHeight: 100,
    borderRadius: 8,
    boxShadow: 1,
    width: 1,
    p: 20,
    placeholder: "Post",
    name: "post"
  }), _react.default.createElement(_designSystem.Flex, {
    alignCenter: true,
    mt: 20
  }, _react.default.createElement(_designSystem.Button, {
    type: "submit",
    sm: true,
    variant: "green"
  }, "Create Post"), _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "orange",
    mx: [10]
  }, "Encrypt"), _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "blue"
  }, "Save Draft")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPostCreate, props));

exports.default = _default;