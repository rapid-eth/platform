
import React, { useState, useEffect } from 'react';
import { Button, Form } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const QuestCatalogAdd = ({ box,...props }) => {
  
  const onSubmit = (values) => {
    box.threadPost({ 
      threadName: props.threadName,
      firstModerator: box.address,
      members: true,
      post: {
        type: 'quest',
        object: 'reference',
        ref: values.alias,
        meta: {
          notes: values.notes,
          friend: values.friend
        }
      }
    })
  }

  return (
    <Form callback={onSubmit}>
      <Field
        name="alias"
        defaultValue={props.alias}
        placeholder="alias"
      />
      <Field
        name="notes"
        inputAs='textarea' minHeight={120}
        placeholder="Notes"
      />
      <Field
        name="friend"
        placeholder="Invite Friend"
      />
      <Button type='submit' variant='green' width='100%'>Start Quest</Button>
    </Form>
  );
}

QuestCatalogAdd.defaultProps = {
  threadName: 'quest_catalog'
}

export default props =>
  <BoxWrapper>
    <QuestCatalogAdd {...props} />
  </BoxWrapper>
