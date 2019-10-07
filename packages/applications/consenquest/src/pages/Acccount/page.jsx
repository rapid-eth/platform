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
!box.address ? null :
  <Box>
    {/* Header */}
    <Flex gradient='blueDark' gradientDir='140' minHeight={300}>
  
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

              <Absolute layout='topRight' m={3}>
               <EarnCollectibles />
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
              <Flex>
              <Flex alignCenter p={3} width='100%'>

                <Modal content={<PollCreateModal />}
                  variant='default'
                  variantInner='default'
                  >
                  <Span xxs tag='green' >Create Poll</Span>
                </Modal>

                <Modal content={<StatusPublishModal />}
                  variant='default'
                  variantInner='default'
                  styled={{
                    m: 80
                  }}
                    >
                  <Span xxs mx={2} tag='green' >Status Update</Span>
                </Modal>

                <Modal content={<ProjectCreateModal />}
                  variant='fullScreen'
                  variantInner='fullScreen'
                  styled={{
                    m: 80
                  }}
                    >
                  <Span xxs tag='white'>Deposit</Span>
                </Modal>

</Flex>
              </Flex>
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

const Pledge = ({ styled, threadName, ...props}) => { 
const [ timeFormatted, setTimeFormated ] = useState()
  useEffect( () => {
    if(props.timestamp) {
        const time = DateTime.fromMillis(props.timestamp * 1000).toLocaleString({ month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
      setTimeFormated(time)
    }
  }, [props])
  return(
   <Flex alignCenter column between fullWidth m={3}>
     <Box card width='100%' p={0}>
     <Box bg='gray' borderRoundedTop p={3} width='100%'>
       <Flex alignCenter between width='100%'>
         <BoxProfileRetrieve address={props.author} small />
        <Span xs>{timeFormatted}</Span>
       </Flex>
     </Box>
     <Box p={3}>
      {props.message.update}
     </Box>
      <Paragraph right>
      </Paragraph>
     <Flex between gradient='gray' p={20} width='100%'>
       <Flex column>
         <Span><BoxThreadPostDelete threadName={threadName} postId={props.postId}/></Span>
       </Flex>
       <Panel label='Comment Thread' content={<CommentThread/>}>
        <Button xs alignSelf='flex-end'>Comment Thread</Button>
      </Panel>
     </Flex>
     </Box>
       
   </Flex>
 )
 }

const CommentThread = ({ styled, ...props}) => { 
 return(
  <Box>
    <BoxAccess threadAuto spaceAuto space='web3' threadName='myupdates'>
      <Heading cardHeader>Create A Post</Heading>
      <FormWebLandStatus threadName='myupdates' />
    </BoxAccess>
  </Box>
)
}


/**
 * @function AccountProfileTab
 * @param {Object} props Standard React Props
 * @returns {Function} React component
 */
const AccountProfileTab = ({ styled, ...props}) => { 
  return(
   <>
     <Flex gutter3 width='100%' my={3}>
 
       <Flex column card cardHover p={4}>
         <Heading>3Box Component Library</Heading>
         <Paragraph xs>
           In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem
         </Paragraph>
         <Button xs mt='auto' justifySelf='flex-end'>View</Button>
         <Absolute layout='topRight' m={-2}>
           <Span xxs tag='green'>Project</Span>
         </Absolute>
       </Flex>
       <Flex column card cardHover p={4}>
         <Heading>Decentralized Application Boilerplate</Heading>
         <Paragraph xs>
           In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem
         </Paragraph>
         <Button xs mt='auto' justifySelf='flex-end'>View</Button>
         <Absolute layout='topRight' m={-2}>
           <Span xxs tag='red'>Update</Span>
         </Absolute>
       </Flex>
       <Flex column card cardHover p={4}>
         <Heading>What UI Components to Prioritize</Heading>
         <Paragraph xs>
           In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem
         </Paragraph>
         <Button xs mt='auto' justifySelf='flex-end'>View</Button>
         <Absolute layout='topRight' m={-2}>
           <Span xxs tag='blue'>Poll</Span>
         </Absolute>
       </Flex>
 
     </Flex>

   </>
 )
 }


/**
 * @function AccountUpdatesTab
 * @param {Object} props Standard React Props
 * @returns {Function} React component
 */
const AccountUpdatesTab = ({ styled, ...props}) => { 
return(
   <>
     <BoxAccess threadAuto spaceAuto space='web3' threadName='myupdates'>
       <Heading cardHeader>Create A Post</Heading>
       <FormWebLandStatus threadName='myupdates' />
     </BoxAccess>
 
     <Flex flexDirection='column-reverse' >
       <BoxThreadPostList
         threadName='myupdates' component={Pledge}
         space='web3' members={false}
       />
     </Flex>
   </>
)}

const EarnCollectibles = () => { 
 return(
  <Flex alignCenter>
    <Span><Span xxs tag='blue'>Earn Collectibles</Span></Span>
    <Flex column center gem='white' mx={2} ><Image width={30} src='https://s.gitcoin.co/static/v2/images/kudos/mythx.10c16c5c5c50.svg'/> </Flex>
    <Flex column center gem='white' mx={2} ><Image width={30} src='https://s.gitcoin.co/static/v2/images/kudos/pegasys.c2399ce66eb8.svg'/> </Flex>
    <Flex column center gem='white' mx={2} ><Image width={30} src='https://gitcoin.co/dynamic/kudos/4966/devcon_quest_metamask'/> </Flex>
    <Flex column center gem='white' mx={2} ><Image width={30} src='https://s.gitcoin.co/static/v2/images/kudos/alethio.fc3a876d3625.svg'/> </Flex>
  </Flex>
)}

export default props =>
<BoxWrapper>
  <Account {...props} />
</BoxWrapper>