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

    box.joinThread({
      threadName: values.name,
      space: space,
      // options: {
      //   firstModerator: values.firstModerator,
      //   members: values.members,
      //   noAutoSub: false
      // }
    })
  }
  
  return (
    <Form callback={onSubmit}>
      <Field
        placeholder="Thread Name" name="name"
      />
      <Field
        placeholder="Moderator (Default You)" name="firstModerator"
      />
      <Field
        placeholder="Private" name="members"
      />
      <Flex alignCenter mt={20}>
        <Button type="submit" sm variant='green'>Create Thread</Button>
      </Flex>
    </Form>
  );
}

export default props =>
<BoxWrapper>
  <BoxThreadPostCreate {...props} />
</BoxWrapper>
