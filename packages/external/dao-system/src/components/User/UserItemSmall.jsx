/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {
  Box, Flex, Heading, Image, Span, Panel, BackgroundGradient, Button, QRDisplayModal, BackgroundImage,
} from '@horizin/design-system'


import { GenerateImage } from '../../utilities'
/**
 * @function UserItemSmall
 * @return {Function} React component..
 * @description Small user item component.
 * @type user
 * @version 1.0.0
 */
const UserItemSmall = props => { 
  return(
    <Flex between card {...props.styled}>
      <Flex alignCenter>
        {
          props.image &&
          <Flex width={32} height={32} circle boxShadow={0} overflow='hidden'>
            <Span><Image variant='avatar' circle src={GenerateImage(props.image)} /></Span>
          </Flex>
        }
        <Box ml={3}>
          <Heading md normal noMargin>
            {props.name}
            <Span sm ml={3}> {props.job} {props.employer && <Span heavy>{props.employer}</Span>}</Span>
            </Heading>
        </Box>
      </Flex>
      <Flex>
        <Panel content={<ProfilePanel {...props} />} >
          <Span xxs tag='white'>View Profile</Span>
        </Panel>
        <Panel content={<ProfilePanel {...props}/>} >
          <Span xxs tag='green'>Follow</Span>
        </Panel>
      </Flex>
    </Flex>
)}

UserItemSmall.defaultProps = {

}

UserItemSmall.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  employer: PropTypes.string,
  image: PropTypes.string,
}

const ProfilePanel = ({ styled, ...props}) => { 
 return(
  <Box minWidth={300}>
     <Box p={0} {...props.styled} {...props}>
      <Box x column height='100%' {...props.styledInner}>

        <Flex flex={1} p={2} minHeight={props.coverPhoto ? 150 : 50}>
          <BackgroundGradient gradient='purpink' gradientDir='140 ' />
          {
            props.coverPhoto && 
            <BackgroundImage src={GenerateImage(props.coverPhoto)} opacity={0.2} />
          }
        </Flex>

        <Flex column card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
          <Box maxWidth={320} alignSelf='center'>
            { 
              props.image
              ? <Image circle card src={GenerateImage(props.image)} boxShadow={'sunset'} p={20} maxWidth={140} mt={-180} />
              : <Image card circle boxShadow={'sunset'} p={4} width={80}  maxWidth={40} mt={-80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
                
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
       
          {/* <BoxVerified /> */}
          </Box>
    
        </Flex>

        {
          props.isFooterActive &&
            <Flex center card flex={1} p={10} >
              <BackgroundGradient gradient='gray'/>
              <Flex between width={320} maxWidth={320} fullWidth>
                <Span><Button xs>{props.addressShortened}</Button></Span>
              
              </Flex>
            </Flex >
        }
      </Box>
    </Box>
  </Box>
)
}

export default UserItemSmall