export default (state, action) => {
  switch (action.type) {
    case 'GET_PROFILE_REQUEST':
      return {
        ...state,
        store: {
          profiles: {
            [action.address]: action
          }
        }
      };
    case 'GET_PROFILE_SUCCESS':
      return {
        ...state,
        profiles: {
          ...state.profiles,
          [action.id]: action.payload
        }
      };
    case 'setProfile':
      return {
        ...state,
        profile: action.profile,
      };
    case 'setAddress':
      return {
        ...state,
        ...action
      };
    case 'open':
      return {
        ...state,
        isLoggingIn: true
      };
    case 'logout':
      return {
        ...state,
        isLoggingOut: true
      };
    case 'OPEN_SUCCESS':
      return {
        ...state,
        profile: action.profile,
        verifications: action.verified,
        instance: action.profileInstance,
        isLoggingIn: false,
        isLoggedIn: true
      };
    case 'OPEN_FAILURE':
      return {
        ...state,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        box: undefined,
        isLoggedIn: false,
        spaces: {},
        threads: {}
      };
    case 'LOGOUT_FAILURE':
      return state
    case 'openSpace':
      return {
        ...state,
        async: {
          spaces: {
            [action.space]: true
          }
        }
      };

    /* ------------------ */
    /* Space Get                */
    /* ------------------ */
    case 'GET_SPACE_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          spaces: [
            action,
            // ...state.store.gets,
          ]
        }
      };
    case 'GET_SPACE_SUCCESS':
      if(action.space) {
        return {
          ...state,
          spaces: {
            ...state.spaces,
            [action.space]: {
              ...state.spaces[action.space],
              [action.access]: {
                ...action.payload
              }
            }
          }
        };
      } else {
        return {
          ...state,
          store: {
            gets: []
          }
        };

      }
    case 'GET_SPACE_FAILURE':
      return {
        ...state,
        store: {
          spaces: []
        }
      };

    case 'OPEN_SPACE_SUCCESS':
      return {
        ...state,
        spaces: {
          ...state.spaces,
          [action.space]: {
            ...state.spaces[action.space],
            instance: action.instance,
            threads: action.threads
          }
        }
      };

    /* ------------------ */
    /* Get                */
    /* ------------------ */
    case 'GET_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          gets: [
            action,
            // ...state.store.gets,
          ]
        }
      };
    case 'GET_SUCCESS':
      if(action.space) {
        return {
          ...state,
          store: {
            gets: []
          },
          spaces: {
            ...state.spaces,
            [action.space]: {
              ...state.spaces[action.space],
              [action.access]: {
                ...state.spaces[action.space][action.access],
                [action.id]: action.payload
              }
            }
          }
        };
      } else {
        return {
          ...state,
          store: {
            gets: []
          }
        };

      }
    case 'GET_FAILURE':
      return {
        ...state,
        store: {
          gets: []
        }
      };

    /* ------------------ */
    /* Set */
    /* ------------------ */
    case 'SET_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          sets: [
            action
          ]
        }
      };
    case 'SET_REQUEST_SUCCESS':
      return {
        ...state,
        store: {
          ...state.store,
          sets: []
        }
      };
    case 'SET_REQUEST_FAILURE':
      return {
        ...state,
        store: {
          ...state.store,
          sets: []
        }
      };

    /* ------------------ */
    /* Remove                */
    /* ------------------ */
    case 'REMOVE_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          removes: [
            action,
            // ...state.store.removes,
          ]
        }
      };
    case 'REMOVE_SUCCESS':
      if(action.space) {
        return {
          ...state,
          spaces: {
            ...state.spaces,
            [action.space]: {
              ...state.spaces[action.space],
            }
          }
        };
      } else {
        return {
          ...state,
          store: {
            ...state.store,
            removes: []
          }
        };

      }
    case 'REMOVE_FAILURE':
      return {
        ...state,
        store: {
          ...state.store,
          removes: []
        }
      };
    
    /* ------------------ */
    /* Delete             */
    /* ------------------ */
    case 'DELETE_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          deletes: [
            action,
          ]
        }
      };
    case 'DELETE_SUCCESS':
      if(action.space) {
        return {
          ...state,
          store: {
            ...state.store,
            deletes: []
          },
          spaces: {
            ...state.spaces,
            [action.space]: {
              ...state.spaces[action.space],
            }
          }
        };
      } else {
        return {
          ...state,
          store: {
            deletes: []
          }
        };
      }
    case 'DELETE_FAILURE':
      return {
        ...state,
        store: {
          removes: []
        }
      };
    
    /* ------------------ */
    /* Thread             */
    /* ------------------ */
    case 'joinThread':
      return {
        ...state,
        async: {
          threads: {
            [action.threadName]: {
              ...action
            }
          }
        }
      };
    case 'JOIN_THREAD_SUCCESS':
      return {
        ...state,
        threads: {
          ...state.threads,
          [action.threadName]: {
            instance: action.instance,
            posts: action.posts,
            members: action.members,
            moderators: action.moderators
          }
        },

        // spaces: {
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
      };

    /* ------------------ */
    /* Thread Get             */
    /* ------------------ */
    case 'GET_THREAD_REQUEST':
      return {
        ...state,
        store: {
          ...state.store,
          threads: [
            // ...state.store.threads,
            action,
          ]
        }
      };
    case 'GET_THREAD_SUCCESS':
      if(action.space) {
        return {
          ...state,
          store: {
            ...state.store,
            threads: []
          },
          threads: {
            ...state.threads,
            [action.threadName]: {
              ...state.threads[action.threadName],
              posts: action.payload
            }
          }
        };
      } else {
        return {
          ...state,
          store: {
            ...state.store,
            threads: []
          }
        };
      }
    case 'GET_THREAD_FAILURE':
      return {
        ...state,
        store: {
          threads: []
        }
      };  
    case 'threadPost':
      return {
        ...state,
        async: {
          posts: {
            [action.threadName]: {
              type: action.type,
              threadName: action.threadName,
              post: action.post
            }
          }
        }
      }
    case 'threadPostDelete':
      return {
        ...state,
        async: {
          posts: {
            [action.postId]: {
              type: action.type,
              threadName: action.threadName,
              postId: action.postId
            }
          }
        }
      }
    case 'THREAD_POST_SUCCESS':
      return {
        ...state,

        threads: {
          [action.threadName]: {
            ...state.threads[action.threadName],
            posts: action.posts
          }
        }
      }
    case 'THREAD_POST_DELETE_SUCCESS':
      return {
        ...state,

        threads: {
          [action.threadName]: {
            ...state.threads[action.threadName],
            posts: action.posts
          }
        }
      }
    default:
      throw new Error('No Reducer Type Set');
  }
}