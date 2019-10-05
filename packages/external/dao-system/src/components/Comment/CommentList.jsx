
import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import CommentItem from './components/CommentItem'

/**
 * @function CommentListComponent
 * @description Manage a generic decentralized comment system.
 * @return {Array} A list of thread posts initialized in component. 
 */
const CommentListComponent = ({ box,...props }) => {
  const [ dispatched, setDispatch ] = useState()
  const [ list, setList ] = useState()

  /* -------------------- */
  /* Effects
  /* -------------------- */
  /**
   * @function GetThreadLocalEffect
   * @description Watch global state for thread post list.
   */
  const GetThreadLocalEffect = () => useEffect( () => {
    if(idx(box, _=>_.threads[props.threadName].posts)) {
      setList(idx(box, _=>_.threads[props.threadName].posts))
    }
  }, [idx(box, _=>_.threads[props.threadName].posts)])

  /**
   * @function GetThreadDispatchEffect
   */
  const GetThreadDispatchEffect = () => useEffect( () => {
    if(!dispatched) {
      box.getThread({
        space: props.space,
        threadName: props.threadName,
        firstModerator: props.firstModerator,
        members: false,
        options: {
          firstModerator: props.firstModerator,
          members: false,
        }
      })
      setDispatch(true)
    }
  }, [box.threads, dispatched])

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */
  GetThreadLocalEffect()
  GetThreadDispatchEffect()

  /* -------------------- */
  /* List Component
  /* -------------------- */
  return (
    list && Array.isArray(list) ?
    list.map( item=> (
    ! React.isValidElement(props.component)
      ? React.createElement(props.component, {
          box,
          alias: item.message.data,
          threadName: props.threadName,
          space: props.space,
          ...item
        })
      : props.component
    ))
    : null
  );
}

/**
 * @function CommentListStateful
 * @description Wrap component with 3Box global state(context).
 * @return {Array} Higher Order(ish) React Component
 */
const CommentListStateful = props =>
<BoxWrapper>
  <CommentListComponent {...props} />
</BoxWrapper>

CommentListComponent.defaultProps = {
  component: CommentItem
}

CommentListStateful.defaultProps = {
  members: false,
  component: CommentItem
}

export default CommentListStateful