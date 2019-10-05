
/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Button, Field, Form } from '@horizin/design-system'

/**
 * @function CommentPublish
 * @description Add comment to decentralized thread
 * @return {Function} React component.
 */
const CommentPublish = ({ box,...props }) => {
  const [ dispatched, setDispatch ] = useState()

  /* -------------------- */
  /* Actions
  /* -------------------- */
  const onSubmit = (values) => {
    box.threadPost({ 
      threadName: props.threadName,
      post: {
        object: 'comment',
        version: '1.0.0.',
        type: 'quest',
        data: values.comment,
      }
    })
  }

  /* -------------------- */
  /* Effects
  /* -------------------- */
  /**
   * @function JoinThreadEffect
   */
  const JoinThreadEffect = () => useEffect( () => {
    if(!dispatched) {
      box.joinThread({
        space: props.space,
        threadName: props.threadName,
        options: props.options,
      })
      setDispatch(true)
    }
  }, [box.threads, dispatched])

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */
  JoinThreadEffect()

  /* -------------------- */
  /* Comment Add
  /* Aadd comment to 3Box thread.
  /* type: 'comment_add'
  /* version: 1.0.0.
  /* -------------------- */
  return (
    <Form callback={onSubmit}>
      <Field
        name="comment"
        inputAs='textarea' minHeight={120}
        placeholder="Comment"
      />
      <Button type='submit' variant='green' width='100%'>Create Comment</Button>
    </Form>
  );
}

CommentPublish.defaultProps = {
  threadName: 'quest_catalog'
}

export default props =>
  <BoxWrapper>
    <CommentPublish {...props} />
  </BoxWrapper>
