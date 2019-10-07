/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- Local2 Dependencies --- */
import { isAddress } from '../utilities'
import Component from './Component'

/* --- React Component --- */
const StorageSelector = ({ box, selector, ...props }) => {
  const [ address, setAddress ] = useState(props.address)
  const [ space, setSpace ] = useState(props.space)
  const [ selection, setSelection ] = useState()
  const [ dispatched, setDispatched ] = useState()
  console.log(props, 'storage lookup')
  /**
   * @function LoadGlobalConfigurationEffect
   * @description Read from the global configuration for default props.
   */
  const LoadGlobalConfigurationEffect = () => useEffect( () => { 
    if(!space && box.config.cms.space) {
      setSpace(box.config.cms.space)
    }
    if(!address && box.config.cms.address) {
      setAddress(box.config.cms.address)
    }
  }, [space, address])

  /**
   * @function GetSpaceEffect
   * @description IF proper conditions are met request space.
   */
  const GetSpaceEffect = () => useEffect( () => { 
    if(isAddress(address) && space && !dispatched) {
      box.getSpace({address, space})
      setDispatched(true)
    }
  }, [address, space, dispatched])

  /**
   * @function SetSelectionEffect
   * @description Read data from state storage.
   */
  const SetSelectionEffect = ()=> useEffect(() => { 
    setSelection(dot(box).get(`data.spaces.${selector}`).value())
  }, [dot(box).get(`data.spaces.${selector}`).value()])

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
  if(props.canRequestData) GetSpaceEffect()
  if(props.isRefresh) SetSelectionEffect()
  if(!props.isRefresh) SetSelectionOnceEffect()
  
  /* --- Return Component ---*/
  return <Component
            selection={selection}
            pass={{
              styled: props.styled,
              ...props.pass,
            }}
            spreadObject={props.spreadObject}
            component={props.component}
          />
}

StorageSelector.defaultProps = {
  canRequestData: true,
  component: () => null,
  isGlobalConfig: true,
  isRefresh: true,
}

StorageSelector.propTypes = {
  address: PropTypes.string,
  canRequestData: PropTypes.bool,
  component: PropTypes.func.isRequired,
  isGlobalConfig: PropTypes.bool,
  isRefresh: PropTypes.bool,
  selector: PropTypes.string,
  space: PropTypes.string,
}

export default props =><BoxWrapper><StorageSelector {...props} /></BoxWrapper>
