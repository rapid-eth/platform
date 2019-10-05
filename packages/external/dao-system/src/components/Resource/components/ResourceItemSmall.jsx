/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Span, Box, Flex, Button, Link, Heading, Image } from '@horizin/design-system'

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
  <Flex pointer card cardHover alignCenter between my={2}>
    <Flex alignCenter>
      <Span mr={3}>
        <Image
          circle card
          p={1} maxWidth={36}
          src={props.properties.image} />
      </Span>
      <Box>
        <Heading md thin noMargin>{props.properties.name}</Heading>
        <Heading sm thin>{props.properties.tagline}</Heading>
      </Box>
    </Flex>
    <Link to={`/resource/${props.alias}`}>
      <Button xs variant='white'>View</Button>
    </Link>
  </Flex>
)}

AdventureItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
}

AdventureItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default AdventureItem