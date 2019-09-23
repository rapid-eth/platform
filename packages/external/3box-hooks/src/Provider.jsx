import React, { useContext, useReducer, useEffect } from "react";
import Context from "./Context";

const reducerActions = (state, action) => {
  switch (action.type) {
    case 'setProfile':
      return {
        ...state,
        profile: action.profile,
      };
    case 'setAddress':
      return {
        ...state,
        address: action.address,
        // addressShortened: utilities.shortenAddress(action.address, 7)
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
        instance: action.profileInstance,
        spaces: action.spaces,
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
          profile: undefined,
          instance: undefined,
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
    case 'OPEN_SPACE_SUCCESS':
        return {
          ...state,
          spaces:{
            ...state.spaces,
            [action.space]: {
              instance: action.instance,
              threads: action.threads
            }
          }
        };
    
    case 'joinThread':
        return {
          ...state,
          async: {
            threads: {
              [action.threadName]: {
                space: action.space,
                threadName: action.threadName,
                threadAddress: action.threadAddress,
              }
            }
          }
        };
    case 'JOIN_THREAD_SUCCESS':
        return {
          ...state,
          threads:{
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

const Provider = ({ children, ...props}) => {
  const initialState = useContext(Context)
  const reducer = useReducer(reducerActions, initialState);

  // Fix ReferenceError: exports is not defined
  const state = reducer[0]
  const dispatch = reducer[1]
  console.log(state, 'Box Provider State')

  /**
   * @function setAddress
   * @description Set global address parameter in 3box instance.
   */
  useEffect(() => {
    dispatch({
      type: "setAddress",
      address: window.ethereum.selectedAddress
    })
  }, [window.ethereum.selectedAddress])
  
  /**
   * @function setProfile
   * @description Set global address parameter in 3box instance.
   */
  useEffect(() => {
    try {
      if (state.address) {
        state.instance.getProfile(state.address)
        .then( profile => {
          console.log(profile, 'profileprofileprofile')
          dispatch({
            type: "setProfile",
            profile
          })
        })
      }
    } catch (error) {
      console.log(error)
    }
  }, [state.address])

  /**
   * @function OpenBox
   * @description Manage Login
   */
  useEffect(() => {
    try {
      if(state.address && state.isLoggingIn) {
        const runEffect = async () => {
          const profileInstance = await state.instance.openBox(state.address, window.web3.currentProvider)
          const profile  = state.profile ? state.profile : await state.instance.getProfile(state.address)
          const list = await state.instance.listSpaces(state.address)
          let spaces = {}
          list.forEach(element => {
            spaces[element] = undefined
          });
          dispatch({
            type: "OPEN_SUCCESS",
            profile: profile,
            profileInstance: profileInstance,
            spaces
          })
        };
        runEffect();
      }
    } catch (error) {
      console.log(error)
      dispatch({
        type: "OPEN_FAILURE",
        err: 'Failed'
      })
    }

  }, [ state.isLoggingIn ])
  
  /**
   * @function CloseBox
   * @description Manage Logout
   */
  useEffect(() => {
    if(state.isLoggingOut) {
      try {
        state.instance.logout()
        .then( res => {
          dispatch({
            type: "LOGOUT_SUCCESS",
          })
        })
      } catch (error) {
        console.log(error)
        dispatch({
          type: "LOGOUT_FAILURE",
        })
      }
    }
  }, [state.isLoggingOut])


  /**
   * @function OpenSpace
   * @description Open Space
   */
  useEffect(() => {
    if (state.async && state.async.spaces) {
      const spaceSelected = Object.keys(state.async.spaces)[0]
      if(spaceSelected) {
        const runEffect = async () => {
          const space = await state.instance.openSpace(spaceSelected)
          const threads = await space.subscribedThreads()
          dispatch({
            type: "OPEN_SPACE_SUCCESS",
            instance: space,
            space: spaceSelected,
            threads
          })
        };
        runEffect();
      }
    }
  }, [state.async.spaces])
  
  /**
   * @function ThreadPostDelete
   * @description Open Space
   */
  useEffect(() => {
    if (state.async && state.async.threads) {
      const threadSelected = Object.keys(state.async.threads)[2]
      if(threadSelected) {
        const runEffect = async () => {
          dispatch({
            type: "THREAD_DELETE_SUCCESS",
          })
        };
        runEffect();
      }
    }
  }, [state.async.threads])

  /**
   * @function JoinThread
   * @description Open Space
   */
  useEffect(() => {
    if (state.async && state.async.threads) {
      try {
        console.log(state.async.threads)
        const threadSelected = state.async.threads[Object.keys(state.async.threads)[0]]
        console.log(threadSelected)
        if(threadSelected) {
          const runEffect = async () => {
            let thread, members, moderators
            if(threadSelected.threadAddress) {
              thread = await state.spaces[threadSelected.space].instance.joinThreadByAddress(threadSelected.threadAddress, threadSelected.options)
            } else {
              thread = await state.spaces[threadSelected.space].instance.joinThread(threadSelected.threadName, threadSelected.options)
            }
            const posts = await thread.getPosts()
            if(thread._members) {
              members = await thread.listMembers()
              moderators = await thread.listModerators()
            }
            dispatch({
              type: "JOIN_THREAD_SUCCESS",
              instance: thread,
              threadName: threadSelected.threadName,
              posts,
              members,
              moderators,
              space: threadSelected.space
            })
          };
          runEffect();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.async, state.async.threads])

  /**
   * @function ThreadPost
   * @description Add Post to Thread
   */
  useEffect(() => {
    if (state.async && state.async.posts) {
      try {
        const postSelected = state.async.posts[Object.keys(state.async.posts)[0]]
        console.log(postSelected, 'postSelected')
        if(postSelected && state.threads[postSelected.threadName]) {
          const runEffect = async () => {

            let posts
            switch (postSelected.type) {
              case 'threadPost':
                  await state.threads[postSelected.threadName].instance.post(postSelected.post)
                  posts = await state.threads[postSelected.threadName].instance.getPosts()
                  console.log(posts, 'posts')
                  dispatch({
                    type: "THREAD_POST_SUCCESS",
                    threadName: postSelected.threadName,
                    posts,
                  })
                break;
              case 'threadPostDelete':
                  await state.threads[postSelected.threadName].instance.deletePost(postSelected.postId)
                  posts = await state.threads[postSelected.threadName].instance.getPosts()
                  dispatch({
                    type: "THREAD_POST_DELETE_SUCCESS",
                    threadName: postSelected.threadName,
                    posts,
                  })
                break;
            
              default:
                break;
            }
          };
          runEffect();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.async, state.async.posts])

  
  

  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
      open: () => dispatch({type: 'open'}),
      logout: () => dispatch({type: 'logout'}),
      openSpace: (space) => dispatch({
        type: 'openSpace',
        space
      }),
      joinThread: ({ threadName, threadAddress, space, options}) => dispatch({
        type: 'joinThread',
        threadName,
        threadAddress,
        options,
        space
      }),
      threadPost: ({ threadName, post }) => dispatch({
        type: 'threadPost',
        threadName,
        post
      }),
      threadPostDelete: ({ threadName, postId }) => dispatch({
        type: 'threadPostDelete',
        threadName,
        postId
      }),
    }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;