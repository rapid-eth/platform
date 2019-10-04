import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Flex, Card, Box, Menu, Heading, HorizontalRule, Button, Toast, Container, Panel, Span, Absolute, Image, BackgroundGradient, Link, Markdown } from '@horizin/design-system';
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'

import Paragraph from '@horizin/design-system/dist/atoms/Paragraph';
import idx from 'idx';

const Account = ({ styled, ...props }) =>
  <Box width='100%'>
    {/* Header */}
    <Flex gradient='purpink' gradientDir='140' minHeight={300}>
      <BackgroundImage
        boxShadow='sunset' overflow='hidden' ratio={.3} opacity={.1}
        src='https://cdn.dribbble.com/users/548267/screenshots/7111037/media/4d7376a05741d008464edb7d126d7334.png' />
        <Container maxWidth='90%' >
          <Flex fullWidth height='100%'>
            
            <Flex color='white' flex={7}>
              <Box alignSelf='flex-end' justifySelf='flex-end' ml='auto' textRight p={4}>
                <Span xxs tag='green' m={2}>{props.tag}</Span>
                <Heading right xxl>{props.name}</Heading>
                <Heading md thin>{props.tagline}</Heading>
              </Box>
       

              <Absolute layout='topLeft' m={3}>
               <Flex alignCenter>
                  <Flex column center gem='white' mx={2} ><Image width={30} src='https://s.gitcoin.co/static/v2/images/kudos/mythx.10c16c5c5c50.svg'/> </Flex>
                  <Flex column center gem='white' mx={2} ><Image width={30} src='https://s.gitcoin.co/static/v2/images/kudos/pegasys.c2399ce66eb8.svg'/> </Flex>
                  <Flex column center gem='white' mx={2} ><Image width={30} src='https://gitcoin.co/dynamic/kudos/4966/devcon_quest_metamask'/> </Flex>
                  <Flex column center gem='white' mx={2} ><Image width={30} src='https://s.gitcoin.co/static/v2/images/kudos/alethio.fc3a876d3625.svg'/> </Flex>
                  <Span><Span xxs tag='blue'>Connected Emblems</Span></Span>
               </Flex>
              </Absolute>
            </Flex>
            <Flex flex={3}>
              
            </Flex>
          </Flex>
        </Container>
    </Flex>

    {/* Main */}
    <Container maxWidth='90%' >
      <Flex>
        <Flex width='100%'>

          <Box flex={7}>
          <TabList tabGroup='account' tabIdSelected='quests'>
            <Tab tabId='quests'>Quests</Tab>
            <Tab tabId='details'>Details</Tab>
            <Tab tabId='help'>Help</Tab>
          </TabList>
            
            <Box p={4}>
            <TabPanel tabGroup='account' tabId='quests'>
              <Flex gutter3>
                {
                  props.quests && 
                props.quests.map((quest, index) => <AdventureQuestPreview key={quest.alias} index={++index} {...quest} />)
                }
              </Flex>
            </TabPanel>
            <TabPanel tabGroup='account' tabId='details'>
              <Markdown>
                {props.content}
              </Markdown>
            </TabPanel>
            <TabPanel tabGroup='account' tabId='help'>
              <Heading>Help</Heading>
            </TabPanel>
            </Box>

          </Box>


          <Flex flex={3} gradientDir='145' width='100%' >
           
            <AdventurePanel {...props} />

          </Flex>
    
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


 const AdventureQuestPreview = ({ index, alias, title, summary, tag, category, image, styled, ...props}) => { 
  return(
    <Box>
      <Flex column card cardHover p={4} >
        <Heading xs>Step {index}.</Heading>
        <Heading>{title}</Heading>
        <Paragraph xs>
          {summary}
        </Paragraph>
        <Flex>
          <Link to={`/quest/${alias}`}>
            <Button xs mt='auto' justifySelf='flex-end'>View</Button>
          </Link>
          <Button xs variant='red' mt='auto' mx={3} justifySelf='flex-end'>Start</Button>
        </Flex>
        <Absolute layout='topRight' m={-2}>
          <Span xxs tag='green'>{tag}</Span>
        </Absolute>
      </Flex>
    </Box>
 )
 }
 
 AdventureQuestPreview.defaultProps = {
   index: 1,
   alias: 'test',
   title: 'Start The Quest',
   summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Phasellus cursus nec tortor rhoncus commodo. Vivamus varius tellus at diam ultricies consectetur. Nam blandit dapibus aliquet.',
   category: 'Beginner',
   tag: 'smart contract',
   reward: {
     token: '0x',
     title: 'Compose Master',
     type: 'OpenEmblem',
     summary: 'In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem',
   },
   image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
   styled: {
     minWidth: 140
   }
 }
 
 AdventureQuestPreview.propTypes = {
   alias: PropTypes.string,
   index: PropTypes.number,
   tag: PropTypes.string,
   title: PropTypes.string,
   reward: PropTypes.object,
   summary: PropTypes.string,
   category: PropTypes.string,
   image: PropTypes.string,
   styled: PropTypes.object,
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
   styled: PropTypes.object,
 }

const AdventurePanel = ({ styled, ...props}) => { 
 return(
  <Box mt={-240} width='100%'>
    <Box textCenter>
      <Span xxs color='white'>Adventures / <strong>{props.title}</strong></Span>
    </Box>
  <Flex column flex={1} p={2} minHeight={320} width='100%'>
    <Flex center column minHeight={230} width='100%'> 
      <BackgroundGradient gradient='purpink' gradientDir='140 ' /> 
      <BackgroundImage src='https://image.flaticon.com/icons/svg/1673/1673612.svg' opacity={0.2} />
      <Box color='white' textCenter>
        <Image card circle boxShadow='sunset' src='https://image.flaticon.com/icons/svg/1673/1673612.svg' maxWidth={80} />
        <Heading>{idx(props, _=>_.reward.title)}</Heading>
        <Span xxs tag='white'>{idx(props, _=>_.reward.type)}</Span>
      </Box>
        
    </Flex>
    <Box gradient='gray' minHeight={200} width='100%'>
      <Box p={4}>
      <Paragraph>
        {props.summary}
      </Paragraph>
      </Box>
    </Box>
  </Flex>
  </Box>
)
}


export default Account