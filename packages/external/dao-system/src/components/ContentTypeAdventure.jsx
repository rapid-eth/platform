import idx from 'idx';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button, Flex, Heading, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const CONTENT_TYPE_ADVENTURE = {
  id: 'adventure',
  type: 'content_type',
  schema: {
    title: 'String',
    tagline: 'String',
    summary: 'String',
    content: 'String',
    image: 'String',
    imageFeatured: 'String',
    imageCover: 'String',
  }
}

const ContentTypeAdventure = ({ box, styled, ...props }) => {
  const [ index, setIndex] = useState(false)
  const [ loading, setLoading] = useState(false)

  /* ---------- */
  /* Handlers
  /* ---------- */
  const actionHandler = (values) => {
    setLoading(true)
    if (props.space && props.insert) {
      box.set({
        inputs: CONTENT_TYPE_ADVENTURE,
        space: props.space,
        insert: props.insert,
        access: props.access,
        key: props.key
      })
    }
  }

  /* ---------- */
  /* Effects
  /* ---------- */
  /**
   * @function ReadState
   */
  useEffect( () => {
    if (!index && idx(box, _=>_.spaces[props.space].public[props.insert])) {
      const index = idx(box, _=>_.spaces[props.space].public[props.insert][props.key])
      setIndex(index) 
    }
  }, [box.spaces])

  return (
    <Flex center column card textCenter>
      <Heading md thin>{props.title}</Heading>
      {
        index
        ? <Button xxs variant='white' onClick={actionHandler}>Type Intalled</Button>
        : <Button xxs variant='green' onClick={actionHandler}>{!loading ? <Span>Install Type</Span> : <Span>Loading...</Span>}</Button>
      }
      <Span xxs my={3} tag='white'>Details</Span>
    </Flex>
  );
}


ContentTypeAdventure.defaultProps = {
  access: 'public',
  insert: 'index',
  key: 'adventure',
  title: 'Adventure Content Type',
}

ContentTypeAdventure.propTypes = {
  space: PropTypes.string.isRequired,
  insert: PropTypes.string,
  access: PropTypes.string,
}

export default props =>
  <BoxWrapper>
    <ContentTypeAdventure {...props} />
  </BoxWrapper>
