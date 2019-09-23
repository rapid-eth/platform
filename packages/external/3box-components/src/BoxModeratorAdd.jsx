import React from 'react';
import useForm from 'react-hook-form';
import { Button, Field,  Form, Flex } from '@horizin/design-system'

export default ({ callback, ...props }) => {
  
  const onSubmit = data => alert('Submit')
  
  return (
    <Form callback={onSubmit} >
      <Field
        
        type="text" placeholder="Address" name="address"
      />
      <Button xs ml='4px' p='7px' fontSize='10px' variant='green' type="submit">ADD</Button>
    </Form>
  );
}