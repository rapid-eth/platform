import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import useForm from "react-hook-form";
import { Box, Button, Flex, Heading, Span } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxAccess } from '@kames/3box-components/dist'

const ProjectCreate = ({ box, threadName, privateTeam, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm();

  const [ isPrivate, setPrivate ] = useState(privateTeam)
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
        name="name"
        label='Name'
        defaultValue={props.defaultValues.name}
        register={register}
        errors={errors}
        placeholder="Poll Name"
      />
      <Field
        name="question"
        placeholder="Question to be asked."
        label='Poll Question'
        defaultValue={props.defaultValues.question}
        register={register}
        errors={errors}
      />
      <Field
        name="content"
        inputAs='textarea' minHeight={100}
        placeholder="Add Options (New line for each option)"
        label='Poll Options'
        defaultValue={props.defaultValues.content}
        register={register}
        errors={errors}
      />
    <BoxAccess level='disabled' space='eth'>
      <Button type="submit" sm variant='green' width='100%' my={3}>Create Poll</Button>
    </BoxAccess>
  </form>
)}


ProjectCreate.defaultProps = {
  space: 'eth',
  access: 'public',
  index: 'polls',
  defaultValues: {}
}

ProjectCreate.propTypes = {
  append: PropTypes.string,
  defaultValues: PropTypes.object,
  space: PropTypes.string,
  access: PropTypes.string,
  privateTeam: PropTypes.bool
}

export default props =>
  <BoxWrapper>
    <ProjectCreate {...props} />
  </BoxWrapper>
