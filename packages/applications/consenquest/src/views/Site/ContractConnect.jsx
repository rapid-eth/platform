import React from 'react';
import { Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Span } from '@horizin/design-system';


import {
  TokenInitListStateful, ERC20TokenInitializeStateful
} from "../../components/Tokens";

import {
  ContractDeployListStateful
} from "../../components/Ethers";

import {
  SmartContractCard
} from "../../components/SmartContracts";


const Home = ({ styled, ...props }) =>
  <>
  
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

    
  </>

export default Home