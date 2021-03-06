"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _dist2 = require("@kames/3box-components/dist");

var _Image = _interopRequireDefault(require("@horizin/design-system/dist/atoms/Image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DAOTeamCreate = (_ref) => {
  var {
    box,
    threadName,
    privateTeam,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "threadName", "privateTeam", "styled"]);

  var [isPrivate, setPrivate] = (0, _react.useState)(privateTeam);
  var [formValues, setFormValues] = (0, _react.useState)();
  var [space, setSpace] = (0, _react.useState)();
  var [loading, setLoading] = (0, _react.useState)(false);
  var [isComplete, setComplete] = (0, _react.useState)(false);

  var onSubmit = values => {
    var {
      space
    } = values;
    setLoading(true);
    setSpace(space);
    setFormValues(values);
    box.openSpace(space);
  };

  (0, _react.useEffect)(() => {
    if (box.spaces[space]) {
      setComplete(true);
      box.set({
        inputs: space,
        space: props.space,
        append: props.append,
        access: formValues.access ? 'private' : 'public'
      });
    }
  }, [box.spaces, space, formValues]);
  return _react.default.createElement(_designSystem.Flex, styled, isComplete ? _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Heading, {
    center: true
  }, space, " team created!"), _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "green",
    m: 2
  }, "Add Team Members"), _react.default.createElement(_designSystem.Button, {
    xs: true,
    m: 2
  }, "Register Team")) : _react.default.createElement(_dist2.BoxAccess, {
    level: "space",
    space: "eth"
  }, loading ? _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Flex, {
    card: true,
    center: true,
    column: true,
    rounded: true,
    p: 4
  }, _react.default.createElement(_designSystem.Span, {
    md: true,
    thin: true
  }, "Creating Team"), _react.default.createElement(_Image.default, {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif",
    width: 30,
    my: 20
  }), _react.default.createElement(_designSystem.Span, null, "Prepare for Adventure"))) : _react.default.createElement(_designSystem.Box, {
    fullWidth: true
  }, _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "space",
    label: "Team Name",
    placeholder: "Team Name"
  }), _react.default.createElement(_designSystem.Field, {
    name: "access",
    type: "checkbox",
    defaultValue: isPrivate,
    label: "Private Team"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    sm: true,
    variant: "green",
    width: "100%",
    my: 3
  }, "Create Team")))));
};

DAOTeamCreate.defaultProps = {
  append: 'team'
};
DAOTeamCreate.propTypes = {
  append: _propTypes.default.string,
  space: _propTypes.default.string,
  access: _propTypes.default.string,
  privateTeam: _propTypes.default.bool
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(DAOTeamCreate, props));

exports.default = _default;