/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Link, Box, Flex, Button, HorizontalRule, Paragraph, Heading, Image } from '@horizin/design-system'

/**
 * @function ProjectItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const ProjectItem = props => { 
  console.log(props, 'projects item')

  /* -------------------- */
  /* Effects
  /* -------------------- */

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */


  /* -------------------- */
  /* Organization Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
  <Flex card alignCenter between {...props.styled}>
    <Flex>
      <Heading lg>{props.name}</Heading>
    </Flex>
    <Flex>
      <Link to={`/${props.toPrepend}${props.alias}`}>
        <Button xs variant='white'>View</Button>
      </Link>
    </Flex>
  </Flex>
)}

ProjectItem.defaultProps = {
  toPrepend: undefined
}

ProjectItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default ProjectItem