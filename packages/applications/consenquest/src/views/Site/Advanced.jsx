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
import Span from '@horizin/design-system/dist/atoms/Span';

// const threadName = process.env.REACT_APP_DEFAULT_SPACE_THREAD_NAME
const threadName = '3box.thread.meshhub.meshhub'


const Home = ({ styled, ...props }) =>
  <>
    <Flex fullWidth minHeight='100vh' >

      <Flex column flex={1} px={200} pt={200} >
        <Heading mega noMargin>Advanced</Heading>
        <Span normal fontSize={4}>Create A Decentralized Developer Profile</Span>
        <Paragraph sm>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
        </Paragraph>
        <Flex column>
          <Button my={3} variant='primary'>Create Profile</Button>
        </Flex>
      </Flex>

      <Flex flex={1} pt={100} >
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_3_1569070987100.png' />
        <Flex column flex={1} p={40}>

        </Flex>
      </Flex>
    </Flex>


    <Box gradient='blue' py={[100]} >
      <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_6_1569070974155.png' opacity={.2} />
      <Container py={80}>
        <Box color='white' py={30} textCenter>
          <Heading xxl noMargin>Let Friends Complete Personal Quests</Heading>
          <Span fontSize={3} normal>Launch a digital token to represent you on an Ethereum blockchain.</Span>
        </Box>
        <Flex alignCenter>
          <Flex color='white' column flex={1} p={40}>

            <Flex color='initial' column>

              <Flex alignCenter between card m={3}>
                <Flex alignCenter >
                  <Span><Image maxWidth={30} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' /></Span>
                  <Heading noMargin ml={15}>Send Me Ethereum</Heading>
                </Flex>
                <Span variant='tag' bg='blue' xs noMargin ml={15}>50 KCG</Span>
              </Flex>
              <Flex alignCenter between card m={3}>
                <Flex alignCenter >
                  <Span><Image maxWidth={30} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' /></Span>
                  <Heading noMargin ml={15}>Send Me Ethereum</Heading>
                </Flex>
                <Span variant='tag' bg='blue' xs noMargin ml={15}>50 KCG</Span>
              </Flex>
              <Flex alignCenter between card m={3}>
                <Flex alignCenter >
                  <Span><Image maxWidth={30} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' /></Span>
                  <Heading noMargin ml={15}>Send Me Ethereum</Heading>
                </Flex>
                <Span variant='tag' bg='blue' xs noMargin ml={15}>50 KCG</Span>
              </Flex>

            </Flex>
            <Box mt={50} maxWidth={500}>
            </Box>
          </Flex>
          <Flex column center flex={1}>
            <QuestMiniCreate />
          </Flex>
        </Flex>
      </Container>
    </Box>

    <Box>
      <Container py={[100]}>
        <Box textCenter>
          <Heading xxl>DEV Token Quests</Heading>
          <Heading lg>Start Collecting DEV Today</Heading>
        </Box>
        <Flex gutter3>
          <QuestList
            to={`/quest/${threadName}`}
            threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
            space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
        </Flex>
      </Container>
    </Box>
    
  </>

export default Home