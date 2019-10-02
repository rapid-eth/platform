import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {
  BackgroundGradient, BackgroundImage, Flex, Card, Box, Menu,
  Markdown, Router,
  Heading, Image, Link, HorizontalRule, Button, Container, Panel, Span, Paragraph
} from '@horizin/design-system';

import DeFi from './defi'


const Community = ({ styled, ...props}) => { 
 return(
  <Router primary={false}>
    <DeFi path='/*' />
  </Router>
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