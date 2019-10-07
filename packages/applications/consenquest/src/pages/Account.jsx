import idx from 'idx';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import {
  BackgroundImage, Flex, Card, Box, Menu, Heading, HorizontalRule, Button, Toast, Container, Panel, Span, Absolute, Image
} from '@horizin/design-system';
import {
  BoxAccess, BoxThreadPostList, BoxProfileRetrieve, BoxThreadPostDelete, BoxLoginCardVanity, Messaging, Reference
} from '@kames/3box-components/dist'

import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'

import {
  UserFollow, TeamCreate, QuestCatalogItem,
} from '@kames/dao-system'

import {
  FormWebLandStatus
} from "../components/3Box";

import DateTime from 'luxon/src/datetime.js'
import Paragraph from '@horizin/design-system/dist/atoms/Paragraph';
import QuestItem from '@kames/dao-system/dist/components/Quest/components/QuestItem';



// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const Account = ({box, styled, ...props }) =>
  <>
  {/* <BoxGetSpace space={SPACE} access='public' address={ROOT}  /> */}
    {/* Header */}
    <Flex gradient='blueDark' gradientDir='140' minHeight={300}>
      {/* <BackgroundImage
        boxShadow='dark' overflow='hidden' ratio={.3} opacity={.1}
        src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' /> */}
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
                <UserFollow />
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
              <BoxLoginCardVanity isFooterActive styled={{width: '100%'}} />
            </Box>
          </Flex>
    
          <Box flex={7}>
          <TabList tabGroup='account' tabIdSelected='profile'>
            <Tab tabId='profile'>QUESTS</Tab>
            <Tab tabId='emblems'>COLLECTIBLES</Tab>
            <Tab tabId='updates'>UPDATES</Tab>
          </TabList>
            <Box p={4}>
            <TabPanel tabGroup='account' tabId='profile'>
              <Heading md heavy>Quest Journal (Active) </Heading>
              <Messaging
                threadName='quest_catalog'
                component={Reference}
                pass={{
                  space:SPACE, access:'public', index:'quest',
                  component: QuestCatalogItem,
                  m: 3,
                  p: 4
                }}
              />
              
    
          </TabPanel>
            <TabPanel tabGroup='account' tabId='social'>
              <AccountSocialTab />
            </TabPanel>
            <TabPanel tabGroup='account' tabId='updates'>
              <AccountProfileTab />
              <AccountUpdatesTab />
            </TabPanel>
            <TabPanel tabGroup='account' tabId='emblems'>
              <AccountEmblemsTab />
            </TabPanel>
            </Box>
    
          </Box>
    
        </Flex>
        
      </Flex>
    </Container>
  </>


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

/**
 * @function AccountSocialTab
 * @param {Object} props Standard React Props
 * @returns {Function} React component
 */
const AccountSocialTab = ({ styled, ...props}) => { 
return(
   <>
     <Heading lg>Social</Heading>
   </>
)}

/**
 * @function AccountEmblemsTab
 * @param {Object} props Standard React Props
 * @returns {Function} React component
 */
const AccountEmblemsTab = ({ styled, ...props}) => { 
return(
   <>
      <Box card my={4}>
       <Box overflow='auto' maxWidth={800}>
         <Flex p={3}>
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
         </Flex>
       </Box>
       <Absolute layout='topRight' m={-2}>
         <Button sm tag='green'>Kudos</Button>
       </Absolute>
     </Box>
 
     <Box card my={4}>
       <Box overflow='auto' maxWidth={800}>
         <Flex p={3}>
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
           <EmblemCardMini />
         </Flex>
       </Box>
       <Absolute layout='topRight' m={-2}>
         <Button sm tag='green'>Open Emblems</Button>
       </Absolute>
     </Box>
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