import React from 'react';
import { Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Span } from '@horizin/design-system';


import {
  ContractDeployTokenStateful,
  ERC20TokenTransferStateful,
  TokenInitListStateful, ERC20TokenInitializeStateful
} from "../../components/Tokens";

import {
  ContractDeployListStateful
} from "../../components/Ethers";

import {
  SmartContractCard
} from "../../components/SmartContracts";

import {
  BoxProfile
} from "../../components/3Box";

import MetamaskExport from '../../components/staging/MetamaskExport'

import { GeneratePrivateKeyStateful } from '../../components/Ethers'
import Card from '@horizin/design-system/dist/molecules/Card';

const Home = ({ styled, ...props }) =>
  <>
    <Flex fullWidth minHeight='100vh' >

      <Flex column flex={1} px={200} pt={200} >
        <Heading mega noMargin>Beginner</Heading>
        <Span normal fontSize={4}>Getting Started on the Web3 Journey</Span>
        <Paragraph sm>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
        </Paragraph>
        <Flex column>
          <Button my={3} variant='primary' >The Basics</Button>
          <Button my={3} variant='green' >What Is A Wallet</Button>
          <Button my={3} variant='blue' >Smart Contract Essentials</Button>
        </Flex>
      </Flex>

      <Flex flex={1} pt={100} >
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_4_1569070983873.png' />
        <Flex column flex={1} p={40}>

        </Flex>
      </Flex>
    </Flex>

    <Box gradient='blue' gradientDir='140' py={50}>
      <BackgroundImage ratio={.35} src='https://st3.depositphotos.com/1001599/18479/i/1600/depositphotos_184797096-stock-photo-ethereum-coin-on-hud-background.jpg' opacity={.1} />
      <Container color='white' maxWidth={1080}>

        <Flex alignCenter between>
          <Box flex={2}>
            <Heading xxl>Create A <strong>Decentralized Account</strong></Heading>
            <Heading md as='h5'>A unique address just for you.<strong> Access the Ξ Web3 World</strong></Heading>
            {/* <Span sm mt={20}>Protected by cryptography 🔑 and 🧑🏻‍🤝‍🧑🏻 handshakes. </Span> */}
          </Box>
          <Flex center column flex={1}>
            <Flex card circle maxWidth={150} boxShadow='sunset'>
              <Image maxWidth={120} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
            </Flex>
          </Flex>
        </Flex>
        <Flex alignCenter my={30}>

          <Box flex={2} pr={50}>
          <Flex m={-2} color='initial' maxWidth={'100%'} wrap='wrap' fullWidth>
            <Box p={2} width={['33.333333%']}>
              <Box card textCenter >
                <Heading xxl>🏦</Heading>
                <Heading>Finance</Heading>
                <Paragraph xs px={15}>Decentralized Finance</Paragraph>
              </Box>
            </Box>

            <Box p={2} width={['33.333333%']}>
              <Box card textCenter >
                <Heading xxl>🆔</Heading>
                <Heading>Identity</Heading>
                <Paragraph xs px={15}>Decentralized Identity</Paragraph>
              </Box>
            </Box>
            
            <Box p={2} width={['33.333333%']}>
              <Box card textCenter >
                <Heading xxl>🔒</Heading>
                <Heading>Privacy</Heading>
                <Paragraph xs px={15}>Increased Privacy</Paragraph>
              </Box>
            </Box>

            <Box p={2} width={['33.333333%']}>
              <Box card textCenter >
                <Heading xxl>🗺️</Heading>
                <Heading>Networks</Heading>
                <Paragraph xs px={15}>Increased Privacy</Paragraph>
              </Box>
            </Box>

            <Box p={2} width={['33.333333%']}>
              <Box card textCenter >
                <Heading xxl>📡</Heading>
                <Heading>Communication</Heading>
                <Paragraph xs px={15}>Decentralized Finance</Paragraph>
              </Box>
            </Box>

            <Box p={2} width={['33.333333%']}>
              <Box card textCenter >
                <Heading xxl>🎫</Heading>
                <Heading>Services</Heading>
                <Paragraph xs px={15}>Decentralized Identity</Paragraph>
              </Box>
            </Box>
      
          </Flex>
          </Box>

          <Flex column center flex={1} maxWidth={500}>
            <GeneratePrivateKeyStateful />
            <MetamaskExport/>
          </Flex>
        </Flex>
        

      </Container>
    </Box>

    

    <Flex center column my={50}>
      <Heading fontSize={'4em'} heavy>Ready To Get Started?</Heading>
      <Heading lg as='h5'>Let's launch your <strong>first smart contract</strong> on an <strong>Ethereum</strong> blockchain.</Heading>
    </Flex>
      
    <Box>
      <Container py={20}>
        <Flex alignCenter>
          <Flex column flex={1} p={40}>
            <Heading xxl noMargin>Launch A <strong><em>You</em></strong> Token</Heading>
            <Span fontSize={3} normal>Launch a digital token to represent you on an Ethereum blockchain.</Span>
            <Paragraph xs>
              Launch a new cryptocurrency token on the Ethereum blockchain. A cryptocurrency token you own and control. You decide who to send tokens, how much and what they can do with them. The possibilities are endless. It's it up to you to decide what your token will do.
            </Paragraph>
            <Span md mt={10}>Standard Token Fields</Span>
            <ul>
              <li><strong>Name: </strong> Name of Token</li>
              <li><strong>Symbol:</strong> The token shorthand symbol</li>
              <li><strong>Decimals:</strong> Between 0 to 18 decimal places</li>
              <li><strong>Capped:</strong> Limit to number of mintable tokens</li>
            </ul>
            <Flex mt={4}>
              <Button variant='green'>Learn More</Button>
              <Button variant='white' ml={15}>Gitcoin Token Quest</Button>
            </Flex>
          </Flex>
          <Flex column center flex={1}>
            <Image card circle src='https://images.ui8.net/uploads/sms_send_and_recive_coin_1526963064333.jpg' />
            {/* <Image card circle src='https://images.ui8.net/uploads/2_1529684097775.jpg' /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>

    <Container>
      <Flex alignCenter>

        <Flex column flex={3}>
          <Heading xxl color='b;ie' palette={['blue', 2]} center>Select A Token Type</Heading>
          <Heading sm center>Decide what type of token to deploy. Don't worry you can re-deploy later.</Heading>
          <Flex gutter3 maxWidth={'100%'} mt={40}>
            <Box card textCenter>
              <Image
                circle
                src='https://static.thenounproject.com/png/2199745-200.png'
                boxShadow='sunset'
                mt={-40}
                p={10}
                maxWidth={60}
              />
              <Heading>Capped</Heading>
              <Paragraph xs px={15}>Limit the amount of mintable tokens.</Paragraph>
            </Box>
            <Box card textCenter>
              <Image
                circle
                src='https://static.thenounproject.com/png/1808096-200.png'
                boxShadow='sunset'
                mt={-40}
                p={10}
                maxWidth={60}
              />
              <Heading>Storage</Heading>
              <Paragraph xs px={15}>An extra storage field for an IPFS hash.</Paragraph>
            </Box>
            <Box card textCenter>
              <Image
                circle
                src='https://static.thenounproject.com/png/1709924-200.png'
                boxShadow='sunset'
                mt={-40}
                p={10}
                maxWidth={60}
              />
              <Heading>Standard</Heading>
              <Paragraph xs px={15}>The standard token contract you love.</Paragraph>
            </Box>
          </Flex>
        </Flex>

        <Flex column flex={2} p={50}>
          <Box card mt={50} p={50} fullWidth>
            <Heading center>Notary Token</Heading>
            <ContractDeployTokenStateful />
          </Box>
        </Flex>
      
      </Flex>
    </Container>

    <Box>
      <Container py={80}>
        <Flex alignCenter>

          <Flex column center flex={1}>
            <BoxProfile />
          </Flex>

          <Flex column flex={1} p={40}>
            <Heading xl noMargin>Send Tokens to Joe</Heading>
            <Span fontSize={3} normal>Transfer tokens to anyone. Anywhere. Anytime.</Span>
            <Box mt={50} maxWidth={300}>
              <ERC20TokenTransferStateful address='0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE' />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>

    
    
  </>

export default Home