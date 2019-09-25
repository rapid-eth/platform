"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Context = _interopRequireDefault(require("./Context"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var reducerActions = (state, action) => {
  switch (action.type) {
    case 'setProfile':
      return _objectSpread({}, state, {
        profile: action.profile
      });

    case 'setAddress':
      return _objectSpread({}, state, {
        address: action.address // addressShortened: utilities.shortenAddress(action.address, 7)

      });

    case 'open':
      return _objectSpread({}, state, {
        isLoggingIn: true
      });

    case 'logout':
      return _objectSpread({}, state, {
        isLoggingOut: true
      });

    case 'OPEN_SUCCESS':
      return _objectSpread({}, state, {
        profile: action.profile,
        instance: action.profileInstance,
        spaces: action.spaces,
        isLoggingIn: false,
        isLoggedIn: true
      });

    case 'OPEN_FAILURE':
      return _objectSpread({}, state);

    case 'LOGOUT_SUCCESS':
      return _objectSpread({}, state, {
        box: undefined,
        profile: undefined,
        instance: undefined,
        isLoggedIn: false,
        spaces: {},
        threads: {}
      });

    case 'LOGOUT_FAILURE':
      return state;

    case 'openSpace':
      return _objectSpread({}, state, {
        async: {
          spaces: {
            [action.space]: true
          }
        }
      });

    case 'OPEN_SPACE_SUCCESS':
      return _objectSpread({}, state, {
        spaces: _objectSpread({}, state.spaces, {
          [action.space]: {
            instance: action.instance,
            threads: action.threads
          }
        })
      });

    case 'joinThread':
      return _objectSpread({}, state, {
        async: {
          threads: {
            [action.threadName]: {
              space: action.space,
              threadName: action.threadName,
              threadAddress: action.threadAddress
            }
          }
        }
      });

    case 'JOIN_THREAD_SUCCESS':
      return _objectSpread({}, state, {
        threads: _objectSpread({}, state.threads, {
          [action.threadName]: {
            instance: action.instance,
            posts: action.posts,
            members: action.members,
            moderators: action.moderators
          }
        }) // spaces: {
        //   ...state.spaces,
        //   [action.space]: {
        //     ...state.spaces[action.space],
        //     threads: [
        //       ...state.spaces[action.space].threads,
        //       {
        //         address: action.instance._address,
        //         firstModerator: action.instance._firstModerator,
        //         members: action.instance._members,
        //         name: action.instance._name
        //       }
        //     ]
        //   }
        // }

      });

    case 'threadPost':
      return _objectSpread({}, state, {
        async: {
          posts: {
            [action.threadName]: {
              type: action.type,
              threadName: action.threadName,
              post: action.post
            }
          }
        }
      });

    case 'threadPostDelete':
      return _objectSpread({}, state, {
        async: {
          posts: {
            [action.postId]: {
              type: action.type,
              threadName: action.threadName,
              postId: action.postId
            }
          }
        }
      });

    case 'THREAD_POST_SUCCESS':
      return _objectSpread({}, state, {
        threads: {
          [action.threadName]: _objectSpread({}, state.threads[action.threadName], {
            posts: action.posts
          })
        }
      });

    case 'THREAD_POST_DELETE_SUCCESS':
      return _objectSpread({}, state, {
        threads: {
          [action.threadName]: _objectSpread({}, state.threads[action.threadName], {
            posts: action.posts
          })
        }
      });

    default:
      throw new Error('No Reducer Type Set');
  }
};

