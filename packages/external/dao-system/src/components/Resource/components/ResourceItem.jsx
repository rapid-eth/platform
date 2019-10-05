/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { BackgroundGradient, BackgroundImage, Link, Box, Flex, Button, HorizontalRule, Panel, Span, Paragraph, Heading, Image } from '@horizin/design-system'

/**
 * @function ResourceItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const ResourceItem = ({ box, address, title, tagline, id, to,
  actionLabel, content, summary, image, images, imageFeatured, styled, ...props}) => { 


  /* -------------------- */
  /* Effects
  /* -------------------- */

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */


  /* -------------------- */
  /* Resource Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
    <Box cardHover  p={0}>
    <Flex column height='100%' >
      <Flex column flex={1} p={2} minHeight={10}>
        <BackgroundGradient gradient='purpink' gradientDir='140' />
      </Flex>
  
      <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
      {props.properties.image &&
        <Box inlineBlock circle boxShadow='sunset' p={15} gradient='white' maxWidth={150} mx='auto' mt={-70}>
          <Image circle src={props.properties.image} boxShadow='sunset' p={20} />
        </Box>
        }
        <Heading lg mt={-20} fontWeight={300}>
          {props.properties.title}
        </Heading>
        <Paragraph fontSize={[1]}>
          {props.properties.tagline}
        </Paragraph>
        <Flex column>
          <Panel content={<div>yo</div>} label='Start Quest'>
            <Link to={`${to}/${id}`}>
              <Button sm variant='green'>View Resource</Button>
            </Link>
          </Panel>
        </Flex>
        <Paragraph xs mt={[25]} px={40}>
          {props.properties.summary}
        </Paragraph>
      </Box>
  
      <Box card flex={1} p={10} >
        <BackgroundGradient gradient='gray' />
        <Flex between fullWidth>
          <Span><Button xs>0xfA67ddE98...34a48cE</Button></Span>
          <Span><Button xs>View on Etherscan</Button></Span>
        </Flex>
      </Box>
    </Flex>
  </Box>
)}

ResourceItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
}

ResourceItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default ResourceItem