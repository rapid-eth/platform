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
    console.log(values)
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
        placeholder="Name"
      />
      <Field
        name='job'
        placeholder="Job"
      />
      <Field
        name='employer'
        placeholder="Employer"
      />
    </Form>
  );
}

export default props =>
<BoxWrapper>
  <PledgePublish {...props} />
</BoxWrapper>
