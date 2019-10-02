import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {
  BackgroundGradient, BackgroundImage, Flex, Card, Box, Menu,
  Markdown,
  Heading, Image, Link, HorizontalRule, Button, Container, Panel, Span, Paragraph, Modal
} from '@horizin/design-system';
import MenuItems from '../../../static/menus/resources'
import {
  QuestCard,
  QuestCreate
} from "../../../components/Quests";

const QuestCreateForm = ({ styled, ...props}) => { 
 return(
  <Flex bg='white' fullWidth flex={1} width={['100%'] } height='100%'>
    <Flex width='100%'>
      <Flex column bg='gray' p={3} flex={1}>
        <Heading>How It Works</Heading>
        <Heading md thin>Create Quest</Heading>
      </Flex>
      <Flex column flex={5} p={3}>
        <QuestCreate />
      </Flex>
    </Flex>
  </Flex>
)
} 


const CreateQuestComingSoon = ({ styled, ...props}) => { 
 return(
  <Box p={4} width={400}>
    <Heading md heavy>Publish Smart Quest</Heading>
    <Paragraph>
      Do you want to encourage people to interact with your smart contracts? Publish a quest adventure and share your smart contract with the world.
    </Paragraph>
    <Heading md heavy>Why</Heading>
    <Paragraph>
      The interactive quest system provides a fun narrative around any smart contract. Plus it's any easy way to onboard users without building a new interface.
    </Paragraph>
    <Heading md heavy>What <em>You</em> Need</Heading>
    <ul>
      <li>contract address</li>
      <li>function signature</li>
      <li>function input types</li>
      <li>function trigger</li>
    </ul>
    <Modal
      content={<QuestCreateForm />}
      position='fullScreen'
      variant='fullScreen'
      styled={{
        position: 'fullScreen',
        m: 80
      }}
    >
      <Button variant='green' mt={4}>Start Creating Quest</Button>
    </Modal>
    
  </Box>
)
}

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
        <Heading mega>Decentralized Finance</Heading>
        <Flex alignCenter card circle boxShadow='blue'>
          {/* <Image src='https://image.flaticon.com/icons/svg/1673/1673636.svg' maxWidth={50} m={3} /> */}
          <Heading xxl mx={3}>🏦</Heading>
          <Panel content={<CreateQuestComingSoon />} label='Create DeFi Quest'>
            <Button xs mx={2}>Create DeFi Quest</Button>
          </Panel>
        </Flex>
      </Flex>
      <Box>
        <Flex alignCenter>
          <Heading sm heavy noMargin>Featured Application: </Heading>
          <Link to='/quest/kirby'>
            <Span xxs mx={1} tag='green'>Maker DAO</Span>
          </Link>
          <Link to='/quest/kirby'>
            <Span xxs tag='green' mx={2}>Uniswap</Span>
          </Link>
        </Flex>
      </Box>
      <Box mt={4}>
        <Flex alignCenter between>
          <Heading lg>Just Getting Started</Heading>
          <Flex alignCenter >
            <Span xs>Find Applications that match your needs.</Span>
            
            <Panel content={<RecommendedQuests />} label='Quest Details'>
              <Span thin pointer fontSize={0} ml={2} tag='red'>Developer Survey</Span>
            </Panel>
          </Flex>
        </Flex>
        <HorizontalRule />
        <Flex evenly width='100%' gutter3 wrap='wrap' py={60}>
          <QuestCard
            title='DAI'
            tagline='Decentralized Stable Coin'
            summary='A Cryptocurrency Token algorithmically pegged to a USD.'
            image='https://cgi.cryptoreport.com/images/coins/dai.png'
          >
            
          </QuestCard>
          <QuestCard
            title='Uniswap'
            tagline='Decentralized Token Exchange'
            summary='Easily exchange Cryptocurrency Tokens withut a centralized service.'
            image='https://pbs.twimg.com/profile_images/1057983528128954369/Ux8N5qTk_400x400.jpg'
          >
            
          </QuestCard>
          <QuestCard
            title='Augur'
            tagline='Decentralized Prediction Market'
            summary='Make predictions about the world and in effect create a blockchain oracle.'
            image='https://wheretoinvest.money/wp-content/uploads/2018/05/augur-logo.png'
          />
        </Flex>
      </Box>
    </Flex>
  </Flex>
)
}

const AdventureCard = ({ name, tagline, content, summary, image, imageCover, tag, styled, ...props}) => { 
 return(
  <Flex center column {...styled}>
    <Box cardHover width='100%'>
    <Flex height='100%' >
      <Flex column center flex={1} p={15} minHeight={90}>
        <BackgroundGradient gradient='blue'/>
        <BackgroundImage src={imageCover} opacity={0.2} ratio={0.3} />
        
        {image &&
        <Box inlineBlock circle boxShadow='sunset' p={20} gradient='white' maxWidth={120} mx='auto'>
          <Image src={image} />
        </Box>
        }
      </Flex>
  
      <Box card borderNone flex={3} p={15} py={30} zIndex={20}>
      
        <Flex between>
          <Heading lg mt={0} fontWeight={300}>
            {name}
          </Heading>
          <Box>
          <Flex alignCenter between>
            <Box>
              <Span xs color='white' highlight='blue' alignSelf='flex-start'>Feb 27, 2019</Span>
            </Box>
            <Span xxs tag='green' alignSelf='flex-end'>{tag}</Span>
          </Flex>
          </Box>
        </Flex>
        <HorizontalRule />
        <Markdown>
          {content}
        </Markdown>
      <Box card flex={1} p={10} >
        <BackgroundGradient gradient='gray'/>
        <Flex between fullWidth>
          <Span><Button xs>Start Quest</Button></Span>
          <Panel content={<QuestDetails content={content}/>} label='Quest Details'>
              <Button sm>Details</Button>
          </Panel>
        </Flex>
      </Box>
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
      <AdventureCard />
      <AdventureCard />
      <AdventureCard />
    </Flex>
  </Box>
)
}

const MarkdownExample = `

#### Beginner Adventure
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

`

AdventureCard.defaultProps = {
  name: 'Adventure Start',
  tagline: 'The Everybody Adventure',
  summary: 'The Everybody Adventure',
  content: MarkdownExample,
  image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  tag: 'beginner',
  category: 'general',
}

AdventureCard.propTypes = {
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