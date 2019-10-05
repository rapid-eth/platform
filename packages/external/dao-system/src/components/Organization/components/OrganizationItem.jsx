/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Link, Box, Flex, Button, HorizontalRule, Paragraph, Heading, Image } from '@horizin/design-system'

/**
 * @function OrganizationItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const OrganizationItem = ({ box, styled, ...props}) => { 


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
    <Flex center column p={60}>

    <Box card>
      <Flex center column>
        <Flex card circle borderRadius={70} boxShadow='sunset' maxWidth={420} width={470} minHeight={130} mt={-80} mb={20} mx={80} overflow='hidden' >
          <BackgroundImage
            ratio={.65}
            src={props.data.imageCover} />
        </Flex>
        <HorizontalRule dash center />
          <Image
            circle card
            maxWidth={100} mt={-150}
            src={props.data.image} />
        <Box my={3} textCenter>
          <Heading lg>{props.data.name}</Heading>
          <Paragraph px={4}>
            {props.data.summary}
          </Paragraph>
          <Link to={`/organization/${props.alias}`}>
            <Button variant='green'>Organization</Button>
          </Link>
        </Box>
      </Flex>
    </Box>
</Flex>
)}

OrganizationItem.defaultProps = {
  alias: 'test',
  data: {},
  meta: {}
}

OrganizationItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default OrganizationItem