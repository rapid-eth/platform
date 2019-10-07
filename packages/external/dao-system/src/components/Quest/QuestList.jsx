
import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import QuestItem from './components/QuestItem'

/**
 * @function QuestListComponent
 * @description Manage a generic decentralized comment system.
 * @return {Array} A list of thread posts initialized in component. 
 */
const QuestListComponent = ({ box,...props }) => {
  const [ isDispatched, setDispatched ] = useState()
  const [ list, setList ] = useState()
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
    if (idx(box, _=>_.spaces[props.space].public[props.key])) {
      setList(idx(box, _=>_.spaces[props.space].public[props.key])) 
    }
  }, [idx(box, _=>_.spaces[props.space].public[props.key])])

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
 * @function QuestListStateful
 * @description Wrap component with 3Box global state(context).
 * @return {Array} Higher Order(ish) React Component
 */
const QuestListStateful = props =>
<BoxWrapper>
  <QuestListComponent {...props} />
</BoxWrapper>

QuestListComponent.defaultProps = {
  component: QuestItem,
  key: 'quest'
}

QuestListStateful.defaultProps = {
  members: false,
  component: QuestItem
}

export default QuestListStateful