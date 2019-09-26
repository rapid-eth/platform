import React from 'react';
import { Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button } from '@horizin/design-system';

import {
  SignPledgeFormInputs,
  EthereumEnableMetaMask
} from "../../components/Signatures";
import Span from '@horizin/design-system/dist/atoms/Span';


const Home = ({ styled, ...props }) =>
  <>
    <Flex fullWidth minHeight='100vh' >

      <Flex column flex={1} px={200} pt={200} >
        <Heading mega noMargin>1 Million Developers</Heading>
        <Span normal fontSize={4}>Join The Web3 Guild. <strong>Develop the Future.</strong></Span>
        <Paragraph sm>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
            </Paragraph>
        <Flex fullWidth mt={30}>
          <EthereumEnableMetaMask />
        </Flex>
      </Flex>

      <Flex flex={1} pt={100} >
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
        <Box textCenter color='white' mt={70}>
          <Heading md as='h4'>1,000,000 DEV Available (Limited Supply)</Heading>
          <Heading sm as='h6'>Earn DEV Token for Introducing Developers</Heading>
          <Button p={50} my={30} styled={{p: 40}} variant='blue'><Heading lg my={30}>Generate Affiliate Link</Heading></Button>
          <Paragraph heavy>
            Earn DEV tokens and access to projects by introducing developers to Web3 Land.
          </Paragraph>
        </Box>
      </Container>    
    </Box>
  </>

export default Home