var Provider = (_ref) => {
  var {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children"]);

  var initialState = (0, _react.useContext)(_Context.default);
  var reducer = (0, _react.useReducer)(reducerActions, initialState); // Fix ReferenceError: exports is not defined

  var state = reducer[0];
  var dispatch = reducer[1];
  console.log(state, 'Box Provider State');
  /**
   * @function setAddress
   * @description Set global address parameter in 3box instance.
   */

  (0, _react.useEffect)(() => {
    dispatch({
      type: "setAddress",
      address: window.ethereum.selectedAddress
    });
  }, [window.ethereum.selectedAddress]);
  /**
   * @function setProfile
   * @description Set global address parameter in 3box instance.
   */

  (0, _react.useEffect)(() => {
    try {
      if (state.address) {
        state.instance.getProfile(state.address).then(profile => {
          console.log(profile, 'profileprofileprofile');
          dispatch({
            type: "setProfile",
            profile
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, [state.address]);
  /**
   * @function OpenBox
   * @description Manage Login
   */

  (0, _react.useEffect)(() => {
    try {
      if (state.address && state.isLoggingIn) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(function* () {
            var profileInstance = yield state.instance.openBox(state.address, window.web3.currentProvider);
            var profile = state.profile ? state.profile : yield state.instance.getProfile(state.address);
            var list = yield state.instance.listSpaces(state.address);
            var spaces = {};
            list.forEach(element => {
              spaces[element] = undefined;
            });
            dispatch({
              type: "OPEN_SUCCESS",
              profile: profile,
              profileInstance: profileInstance,
              spaces
            });
          });

          return function runEffect() {
            return _ref2.apply(this, arguments);
          };
        }();

        runEffect();
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: "OPEN_FAILURE",
        err: 'Failed'
      });
    }
  }, [state.isLoggingIn]);
  /**
   * @function CloseBox
   * @description Manage Logout
   */

  (0, _react.useEffect)(() => {
    if (state.isLoggingOut) {
      try {
        state.instance.logout().then(res => {
          dispatch({
            type: "LOGOUT_SUCCESS"
          });
        });
      } catch (error) {
        console.log(error);
        dispatch({
          type: "LOGOUT_FAILURE"
        });
      }
    }
  }, [state.isLoggingOut]);
  /**
   * @function OpenSpace
   * @description Open Space
   */

  (0, _react.useEffect)(() => {
    if (state.async && state.async.spaces) {
      var spaceSelected = Object.keys(state.async.spaces)[0];

      if (spaceSelected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref3 = _asyncToGenerator(function* () {
            var space = yield state.instance.openSpace(spaceSelected);
            var threads = yield space.subscribedThreads();
            dispatch({
              type: "OPEN_SPACE_SUCCESS",
              instance: space,
              space: spaceSelected,
              threads
            });
          });

          return function runEffect() {
            return _ref3.apply(this, arguments);
          };
        }();

        runEffect();
      }
    }
  }, [state.async.spaces]);
  /**
   * @function ThreadPostDelete
   * @description Open Space
   */

  (0, _react.useEffect)(() => {
    if (state.async && state.async.threads) {
      var threadSelected = Object.keys(state.async.threads)[2];

      if (threadSelected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref4 = _asyncToGenerator(function* () {
            dispatch({
              type: "THREAD_DELETE_SUCCESS"
            });
          });

          return function runEffect() {
            return _ref4.apply(this, arguments);
          };
        }();

        runEffect();
      }
    }
  }, [state.async.threads]);
  /**
   * @function JoinThread
   * @description Open Space
   */

  (0, _react.useEffect)(() => {
    if (state.async && state.async.threads) {
      try {
        var threadSelected = state.async.threads[Object.keys(state.async.threads)[0]];

        if (threadSelected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref5 = _asyncToGenerator(function* () {
              var thread, members, moderators;

              if (threadSelected.threadAddress) {
                thread = yield state.spaces[threadSelected.space].instance.joinThreadByAddress(threadSelected.threadAddress, threadSelected.options);
              } else {
                thread = yield state.spaces[threadSelected.space].instance.joinThread(threadSelected.threadName, threadSelected.options);
              }

              var posts = yield thread.getPosts();

              if (thread._members) {
                members = yield thread.listMembers();
                moderators = yield thread.listModerators();
              }

              dispatch({
                type: "JOIN_THREAD_SUCCESS",
                instance: thread,
                threadName: threadSelected.threadName,
                posts,
                members,
                moderators,
                space: threadSelected.space
              });
            });

            return function runEffect() {
              return _ref5.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.async, state.async.threads]);
  /**
   * @function ThreadPost
   * @description Add Post to Thread
   */

  (0, _react.useEffect)(() => {
    if (state.async && state.async.posts) {
      try {
        var postSelected = state.async.posts[Object.keys(state.async.posts)[0]];

        if (postSelected && state.threads[postSelected.threadName]) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref6 = _asyncToGenerator(function* () {
              var posts;

              switch (postSelected.type) {
                case 'threadPost':
                  yield state.threads[postSelected.threadName].instance.post(postSelected.post);
                  posts = yield state.threads[postSelected.threadName].instance.getPosts();
                  console.log(posts, 'posts');
                  dispatch({
                    type: "THREAD_POST_SUCCESS",
                    threadName: postSelected.threadName,
                    posts
                  });
                  break;

                case 'threadPostDelete':
                  yield state.threads[postSelected.threadName].instance.deletePost(postSelected.postId);
                  posts = yield state.threads[postSelected.threadName].instance.getPosts();
                  dispatch({
                    type: "THREAD_POST_DELETE_SUCCESS",
                    threadName: postSelected.threadName,
                    posts
                  });
                  break;

                default:
                  break;
              }
            });

            return function runEffect() {
              return _ref6.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.async, state.async.posts]);
  return _react.default.createElement(_Context.default.Provider, {
    value: _objectSpread({}, state, {
      dispatch: dispatch,
      open: () => dispatch({
        type: 'open'
      }),
      logout: () => dispatch({
        type: 'logout'
      }),
      openSpace: space => dispatch({
        type: 'openSpace',
        space
      }),
      joinThread: (_ref7) => {
        var {
          threadName,
          threadAddress,
          space,
          options
        } = _ref7;
        return dispatch({
          type: 'joinThread',
          threadName,
          threadAddress,
          options,
          space
        });
      },
      threadPost: (_ref8) => {
        var {
          threadName,
          post
        } = _ref8;
        return dispatch({
          type: 'threadPost',
          threadName,
          post
        });
      },
      threadPostDelete: (_ref9) => {
        var {
          threadName,
          postId
        } = _ref9;
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