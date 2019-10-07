/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  BackgroundGradient, BackgroundImage, Link, Box, Flex, Button, Span, Heading, Image,
  QRDisplayModal,
  Absolute, 
} from '@horizin/design-system'
import { BoxThreadPostDelete } from '@kames/3box-components/dist';


import { GenerateImage } from '../../utilities'
/**
 * @function UserItemCard
 * @description A default comment display component
 * @return {Function} React component..
 * @type comment
 * @version 1.0.0
 */
const UserItemCard = props => { 
  return(
    <>
      <Box flex={1} >

        <Flex column height='100%' p={0} {...props.styled} {...props}>
        
            <Flex flex={1} p={2} minHeight={120} width='100%'>
              <BackgroundGradient gradient='purpink' gradientDir='140 ' />
              <Absolute layout='bottomRight' zIndex={100}>
                {/* <Box gradient='white' height={100} width={150} opacity={.2} transform='skewY(-15deg)' /> */}
              </Absolute>
              {
                props.coverPhoto
                ? <BackgroundImage bg='white' src={GenerateImage(props.coverPhoto)} opacity={0.2} />
                : <BackgroundImage bg='white' src='https://s3.envato.com/files/f209c8a8-c7fc-49be-a948-6aa185b7fb4b/inline_image_preview.jpg' opacity={0.2} />
              }
            </Flex>
    
            <Flex column card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
              <Flex center column alignSelf='center'>
                { 
                  props.image 
                  ? <Flex
                      circle center column boxShadow={0} p={2}
                      border="2px solid #FFF"
                      mt={-120}
                      overflow='hidden'
                      width={100} height={100} maxWidth={154} maxWidth={154}
                      >
                      <BackgroundImage ratio={.5} variant='avatar' src={GenerateImage(props.image)} />
                    </Flex>
                  : <Flex
                      circle center column boxShadow={0} p={2}
                      border="2px solid #FFF"
                      mt={-120}
                      overflow='hidden'
                      width={100} height={100} maxWidth={154} maxWidth={154}
                      >
                      <BackgroundImage ratio={.5} variant='avatar' src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
                    </Flex>
                }
              <Box mb={10} mt={props.isImage ? -30 : -2}>
                <QRDisplayModal value={`ethereum:${props.address}`} styledContainer={{card: true}}>
                  <Span pointer><Image card circle p={1} maxWidth={32} src='https://cdn0.iconfinder.com/data/icons/material-style/48/qrcode-512.png'/></Span>
                </QRDisplayModal>
              </Box>
              {props.name && <Heading heavy md mt={-20} fontWeight={300} children={props.name} />}
              {
                props.job &&
                <Span textCenter mb={3} fontSize={[2]}>
                  {props.job} { props.employer && <Span>at {props.employer}</Span>}
                </Span>
              }
              </Flex>
              <Span><Button xs>{props.addressShort}</Button></Span>
            </Flex>
    
            {
              props.isFooterActive &&
                <Flex center card flex={1} p={10} justifySelf='flex-end' maxHeight={50} >
                  <BackgroundGradient gradient='gray'/>
                  <Flex between width={320} maxWidth={320} fullWidth>
                    <Span xxs tag='white'>Follow</Span>
                    <Span xxs tag='green'>Message</Span>
                  </Flex>
                </Flex >
            }
        </Flex>
        <Span my={2}><BoxThreadPostDelete threadName={props.threadName} postId={props.postId} /></Span>
      </Box>
    </>
)}

UserItemCard.defaultProps = {
  isFooterActive: true
}

UserItemCard.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default UserItemCard