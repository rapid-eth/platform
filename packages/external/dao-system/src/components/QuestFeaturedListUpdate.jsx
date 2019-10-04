
import React, { useState, useEffect } from 'react';
import { Button, Form } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const FormCreateQuestFeatured = ({ box,...props }) => {
  
  const onSubmit = (values) => {
    box.threadPost({ 
      threadName: props.threadName,
      firstModerator: props.root,
      members: props.members,
      post: {
        type: 'reference',
        reference: 'quest',
        alias: values.alias
      }
    })
  }

  return (
    <Form callback={onSubmit}>
      <Field
        name="alias"
        placeholder="Quest Alias Reference (quest-name-ref)"
      />
      <Button type='submit' variant='green' width='100%'>Add</Button>
    </Form>
  );
}

export default props =>
  <BoxWrapper>
    <FormCreateQuestFeatured {...props} />
  </BoxWrapper>
