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
          <Image src='https://cdn4.iconfinder.com/data/icons/cryptocoins/227/ETH-512.png' maxWidth={30}/>
        </Flex></Heading>
        <Flex center column>
          <Heading xxl heavy>The Ethereum Adventure</Heading>
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
            Ethereum. The global, open-source platform for decentralized applications, Ethereum is one of the most revolutionary technologies of our time - and the world’s leading programmable blockchain.
          </Paragraph>

            <Paragraph>
              At its core, Ethereum is the foundation for a new era of the internet:
            </Paragraph>
            <ul>
              <li>An internet where money and payments are built in.</li>
              <li>An internet where users can own their data, and your apps don’t spy and steal from you.</li>
              <li>An internet where everyone has access to an open financial system.</li>
              <li>An internet built on neutral, open-access infrastructure, controlled by no company or person.</li>
            </ul>
            <Paragraph>
              Like other blockchains, Ethereum has a native cryptocurrency called Ether (ETH). ETH is digital money. If you’ve heard of Bitcoin, ETH has many of the same features. It is purely digital, and can be sent to anyone anywhere in the world instantly.
            </Paragraph>
            <Paragraph>
              The supply of ETH isn’t controlled by any government or company - it is decentralized, and it is scarce. People all over the world use ETH to make payments, as a store of value, or as collateral.
            </Paragraph>

          </Box>
          <Box flex={1} p={4}>
            <Heading heavy>A Different Approach</Heading>
            <Paragraph>
              But unlike other blockchains, Ethereum can do much more. Ethereum is programmable, which means that developers can use it to build new kinds of applications.
            </Paragraph>

            <Paragraph>
              These decentralized applications (or “dapps”) gain the benefits of cryptocurrency and blockchain technology. They can be trustworthy, meaning that once they are “uploaded” to Ethereum, they will always run as programmed. They can control digital assets in order to create new kinds of financial applications. They can be decentralized, meaning that no single entity or person controls them.
            </Paragraph>

            <Paragraph>
              Right now, thousands of developers all over the world are building applications on Ethereum, and inventing new kinds of applications, many of which you can use today:
            </Paragraph>

            <Paragraph>
              Cryptocurrency wallets that let you make cheap, instant payments with ETH or other assets
              Financial applications that let you borrow, lend, or invest your digital assets
              Decentralized markets, that let you trade digital assets, or even trade “predictions” about events in the real world
              Games where you own in-game assets, and can even make real money
              And much, much more.
            </Paragraph>
          </Box>

          <Box flex={1} p={4}>
          <Heading heavy>Large Community</Heading>
          <Paragraph>
            The Ethereum community is the largest and most active blockchain community in the world. It includes core protocol developers, cryptoeconomic researchers, cypherpunks, mining organizations, ETH holders, app developers, ordinary users, anarchists, fortune 500 companies, and, as of now, you.
          </Paragraph>

          <Paragraph>
            There is no company or centralized organization that controls Ethereum. Ethereum is maintained and improved over time by a diverse global community of contributors who work on everything from the core protocol to consumer applications. This website, just like the rest of Ethereum, was built - and continues to be built - by a collection of people working together.
          </Paragraph>

          <Paragraph>
            <strong>Welcome to Ethereum.</strong>
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