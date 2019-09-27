import React from 'react';
import { Card, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button } from '@horizin/design-system';

import { QuestList, QuestCreate, QuestMiniCreate } from '@kames/dao-system/dist'
import {
  SignMessage,
  QuestRinkebyFaucet
} from "../../components";

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

// const threadName = process.env.REACT_APP_DEFAULT_SPACE_THREAD_NAME
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

    <Flex color='white' my={30}>
          
          <Flex column center flex={2} maxWidth={500}>
            <Button>3ID Login</Button>
          </Flex>

          <Box flex={3}>
            <Box p={40} textCenter>
              <Heading xl>Create A Decentralized Identity</Heading>
              <Heading md as='h5'>A unique address just for you. <strong>A digital <em>You</em>.</strong></Heading>
            </Box>
          </Box>

        </Flex>


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