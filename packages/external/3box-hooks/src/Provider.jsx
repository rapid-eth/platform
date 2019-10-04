import idx from 'idx'
import React, { useContext, useReducer, useEffect } from "react";
import Context from "./Context";
import { PortalContext } from "@horizin/react-hooks-portal";
import { Box } from '@horizin/design-system/dist/atoms';

import ProviderEffects from "./effects";
import { shortenAddress, } from './utilities'
import reducerActions from './reducer'

const ComponentTest = props =>
<Box card>
  Welcome back.
</Box>

const Provider = ({ children, ...props }) => {
  const portal = useContext(PortalContext)
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
      selector: (select) => idxx(state, select),
      enable: async () => {
        const accounts = await window.ethereum.enable()
        const address = accounts[0]
        if(address) {
          dispatch({
            type: "setAddress",
            address,
            addressShortened: shortenAddress(address, 6),
            addressTrimmed: address.substring(0, 10)
            
          })
        }
      },
      open: () => dispatch({ type: 'open' }),
      logout: () => dispatch({ type: 'logout' }),
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
        access: access || access,
        space,
        update
      }),
      remove: ({key, access, space }) => dispatch({
        type: 'REMOVE_REQUEST',
        key,
        access,
        space
      }),
      delete: ({key, keyChild, inputs, access, space, append}) => dispatch({
        type: 'DELETE_REQUEST',
        key,
        keyChild,
        access,
        space
      }),
      getSpace: ({ address, space }) => dispatch({
        type: 'GET_SPACE_REQUEST',
        address,
        space,
      }),
      openSpace: (space) => dispatch({
        type: 'openSpace',
        space
      }),
      getProfile: (address) => dispatch({
        type: 'GET_PROFILE_REQUEST',
        address
      }),
      getThread: ({ space, threadName, firstModerator, members, options }) => dispatch({
        type: 'GET_THREAD_REQUEST',
        space,
        threadName,
        firstModerator,
        members,
        options,
      }),
      joinThread: ({ threadName, threadAddress, space, options }) => dispatch({
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