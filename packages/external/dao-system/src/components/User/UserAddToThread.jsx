
import React, { useState, useEffect } from 'react';
import { Button, Form } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Access } from '@kames/3box-components/dist'

const UserAddToThread = ({ box,...props }) => {
  
  const onSubmit = (values) => {
    box.threadPost({
      space: props.space,
      threadName: props.threadName,
      post: {
        object: 'address_reference',
        data: values.address,
        meta: {
          parent_type: 'array',
        },
        schema: {
          reference: 'user',
          version: '1.0.0.',
        }
      }
    })
  }

  return (
    <Access level='thread' spaceAuto threadAuto space={props.space} threadName={props.threadName} >
      <Form callback={onSubmit}>
        <Field
          name="address"
          defaultValue={props.alias}
          placeholder="Address"
          />
        <Button type='submit' variant='green' width='100%'>Add User</Button>
      </Form>
    </Access>
  );
}

UserAddToThread.defaultProps = {
  threadName: 'users'
}

export default props =>
  <BoxWrapper>
    <UserAddToThread {...props} />
  </BoxWrapper>
