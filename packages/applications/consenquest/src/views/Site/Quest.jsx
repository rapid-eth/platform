import React from 'react';
import { Button, Card, BackgroundGradient, Markdown, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Panel, Link, Span } from '@horizin/design-system';

import {
  BoxComments, BoxAccess
} from '@kames/3box-components/dist'
  
import {
  FormWebLandStatus
} from "../../components/3Box";
import HorizontalRule from '@horizin/design-system/dist/atoms/HorizontalRule';

const QuestItem = ({
  alias, slug, threadName,
  address, title, tagline, id, to, name, imageCover,
  actionLabel, content, summary, image, images, imageFeatured,
  styled, ...props }) => (
<>
  <Flex center column py={[5]} >
    <BackgroundGradient gradient='blue'/>
    <BackgroundImage opacity={.2} ratio={.35} src={imageCover} />
    <Container maxWidth={1280}>

      <Flex alignCenter color='white'>
        <Flex flex={4}>
          <Box textCenter px={5}>
            <Image circle card maxWidth={140} boxShadow='sunset' src={image} />
            <Heading xl>{name}</Heading>
            <Heading sm>{tagline}</Heading>
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
          <Markdown>
            {content}
          </Markdown>
          <Box card>
            <Heading>comments</Heading>
            <BoxAccess
                space='web3'
                threadName={threadName}
              >
                <BoxComments
                  threadName={alias} component={<div>hello</div>}
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
</>
)

const MarkdownExample = `

# Beginner Adventure
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

### Start The Quest And Have It Be Fun
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

#### Start The Quest And Have It Be Fun
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

#### Start The Quest And Have It Be Fun
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

`

QuestItem.defaultProps = {
  name: 'Adventure Start',
  tagline: 'The Everybody Adventure',
  summary: 'The Everybody Adventure',
  content: MarkdownExample,
  image: 'https://image.flaticon.com/icons/svg/1673/1673612.svg',
  imageCover: 'https://images.ui8.net/uploads/blockchain_platform_3_1527438195999.jpg',
  tag: 'beginner',
  category: 'general',
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
  name: '',
  tagline: '',
  image: ''
}

export default QuestItem