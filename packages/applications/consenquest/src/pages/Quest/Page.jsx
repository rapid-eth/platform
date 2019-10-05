import React from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Paragraph, Flex, Box, Heading, Container, Span, Absolute, Image, BackgroundGradient, Markdown, Button, Panel } from '@horizin/design-system';
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'

import AdventureSelector from './AdventureSelector'
import {
  CommentPublish, CommentList, 
  QuestSelector, QuestCatalogAdd
} from '@kames/dao-system'
import { BoxAccess } from '@kames/3box-components/dist';

// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const QuestPage = ({ styled, ...props }) =>
  <Box width='100%'>
    {/* Header */}
    <Flex gradient='black' gradientDir='140' minHeight={380}>
      <BackgroundImage
        boxShadow='sunset' overflow='hidden' ratio={.3} opacity={.27}
        src={'https://images.ui8.net/uploads/blockchain_platform_6_1527438185419.jpg'} />
        <Container maxWidth='90%' >
          <Flex fullWidth height='100%'>
            
            <Flex color='white' flex={7}>
              <Absolute m={3}>
                <Flex>
                  <QuestSelector
                    alias={props.metadata && props.metadata.siblingPrevious}
                    component={QuestStepper}
                    label='Previous'
                  />
                  <QuestSelector
                    alias={props.metadata && props.metadata.siblingNext}
                    component={QuestStepper}
                    label='Next'
                  />
                </Flex>
              </Absolute>
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
          <TabList tabGroup='account' tabIdSelected='details'>
            <Tab tabId='details'>Details</Tab>
            <Tab tabId='quests'>Instructions</Tab>
            <Tab tabId='help'>Help</Tab>
          </TabList>
            
            <Box py={4} pr={4}>
            <TabPanel tabGroup='account' tabId='details'>
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
              {
                props.description &&
                <Markdown>
                  {props.description}
                </Markdown>
              }
            </TabPanel>
            <TabPanel tabGroup='account' tabId='help'>
              <CommentList space={SPACE} threadName={props.alias} firstModerator={ROOT} />

              <BoxAccess
                spaceAuto
                level='thread'
                space={SPACE}
                threadName={props.alias}
                optionsThread={{
                  members: false,
                  firstModerator: ROOT
                }}
              >
                <CommentPublish 
                  firstModerator={ROOT} threadName={props.alias} space={SPACE}
                />
              </BoxAccess>
            </TabPanel>
            </Box>

          </Box>


          <Flex flex={3} gradientDir='145' width='100%' >
           
            <AdventurePanel {...props} styled={{mt: -280}} />
            
          </Flex>
    
        </Flex>
        
      </Flex>
    </Container>
  </Box>


QuestPage.defaultProps = {
  members: false,
}

QuestPage.propTypes = {
  members: PropTypes.bool,
  space: PropTypes.string.isRequired,
}

const QuestStepper = ({ ...props}) => { 
  return(
   <Flex alignCenter mx={3} {...props.styled}>
     <Flex column center>
       <Span><Image circle card p={2} src={props.image} maxWidth={55} /></Span>
       <Span xxs>{props.label} Quest</Span>
     </Flex>
     <Box ml={3}>
       <Heading md heavy noMargin>{props.name} </Heading>
       <Heading sm>{props.tagline}</Heading>
     </Box>
   </Flex>
 )
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
  <Box width='100%' {...styled}>
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
      <Box py={3}>
        <Panel content={<AddQuestToSpace alias={props.alias} />} label='Start Quest'>
          <Button width='100%' variant='green' mt='auto' justifySelf='flex-end'>Start Quest</Button>
        </Panel>
      </Box>
      <Box card maxHeight={280} overflow='auto' width='100%'>
        <Markdown>
          {props.quote}
        </Markdown>
      </Box>
      </Box>
    </Box>
  </Flex>
  </Box>
)
}

const AddQuestToSpace = ({ styled, ...props}) => { 
  return(
   <Box width={350} p={4}>
     <Heading md heavy>Quest Journal</Heading>
     <Paragraph sm>
       <strong>Save quests to personal journal.</strong>
       <br/> Keep track of your journey.
     </Paragraph>
 
     <BoxAccess
       spaceAuto threadAuto
       level='thread'
       space={SPACE}
       threadName='quest_catalog'
       optionsThread={{
         members: true,
       }}
     >
       <QuestCatalogAdd alias={props.alias} />
     </BoxAccess>
   </Box>
)}


export default QuestPage