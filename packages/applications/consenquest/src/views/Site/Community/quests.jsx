import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {
  BackgroundGradient, BackgroundImage, Flex, Card, Box, Menu,
  Markdown,
  Heading, Image, Link, HorizontalRule, Button, Container, Panel, Span, Paragraph
} from '@horizin/design-system';
import MenuItems from '../../../static/menus/community'

const Community = ({ styled, ...props}) => { 
 return(
  <Flex minHeight={400}>
    <Flex gradient='gray' flex={1} >
      <Box fullWidth>
        <Menu vertical items={MenuItems} />
      </Box>
    </Flex>
    <Flex column flex={5} p={30}>
      <Flex alignCenter between>
        <Heading mega>Quests</Heading>
        <Box card circle boxShadow='blue'>
          <Image src='https://image.flaticon.com/icons/svg/1673/1673610.svg' maxWidth={60} m={3} />
        </Box>
      </Flex>
      <Box>
        <Flex alignCenter>
          <Heading sm heavy noMargin>Featured Quests: </Heading>
          <Link to={`/quest/kirby`}>
            <Span xxs mx={1} tag='green'>Quest: Kirby Plugin</Span>
          </Link>
          <Link to={`/quest/kirby`}>
            <Span xxs tag='green' mx={2}>Quest: MetaMask plugin</Span>
          </Link>
        </Flex>
      </Box>
      <Box mt={4}>
        <Flex alignCenter between>
          <Heading lg>Quests</Heading>
          <Flex alignCenter >
            <Span xs>Find Adventures that match your skill level</Span>
            
            <Panel content={<RecommendedQuests />} label='Quest Details'>
              <Span thin pointer fontSize={0} ml={2} tag='red'>Recommend Quests</Span>
          </Panel>
          </Flex>
        </Flex>
        <HorizontalRule />
        <Flex evenly width='100%' mx={-3} wrap='wrap'>
          <QuestCard styled={{width: .333, p: 3}} />
          <QuestCard styled={{width: .333, p: 3}} />
          <QuestCard styled={{width: .333, p: 3}} />
          <QuestCard styled={{width: .333, p: 3}} />
          <QuestCard styled={{width: .333, p: 3}} />
          <QuestCard styled={{width: .333, p: 3}} />
        </Flex>
      </Box>
    </Flex>
  </Flex>
)
}


const QuestDetails = ({ content, styled, ...props}) => { 
 return(
  <Box p={30} maxWidth={350}>
    <Markdown>
      {content}
    </Markdown>
    <Button variant='red'>Start Quest</Button>
    <Button mt={3}>Share Quest</Button>
  </Box>
)
}

const RecommendedQuests = ({ content, styled, ...props}) => { 
 return(
  <Box p={30} width={460}>
    <Flex column width='100%' >
      <QuestCard />
      <QuestCard />
      <QuestCard />
    </Flex>
  </Box>
)
}


const QuestCard = ({ name, tagline, content, summary, image, imageCover, styled, ...props}) => { 
  return(
   <Flex center column {...styled}>
     <Box cardHover width='100%'>
     <Flex column height='100%' >
       <Flex column flex={1} p={15} minHeight={90}>
         <BackgroundGradient gradient='blue'/>
         <BackgroundImage src={imageCover} opacity={0.2} ratio={0.3} />
         <Flex alignCenter between>
           <Box>
             <Span xs color='white' highlight='blue' alignSelf='flex-start'>Feb 27, 2019</Span>
           </Box>
           <Span variant='tag' highlight='green' alignSelf='flex-end'>Tag</Span>
         </Flex>
       </Flex>
   
       <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
       {image &&
         <Box inlineBlock circle boxShadow='sunset' p={20} gradient='white' maxWidth={120} mx='auto' mt={-100}>
           <Image src={image} />
         </Box>
         }
         <Heading lg mt={0} fontWeight={300}>
           {name}
         </Heading>
         <Paragraph fontSize={[1]} mb={[25]}>
           {tagline}
         </Paragraph>
       </Box>
   
       <Box card flex={1} p={10} >
         <BackgroundGradient gradient='gray'/>
         <Flex between fullWidth>
           <Span><Button xs>Start Quest</Button></Span>
           <Panel content={<QuestDetails content={content}/>} label='Quest Details'>
               <Button sm>Details</Button>
           </Panel>
         </Flex>
       </Box>
     </Flex>
   </Box>
   </Flex>
 )
 }

const MarkdownExample = `

# Beginner Quest
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

#### Getting Started Is Easy
In ac dapibus dolor. Maecenas eu tortor fermentum felis malesuada vehicula. Phasellus vel aliquet felis. Aliquam erat volutpat. Nulla ullamcorper fringilla tortor nec gravida. Suspendisse et rutrum tellus. Curabitur faucibus ultrices urna, eu finibus nisl molestie et.
`

QuestCard.defaultProps = {
  name: 'Quest Starter',
  tagline: 'The Everybody Starter Quest',
  summary: 'The Everybody Starter Quest',
  content: MarkdownExample,
  image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  tag: 'beginner',
  category: 'general',
}

QuestCard.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  summary: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  imageCover: PropTypes.string,
  tag: PropTypes.string,
  category: PropTypes.string,
}

export default Community