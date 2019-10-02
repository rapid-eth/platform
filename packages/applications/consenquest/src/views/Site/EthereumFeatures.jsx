import React from 'react';
import { Buton, Blockquote,
  Loading, Span, Modal, Flex, Heading, Image, BackgroundImage, Tabs,
  Paragraph, Box, Container, Button, Card, HorizontalRule, Panel, Absolute
} from '@horizin/design-system';

import {
  BoxAccess, BoxThreadPostList, BoxSpaceOpen,
  BoxLoginCard, BoxLoginButton, BoxVerified } from '@kames/3box-components/dist'

  import {
  FormWebLandStatus
} from "../../components/3Box";

const Home = ({ styled, ...props }) => <>

<Flex gradient='blue' fullWidth >
      <BackgroundImage opacity={.83} ratio={.35}
          src='https://images.ui8.net/uploads/13_1533753358953.jpg' />
      <Container maxWidth={600}>
        <Flex center column flex={2} py={50} minHeight='600px' >
          <Box textCenter card px={100} >
            <Heading xl heavy>
              <Span md thin>GLOBAL COMPUTER</Span>
              <br/><Span heavy>Ethereum Blockchain</Span> </Heading>
            <Paragraph mt={3}>
              <strong>The core feature of blockchain is composability.</strong> Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and libraries. 
            </Paragraph>
          </Box>
        </Flex>
      </Container>
    </Flex>
    <Flex fullWidth >

      <Flex center column flex={2} py={50} minHeight='600px' >
        <Box px={100}>
          <Heading xl heavy>
            <Span md thin>An Information Revoluation</Span>
            <br/><Span heavy>Digital Scaricity</Span>
          </Heading>
          <Paragraph mt={3}>
              Before Bitcoin, the concept of Digital Scarcity did not exist, and humanity was reliant on primitive and unreliable means of scarcity to store value. Ethereum introduced the concept of PROGRAMMABLE digital scarcity - scarce digital assets, which could be representative of anything, that could easily be created, transferred, and interacted with via arbitrarily complex programmatic logic.
          </Paragraph>
        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
        <BackgroundImage opacity={.86} ratio={.35}
          src='https://images.ui8.net/uploads/02_1527460716223.png' />
      </Flex>
    </Flex>


    <Flex fullWidth >

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
          <BackgroundImage opacity={.86} ratio={.35} src='https://images.ui8.net/uploads/03_1527461548952.png' />
      </Flex>

      <Flex center column flex={2} py={50} minHeight='600px' >
        <Box px={100}>
          <Heading xl heavy>
            <Span md thin>Connect the World's Information</Span>
            <br/><Span heavy>Function Compasbility</Span> </Heading>
          <Paragraph mt={3}>
            Due to the open nature of Ethereum, common infrastructure, protocols, and libraries can connect and build over one another easily. This means that new developments on Ethereum increase the capabilities of the Ethereum network exponentially.
          </Paragraph>
        </Box>
      </Flex>
      
    </Flex>

    <Flex fullWidth >

      <Flex center column flex={2} py={50} minHeight='600px' >
        <Box px={100}>
          <Heading xl heavy>
            <Span md thin>Free from Restrictions and Limits</Span>
            <br/><Span heavy>Global Decentralized Computer</Span> </Heading>
          <Paragraph mt={3}>
            Ethereum is open-source, transparent, permissionless, censorship-resistant, highly-available, highly-resilient, decentralized, and trustless. This means that on Ethereum, you can write code that controls digital value, runs exactly as programmed, and is accessible anywhere in the world - and nobody can stop you from doing so.
          </Paragraph>
        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
        <BackgroundImage opacity={.86} ratio={.35} src='https://images.ui8.net/uploads/overview-6_1550588576870.jpg' />
      </Flex>
    </Flex>

    
   
  </>

export default Home

