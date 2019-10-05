
import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import OrganizationItem from './components/OrganizationItem'

/**
 * @function OrganizationListComponent
 * @description Manage a generic decentralized comment system.
 * @return {Array} A list of thread posts initialized in component. 
 */
const OrganizationListComponent = ({ box,...props }) => {
  const [ isDispatched, setDispatched ] = useState()
  const [ list, setList ] = useState()

  console.log(idx(box, _=>_.spaces[props.space].public[props.selector]))
  console.log(props, 'ogog')
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
        selector: props.selector,
        access: props.access
      })
      setDispatched(true)
    }
  }, [box.spaces])

  /**
   * @function SetListEffect
   */
  const SetListEffect = () => useEffect( () => {
    if (!list && idx(box, _=>_.spaces[props.space].public[props.selector])) {
      const list = idx(box, _=>_.spaces[props.space].public[props.selector])
      setList(list) 
    }
  }, [list, box.spaces])

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */
  GetEffect()
  SetListEffect()

  /* -------------------- */
  /* List Component
  /* -------------------- */
  return (
    list 
    ? Array.isArray(list)
      ? list.map( item => (
      ! React.isValidElement(props.component)
        ? React.createElement(props.component, {
            ...item,
          })
        : props.component
      ))
    : Object.values(list).map( item => (
      ! React.isValidElement(props.component)
      ? React.createElement(props.component, {
          ...item,
        })
      : props.component
    ) )
    : null
  );
}

/**
 * @function OrganizationListStateful
 * @description Wrap component with 3Box global state(context).
 * @return {Array} Higher Order(ish) React Component
 */
const OrganizationListStateful = props =>
<BoxWrapper>
  <OrganizationListComponent {...props} />
</BoxWrapper>

OrganizationListComponent.defaultProps = {
  component: OrganizationItem,
  selector: 'organization',
  space: 'eth'
}

OrganizationListStateful.defaultProps = {
  component: OrganizationItem
}

export default OrganizationListStateful