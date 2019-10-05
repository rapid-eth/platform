/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Link, Box, Flex, Button, HorizontalRule, Span, Paragraph, Heading, Image } from '@horizin/design-system'

/**
 * @function AdventureItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const AdventureItem = ({ box, styled, ...props}) => { 


  /* -------------------- */
  /* Effects
  /* -------------------- */

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */


  /* -------------------- */
  /* Adventure Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
    <Flex card p={0} my={3} width='100%' minHeight={300}>
      <Flex gradient='black' center column flex={2} p={4}>
          <BackgroundImage
            ratio={.65} opacity={.2}
            src={props.properties.imageCover} />
          <Span circle card p={3}>
            <Image
            maxWidth={100}
            src={props.properties.image} />
          </Span>
      </Flex>
      <Flex flex={5}>
        <Box p={3}>
          <Box my={3}>
            <Heading lg heavy>{props.properties.name}</Heading>
            <Heading md>{props.properties.tagline}</Heading>
            <Paragraph>
              {props.properties.summary}
            </Paragraph>
            <Link to={`/resource/${props.alias}`}>
              <Button variant='green'>View</Button>
            </Link>
          </Box>
        </Box>
      </Flex>
    </Flex>

)}

AdventureItem.defaultProps = {
  alias: 'test',
  properties: {
    title: 'Start The Quest',
    tagline: 'Start The Quest',
    summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
    content: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
    image: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg',
    imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg',
    imageFeatured: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
  }
}

AdventureItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default AdventureItem