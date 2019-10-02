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


const Home = ({ styled, ...props }) =>

  <>
    <Flex gradient='blue' fullWidth >
      <BackgroundImage opacity={.3} ratio={.35}
          src='https://images.ui8.net/uploads/blockchain_platform_1_1527438484516.jpg' />
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
            <Span md thin>POWERED BY EVERYONE</Span>
            <br/><Span heavy>A Network of Contributors</Span>
          </Heading>
          <Paragraph mt={3}>
            <strong>The core feature of blockchain is composability.</strong> Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and libraries. 
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
            <Span md thin>OPEN FUNCTIONS</Span>
            <br/><Span heavy>Interact From Anywhere.</Span> </Heading>
          <Paragraph mt={3}>
            <strong>The core feature of blockchain is composability.</strong> Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and libraries. 
          </Paragraph>
        </Box>
      </Flex>
      
    </Flex>

    <Flex fullWidth >

      <Flex center column flex={2} py={50} minHeight='600px' >
        <Box px={100}>
          <Heading xl heavy>
            <Span md thin>CONNECTED FEATURES</Span>
            <br/><Span heavy>Build Dynamic Applications</Span> </Heading>
          <Paragraph mt={3}>
            <strong>The core feature of blockchain is composability.</strong> Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and libraries. 
          </Paragraph>
        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
        <BackgroundImage opacity={.86} ratio={.35} src='https://images.ui8.net/uploads/overview-6_1550588576870.jpg' />
      </Flex>
    </Flex>

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
   
  </>

export default Home

