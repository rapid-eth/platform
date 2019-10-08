
/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Button, Field, Form, Loading, Span } from '@horizin/design-system'
import { Access } from '@kames/3box-components/dist';

/**
 * @function AdventurePublish
 * @description Add comment to decentralized thread
 * @return {Function} React component.
 */
const AdventurePublish = ({ box,...props }) => {
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
  /* Adventure Add
  /* Aadd comment to 3Box thread.
  /* type: 'comment_add'
  /* version: 1.0.0.
  /* -------------------- */
  return (
    <Form callback={onSubmit}>
      <Field
        name="comment"
        inputAs='textarea' minHeight={240}
        placeholder="General Feedback"
      />
      <Access
        spaceAuto threadAuto loginAuto
        level='thread'
        space={props.space}
        threadName={props.threadName}
        optionsThread={props.optionsThread}
        componentLoading={<Button variant='white' width='100%'><Span mr={2}>Loading</Span> <Loading type='ring'/> </Button>}
        >
          <Button type='submit' variant='green' width='100%'>Publish</Button>
      </Access>
    </Form>
  );
}

AdventurePublish.defaultProps = {

}

export default props =>
  <BoxWrapper>
    <AdventurePublish {...props} />
  </BoxWrapper>
