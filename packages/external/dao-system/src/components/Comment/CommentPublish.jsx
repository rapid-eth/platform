
/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button, Field, Form, Loading, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Access } from '@kames/3box-components/dist';

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
  /* Add comment to 3Box thread.
  /* type: 'comment_add'
  /* version: 1.0.0.
  /* -------------------- */
  return (
    <Form callback={onSubmit}>
      <Field
        name="comment"
        inputAs='textarea' minHeight={120}
        placeholder={props.placeholder}
      />
      <Access
        spaceAuto threadAuto loginAuto
        level='thread'
        space={props.space}
        threadName={props.threadName}
        optionsThread={props.optionsThread}
        componentLoading={<Button variant='white' width='100%'><Span mr={2}>Loading</Span> <Loading type='ring'/> </Button>}
        >
        <Button type='submit' variant='green' width='100%'>{props.label}</Button>
      </Access>
    </Form>
  );
}

CommentPublish.defaultProps = {
  label: 'Create Comment',
  placeholder: 'Comment',
}

CommentPublish.propTypes = {
  alias: PropTypes.string,
}

export default props =><BoxWrapper><CommentPublish {...props} /></BoxWrapper>
