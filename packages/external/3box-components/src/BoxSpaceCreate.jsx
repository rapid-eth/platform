import idx from 'idx'
import React from 'react';
import { Button, Flex, Form } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/**
 * @function BoxThreadPostCreate
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */
const BoxThreadPostCreate = ({ box, threadName, space, ...props}) =>
{
  const onSubmit = (values) => {
    console.log(values, 'valuess')

    box.openSpace({
      space: space,
      options: {
        members: values.consentCallback,
        consentCallback: values.onSyncDone
      }
    })
  }
  
  return (
    <Form callback={onSubmit}>
      <Field
        placeholder="Space Name" name="name"
      />
      <Field
        placeholder="Open Trigger" name="consentCallback"
      />
      <Field
        placeholder="Sync Complete Trigger" name="consentCallback"
      />
      <Button type="submit" sm fullWidth variant='green'>Create Thread</Button>
    </Form>
  );
}

export default props =>
<BoxWrapper>
  <BoxThreadPostCreate {...props} />
</BoxWrapper>
