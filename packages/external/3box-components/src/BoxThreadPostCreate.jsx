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
const BoxThreadPostCreate = ({ box, threadName, ...props}) =>
{
  const onSubmit = async (values) => {
    box.threads[threadName].instance.post(values)
  }
  
  return (
    !idx(box, _=>_.threads[threadName].instance)
    ? null
    : <Form callback={onSubmit}>
      <Field
        border={'none'}
        minHeight={100} borderRadius={8} boxShadow={1} width={1} p={20}
        placeholder="Post" name="post"
      />
      <Flex alignCenter mt={20}>
        <Button type="submit" sm variant='green'>Create Post</Button>
        <Button xs variant='orange' mx={[10]}>Encrypt</Button>
        <Button xs variant='blue'>Save Draft</Button>
      </Flex>
    </Form>
  );
}

export default props =>
<BoxWrapper>
  <BoxThreadPostCreate {...props} />
</BoxWrapper>
