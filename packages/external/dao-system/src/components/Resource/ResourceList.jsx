
import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import ResourceItem from './components/ResourceItemSmall'

/**
 * @function ResourceListComponent
 * @description Manage a generic decentralized comment system.
 * @return {Array} A list of thread posts initialized in component. 
 */
const ResourceListComponent = ({ box,...props }) => {
  const [ isDispatched, setDispatched ] = useState()
  const [ list, setList ] = useState()
  console.log(list, 'listlist')
  /* -------------------- */
  /* Effects
  /* -------------------- */
  /**
   * @function GetEffect
   * @description Watch global state for thread post list.
   */
  const GetEffect = () => useEffect( () => {
    if (!list && !isDispatched) {
      box.getSpace({
        address: props.address,
        space: props.space,
        key: props.key,
        access: props.access
      })
      setDispatched(true)
    }
  }, [box.spaces])

  /**
   * @function SetListEffect
   */
  const SetListEffect = () => useEffect( () => {
    if (!list && idx(box, _=>_.spaces[props.space].public[props.key])) {
      const list = idx(box, _=>_.spaces[props.space].public[props.key])
      setList(list) 
    }
  }, [box.spaces])

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */
  GetEffect()
  SetListEffect()

  /* -------------------- */
  /* List Component
  /* -------------------- */
  return (
    list && Array.isArray(list) ?
    list.map( item=> (
    ! React.isValidElement(props.component)
      ? React.createElement(props.component, {
          ...item,
        })
      : props.component
    ))
    : null
  );
}

/**
 * @function ResourceListStateful
 * @description Wrap component with 3Box global state(context).
 * @return {Array} Higher Order(ish) React Component
 */
const ResourceListStateful = props =>
<BoxWrapper>
  <ResourceListComponent {...props} />
</BoxWrapper>

ResourceListComponent.defaultProps = {
  component: ResourceItem,
  key: 'resource'
}

ResourceListStateful.defaultProps = {
  members: false,
  component: ResourceItem
}

export default ResourceListStateful