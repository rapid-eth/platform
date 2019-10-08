import React, { useContext, useReducer, useEffect } from "react";
import Context from "./Context";
import ProviderEffects from "./effects";
import { shortenAddress, } from './utilities'
import reducerActions from './reducer'

const Provider = ({ children, ...props }) => {
  const initialState = useContext(Context)
  const reducer = useReducer(reducerActions, initialState);
  // Fix ReferenceError: exports is not defined
  const state = reducer[0]
  const dispatch = reducer[1]

  console.log(state, 'Box Provider State')
  ProviderEffects(useEffect, state, dispatch)

  const stringToArrayPath = data => typeof data === 'string' ? data.split('.') : data
  const idxx = (state, nest) =>
  [state, ...stringToArrayPath(nest)]
    .reduce((branch, index) => {
      if (typeof index === 'string' && branch) {
        return branch[index]
      } else {
        nest = index
      }
    })

  return (
    <Context.Provider value={{
      ...state,
      dispatch: dispatch,
      setConfig: (config) => ({...state.config, ...config}),
      selector: (select) => idxx(state, select),
      open: () => dispatch({ type: 'OPEN_REQUEST' }), // deprecate

      login: () => dispatch({ type: 'OPEN_REQUEST' }),
      logout: () => dispatch({ type: 'logout' }),
      enable:() => dispatch({ type: 'ENABLE_REQUEST' }),
      /* -------------------------------- */
      /* Static
      /* -------------------------------- */
      
      /* --- Profiles (https://docs.3box.io/api/profiles#get) --- */
      getProfile: (address) => dispatch({
        type: 'GET_PROFILE_REQUEST',
        address
      }),
      getProfileList: (addresses) => dispatch({
        type: 'GET_PROFILE_LIST_REQUEST',
        address
      }),

      /* --- Spaces (https://docs.3box.io/api/storage#get) --- */
      getSpace: ({ address, space }) => dispatch({
        type: 'GET_SPACE_REQUEST',
        address,
        space,
      }),
      listSpaces: ({ address, space }) => dispatch({
        type: 'GET_SPACES_REQUEST',
        address,
        space,
      }),
      
      /* --- Threads (https://docs.3box.io/api/messaging#static-1) --- */
      getThread: ({ space, threadName, firstModerator, members, options }) => dispatch({
        type: 'GET_THREAD_REQUEST',
        space,
        threadName,
        firstModerator,
        members,
        options,
      }),
      getThreadByAddress: ({ threadAddress }) => dispatch({
        type: 'GET_THREAD_BY_ADDRESS_REQUEST',
        threadAddress
      }),
      
      /* -------------------------------- */
      /* Stateful
      /* -------------------------------- */
      /* --- Authentication (https://docs.3box.io/api/auth) --- */
      openSpace: (space) => dispatch({
        type: 'OPEN_SPACE_REQUEST',
        space
      }),
      
      /* --- Storage (https://docs.3box.io/api/storage) --- */
      // Default 3Box CRUD
      get: ({ key, access, space }) => dispatch({
        type: 'GET_REQUEST',
        space,
        access,
        key,
      }),
      set: ({keys, key, insert, inputs, access, space, append, update}) => dispatch({
        type: 'SET_REQUEST',
        append: insert || append,
        keys,
        key,
        inputs,
        access,
        space,
        update
      }),
      setMultiple: ({ space, access, keys, inputs }) => dispatch({
        type: 'SET_MULTIPLE_REQUEST',
        append: insert || append,
        keys,
        inputs,
        access,
        space,
        update
      }),
      remove: ({key, access, space }) => dispatch({
        type: 'REMOVE_REQUEST',
        key,
        access,
        space
      }),
      
      // Enhanced 3Box CRUD
      /**
       * @function insert
       * @description Insert value into object or array.
       * @todo Support dot notation to merge index and key, plus support lodash deep merge.
       */
      insert: ({ space, access, index, key, value }) => dispatch({
        type: 'INSERT_REQUEST',
        space,
        access,
        index,
        key,
        value,
      }),
      /**
       * @function delete
       * @description Delete value from object.
       * @todo Support dot notation to merge index and key.
       */
      delete: ({ space, access, index, key }) => dispatch({
        type: 'DELETE_REQUEST',
        space,
        access,
        index,
        key,
      }),
      
      /* --- Messageing (https://docs.3box.io/api/messaging) --- */
      joinThread: ({ threadName, threadAddress, space, options }) => dispatch({
        type: 'JOIN_THREAD_REQUEST',
        threadName: threadName,
        threadAddress,
        options,
        space
      }),
      threadPost: ({ threadName, post }) => dispatch({
        type: 'THREAD_POST_PUBLISH_REQUEST',
        threadName,
        post
      }),
      threadPostDelete: ({ threadName, postId }) => dispatch({
        type: 'THREAD_POST_DELETE_REQUEST',
        threadName,
        postId
      }),
    }}>
      {children}
    </Context.Provider>
  );
}

export default Provider;