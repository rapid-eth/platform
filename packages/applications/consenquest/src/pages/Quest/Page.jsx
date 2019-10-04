import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Flex, Card, HorizontalRule, Box, Menu, Heading,  Button, Toast, Container, Panel, Span, Absolute, Image, BackgroundGradient, Link, Markdown } from '@horizin/design-system';
import {
  BoxComments, BoxAccess
} from '@kames/3box-components/dist'
import Paragraph from '@horizin/design-system/dist/atoms/Paragraph';

const Account = ({ styled, ...props }) =>(
<Flex column>
  <Flex center column py={[5]} >
    <BackgroundGradient gradient='blue'/>
    <BackgroundImage opacity={.2} ratio={.35} src={props.imageCover} />
    <Container maxWidth={1280}>

      <Flex alignCenter color='white'>
        <Flex flex={4}>
          <Box textCenter px={5}>
            <Image circle card maxWidth={140} boxShadow='sunset' src={props.image} />
            <Heading xl>{props.name}</Heading>
            <Heading sm>{props.tagline}</Heading>
          </Box>
        </Flex>
        <Flex between color='white' flex={7} >
          <Flex between pr={5} width='100%'>
            <Box textCenter opacity={.6} >
              <Span circle card mega color='charcoal' my={2} md heavy >1</Span>
              <Heading>Setup Web3 Browser</Heading>
              <Heading sm>Get connected to Ethereum</Heading>
            </Box>
            <Box textCenter>
              <Span circle card mega color='charcoal' my={2} md heavy >2</Span>
              <Heading>Create Wallet</Heading>
              <Heading sm>Get connected to Ethereum</Heading>
            </Box>
            <Box textCenter opacity={.6} >
              <Span circle card mega color='charcoal' my={2} md heavy >3</Span>
              <Heading>Sign Message</Heading>
              <Heading sm>Get connected to Ethereum</Heading>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  </Flex>
  <Container maxWidth={'100%'}>
    <Flex width='100%' >
      <Box gradient='gray' flex={4}>
        <Box p={4}>
          <Box textCenter>
            <Heading lg heavy>Leaderboard</Heading>
          </Box>
          <Box my={3}>
            <ProfileLineItem />
            <ProfileLineItem />
            <ProfileLineItem />
            <HorizontalRule dash center />
            <Heading sm center >Leaderboard</Heading>
          </Box>
        </Box>
      </Box>

      <Flex column flex={7}>
        <Box px={5} px={5} py={4}>
            {props.description &&
              <Markdown>
                {props.description}
              </Markdown>
            }
          <Box card>
            <Heading>comments</Heading>
            <BoxAccess
                space='web3'
                threadName={props.threadName}
              >
                <BoxComments
                  threadName={props.alias} component={<div>hello</div>}
                  space='web3' members={false}
                />
            </BoxAccess>
          </Box>
        </Box>
      </Flex>
      <Flex flex={3}>
        <Flex column p={3}>
            <Box card>
              <Heading>Step 1. Do This</Heading>
              <Heading xs>Get Started with the Basics</Heading>
              <Paragraph xs>
                Vivamus nisi mauris, iaculis vitae lacinia in, bibendum et orci. Nulla tincidunt diam et interdum porttitor. Nam eu iaculis massa.
              </Paragraph>
            </Box>
            <Box card my={3}>
              <Heading>Step 2. Do This</Heading>
              <Heading xs>Get Started with the Basics</Heading>
              <Paragraph xs>
                Vivamus nisi mauris, iaculis vitae lacinia in, bibendum et orci. Nulla tincidunt diam et interdum porttitor. Nam eu iaculis massa.
              </Paragraph>
            </Box>
            <Box card>
              <Heading>Step 3. Do This</Heading>
              <Heading xs>Get Started with the Basics</Heading>
              <Paragraph xs>
                Vivamus nisi mauris, iaculis vitae lacinia in, bibendum et orci. Nulla tincidunt diam et interdum porttitor. Nam eu iaculis massa.
              </Paragraph>
            </Box>
          </Flex>
      </Flex>

    </Flex>
  </Container>
</Flex>
)


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


 const ProfileLineItem = ({
  alias,
  address, title, tagline, id, to, name,
  actionLabel, content, summary, image, images, imageFeatured,
  styled, ...props
}) => { 
 return(
  <Flex alignCenter between card flex={1} m={2} width='100%'>
    <Flex>
      <Span><Image variant='avatar' width={36} src={image} /></Span>
      <Box ml={2}>
        <Box>
          <Heading noMargin sm>
            {name}
          </Heading>
          <Heading noMargin xs>
            {tagline}
          </Heading>
        </Box>
      </Box>
    </Flex>
    <Span justifySelf='flex-end' xxs tag='white'>2 Days Ago</Span>
  </Flex>
)
}

ProfileLineItem.defaultProps = {
  name: 'Kames Geraghty',
  tagline: 'The Baddest JS Developer Around',
  image: 'https://ipfs.io/ipfs/QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE'
}


export default Account