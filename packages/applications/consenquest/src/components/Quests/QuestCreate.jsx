import React from 'react';
import PropTypes from 'prop-types'
import { Button, Form, Field, Heading } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/**
 * @function FormWebLandStatus
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */

const FormWebLandStatus = ({ box, threadName, access, space, ...props}) => {
  // Form Submit Handler
  const onSubmit = async (values) => {
    box.threadPost({ threadName, post: values })
  }

  return (
    <Form callback={onSubmit} >
      <Heading md heavy>Smart Contract</Heading>
      <Field
        name='contractAdress'
        placeholder="Smart Contract (Ox...)"
      />
      <Field
        name='function'
        placeholder="Function (transfer)"
      />
      <Field
        name='trigger'
        placeholder="Trigger (blockchain, credential, other...)"
      />
      <Field
        name='reward'
        placeholder="Reward (50 DEV token)"
      />
      <Heading>Information</Heading>
      <Field
        name='name'
        placeholder="name"
      />
      <Field
        name='content'
        inputAs='textarea'
        placeholder="Descrtipion"
      />
      <Button sm uppercase type='submit' width='100%' variant='green'>Create Quest</Button>
    </Form>
  );
}

FormWebLandStatus.defaultProps = {

}

FormWebLandStatus.propTypes = {
  space: PropTypes.string.isRequired,
}

export default props =>
<BoxWrapper>
  <FormWebLandStatus {...props} />
</BoxWrapper>
