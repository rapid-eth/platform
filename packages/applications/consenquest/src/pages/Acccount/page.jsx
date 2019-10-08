/* eslint-disable no-negated-condition */
import idx from 'idx';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import {
  BackgroundImage, Flex, Card, Box, Menu, Heading, HorizontalRule, Button, Toast, Container, Panel, Span, Absolute, Image, Modal
} from '@horizin/design-system';
import {
  BoxAccess, BoxThreadPostList, BoxProfileRetrieve, BoxThreadPostDelete, BoxLoginCardVanity, Messaging, Reference
} from '@kames/3box-components/dist'


import {
  TeamCreate, 
} from '@kames/dao-system'

import {
  FormWebLandStatus
} from "../../components/3Box";

import DateTime from 'luxon/src/datetime.js'
import Paragraph from '@horizin/design-system/dist/atoms/Paragraph';
import ProjectCreateModal from './ProjectCreateModal'
import PollCreateModal from './PollCreateModal'
import StatusPublishModal from './StatusPublishModal'
import Tabs from './tabs' 


// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const Account = ({box, styled, ...props }) =>
!box.address ? (
  <Flex gradient='blueDark'  center column minHeight='60vh' width='100%'>
    <Span><BoxLoginCardVanity /></Span>
  </Flex>
) :
  <Box width='100%'>
    {/* Header */}
    <Flex gradient='blueDark' gradientDir='140' minHeight={300} width='100%'>
  
        <Container maxWidth='90%' >
          <Flex fullWidth height='100%'>
            <Flex flex={3}>
              
            </Flex>
            <Flex color='white' flex={7}>
              <Box alignSelf='flex-end' p={4}>
                <Heading lg>{idx(box, _=>_.profile.name)}</Heading>
                {
                  idx(box, _=>_.profile.job) &&
                  <Span textCenter mb={3} fontSize={[2]}>
                    {box.profile.job} { box.profile.employer && <Span>at {box.profile.employer}</Span>}
                  </Span>
                }
              </Box>

              <Absolute layout='bottomRight' m={4}>
                <Toast
                  content={<TeamCreate
                    space='eth'
                    styled={{minWidth: 300, minHeight: 200, center: true, column: true}}
                  />}
                >
                  <Button>Create Team</Button>
                </Toast>
              </Absolute>
            </Flex>
          </Flex>
        </Container>
    </Flex>

    {/* Main */}
    <Container maxWidth='90%' >
      <Flex>
        <Flex width='100%'>
          <Flex flex={3} gradientDir='145' width='100%' >
           
            <Box mt={-240} width='100%'>
              <BoxLoginCardVanity isFooterActive styled={{width: '100%'}} />
            </Box>
          </Flex>
          <Box flex={7}>
            {
              box.address &&
              <Tabs address={box.address} /> 
            }
          </Box>
    
        </Flex>
        
      </Flex>
    </Container>
  </Box>


Account.defaultProps = {
  members: false,
}

Account.propTypes = {
  members: PropTypes.bool,
  space: PropTypes.string.isRequired,
}

const EmblemCardMini = ({ title, category, image, styled, ...props}) => { 
 return(
  <Flex column center p={3} {...styled}>
    <Span><Image card circle maxWidth={80} src={image}/></Span>
    <Span my={2} tag='white' xs>{title}</Span>
    <Span xxs>{category}</Span>
  </Flex>
)
}

EmblemCardMini.defaultProps = {
  title: 'Magic Quest',
  category: 'Beginner',
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
  styled: {
    minWidth: 140
  }
}

EmblemCardMini.propTypes = {
  title: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
}



export default props =>
<BoxWrapper>
  <Account {...props} />
</BoxWrapper>