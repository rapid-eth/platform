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

var PledgePublish = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  // Form Submit Handler
  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(function* (values) {
      var keys = Object.keys(values);
      var inputs = Object.values(values);
      box.set({
        keys,
        inputs
      });
    });

    return function onSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "name",
    defaultValue: box.profile.name,
    placeholder: "Name (Who are you)"
  }), _react.default.createElement(_designSystem.Field, {
    name: "job",
    defaultValue: box.profile.job,
    placeholder: "Role (What you do)"
  }), _react.default.createElement(_designSystem.Field, {
    name: "employer",
    defaultValue: box.profile.employer,
    placeholder: "Organization (Where you do it)"
  }), _react.default.createElement(_designSystem.Field, {
    name: "description",
    defaultValue: box.profile.description,
    placeholder: "Why"
  }), _react.default.createElement(_designSystem.Button, {
    sm: true,
    uppercase: true,
    width: "100%",
    variant: "green",
    disabled: !box.isLoggedIn
  }, "Update"));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(PledgePublish, props));

exports.default = _default;