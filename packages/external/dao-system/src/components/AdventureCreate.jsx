import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import useForm from "react-hook-form";
import { Box, Button, Flex, Heading, Span } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxAccess } from '@kames/3box-components/dist'

const DAOTeamCreate = ({ box, threadName, privateTeam, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm();

  const [ isPrivate, setPrivate ] = useState(privateTeam)
  const [ formValues, setFormValues ] = useState()
  const [ space, setSpace ] = useState()
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
    if (box.spaces[space]) {
      console.log(props, 'updating quests')
      setComplete(true)
      box.set({
        inputs: space,
        space: props.space,
        insert: props.alias,
        key: props.key,
        access: formValues.access ? 'private' : 'public'
      })
    }
  }, [box.spaces, space, formValues])

  return (
    <Flex {...styled}>
    <BoxAccess level='disabled' space='eth'>
        <Box fullWidth>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Flex>
            <Box gradient='gray' p={3} flex={2}>
              <Button type="submit" sm variant='green' width='100%' my={3}>Publish</Button>
              <Field
                name="name"
                label='Name'
                defaultValue={props.defaultValues.name}
                register={register}
                errors={errors}
                placeholder="Title"
              />
              <Field
                name="tagline"
                label='Tagline'
                defaultValue={props.defaultValues.tagline}
                register={register}
                errors={errors}
                placeholder="tagline"
              />
              <Field
                name="tags"
                label='Tags'
                defaultValue={props.defaultValues.tags}
                register={register}
                errors={errors}
                placeholder="Tags (beginner, tokens)"
              />
              <Field
                name="category"
                label='Category'
                defaultValue={props.defaultValues.catgory}
                register={register}
                errors={errors}
                placeholder="Category"
              />
              <Heading>Images</Heading>
              <Field
                name="image"
                label='Image'
                defaultValue={props.defaultValues.image}
                register={register}
                errors={errors}
                placeholder='https://...'
              />
              <Field
                name="imageFeatured"
                label='Image Featured'
                defaultValue={props.defaultValues.imageFeatured}
                register={register}
                errors={errors}
                placeholder='https://...'
              />
              <Field
                name="imageCover"
                label='Image Cover'
                defaultValue={props.defaultValues.imageCover}
                register={register}
                errors={errors}
                placeholder='https://...'
              />
          </Box>
          <Box flex={5} gradient='white' p={4}>
            <Field
              name="summary"
              inputAs='textarea' minHeight={200}
              placeholder="Summary"
              label='Summary'
              defaultValue={props.defaultValues.summary}
              register={register}
              errors={errors}
            />
            <Field
              name="content"
              inputAs='textarea' minHeight={400}
              placeholder="Content"
              label='Content (Markdown Enabled)'
              defaultValue={props.defaultValues.content}
              register={register}
              errors={errors}
            />
          </Box>
          
        </Flex>
        </form>
      </Box>
    </BoxAccess>
    </Flex>
  );
}


DAOTeamCreate.defaultProps = {
  append: 'adventure',
  key: 'adventure',
  defaultValues: {}
}

DAOTeamCreate.propTypes = {
  append: PropTypes.string,
  defaultValues: PropTypes.object,
  space: PropTypes.string,
  access: PropTypes.string,
  privateTeam: PropTypes.bool
}

export default props =>
  <BoxWrapper>
    <DAOTeamCreate {...props} />
  </BoxWrapper>
