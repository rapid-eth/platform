/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Link, Box, Flex, Button, HorizontalRule, Paragraph, Heading, Image } from '@horizin/design-system'

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
    <Flex center column p={60}>

    <Box card>
      <Flex center column>
        <Flex card circle borderRadius={70} boxShadow='sunset' maxWidth={300} width={270} minHeight={130} mt={-80} mb={20} mx={80} overflow='hidden' >
          <BackgroundImage
            ratio={.65}
            src={props.properties.imageCover} />
        </Flex>
        <HorizontalRule dash center />
          <Image
            circle card
            maxWidth={100} mt={-150}
            src={props.properties.image} />
        <Box my={3} textCenter>
          <Heading lg>{props.properties.name}</Heading>
          <Paragraph px={4}>
            {props.properties.summary}
          </Paragraph>
          <Link to={`/adventure/${props.alias}`}>
            <Button variant='green'>Start Adventure</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
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