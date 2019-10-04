"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

var _reactHooksPortal = require("@horizin/react-hooks-portal");

var _atoms = require("@horizin/design-system/dist/atoms");

var _effects = _interopRequireDefault(require("./effects"));

var _utilities = require("./utilities");

var _reducer = _interopRequireDefault(require("./reducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ComponentTest = props => _react.default.createElement(_atoms.Box, {
  card: true
}, "Welcome back.");

var Provider = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  var portal = (0, _react.useContext)(_reactHooksPortal.PortalContext);
  var initialState = (0, _react.useContext)(_Context.default);
  var reducer = (0, _react.useReducer)(_reducer.default, initialState); // Fix ReferenceError: exports is not defined

  var state = reducer[0];
  var dispatch = reducer[1];
  console.log(state, 'Box Provider State');
  (0, _effects.default)(_react.useEffect, state, dispatch);

  var stringToArrayPath = data => typeof data === 'string' ? data.split('.') : data;

  var idxx = (state, nest) => [state, ...stringToArrayPath(nest)].reduce((branch, index) => {
    if (typeof index === 'string' && branch) {
      return branch[index];
    } else {
      nest = index;
    }
  });

  return _react.default.createElement(_Context.default.Provider, {
    value: _objectSpread({}, state, {
      dispatch: dispatch,
      selector: select => idxx(state, select),
      enable: function () {
        var _enable = _asyncToGenerator(function* () {
          var accounts = yield window.ethereum.enable();
          var address = accounts[0];

          if (address) {
            dispatch({
              type: "setAddress",
              address,
              addressShortened: (0, _utilities.shortenAddress)(address, 6),
              addressTrimmed: address.substring(0, 10)
            });
          }
        });

        function enable() {
          return _enable.apply(this, arguments);
        }

        return enable;
      }(),
      open: () => dispatch({
        type: 'open'
      }),
      logout: () => dispatch({
        type: 'logout'
      }),
      get: (_ref2) => {
        var {
          key,
          access,
          space
        } = _ref2;
        return dispatch({
          type: 'GET_REQUEST',
          space,
          access,
          key
        });
      },
      set: (_ref3) => {
        var {
          keys,
          key,
          insert,
          inputs,
          access,
          space,
          append,
          update
        } = _ref3;
        return dispatch({
          type: 'SET_REQUEST',
          append: insert || append,
          keys,
          key,
          inputs,
          access: access || access,
          space,
          update
        });
      },
      remove: (_ref4) => {
        var {
          key,
          access,
          space
        } = _ref4;
        return dispatch({
          type: 'REMOVE_REQUEST',
          key,
          access,
          space
        });
      },
      delete: (_ref5) => {
        var {
          key,
          keyChild,
          inputs,
          access,
          space,
          append
        } = _ref5;
        return dispatch({
          type: 'DELETE_REQUEST',
          key,
          keyChild,
          access,
          space
        });
      },
      getSpace: (_ref6) => {
        var {
          address,
          space
        } = _ref6;
        return dispatch({
          type: 'GET_SPACE_REQUEST',
          address,
          space
        });
      },
      openSpace: space => dispatch({
        type: 'openSpace',
        space
      }),
      getProfile: address => dispatch({
        type: 'GET_PROFILE_REQUEST',
        address
      }),
      getThread: (_ref7) => {
        var {
          space,
          threadName,
          firstModerator,
          members,
          options
        } = _ref7;
        return dispatch({
          type: 'GET_THREAD_REQUEST',
          space,
          threadName,
          firstModerator,
          members,
          options
        });
      },
      joinThread: (_ref8) => {
        var {
          threadName,
          threadAddress,
          space,
          options
        } = _ref8;
        return dispatch({
          type: 'joinThread',
          threadName,
          threadAddress,
          options,
          space
        });
      },
      threadPost: (_ref9) => {
        var {
          threadName,
          post
        } = _ref9;
        return dispatch({
          type: 'threadPost',
          threadName,
          post
        });
      },
      threadPostDelete: (_ref10) => {
        var {
          threadName,
          postId
        } = _ref10;
        return dispatch({
          type: 'threadPostDelete',
          threadName,
          postId
        });
      }
    })
  }, children);
};

var _default = Provider;
exports.default = _default;