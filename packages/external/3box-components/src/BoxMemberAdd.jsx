import React from 'react';
import useForm from 'react-hook-form';
import { Button, Field,  Form, Flex } from '@horizin/design-system'

export default ({ callback, ...props }) => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = data => alert('Submit')
  
  return (
    <Form callback={onSubmit} >
      <Field
        borderWidth='2px' borderColor='#f2f2f266' borderStyle='solid' borderRadius={4} boxShadow={0} p={'7px'} flex={8}
        type="text" placeholder="Address" name="address" ref={register({required: true})} 
      />
      <Button xs ml='4px' p='7px' fontSize='10px' variant='green' type="submit">ADD</Button>
    </Form>
  );
}