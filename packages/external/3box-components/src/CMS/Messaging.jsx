/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- Local2 Dependencies --- */
import Component from './Component'

/* --- React Component --- */
const MessagingSelector = ({ box, selector, ...props }) => {
  /* --- Iternal State --- */
  const [ selection, setSelection ] = useState()
  const [ dispatched, setDispatched ] = useState()

  
  /* --- Passed State --- */
  const [ space, setSpace ] = useState(props.space)
  const [ firstModerator, setfirstModerator ] = useState(props.firstModerator)
  const [ threadName ] = useState(props.threadName)
  const [ threadAddress ] = useState(props.threadAddress)
  const [ members ] = useState(props.members)
  const [ options ] = useState(props.options)
  
  console.log(props, space, threadName, firstModerator, members, 'message prps')
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */
  const LoadGlobalConfigurationEffect = () => useEffect( () => { 
    if(!space && box.config.cms.space) {
      setSpace(box.config.cms.space)
    }
    // if(!firstModerator && box.config.cms.address) {
    //   setfirstModerator(box.config.cms.address)
    // }
  }, [space, firstModerator])

  /**
   * @function GetThreadEffect
   * @description IF proper conditions are met request space.
   */
  const GetThreadEffect = () => useEffect( () => { 
    if(space && threadName && firstModerator && !dispatched) {
      if(threadAddress)
        box.getThreadByAddress({
          threadAddress,
        })
      else
        box.getThread({
          space,
          threadName,
          firstModerator,
          members: members || false,
          options, // opts.profileServer
        })
      setDispatched(true)
    }
  }, [space, threadName, dispatched])

  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */
  const SetSelectionEffect = ()=> useEffect(() => { 
    setSelection(dot(box).get(`data.threads.${threadName}.posts`).value())
  }, [dot(box).get(`data.threads.${threadName}.posts`).value()])
  /**
   * @function SetSelectionOnceEffect
   * @description Read data from state storage once.
   */
  const SetSelectionOnceEffect = ()=> useEffect(() => { 
    if(!selection)
      setSelection(dot(box).get(`data.spaces.${selector}`).value())
  }, [selection, dot(box).get(`data.spaces.${selector}`).value()])


  /* --- Init Effects ---*/
  if(props.isGlobalConfig) LoadGlobalConfigurationEffect()
  if(props.canRequestData) GetThreadEffect()
  if(props.isRefresh) SetSelectionEffect()
  // if(!props.isRefresh) SetSelectionOnceEffect()
  
  /* --- Return Component ---*/
  return <Component
    selection={selection}
    styled={{m: 2}}
    pass={{
      ...props.pass,
      styled: props.styled,
      threadAddress,
      threadName,
      space
    }}
    component={props.component}
  />
}

MessagingSelector.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: true,
  isRefresh: true,
  members: true,
}

MessagingSelector.propTypes = {
  canRequestData: PropTypes.bool,
  component: PropTypes.func.isRequired,
  firstModerator: PropTypes.string,
  isGlobalConfig: PropTypes.bool,
  isRefresh: PropTypes.bool,
  members: PropTypes.bool,
  selector: PropTypes.string,
  space: PropTypes.string,
  threadAddress: PropTypes.string,
  threadName: PropTypes.string,
}

export default props =><BoxWrapper><MessagingSelector {...props} /></BoxWrapper>
