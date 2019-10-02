import React from 'react';
import { Card, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button } from '@horizin/design-system';

import {
  SmartContractCard
} from "../../components/SmartContracts";
import {
  SignPledgeFormInputs,
  SignatureList, SignMessageFormInputs,
  ContractDeployTokenERC20,
  EthereumEnableMetaMask
} from "../../components/Signatures";

import {
  ContractDeployListStateful
} from "../../components/Ethers";

import {
  TokenInitList, TokenInitListStateful,
  ERC20TokenInitialize, ERC20TokenInitializeStateful, ERC20TokenTransferStateful
} from "../../components/Tokens";


import Span from '@horizin/design-system/dist/atoms/Span';

const threadName = '3box.thread.meshhub.meshhub'


const Home = ({ styled, ...props }) =>
  <>
    <Flex fullWidth minHeight='100vh' >

      <Flex column flex={1} px={200} pt={200} >
        <Heading mega noMargin>Intermediate</Heading>
        <Span normal fontSize={4}>Start Interacting with the Blockchain Right Now</Span>
        <Paragraph sm>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
        </Paragraph>
        <Flex column>
          <Button my={3} variant='primary'>Etheruem Testnet ETH</Button>
          <Button my={3} variant='green' >Launch A Token</Button>
          <Button my={3} variant='orange' >Deposit Tokens in Public Bank</Button>
        </Flex>
      </Flex>

      <Flex flex={1} pt={100} >
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_6_1569070974155.png' />
        <Flex column flex={1} p={40}>

        </Flex>
      </Flex>
    </Flex>

    <Box gradient='gray' py={100}>
        {/* <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_6_1569070974155.png' opacity={.1} /> */}
        <Flex center column >
          <Heading fontSize={'3em'} heavy>Connect to Popular Smart Contracts</Heading>
          <Heading md as='h5' center>Instantly connect to blockchain services from anywhere: <strong><em>tokens, exchanges, tools, etc...</em></strong> </Heading>
        </Flex>
  
        <Container py={60}>
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


    <Box>
      <Container py={80}>
        <Flex alignCenter>

          <Flex column center flex={1}>
            <Image card circle src='https://images.ui8.net/uploads/ar_trade_coin_1526963095832.jpg' />
          </Flex>

          <Flex column flex={1} p={40}>
            <Heading xxl noMargin>Connect to Deposit Box</Heading>
            <Span fontSize={3} normal>Deposit Funds into Public Lockbox.</Span>
            <Box mt={50} maxWidth={300}>
              <ContractDeployTokenERC20 />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  </>

export default Home