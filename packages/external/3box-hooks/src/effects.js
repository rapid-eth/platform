import React, { useContext, useReducer, useEffect } from "react";
import { shortenAddress, isAddress } from './utilities'
import { PortalContext } from "@horizin/react-hooks-portal";
import { Span } from '@horizin/design-system/dist/atoms';

const effects = (callUseEffect, state, dispatch) => {
  const portal = useContext(PortalContext)
/* -------------------------------- */
/* General Functions                */
/* -------------------------------- */

/**
   * @function AutoLogin
   * @description Set global address parameter in 3box instance.
   */
  callUseEffect(() => {
    if(state.isLoginAuto && state.address) {
      dispatch({ type: 'open' })
    }
  }, [state.isLoginAuto, state.address])
/**
   * @function setAddress
   * @description Set global address parameter in 3box instance.
   */
  callUseEffect(() => {
    const address = window.ethereum.selectedAddress
    if(isAddress(address)) {
      dispatch({
        type: "setAddress",
        address,
        addressShortened: shortenAddress(address, 6),
        addressTrimmed: address.substring(0, 10)
        
      })
    }
  }, [window.ethereum.selectedAddress])

  /**
   * @function setProfile
   * @description Set global address parameter in 3box instance.
   */

  callUseEffect(() => {
    try {
      if (state.address) {
        state.static.getProfile(state.address)
          .then(profile => {
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
        const runEffect = async () => {
          const profileInstance = await state.static.openBox(state.address, window.web3.currentProvider)
          const profile = state.profile ? state.profile : await state.static.getProfile(state.address)
          const list = await state.static.listSpaces(state.address)
          const verified = await state.static.getVerifiedAccounts(profile)
          let spaces = {}
          list.forEach(element => {
            spaces[element] = undefined
          });
          portal.openToast({
            label: 'Login Success',
            closeOnClick: true,
            closeTimer: 3000,
            styled: {}
          })
          dispatch({
            type: "OPEN_SUCCESS",
            profile: profile,
            profileInstance: profileInstance,
            spaces,
            verified
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

  }, [state.isLoggingIn])

  /**
   * @function CloseBox
   * @description Manage Logout
   */
  callUseEffect(() => {
    if (state.isLoggingOut) {
      try {
        state.instance.logout()
        .then(res => {
          dispatch({
            type: "LOGOUT_SUCCESS",
          })
          portal.openToast({
            label: 'Goodbye',
            closeOnClick: true,
            closeTimer: 3000,
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
   * @function GetProfile
   * @description Get the Profile
   */
  callUseEffect(() => {
    if (state.store && state.store.profiles) {
      const spaceSelected = Object.keys(state.store.profiles)[0]
      if (spaceSelected) {
        const runEffect = async () => {
          const profile = await state.static.getProfile(spaceSelected)
          dispatch({
            type: "GET_PROFILE_SUCCESS",
            payload: profile,
            id: spaceSelected
          })
        };
        runEffect();
      }
    }
  }, [state.store.profiles])


  /**
   * @function GetSpace
   * @description Remove top level items.
   */
  callUseEffect(() => {
    if (state.store && state.store.spaces) {
      try {
        const selected = state.store.spaces[Object.keys(state.store.spaces)[0]]
        if (selected) {


        const runEffect = async () => {
          const { space, address } = selected
          try {
            const read = await state.static.getSpace(address, space)
            console.log(read, 'static read')
            dispatch({
              type: 'GET_SPACE_SUCCESS',
              space,
              access: 'public',
              payload: read
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'GET_SPACE_FAILURE',
              payload: error
            })
          }
        }

        runEffect();
        }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store.spaces])


  /**
   * @function OpenSpace
   * @description Open Space
   */
  callUseEffect(() => {
    if (state.instance.openSpace, state.async && state.async.spaces) {
      const spaceSelected = Object.keys(state.async.spaces)[0]
      if (spaceSelected) {
        try {
          const runEffect = async () => {
            let threads
            const space = await state.instance.openSpace(spaceSelected)
            if(space) {
              threads = await space.subscribedThreads()
            }
            dispatch({
              type: "OPEN_SPACE_SUCCESS",
              instance: space,
              space: spaceSelected,
              threads
            })
          };
          runEffect();
          
        } catch (error) {
          console.log(error)
        }
      }
    }
  }, [state.instance.openSpace, state.async.spaces])


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
        const selected = state.store.sets[Object.keys(state.store.sets)[0]]
        console.log(selected, 'selected')
        if(selected) {


        const runEffect = async () => {
          let listUpdated
          const { access, key, keys, inputs, space, append, override } = selected
          try {
            if(space) {
              if(append) {
                const data = await state.spaces[space].instance[access].get(append)
                if(data) {
                  /**
                   * IF : key
                   * TRUE : Update object 
                   * FALSE : Update array 
                   */
                  if(key) {
                    listUpdated = {
                      ...data,
                      [key]: inputs
                    }
                  } else {
                    listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
                  }
                } else {
                  if(key) {
                    listUpdated = {[key]: inputs}
                  } else {
                    listUpdated = [inputs]
                  }
                }
                const list = await state.spaces[space].instance[access].set(append, listUpdated)
                dispatch({
                  type: "SET_REQUEST_SUCCESS",
                  payload: list
                })
                if(selected.update) {
                  dispatch({
                    type: "GET_REQUEST",
                    access,
                    key: selected.update,
                    space,
                  })
                }
              } else {
                await state.spaces[space].instance[access].setMultiple(keys, inputs)
                dispatch({
                  type: "SET_REQUEST_SUCCESS",
                })
                if(selected.update) {
                  dispatch({
                    type: "GET_REQUEST",
                    access,
                    key: selected.update,
                    space,
                  })
                }
              }
              
            } else {
              if(append) {
                const data = await state.instance[access].get(append)
                if(data) {
                  listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs]
                } else {
                  listUpdated = [inputs]
                }
                Array.isArray(data)
                  ? await state.instance[access].set(append, listUpdated)
                  : !override // todo set system for overriding data... add to backup space? 
                    ? await state.instance[access].set(append, listUpdated)
                    : null
  
              } else {
                // await state.instance[access].setMultiple(keys, inputs)
              }
            }
          } catch (error) {
            console.log(error)
            dispatch({
              type: "SET_REQUEST_FAILURE",
            })
          }


        }
        runEffect();
      }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store, state.store.sets])

  /**
   * @function Get
   * @description Manage global get requests.
   */
  callUseEffect(() => {
    if (state.store && state.store.gets) {
      try {
        const selected = state.store.gets[Object.keys(state.store.gets)[0]]
        console.log(selected, 'getting')
        if (selected) {
        const runEffect = async () => {
          const { space, access, key } = selected
          try {
            let read
            if(space) {
              read = await state.spaces[space].instance[access].get(key)
              console.log(read, 'read success')
              dispatch({
                type: 'GET_SUCCESS',
                id: key,
                access: access || 'public',
                space,
                payload: read
              })
            } else {
              read = await state.instance[access].get(key)
              dispatch({
                type: 'GET_SUCCESS',
                id: key,
                access,
                payload: read
              })
            }
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'GET_FAILURE',
              payload: error
            })
          }


        }
        runEffect();
      }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store.gets])

  /**
   * @function Remove
   * @description Remove top level items.
   */
  callUseEffect(() => {
    if (state.store && state.store.removes) {
      try {
        const selected = state.store.removes[Object.keys(state.store.removes)[0]]
        if (selected) {
        const runEffect = async () => {
          const { space, access, key } = selected
          console.log(selected, 'remove selected')
          try {
            let read
            if(space) {
              read = await state.spaces[space].instance[access].remove(key)
            } else {
              read = await state.instance[access].remove(key)
            }
            dispatch({
              type: 'REMOVE_SUCCESS',
              id: key,
              space,
              payload: read
            })
            dispatch({
              type: "GET_REQUEST",
              access,
              key,
              space,
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'REMOVE_FAILURE',
              payload: error
            })
          }


        }
        runEffect();
      }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store.removes])

  /**
   * @function Deletes
   * @description Delete data from a nested object.
   */
  callUseEffect(() => {
    if (state.store && state.store.deletes) {
      try {
        const selected = state.store.deletes[Object.keys(state.store.deletes)[0]]
        if (selected) {
        const runEffect = async () => {
          const { space, access, key, keyChild } = selected
          try {
            let read, write
            if(space) {
              read = state.spaces[space][access][key].payload
              delete read[keyChild]
              write = await state.spaces[space].instance[access].set(key, read)
            } else {
              read = state[access][key]
              delete read[keyChild]
              write = await state.instance[access].set(read)
            }
            dispatch({
              type: 'DELETE_SUCCESS',
              id: key,
              space,
              payload: read
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'DELETE_FAILURE',
              payload: error
            })
          }


        }
        runEffect();
      }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store.deletes])



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
        const selected = state.store.threads[Object.keys(state.store.threads)[0]]
        if (selected) {
        const runEffect = async () => {
          const { space, threadName, firstModerator, members, options } = selected
          console.log(selected, 'thread get selected')
          try {
            let read
            read = await state.static.getThread(space, threadName, firstModerator, members, options)
            dispatch({
              type: 'GET_THREAD_SUCCESS',
              space,
              threadName,
              payload: read
            })
          } catch (error) {
            console.log(error)
            dispatch({
              type: 'GET_THREAD_FAILURE',
              payload: error
            })
          }


        }
        runEffect();
      }
      } catch (error) {
        console.log(error)
      }
    }
  }, [state.store.threads])


  /**
   * @function ThreadPostDelete
   * @description Open Space
   */
  callUseEffect(() => {
    if (state.async && state.async.threads) {
      const threadSelected = Object.keys(state.async.threads)[2]
      if (threadSelected) {
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
  callUseEffect(() => {
    if (state.async && state.async.threads) {
      try {
        const threadSelected = state.async.threads[Object.keys(state.async.threads)[0]]
        if (threadSelected) {
          const runEffect = async () => {
            let thread, members, moderators
            if (threadSelected.threadAddress) {
              thread = await state.spaces[threadSelected.space].instance.joinThreadByAddress(threadSelected.threadAddress, threadSelected.options)
            } else {
              thread = await state.spaces[threadSelected.space].instance.joinThread(threadSelected.threadName, threadSelected.options)
            }
            const posts = await thread.getPosts()
            if (thread._members) {
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
  callUseEffect(() => {
    if (state.async && state.async.posts) {
      try {
        console.log('THREAD STUFF')
        const postSelected = state.async.posts[Object.keys(state.async.posts)[0]]
        console.log(postSelected, 'thread post selected')
        if (postSelected && state.threads[postSelected.threadName]) {
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
                portal.openToast({
                  content: <Span>Post Success</Span>,
                  closeOnClick: true,
                  closeTimer: 3000,
                })
                break;
              case 'threadPostDelete':
                  console.log(postSelected, 'DELETING')
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
}

export default effects
