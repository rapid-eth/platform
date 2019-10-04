import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Box, Button, Flex, Heading, Form, Span } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxAccess } from '@kames/3box-components/dist'
import Image from '@horizin/design-system/dist/atoms/Image';

const DAOTeamCreate = ({ box, threadName, privateTeam, styled, ...props }) => {
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
    box.openSpace(space)
  }

  useEffect( () => {
    if (box.spaces[space]) {
      setComplete(true)
      box.set({
        inputs: space,
        space: props.space,
        append: props.append,
        access: formValues.access ? 'private' : 'public'
      })
    }
  }, [box.spaces, space, formValues])

  return (
    <Flex {...styled}>
     { isComplete
      ? (
        <Box>
          <Heading center>{space} team created!</Heading>
          <Button xs variant='green' m={2}>Add Team Members</Button>
          <Button xs m={2}>Register Team</Button>
        </Box>
      )
      : <BoxAccess
        level='space'
        space='eth'
      >
        {
        loading
          ? <Flex center column>
            <Flex card center column rounded p={4}>
              <Span md thin>Creating Team</Span>
              <Image src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif' width={30} my={20} />
              <Span>Prepare for Adventure</Span>
            </Flex>
          </Flex>
          : <Box fullWidth>
            <Form callback={onSubmit}>
              <Field
                name="space"
                label='Team Name'
                placeholder="Team Name"
              />
              <Field
                name="access"
                type='checkbox'
                defaultValue={isPrivate}
                label="Private Team"
              />
              <Button type="submit" sm variant='green' width='100%' my={3}>Create Team</Button>
            </Form>
          </Box>
        }
      </BoxAccess>}
    </Flex>
  );
}


DAOTeamCreate.defaultProps = {
  append: 'team'
}

DAOTeamCreate.propTypes = {
  append: PropTypes.string,
  space: PropTypes.string,
  access: PropTypes.string,
  privateTeam: PropTypes.bool
}

export default props =>
  <BoxWrapper>
    <DAOTeamCreate {...props} />
  </BoxWrapper>
