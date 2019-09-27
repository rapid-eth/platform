import React from 'react';
import { Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Span } from '@horizin/design-system';

import {
  ContractDeployTokenERC20,
} from "../../components/Signatures";
import {
  TokenInitListStateful, ERC20TokenInitializeStateful
} from "../../components/Tokens";

import {
  ContractDeployListStateful
} from "../../components/Ethers";

import {
  SmartContractCard
} from "../../components/SmartContracts";


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

    <Box gradient='blue' py={100}>
      <BackgroundImage ratio={.35} src='https://st3.depositphotos.com/1001599/18479/i/1600/depositphotos_184797096-stock-photo-ethereum-coin-on-hud-background.jpg' opacity={.1} />
      <Container py={100} maxWidth={1080}>

        <Flex color='white' my={30}>
          <Box flex={1}>
            <Heading xl>Create A Blockchain Wallet</Heading>
            <Heading md as='h5'>A unique address just for you. <strong>A digital <em>You</em>.</strong></Heading>
            <Flex column my={50}>
              <Span><strong>Public Address:</strong></Span>
              <Paragraph>
                The public address is...
              </Paragraph>
              <Span mt={3}><strong>Private Key:</strong></Span>
              <Paragraph>
                The private key is...
              </Paragraph>
            </Flex>
          </Box>
          <Flex column center flex={2} maxWidth={500}>
            <GeneratePrivateKeyStateful />
            <Box textCenter bg='#f4516c7a' p={10} borderRadius={7} mt={30}>
              <Span xs><strong>WARNING:</strong> Never generate important private keys in the browser!</Span>
            </Box>
          </Flex>
        </Flex>
        

      </Container>
    </Box>

    <Box gradient='gray' py={100}>
        {/* <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_6_1569070974155.png' opacity={.1} /> */}
        <Flex center column >
          <Heading fontSize={'3em'} heavy>Want to see how easy it is?</Heading>
          <Heading md as='h5' center>Instantly connect to blockchain services from anywhere: <strong><em>tokens, exchanges, tools, etc...</em></strong> </Heading>
        </Flex>
        <Container maxWidth={700}>
          <Flex column center mt={20} mb={80} >
            <Box maxWidth={500} fullWidth textCenter>
              <Span xs my={10}><strong>Example: </strong>0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE</Span>
              <ERC20TokenInitializeStateful />
            </Box>
          </Flex>

          <TokenInitListStateful />
          <ContractDeployListStateful />
        </Container>

        <Container>
          <Box>
              <Flex gutter3>

                <SmartContractCard
                  title='DAI'
                  tagline='Decentralized Stable Coin'
                  summary='A Cryptocurrency Token algorithmically pegged to a USD.'
                  image='https://cgi.cryptoreport.com/images/coins/dai.png'
                >
                  
                </SmartContractCard>
                <SmartContractCard
                  title='Uniswap'
                  tagline='Decentralized Token Exchange'
                  summary='Easily exchange Cryptocurrency Tokens withut a centralized service.'
                  image='https://pbs.twimg.com/profile_images/1057983528128954369/Ux8N5qTk_400x400.jpg'
                >
                  
                </SmartContractCard>
                <SmartContractCard
                  title='Augur'
                  tagline='Decentralized Prediction Market'
                  summary='Make predictions about the world and in effect create a blockchain oracle.'
                  image='https://wheretoinvest.money/wp-content/uploads/2018/05/augur-logo.png'
                >
                  
                </SmartContractCard>
              </Flex>
              <Flex center column mt={50}>
                <Button variant='blue' >View Full List of Curated Contracts</Button>
                <Span mt={10}>Add Contracts to Community List</Span>
              </Flex>
            </Box>
        </Container>
      </Box>

    <Flex center column my={50}>
      <Heading fontSize={'4em'} heavy>Ready To Get Started?</Heading>
      <Heading lg as='h5'>Let's launch your <strong>first smart contract</strong> on an <strong>Ethereum</strong> blockchain.</Heading>
    </Flex>
      
    <Box>
      <Container py={80}>
        <Flex alignCenter>
          <Flex column flex={1} p={40}>
            <Heading xxl noMargin>Launch A <strong><em>You</em></strong> Token</Heading>
            <Span fontSize={3} normal>Launch a digital token to represent you on an Ethereum blockchain.</Span>
            <Paragraph>
              Quisque rhoncus, tellus et malesuada malesuada, velit eros lobortis felis, sit amet porta magna odio at purus.
            </Paragraph>
            <ul>
              <li>Name: Name of Token</li>
              <li>Symbol: The token shorthand symbol</li>
              <li>Decimals: Between 0 to 18 decimal places</li>
              <li>Capped: Limit to number of mintable tokens</li>
            </ul>
            <Flex>
              <Button xs variant='green'>Learn More</Button>
              <Button xs variant='white' ml={15}>Review Gitcoin Token Quest</Button>
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
      <Flex>
        <Flex column flex={1}>
          <Flex gutter3>
            <Box card textCenter>
              <Heading>Limited Supply</Heading>
              <Heading xs>Keep tokens rare.</Heading>
            </Box>
            <Box card textCenter>
              <Heading>Limited Supply</Heading>
              <Heading xs>Keep tokens rare.</Heading>
            </Box>
          </Flex>
        </Flex>
        
        <Flex flex={1}>
          <Box mt={50} maxWidth={300}>
            <ContractDeployTokenERC20 />
          </Box>

        </Flex>
      </Flex>
    </Container>

    <Box>
      <Container py={80}>
        <Flex alignCenter>

          <Flex column center flex={1}>
            <Image card circle src='https://images.ui8.net/uploads/ar_trade_coin_1526963095832.jpg' />
          </Flex>

          <Flex column flex={1} p={40}>
            <Heading xxl noMargin>Deposit Tokens into the Public Bank</Heading>
            <Span fontSize={3} normal>Easily give friends tokens using a public lockbox and one-time access.</Span>
            <Box mt={50} maxWidth={300}>
              <ContractDeployTokenERC20 />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
    
  </>

export default Home