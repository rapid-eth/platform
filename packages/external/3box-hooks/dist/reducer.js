"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (state, action) => {
  switch (action.type) {
    /* ======================= */

    /* Initilization
    /* ======================= */
    case 'SET_ADDRESS':
      return _objectSpread({}, state, {}, action);

    case 'SET_PROFILE':
      return _dotPropImmutableChain.default.set(state, 'profile', action.profile);

    /* ======================= */

    /* Static Requests
    /* ======================= */

    case 'GET_PROFILE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.profiles", [...state.store.profiles, action]).value();

    case 'GET_PROFILE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("profiles.".concat(action.address), action.payload) // Deprecated path
      .set("data.profiles.".concat(action.address), action.payload) // New path
      .set("store.profiles", state.store.profiles.filter(i => i.address !== action.address)).value();

    case 'GET_PROFILE_LIST_REQUEST':
      return _objectSpread({}, state, {
        store: {
          profiles: {
            [action.address]: action
          }
        }
      });

    case 'GET_PROFILE_LIST_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("profiles.".concat(action.address), action.payload) // Deprecated path
      .set("data.profiles.".concat(action.address), action.payload) // New path
      .set("store.profiles", []).value().value();

    /* ======================= */

    /* AUTHENTICATION
    /* ======================= */

    /* OPEN
    /* ------------------ */

    case 'OPEN_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("isLoggingIn", true).value();

    case 'OPEN_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("auth.profile", action.profile).set("auth.verifications", action.verifications).set("auth.spaces", action.spaces).set("instance", action.instance).set("isLogginIn", false).set("isLoggedIn", true).value();

    case 'OPEN_FAILURE':
      return state;

    case 'OPEN_SPACE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.open", [action]).value();

    case 'OPEN_SPACE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("spaces.".concat(action.space, ".instance"), action.instance) // Deprecated path
      .set("spaces.".concat(action.space, ".threads"), action.threads) // Deprecated path
      .set("auth.spaces.".concat(action.space, ".instance"), action.instance) // New path
      .set("auth.spaces.".concat(action.space, ".threads"), action.threads) // New path
      .set("store.open", []).value();

    /* LOGOUT
    /* ------------------ */

    case 'LOGOUT_REQUEST':
      return _objectSpread({}, state, {
        isLoggingOut: true
      });

    case 'LOGOUT_SUCCESS':
      return _objectSpread({}, state, {
        box: undefined,
        isLoggedIn: false,
        spaces: {},
        threads: {}
      });

    case 'LOGOUT_FAILURE':
      return state;

    /* ------------------ */

    /* Get Space
    /* ------------------ */

    case 'GET_SPACE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.spaces", [...state.store.spaces, action]).value();

    case 'GET_SPACE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("spaces.".concat(action.space, ".").concat(action.access), action.payload) // Deprecated path
      .set("data.spaces.".concat(action.space, ".").concat(action.access), action.payload) // New path
      .set("store.spaces", []).value();

    case 'GET_SPACE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.spaces", []).value();

    /* ------------------ */

    /* Get                */

    /* ------------------ */

    case 'GET_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.gets", [...state.store.gets, action]).value();

    case 'GET_SUCCESS':
      if (action.space) {
        return (0, _dotPropImmutableChain.default)(state).set("spaces.".concat(action.space, ".").concat(action.access, ".").concat(action.id), action.payload) // Deprecated path
        .set("data.spaces.".concat(action.space, ".").concat(action.access, ".").concat(action.id), action.payload) // New path
        .set("store.gets", []).value();
      } else {
        return (0, _dotPropImmutableChain.default)(state).set("store.gets", []).value();
      }

    case 'GET_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.gets", []).value();

    /* ------------------ */

    /* Set
    /* ------------------ */

    case 'SET_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", [...state.store.sets, action]).value();

    case 'SET_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    case 'SET_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.sets", []).value();

    /* ------------------ */

    /* Insert
    /* ------------------ */

    case 'INSERT_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.inserts", [...state.store.inserts, action]).value();

    case 'INSERT_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.inserts", []).value();

    case 'INSERT_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.inserts", []).value();

    /* ------------------ */

    /* Remove                */

    /* ------------------ */

    case 'REMOVE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.removes", [...state.store.removes, action]).value();

    case 'REMOVE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("store.removes", []).value();

    case 'REMOVE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.removes", []).value();

    /* ------------------ */

    /* Delete             */

    /* ------------------ */

    case 'DELETE_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          deletes: [action]
        })
      });

    case 'DELETE_SUCCESS':
      if (action.space) {
        return _objectSpread({}, state, {
          store: _objectSpread({}, state.store, {
            deletes: []
          }),
          spaces: _objectSpread({}, state.spaces, {
            [action.space]: _objectSpread({}, state.spaces[action.space])
          })
        });
      } else {
        return _objectSpread({}, state, {
          store: {
            deletes: []
          }
        });
      }

    case 'DELETE_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.deletes", []).value();

    /* ------------------ */

    /* Thread             */

    /* ------------------ */

    case 'JOIN_THREAD_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", [...state.store.threads, action]).value();

    case 'JOIN_THREAD_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("threads.".concat(action.threadName), action).set("data.threads.".concat(action.threadName), action).value();

    /* ------------------ */

    /* Thread Get
    /* ------------------ */

    case 'GET_THREAD_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", [...state.store.threads, action]).value();

    case 'GET_THREAD_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("threads.".concat(action.threadName, ".posts"), action.payload) // Deprecated path
      .set("data.threads.".concat(action.threadName, ".posts"), action.payload) // New path
      .set("store.threads", []).value();

    case 'GET_THREAD_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", []).value();

    case 'GET_THREAD_BY_ADDRESS_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", [...state.store.threads, action]).value();

    case 'GET_THREAD_BY_ADDRESS_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("threads.".concat(action.threadName, ".posts"), action.payload) // Deprecated path
      .set("data.threads.".concat(action.threadName, ".posts"), action.payload) // New path
      .set("store.threads", []).value();

    case 'GET_THREAD_BY_ADDRESS_FAILURE':
      return (0, _dotPropImmutableChain.default)(state).set("store.threads", []).value();

    /* Post Publish
    /* ------------------ */

    case 'THREAD_POST_PUBLISH_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.posts", [...state.store.posts, action]).value();

    case 'THREAD_POST_PUBLISH_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("threads.".concat(action.threadName, ".posts"), action.payload) // Deprecated path
      .set("data.threads.".concat(action.threadName, ".posts"), action.payload) // New path
      .set("store.posts", []).value();

    /* Post Delete
    /* ------------------ */

    case 'THREAD_POST_DELETE_REQUEST':
      return (0, _dotPropImmutableChain.default)(state).set("store.posts", [...state.store.posts, action]).value();

    case 'THREAD_POST_DELETE_SUCCESS':
      return (0, _dotPropImmutableChain.default)(state).set("threads.".concat(action.threadName, ".posts"), action.payload) // Deprecated path
      .set("data.threads.".concat(action.threadName, ".posts"), action.payload) // New path
      .set("store.posts", []).value();

    default:
      throw new Error("No Reducer Type Set ".concat(action.type, " "));
  }
};

exports.default = _default;