import React from 'react';
import PropTypes from 'prop-types'
import { Button, Form, Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/**
 * @function FormWebLandStatus
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */

const FormWebLandStatus = ({ box, access, space, ...props}) => {
  // Form Submit Handler
  const onSubmit = async (values) => {
    console.log(values)
    const keys = Object.keys(values)
    const inputs =Object.values(values)
    
    box.set({
      keys,
      inputs,
      space,
      access
    })
  }

  return (
    <Form callback={onSubmit} >
      <Field
        name='project'
        placeholder="Project"
      />
      <Field
        name='update'
        inputAs='textarea'
        placeholder="Status Update"
      />
      <Button sm uppercase type='submit' width='100%' variant='green'>Update Status</Button>
      <Button md uppercase mt={3} width='100%' variant='blue'>Enter WebΞLand</Button>

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
