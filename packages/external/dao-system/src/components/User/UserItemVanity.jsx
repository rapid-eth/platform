/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  Box, Flex, Heading, Image, Span, Panel, BackgroundGradient, Button, QRDisplayModal, BackgroundImage, Absolute, Paragraph, QRStyled, QRDisplay,
} from '@horizin/design-system'


import { GenerateImage } from '../../utilities'
import UserFollow from './UserFollow';
/**
 * @function UserItemSmall
 * @return {Function} React component..
 * @description Small user item component.
 * @type user
 * @version 1.0.0
 */
const UserItemSmall = props => { 

  return(
    <Box>
      <Flex bg='dark' color='white' minHeight={200} p={3}>
        {
          props.coverPhoto && 
          <BackgroundImage src={GenerateImage(props.coverPhoto)} opacity={0.2} />
        }
        <Absolute layout='topLeft' zIndex={100}>
          {
            props.alpha && 
            <Span xxs tag='blue'>Alpha Member</Span>
          }
        </Absolute>
        <Absolute layout='topRight' zIndex={100}>
          <Flex column center>
            <Absolute layout='default' mt={20}>
              <QRStyled type='ripple' />
            </Absolute>
            <QRDisplay dimensions={78} transform='rotate(45deg)' gradientDir='145' gradient='purpink' card boxShadow={7} p={2}  />
            <Absolute top left right bottom>
            <Image maxWidth={28} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
            </Absolute>
          </Flex>
        </Absolute>
      
      </Flex>
      <Flex column gradient='gray' minHeight={300} p={4}>
          {
            props.image &&
              <Box mt={-100}>
            <Flex width={130} height={130} circle boxShadow={0} overflow='hidden'>
              <Span><Image width='100%' src={GenerateImage(props.image)} /></Span>
            </Flex>
            </Box>
          }
        
        {/* <Absolute layout='topRight' mt={-3} mr={2}>
          <Button variant='secondary'>Transfer</Button>
        </Absolute> */}

        <Flex column mt={3}>
          <Heading md heavy noMargin wordBreakAll>
            {
              props.name ? props.name : props.address
            }
          </Heading>
          <Heading as='h5' sm> {props.job} {props.employer && <Span heavy>{props.employer}</Span>}</Heading>
        </Flex>

        {/* Biography */}
        {
          props.biography &&
          <Box card maxHeight={200} overflow='auto' my={3} >
            <Paragraph xs>
              {props.biography}
            </Paragraph>
          </Box>
        }

      </Flex>
    </Box>
)}

UserItemSmall.defaultProps = {

}

UserItemSmall.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  employer: PropTypes.string,
  image: PropTypes.string,
}

export default UserItemSmall