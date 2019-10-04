"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _utilities = require("./utilities");

var _reactHooksPortal = require("@horizin/react-hooks-portal");

var _atoms = require("@horizin/design-system/dist/atoms");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var effects = (callUseEffect, state, dispatch) => {
  var portal = (0, _react.useContext)(_reactHooksPortal.PortalContext);
  /* -------------------------------- */

  /* General Functions                */

  /* -------------------------------- */

  /**
     * @function AutoLogin
     * @description Set global address parameter in 3box instance.
     */

  callUseEffect(() => {
    if (state.isLoginAuto && state.address) {
      dispatch({
        type: 'open'
      });
    }
  }, [state.isLoginAuto, state.address]);
  /**
     * @function setAddress
     * @description Set global address parameter in 3box instance.
     */

  callUseEffect(() => {
    var address = window.ethereum.selectedAddress;

    if ((0, _utilities.isAddress)(address)) {
      dispatch({
        type: "setAddress",
        address,
        addressShortened: (0, _utilities.shortenAddress)(address, 6),
        addressTrimmed: address.substring(0, 10)
      });
    }
  }, [window.ethereum.selectedAddress]);
  /**
   * @function setProfile
   * @description Set global address parameter in 3box instance.
   */

  callUseEffect(() => {
    try {
      if (state.address) {
        state.static.getProfile(state.address).then(profile => {
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
  /* -------------------------------- */

  /* Login State                      */

  /* -------------------------------- */

  /**
   * @function OpenBox
   * @description Manage Login
   */

  callUseEffect(() => {
    try {
      if (state.address && state.isLoggingIn) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* () {
            var profileInstance = yield state.static.openBox(state.address, window.web3.currentProvider);
            var profile = state.profile ? state.profile : yield state.static.getProfile(state.address);
            var list = yield state.static.listSpaces(state.address);
            var verified = yield state.static.getVerifiedAccounts(profile);
            var spaces = {};
            list.forEach(element => {
              spaces[element] = undefined;
            });
            portal.openToast({
              label: 'Login Success',
              closeOnClick: true,
              closeTimer: 3000,
              styled: {}
            });
            dispatch({
              type: "OPEN_SUCCESS",
              profile: profile,
              profileInstance: profileInstance,
              spaces,
              verified
            });
          });

          return function runEffect() {
            return _ref.apply(this, arguments);
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

  callUseEffect(() => {
    if (state.isLoggingOut) {
      try {
        state.instance.logout().then(res => {
          dispatch({
            type: "LOGOUT_SUCCESS"
          });
          portal.openToast({
            label: 'Goodbye',
            closeOnClick: true,
            closeTimer: 3000
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
   * @function GetProfile
   * @description Get the Profile
   */

  callUseEffect(() => {
    if (state.store && state.store.profiles) {
      var spaceSelected = Object.keys(state.store.profiles)[0];

      if (spaceSelected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref2 = _asyncToGenerator(function* () {
            var profile = yield state.static.getProfile(spaceSelected);
            dispatch({
              type: "GET_PROFILE_SUCCESS",
              payload: profile,
              id: spaceSelected
            });
          });

          return function runEffect() {
            return _ref2.apply(this, arguments);
          };
        }();

        runEffect();
      }
    }
  }, [state.store.profiles]);
  /**
   * @function GetSpace
   * @description Remove top level items.
   */

  callUseEffect(() => {
    if (state.store && state.store.spaces) {
      try {
        var selected = state.store.spaces[Object.keys(state.store.spaces)[0]];

        if (selected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref3 = _asyncToGenerator(function* () {
              var {
                space,
                address
              } = selected;

              try {
                var read = yield state.static.getSpace(address, space);
                console.log(read, 'static read');
                dispatch({
                  type: 'GET_SPACE_SUCCESS',
                  space,
                  access: 'public',
                  payload: read
                });
              } catch (error) {
                console.log(error);
                dispatch({
                  type: 'GET_SPACE_FAILURE',
                  payload: error
                });
              }
            });

            return function runEffect() {
              return _ref3.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.store.spaces]);
  /**
   * @function OpenSpace
   * @description Open Space
   */

  callUseEffect(() => {
    if (state.instance.openSpace, state.async && state.async.spaces) {
      var spaceSelected = Object.keys(state.async.spaces)[0];

      if (spaceSelected) {
        try {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref4 = _asyncToGenerator(function* () {
              var threads;
              var space = yield state.instance.openSpace(spaceSelected);

              if (space) {
                threads = yield space.subscribedThreads();
              }

              dispatch({
                type: "OPEN_SPACE_SUCCESS",
                instance: space,
                space: spaceSelected,
                threads
              });
            });

            return function runEffect() {
              return _ref4.apply(this, arguments);
            };
          }();

          runEffect();
        } catch (error) {
          console.log(error);
        }
      }
    }
  }, [state.instance.openSpace, state.async.spaces]);
  /* -------------------------------- */

  /* Read and Write (CRUD)            */

  /* -------------------------------- */

  /**
   * @function Set
   * @description 3Box Profile Set
   */

  callUseEffect(() => {
    if (state.store && state.store.sets) {
      try {
        var selected = state.store.sets[Object.keys(state.store.sets)[0]];
        console.log(selected, 'selected');

        if (selected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref5 = _asyncToGenerator(function* () {
              var listUpdated;
              var {
                access,
                key,
                keys,
                inputs,
                space,
                append,
                override
              } = selected;

              try {
                if (space) {
                  if (append) {
                    var data = yield state.spaces[space].instance[access].get(append);

                    if (data) {
                      /**
                       * IF : key
                       * TRUE : Update object 
                       * FALSE : Update array 
                       */
                      if (key) {
                        listUpdated = _objectSpread({}, data, {
                          [key]: inputs
                        });
                      } else {
                        listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs];
                      }
                    } else {
                      if (key) {
                        listUpdated = {
                          [key]: inputs
                        };
                      } else {
                        listUpdated = [inputs];
                      }
                    }

                    var list = yield state.spaces[space].instance[access].set(append, listUpdated);
                    dispatch({
                      type: "SET_REQUEST_SUCCESS",
                      payload: list
                    });

                    if (selected.update) {
                      dispatch({
                        type: "GET_REQUEST",
                        access,
                        key: selected.update,
                        space
                      });
                    }
                  } else {
                    yield state.spaces[space].instance[access].setMultiple(keys, inputs);
                    dispatch({
                      type: "SET_REQUEST_SUCCESS"
                    });

                    if (selected.update) {
                      dispatch({
                        type: "GET_REQUEST",
                        access,
                        key: selected.update,
                        space
                      });
                    }
                  }
                } else {
                  if (append) {
                    var _data = yield state.instance[access].get(append);

                    if (_data) {
                      listUpdated = Array.isArray(_data) ? [..._data, inputs] : [_data, inputs];
                    } else {
                      listUpdated = [inputs];
                    }

                    Array.isArray(_data) ? yield state.instance[access].set(append, listUpdated) : !override // todo set system for overriding data... add to backup space? 
                    ? yield state.instance[access].set(append, listUpdated) : null;
                  } else {// await state.instance[access].setMultiple(keys, inputs)
                  }
                }
              } catch (error) {
                console.log(error);
                dispatch({
                  type: "SET_REQUEST_FAILURE"
                });
              }
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
  }, [state.store, state.store.sets]);
  /**
   * @function Get
   * @description Manage global get requests.
   */

  callUseEffect(() => {
    if (state.store && state.store.gets) {
      try {
        var selected = state.store.gets[Object.keys(state.store.gets)[0]];
        console.log(selected, 'getting');

        if (selected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref6 = _asyncToGenerator(function* () {
              var {
                space,
                access,
                key
              } = selected;

              try {
                var read;

                if (space) {
                  read = yield state.spaces[space].instance[access].get(key);
                  console.log(read, 'read success');
                  dispatch({
                    type: 'GET_SUCCESS',
                    id: key,
                    access: access || 'public',
                    space,
                    payload: read
                  });
                } else {
                  read = yield state.instance[access].get(key);
                  dispatch({
                    type: 'GET_SUCCESS',
                    id: key,
                    access,
                    payload: read
                  });
                }
              } catch (error) {
                console.log(error);
                dispatch({
                  type: 'GET_FAILURE',
                  payload: error
                });
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
  }, [state.store.gets]);
  /**
   * @function Remove
   * @description Remove top level items.
   */

  callUseEffect(() => {
    if (state.store && state.store.removes) {
      try {
        var selected = state.store.removes[Object.keys(state.store.removes)[0]];

        if (selected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref7 = _asyncToGenerator(function* () {
              var {
                space,
                access,
                key
              } = selected;
              console.log(selected, 'remove selected');

              try {
                var read;

                if (space) {
                  read = yield state.spaces[space].instance[access].remove(key);
                } else {
                  read = yield state.instance[access].remove(key);
                }

                dispatch({
                  type: 'REMOVE_SUCCESS',
                  id: key,
                  space,
                  payload: read
                });
                dispatch({
                  type: "GET_REQUEST",
                  access,
                  key,
                  space
                });
              } catch (error) {
                console.log(error);
                dispatch({
                  type: 'REMOVE_FAILURE',
                  payload: error
                });
              }
            });

            return function runEffect() {
              return _ref7.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.store.removes]);
  /**
   * @function Deletes
   * @description Delete data from a nested object.
   */

  callUseEffect(() => {
    if (state.store && state.store.deletes) {
      try {
        var selected = state.store.deletes[Object.keys(state.store.deletes)[0]];

        if (selected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref8 = _asyncToGenerator(function* () {
              var {
                space,
                access,
                key,
                keyChild
              } = selected;

              try {
                var read, write;

                if (space) {
                  read = state.spaces[space][access][key].payload;
                  delete read[keyChild];
                  write = yield state.spaces[space].instance[access].set(key, read);
                } else {
                  read = state[access][key];
                  delete read[keyChild];
                  write = yield state.instance[access].set(read);
                }

                dispatch({
                  type: 'DELETE_SUCCESS',
                  id: key,
                  space,
                  payload: read
                });
              } catch (error) {
                console.log(error);
                dispatch({
                  type: 'DELETE_FAILURE',
                  payload: error
                });
              }
            });

            return function runEffect() {
              return _ref8.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.store.deletes]);
  /* -------------------------------- */

  /* Thread Management                */

  /* -------------------------------- */

  /**
   * @function ThreadGet
   * @description Get Thread List from Static Inputs
   */

  callUseEffect(() => {
    if (state.store && state.store.threads) {
      try {
        var selected = state.store.threads[Object.keys(state.store.threads)[0]];

        if (selected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref9 = _asyncToGenerator(function* () {
              var {
                space,
                threadName,
                firstModerator,
                members,
                options
              } = selected;
              console.log(selected, 'thread get selected');

              try {
                var read;
                read = yield state.static.getThread(space, threadName, firstModerator, members, options);
                dispatch({
                  type: 'GET_THREAD_SUCCESS',
                  space,
                  threadName,
                  payload: read
                });
              } catch (error) {
                console.log(error);
                dispatch({
                  type: 'GET_THREAD_FAILURE',
                  payload: error
                });
              }
            });

            return function runEffect() {
              return _ref9.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.store.threads]);
  /**
   * @function ThreadPostDelete
   * @description Open Space
   */

  callUseEffect(() => {
    if (state.async && state.async.threads) {
      var threadSelected = Object.keys(state.async.threads)[2];

      if (threadSelected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref10 = _asyncToGenerator(function* () {
            dispatch({
              type: "THREAD_DELETE_SUCCESS"
            });
          });

          return function runEffect() {
            return _ref10.apply(this, arguments);
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

  callUseEffect(() => {
    if (state.async && state.async.threads) {
      try {
        var threadSelected = state.async.threads[Object.keys(state.async.threads)[0]];

        if (threadSelected) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref11 = _asyncToGenerator(function* () {
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
              return _ref11.apply(this, arguments);
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

  callUseEffect(() => {
    if (state.async && state.async.posts) {
      try {
        console.log('THREAD STUFF');
        var postSelected = state.async.posts[Object.keys(state.async.posts)[0]];
        console.log(postSelected, 'thread post selected');

        if (postSelected && state.threads[postSelected.threadName]) {
          var runEffect =
          /*#__PURE__*/
          function () {
            var _ref12 = _asyncToGenerator(function* () {
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
                  portal.openToast({
                    content: _react.default.createElement(_atoms.Span, null, "Post Success"),
                    closeOnClick: true,
                    closeTimer: 3000
                  });
                  break;

                case 'threadPostDelete':
                  console.log(postSelected, 'DELETING');
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
              return _ref12.apply(this, arguments);
            };
          }();

          runEffect();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [state.async, state.async.posts]);
};

var _default = effects;
exports.default = _default;