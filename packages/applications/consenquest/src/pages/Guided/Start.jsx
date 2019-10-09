import React from 'react';
import { PropTypes } from 'prop-types'
import { BackgroundImage, Button, Box, Flex, Heading, Image, HorizontalRule, Paragraph, Container, Span } from '@horizin/design-system';

import EthereumAdventure from '../../views/Site/EthereumAdventure'

const Page = ({ styled, ...props }) => {

  return (
    <Box>
      <Container py={40}>
        <Heading lg><Flex alignCenter center>
          <Span>Those</Span>
          <Span xxl>💡</Span>
          <Span>moments in</Span>
          <Image src='https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png' maxWidth={30} />
        </Flex></Heading>
        <Flex center column>
          <Heading xxl heavy>The Ethereum Journey</Heading>
          <Heading md thin>Discover What Makes Blockchain Great</Heading>
        </Flex>
        <Box textCenter>
          <HorizontalRule />
          <Span xs my={3}>Currently there are 6,723 developers working on Ethereum. Be counted by signing your name with Github or 3Box.</Span>
          <HorizontalRule />
        </Box>
      </Container>

      <Container>
        <Flex>
          <Box flex={1} p={4}>
            <Heading heavy>Welcome to Ethereum</Heading>
            <Paragraph>
              Ethereum. Those who understand it won’t stop talking about it. Its following is almost cult-like - people who dive down the rabit hole seem to never see the world the same again. Those who are indoctrinated tend to never look back.
            </Paragraph>

            <Paragraph>
              At its core, Ethereum is the foundation for a new era of the internet:
            </Paragraph>
            <Paragraph>
              Because it really is THAT cool. Because it really is THAT revolutionary. Because as soon as you have your “holy shit” Ethereum moment, there is no going back. As soon as you understand this technology’s potential, you’ll most likely drop what you’re doing and join the movement.
            </Paragraph>

          </Box>
          <Box flex={1} p={4}>
            <Heading heavy>The Adventure</Heading>
            <Paragraph>
              The goal of this platform is to attempt to give you that “holy shit” moment. Although it typically takes quite a while to wrap your head around everything, we’ve tried to condense the experience into a nice little interactive package.
            </Paragraph>

            <Paragraph>
              This is a difficult task, so we may not succeed. However, we hope that we spark your interest enough to get you to do some more research on your own, so that you may fully understand the technology and its potential.
            </Paragraph>

            <Paragraph>
              Welcome to Ethereum. Enjoy the adventure.
            </Paragraph>

          </Box>

          <Box flex={1} p={4}>
            <Heading heavy>An 'a-ha' Moment</Heading>
            <Paragraph>
              <i>"Back when I was first learning Ethereum, one of the first things I thought was really cool about it was just that, woah, I don't have to run my own servers. I don't have to provision my own servers, I don't have to maintain servers—it's just Ethereum, and it's always there. I thought that was really cool on its own."</i>
            </Paragraph>

            <Paragraph>
              -Mike Goldin, <br />
              ConsenSys
            </Paragraph>

          </Box>
        </Flex>
      </Container>

      <Flex center column>
        <Box p={6} bg='dark' color='white' borderRadius={60} maxWidth={760} overflow='hidden' textCenter>
          <BackgroundImage
            ratio={.75} opacity={.2}
            src='https://cdn.dribbble.com/users/1780890/screenshots/5672197/illu1_1x_4x.jpg' />
          <Heading xl textCenter noMargin>Dive into Ethereum</Heading>
          <Paragraph >
            <em>Just getting started?</em> <strong> Start from the very beginning.</strong>
          </Paragraph>
          <Span xxs tag='white'>Start Now</Span>
        </Box>
      </Flex>
      <EthereumAdventure />
    </Box>
  )
}


Page.defaultProps = {

}

Page.propTypes = {
  styled: PropTypes.object
}

export default Page