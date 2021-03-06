import React from 'react';
import { Button, Box, Flex, Heading, Image, Container, Card, BackgroundImage, Paragraph } from '@horizin/design-system';
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



    <Flex fullWidth minHeight={'100vh'}>
      <Flex justifyCenter column flex={1} p={200}>
        <Heading xxl noMargin>1 Million Developers</Heading>
        <Span fontSize={3} normal>Join The Web3 Guild. Develop the Future</Span>
        <Paragraph xs>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
            </Paragraph>
        <Flex fullWidth mt={30}>
          <EthereumEnableMetaMask />
        </Flex>
      </Flex>
      <Flex alignCenter flex={1}>
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_7_1569070970063.png' />
        <Flex column flex={1} p={40}>
          <Flex center column card mt={50} ml={-160} width={300} p={30}>
            <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
              <Image maxWidth={80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
            </Flex>

            <Heading my={10} center>Web3 Pledge</Heading>
            <Paragraph xs center>
              Curabitur dolor ligula, dictum auctor lacus mollis, lacinia tristique magna.
                </Paragraph>

            <SignPledgeFormInputs fullWidth />

            <Span xs my={15}>596 Signed Pledges</Span>
          </Flex>
        </Flex>
        <Flex column center flex={2}>
          {/* <Image maxWidth={600} src='https://images.ui8.net/uploads/ar_trade_coin_1526963095832.jpg' /> */}
        </Flex>
      </Flex>
    </Flex>


    <Box gradient='purpink' gradientDir='140' py={100}>
      <BackgroundImage ratio={.55} src='https://images.ui8.net/uploads/preview_6_1569070974155.png' opacity={0.2} />
      <Container mt={[-190]}>
        <Flex gutter3>

          <Box card boxShadow='sunset'>
            <Flex center column>
              <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
                <Image maxWidth={80} src='https://static.thenounproject.com/png/1709925-200.png' />
              </Flex>
              <Heading xl thin >Beginner</Heading>
              <Heading xs heavy>Get Started with the Basics</Heading>
              <Paragraph xs center>
                Vivamus eget placerat tortor. Proin hendrerit, tortor a sodales accumsan, turpis lacus venenatis purus, non accumsan sapien dolor sit amet arcu. Ut elit est, placerat et sodales id, aliquam ac odio.
              </Paragraph>
              <Button  my={30} variant='green'>Learn the Basics</Button>
            </Flex>
          </Box>
          
          <Box card boxShadow='sunset'>
            <Flex center column>
              <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
                <Image maxWidth={80} src='https://static.thenounproject.com/png/1808096-200.png' />
              </Flex>
              <Heading xl thin >Intermediate</Heading>
              <Heading xs heavy>Get Started with the Basics</Heading>
              <Paragraph xs center>
                Vivamus eget placerat tortor. Proin hendrerit, tortor a sodales accumsan, turpis lacus venenatis purus, non accumsan sapien dolor sit amet arcu. Ut elit est, placerat et sodales id, aliquam ac odio.
              </Paragraph>
              <Button  my={30} variant='green'>Deploy Contracts</Button>
            </Flex>
          </Box>
          
          <Box card boxShadow='sunset'>
            <Flex center column>
              <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
                <Image maxWidth={80} src='https://static.thenounproject.com/png/1941859-200.png' />
              </Flex>
              <Heading xl thin >Advanced</Heading>
              <Heading xs heavy>Get Started with the Basics</Heading>
              <Paragraph xs center>
                Vivamus eget placerat tortor. Proin hendrerit, tortor a sodales accumsan, turpis lacus venenatis purus, non accumsan sapien dolor sit amet arcu. Ut elit est, placerat et sodales id, aliquam ac odio.
              </Paragraph>
              <Button my={30} variant='green'>Submit History</Button>
            </Flex>
          </Box>

        </Flex>
        <Box mt={70}>
        <Box width={700} mx='auto'>
          <Blockquote card>
            <Heading xl heavy>Global Virtual Machine</Heading>
              <em>When I discovered Ethereum, I realized that it used a virtual machine that spanned the globe: a world computer. And even better, I could write programs for that world computer. As soon as I realized the implications of this technology I knew this was what I would be doing for the rest of my career.</em>
              <Flex alignCenter justifyEnd>
                <Box textRight>
                  <Heading md heavy>Daniel Ellison</Heading>
                  <Heading sm thin>Hardware Engineer Extraordinaire!</Heading>
                </Box>
                <Image mx={10} variant='avatar' src='https://pbs.twimg.com/profile_images/925445911181869056/9ZSadlR9_400x400.jpg' />
              </Flex>
          </Blockquote> 
        </Box>
        </Box>
        <Box textCenter color='white' mt={70}>
          <Heading md as='h4'>1,000,000 DEV Available (Limited Supply)</Heading>
          <Heading sm as='h6'>Earn DEV Token for Introducing Developers</Heading>
          <Button p={50} my={30} styled={{p: 40}} variant='blue'>Refer A Friend</Button>
          <Paragraph heavy>
            Earn DEV tokens and access to projects by introducing developers to Web3 Land.
          </Paragraph>
        </Box>
      </Container>    
    </Box>

    <Flex center column gradient='purpink' gradientDir='45' py={[150]}>
      {/* <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_6_1569070974155.png' opacity={.12} /> */}
      <Container >
        <Flex column center color='white'>


          <Flex evenly p={20} fullWidth>

            <Flex center column>
              <Flex card circle maxWidth={120} p={30} boxShadow='sunset'>
                <Image maxWidth={50} src='data:image/jpeg;base64,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' />
              </Flex>
              <Heading>MetaMask</Heading>
            </Flex>
            <Flex center column>
              <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
                <Image maxWidth={80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
              </Flex>
              <Flex center column p={20}>
                <Button xl variant='dark'>Connect to Ethereum</Button>
              </Flex>
            </Flex>
            <Flex center column>
              <Flex card circle maxWidth={120} p={30} boxShadow='sunset'>
                <Image maxWidth={50} src='https://cdn.stateofthedapps.com/dapps/burner-wallet/logo_burner-wallet_eaf4e85860062ab127740c52fe27a3698a52938b5ac849c2c354da7f65f25bb2_opti.png' />
              </Flex>
              <Heading>Burner Wallet</Heading>
            </Flex>

          </Flex>

          {/* <Flex evenly p={20} fullWidth>
              <Flex center column>
                <Span heavy>network</Span>
                <Heading noMargin>Rinkeby</Heading>
              </Flex>
              <Flex center column>
                <Span heavy>address</Span>
                <Heading noMargin>0xfA67ddE983470fe8434a48cE</Heading>
              </Flex>
              <Flex center column>
                <Span heavy>balance</Span>
                <Heading noMargin>40 ETH</Heading>
              </Flex>
            </Flex> */}


        </Flex>
      </Container>

    </Flex>

    <Box>
      <Container py={80}>
        <Flex alignCenter>
          <Flex column flex={1} p={40}>
            <Heading xxl noMargin>Create A <strong><em>You</em></strong> Token</Heading>
            <Span fontSize={3} normal>Launch a digital token to represent you on an Ethereum blockchain.</Span>
            <Box mt={50} maxWidth={300}>
              <ContractDeployTokenERC20 />
            </Box>
          </Flex>
          <Flex column center flex={1}>
            <Image card circle src='https://images.ui8.net/uploads/sms_send_and_recive_coin_1526963064333.jpg' />
            {/* <Image card circle src='https://images.ui8.net/uploads/2_1529684097775.jpg' /> */}
          </Flex>
        </Flex>
      </Container>
    </Box>

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



    <Container py={80} maxWidth={700}>
      <Box py={50}>
        <SignMessageFormInputs />
        <SignatureList />
      </Box>
      <Flex column>
        <QuestRinkebyFaucet />
      </Flex>
    </Container>
  </>

export default Home