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

var _index = require("./index");

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _Component = _interopRequireDefault(require("./CMS/Component"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxAccess = (_ref) => {
  var {
    box,
    level
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "level"]);

  return _react.default.createElement(_react.default.Fragment, null, level === 'disabled' && props.children, level === 'enabled' && _react.default.createElement(LevelEnabled, _extends({
    box: box
  }, props)), level === 'login' && _react.default.createElement(LevelLogin, _extends({
    box: box
  }, props)), level === 'space' && _react.default.createElement(LevelSpace, _extends({
    box: box
  }, props)), level === 'thread' && _react.default.createElement(LevelThread, _extends({
    box: box
  }, props)));
};

BoxAccess.defaultProps = {
  componentLogin: _react.default.createElement(_BoxLoginButton.default, null),
  componentLoading: null,
  threadName: undefined,
  loginAuto: false,
  spaceAuto: false,
  threadAuto: false,
  isisLoginDisabled: true,
  level: 'login',
  styledLogin: {
    variant: 'blue',
    width: '100%'
  },
  styledSpace: {
    variant: 'blue',
    width: '100%'
  },
  styledThread: {
    variant: 'blue',
    width: 1
  }
};
BoxAccess.propTypes = {
  space: _propTypes.default.string.isRequired,
  threadName: _propTypes.default.string,
  level: _propTypes.default.string
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxAccess, props));
/**
 * @function LevelEnabled
 * @param {*} props 
 */


exports.default = _default;

var LevelEnabled = (_ref2) => {
  var {
    box,
    children
  } = _ref2;
  return box.isEnableSuccess ? children : null;
};
/**
 * @function LevelLogin
 * @param {*} props 
 */


var LevelLogin = (_ref3) => {
  var {
    box,
    styled,
    styledLogin,
    variant,
    componentLogin,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["box", "styled", "styledLogin", "variant", "componentLogin", "children"]);

  var {
    isLoggedIn
  } = box;
  return props.isLoginHidden ? null : !isLoggedIn ? componentLogin ? componentLogin : props.isLoginDisabled ? null : null : children;
};
/**
 * @function LevelSpace
 * @param {*} props 
 */


var LevelSpace = (_ref4) => {
  var {
    box,
    space,
    threadName,
    threadAuto,
    spaceAuto,
    variant,
    styled,
    styledLogin,
    styledSpace,
    componentSpace,
    componentLogin,
    children
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["box", "space", "threadName", "threadAuto", "spaceAuto", "variant", "styled", "styledLogin", "styledSpace", "componentSpace", "componentLogin", "children"]);

  var {
    isLoggedIn
  } = box;
  var [spaceLoaded, setSpace] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.spaces[space].instance)) {
      setSpace(true);
    }
  }, [(0, _idx.default)(box, _ => _.spaces[space].instance)]);
  return _react.default.createElement(_react.default.Fragment, null, !isLoggedIn && !spaceLoaded ? props.isLoginDisabled ? null : componentLogin : null, isLoggedIn && !spaceLoaded && _react.default.createElement(_index.BoxSpaceOpen, {
    auto: spaceAuto,
    space: space
  }, _react.default.createElement(_react.default.Fragment, null, componentSpace ? componentSpace : _react.default.createElement(_designSystem.Button, styledSpace, "open ", space, " space"))), isLoggedIn && spaceLoaded && children);
};
/**
 * @function LevelThread
 * @param {*} props 
 */


var LevelThread = (_ref5) => {
  var {
    box,
    space,
    threadName,
    threadAuto,
    spaceAuto,
    variant,
    styled,
    styledLogin,
    styledSpace,
    styledThread,
    componentSpace,
    componentThread,
    componentLogin
  } = _ref5,
      props = _objectWithoutProperties(_ref5, ["box", "space", "threadName", "threadAuto", "spaceAuto", "variant", "styled", "styledLogin", "styledSpace", "styledThread", "componentSpace", "componentThread", "componentLogin"]);

  var {
    isLoggedIn
  } = box;
  var [threadLoaded, setThread] = (0, _react.useState)();
  var [spaceLoaded, setSpace] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.spaces[space].instance)) {
      setSpace(true);
    }
  }, [(0, _idx.default)(box, _ => _.spaces[space].instance)]);
  (0, _react.useEffect)(() => {
    if ((0, _idx.default)(box, _ => _.threads[threadName].instance)) {
      setThread(true);
    }
  }, [(0, _idx.default)(box, _ => _.threads[threadName])]);
  return _react.default.createElement(_react.default.Fragment, null, props.componentLoading ? !spaceLoaded && !spaceAuto : props.componentLoading, !isLoggedIn && !spaceLoaded && !threadLoaded ? props.isLoginDisabled ? null : componentLogin : null, isLoggedIn && !spaceLoaded && _react.default.createElement(_index.BoxSpaceOpen, {
    auto: spaceAuto,
    space: space
  }, _react.default.createElement(_react.default.Fragment, null, componentSpace ? componentSpace : _react.default.createElement(_designSystem.Button, styledSpace, "open ", space, " space"))), isLoggedIn && spaceLoaded && !threadLoaded && _react.default.createElement(_index.BoxThreadJoin, {
    auto: threadAuto,
    space: space,
    threadName: threadName,
    options: props.optionsThread
  }, _react.default.createElement(_react.default.Fragment, null, componentThread ? componentThread : _react.default.createElement(_designSystem.Button, styledThread, "Join ", threadName, " Thread"))), isLoggedIn && spaceLoaded && threadLoaded ? props.children : null);
};