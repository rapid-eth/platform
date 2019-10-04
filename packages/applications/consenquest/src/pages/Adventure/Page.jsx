import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Flex, Box, Heading, Paragraph, Button, Container, Panel, Span, Absolute, Image, BackgroundGradient, Link, Markdown } from '@horizin/design-system';
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'

import AdventureSelector from './AdventureSelector'
const Account = ({ styled, ...props }) =>
  <Box width='100%'>
    {/* Header */}
    <Flex gradient='purpink' gradientDir='140' minHeight={300}>
      <BackgroundImage
        boxShadow='sunset' overflow='hidden' ratio={.3} opacity={.37}
        src={props.imageCover} />
        <Container maxWidth='90%' >
          <Flex fullWidth height='100%'>
            
            <Flex color='white' flex={7}>
              <Box alignSelf='flex-end' justifySelf='flex-end' ml='auto' textRight p={4}>
                {
                  props.tag &&
                  <Span xxs tag='green' m={2}>{props.tag}</Span>
                }
                <Heading right xxl>{props.name}</Heading>
              </Box>

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
            
            <Box py={4} pr={4}>
            <TabPanel tabGroup='account' tabId='quests'>
              <Flex wrap mx={-3}>
                {
                  props.references && props.references.data &&
                  props.references.data
                  .map((quest, index) => (
                    <AdventureQuestPreview key={quest} alias={quest} count={++index} styled={{p: 3, width: .5}} />
                  ))
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
    <Box {...styled}>
      <Flex column card cardHover p={3} >
        <AdventureSelector alias={alias} count={props.count} />
      </Flex>
    </Box>
 )
 }
 
 AdventureQuestPreview.defaultProps = {
   index: 1,
   title: 'Start The Quest',
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
      <BackgroundImage src={props.image} opacity={0.2} />
      <Box color='white' textCenter>
        <Image card circle boxShadow='sunset' src={props.image} maxWidth={140} my={3} />
        <Heading>{props.name}</Heading>
      </Box>
        
    </Flex>
    <Box gradient='gray' minHeight={200} width='100%'>
      <Box p={4}>
      <Image card src={props.imageFeatured} />
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