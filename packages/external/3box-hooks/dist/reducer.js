"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (state, action) => {
  switch (action.type) {
    case 'GET_PROFILE_REQUEST':
      return _objectSpread({}, state, {
        store: {
          profiles: {
            [action.address]: action
          }
        }
      });

    case 'GET_PROFILE_SUCCESS':
      return _objectSpread({}, state, {
        profiles: _objectSpread({}, state.profiles, {
          [action.id]: action.payload
        })
      });

    case 'setProfile':
      return _objectSpread({}, state, {
        profile: action.profile
      });

    case 'setAddress':
      return _objectSpread({}, state, {}, action);

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
        verifications: action.verified,
        instance: action.profileInstance,
        isLoggingIn: false,
        isLoggedIn: true
      });

    case 'OPEN_FAILURE':
      return _objectSpread({}, state);

    case 'LOGOUT_SUCCESS':
      return _objectSpread({}, state, {
        box: undefined,
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

    /* ------------------ */

    /* Space Get                */

    /* ------------------ */

    case 'GET_SPACE_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          spaces: [action // ...state.store.gets,
          ]
        })
      });

    case 'GET_SPACE_SUCCESS':
      if (action.space) {
        return _objectSpread({}, state, {
          spaces: _objectSpread({}, state.spaces, {
            [action.space]: _objectSpread({}, state.spaces[action.space], {
              [action.access]: _objectSpread({}, action.payload)
            })
          })
        });
      } else {
        return _objectSpread({}, state, {
          store: {
            gets: []
          }
        });
      }

    case 'GET_SPACE_FAILURE':
      return _objectSpread({}, state, {
        store: {
          spaces: []
        }
      });

    case 'OPEN_SPACE_SUCCESS':
      return _objectSpread({}, state, {
        spaces: _objectSpread({}, state.spaces, {
          [action.space]: _objectSpread({}, state.spaces[action.space], {
            instance: action.instance,
            threads: action.threads
          })
        })
      });

    /* ------------------ */

    /* Get                */

    /* ------------------ */

    case 'GET_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          gets: [action // ...state.store.gets,
          ]
        })
      });

    case 'GET_SUCCESS':
      if (action.space) {
        return _objectSpread({}, state, {
          store: {
            gets: []
          },
          spaces: _objectSpread({}, state.spaces, {
            [action.space]: _objectSpread({}, state.spaces[action.space], {
              [action.access]: _objectSpread({}, state.spaces[action.space][action.access], {
                [action.id]: action.payload
              })
            })
          })
        });
      } else {
        return _objectSpread({}, state, {
          store: {
            gets: []
          }
        });
      }

    case 'GET_FAILURE':
      return _objectSpread({}, state, {
        store: {
          gets: []
        }
      });

    /* ------------------ */

    /* Set */

    /* ------------------ */

    case 'SET_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          sets: [action]
        })
      });

    case 'SET_REQUEST_SUCCESS':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          sets: []
        })
      });

    case 'SET_REQUEST_FAILURE':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          sets: []
        })
      });

    /* ------------------ */

    /* Remove                */

    /* ------------------ */

    case 'REMOVE_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          removes: [action // ...state.store.removes,
          ]
        })
      });

    case 'REMOVE_SUCCESS':
      if (action.space) {
        return _objectSpread({}, state, {
          spaces: _objectSpread({}, state.spaces, {
            [action.space]: _objectSpread({}, state.spaces[action.space])
          })
        });
      } else {
        return _objectSpread({}, state, {
          store: _objectSpread({}, state.store, {
            removes: []
          })
        });
      }

    case 'REMOVE_FAILURE':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          removes: []
        })
      });

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
      return _objectSpread({}, state, {
        store: {
          removes: []
        }
      });

    /* ------------------ */

    /* Thread             */

    /* ------------------ */

    case 'joinThread':
      return _objectSpread({}, state, {
        async: {
          threads: {
            [action.threadName]: _objectSpread({}, action)
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

    /* ------------------ */

    /* Thread Get             */

    /* ------------------ */

    case 'GET_THREAD_REQUEST':
      return _objectSpread({}, state, {
        store: _objectSpread({}, state.store, {
          threads: [// ...state.store.threads,
          action]
        })
      });

    case 'GET_THREAD_SUCCESS':
      if (action.space) {
        return _objectSpread({}, state, {
          store: _objectSpread({}, state.store, {
            threads: []
          }),
          threads: _objectSpread({}, state.threads, {
            [action.threadName]: _objectSpread({}, state.threads[action.threadName], {
              posts: action.payload
            })
          })
        });
      } else {
        return _objectSpread({}, state, {
          store: _objectSpread({}, state.store, {
            threads: []
          })
        });
      }

    case 'GET_THREAD_FAILURE':
      return _objectSpread({}, state, {
        store: {
          threads: []
        }
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

exports.default = _default;