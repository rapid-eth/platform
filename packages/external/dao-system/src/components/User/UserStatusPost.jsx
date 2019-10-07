import React, { useState, useEffect } from 'react';
import useForm from "react-hook-form";
import { Button, Loading, Span, Field, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Access } from '@kames/3box-components/dist'

const UserAddToThread = ({ box,...props }) => {
  const { handleSubmit, register, errors } = useForm();
  const [ formValues, setFormValues ] = useState()
  const [ space, setSpace ] = useState(props.space)
  const [ loading, setLoading] = useState(false)
  const [ isComplete, setComplete ] = useState(false)

  const onSubmit = (values) => {
    const { space } = values
    setLoading(true)
    setSpace(space)
    setFormValues(values)
    box.openSpace(props.space)
  }

  useEffect( () => {
    if ( formValues) {
      setComplete(true)
      box.insert({
        space: props.space,
        access: 'public',
        index: props.index,
        key: formValues.alias,
        value: formValues,
      })
    }
  }, [formValues])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Field
        name="content"
        inputAs='textarea' minHeight={100}
        placeholder="What are you working on"
        label='Status Update'
        register={register}
        errors={errors}
      />
    <Access level='disabled' space='eth'>
      <Button type="submit" sm variant='green' width='100%' my={3}>Post Status</Button>
    </Access>
  </form>
)}

UserAddToThread.defaultProps = {

}

export default props =>
  <BoxWrapper>
    <UserAddToThread {...props} />
  </BoxWrapper>
