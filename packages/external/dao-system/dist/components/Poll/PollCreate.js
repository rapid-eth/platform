"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHookForm = _interopRequireDefault(require("react-hook-form"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _dist2 = require("@kames/3box-components/dist");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ProjectCreate = (_ref) => {
  var {
    box,
    threadName,
    privateTeam,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "threadName", "privateTeam", "styled"]);

  var {
    handleSubmit,
    register,
    errors
  } = (0, _reactHookForm.default)();
  var [isPrivate, setPrivate] = (0, _react.useState)(privateTeam);
  var [formValues, setFormValues] = (0, _react.useState)();
  var [space, setSpace] = (0, _react.useState)(props.space);
  var [loading, setLoading] = (0, _react.useState)(false);
  var [isComplete, setComplete] = (0, _react.useState)(false);

  var onSubmit = values => {
    var {
      space
    } = values;
    setLoading(true);
    setSpace(space);
    setFormValues(values);
    box.openSpace(props.space);
  };

  (0, _react.useEffect)(() => {
    if (formValues) {
      setComplete(true);
      box.insert({
        space: props.space,
        access: 'public',
        index: props.index,
        key: formValues.alias,
        value: formValues
      });
    }
  }, [formValues]);
  return _react.default.createElement("form", {
    onSubmit: handleSubmit(onSubmit)
  }, _react.default.createElement(_designSystem.Field, {
    name: "name",
    label: "Name",
    defaultValue: props.defaultValues.name,
    register: register,
    errors: errors,
    placeholder: "Poll Name"
  }), _react.default.createElement(_designSystem.Field, {
    name: "question",
    placeholder: "Question to be asked.",
    label: "Poll Question",
    defaultValue: props.defaultValues.question,
    register: register,
    errors: errors
  }), _react.default.createElement(_designSystem.Field, {
    name: "content",
    inputAs: "textarea",
    minHeight: 100,
    placeholder: "Add Options (New line for each option)",
    label: "Poll Options",
    defaultValue: props.defaultValues.content,
    register: register,
    errors: errors
  }), _react.default.createElement(_dist2.BoxAccess, {
    level: "disabled",
    space: "eth"
  }, _react.default.createElement(_designSystem.Button, {
    type: "submit",
    sm: true,
    variant: "green",
    width: "100%",
    my: 3
  }, "Create Poll")));
};

ProjectCreate.defaultProps = {
  space: 'eth',
  access: 'public',
  index: 'polls',
  defaultValues: {}
};
ProjectCreate.propTypes = {
  append: _propTypes.default.string,
  defaultValues: _propTypes.default.object,
  space: _propTypes.default.string,
  access: _propTypes.default.string,
  privateTeam: _propTypes.default.bool
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(ProjectCreate, props));

exports.default = _default;