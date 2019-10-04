import idx from 'idx'
import React from 'react';
import { Button, Form, Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/**
 * @function BoxThreadPostCreate
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */

const PledgePublish = ({ box, ...props}) => {
  // Form Submit Handler
  const onSubmit = async (values) => {
    const keys = Object.keys(values)
    const inputs =Object.values(values)
    
    box.set({
      keys,
      inputs
    })
  }

  return (
    <Form callback={onSubmit} >
      <Field
        name='name'
        defaultValue={box.profile.name}
        placeholder="Name (Who are you)"
      />
      <Field
        name='job'
        defaultValue={box.profile.job}
        placeholder="Role (What you do)"
      />
      <Field
        name='employer'
        defaultValue={box.profile.employer}
        placeholder="Organization (Where you do it)"
      />
      <Field
        name='description'
        defaultValue={box.profile.description}
        placeholder="Why"
      />
      <Button sm uppercase width='100%' variant='green' disabled={!box.isLoggedIn}>Update</Button>
    </Form>
  );
}

export default props =>
<BoxWrapper>
  <PledgePublish {...props} />
</BoxWrapper>
