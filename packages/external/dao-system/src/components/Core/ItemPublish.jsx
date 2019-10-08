
/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button, Field, Form, Loading, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Access } from '@kames/3box-components/dist';

/**
 * @function ItemPublish
 * @description Add comment to decentralized thread
 * @return {Function} React component.
 */
const ItemPublish = ({ box,...props }) => {
  const [ dispatched, setDispatch ] = useState()

  /* -------------------- */
  /* Actions
  /* -------------------- */
  const onSubmit = (values) => {
    box.threadPost({ 
      threadName: props.threadName,
      post: {
        object: 'item',
        version: '1.0.0.',
        data: values,
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
    if(!dispatched && box.data.spaces[props.space]) {
      console.log(props, 'item publish')
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
        name="name"
        placeholder={props.placeholders.name}
        label='Name'
      />
      <Field
        name="summary"
        label='Summary'
        inputAs='textarea' minHeight={50}
        placeholder={props.placeholders.summary}
      />
      <Field
        name="content"
        label='Content'
        inputAs='textarea' minHeight={120}
        placeholder={props.placeholders.content}
      />
      <Field
        name="category"
        label='Category'
        placeholder={props.placeholders.category}
        placeholder='ethereum'
      />
      <Field
        name="tags"
        label='Tags'
        placeholder={props.placeholders.tags}
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

ItemPublish.defaultProps = {
  label: 'Publish',
  placeholders: {
    name: 'Name',
    summary: 'Summary',
    content: 'Content',
    category: 'ethereum',
    tags: 'solidity, token',
  }
}

ItemPublish.propTypes = {
  alias: PropTypes.string,
}

export default props =><BoxWrapper><ItemPublish {...props} /></BoxWrapper>
