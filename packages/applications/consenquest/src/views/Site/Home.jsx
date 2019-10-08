import React from 'react';
import {
  Loading, Span, Flex, Heading, Image, BackgroundImage, 
  Paragraph, Box, Container, Absolute, Link
} from '@horizin/design-system';

import { BoxLoginCard, UploadImage } from '@kames/3box-components/dist'
const Home = ({ styled, ...props }) =>

  <>
    <Flex fullWidth >

      <Flex center column flex={3} py={50} minHeight='600px' >
        <Absolute layout='bottomRight' m={3}>
          <Span thin tag='white' xxs ><strong><a href='#'>Contribute to DEVLand</a></strong></Span>
        </Absolute>
        <Box px={200}>
          <Heading xl heavy><Span md thin>ETHEREUM MISSION</Span><br/><Span heavy>1 Million Developers</Span> </Heading>
          <Paragraph mt={3}>
            <strong>A core feature of blockchain is composability.</strong><br/>Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and libraries. 
          </Paragraph>
        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
        <BackgroundImage opacity={.86} ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />
        <Flex center column mt={50} ml={-160} p={30}>
          <BoxLoginCard />
        </Flex>
        <Absolute layout='bottomLeft' mb={3} >
          <Box mx={3}>
            <Span xxs tag='green'><Span fontWeight={700}><strong>Join 10,000+ Active Developers</strong></Span></Span>
          </Box>
        </Absolute>
        <Absolute layout='topRight' mr={155} mt={220} ><Loading type='ripple' /></Absolute>
        <Absolute layout='topRight' mr={200} mt={420} ><Loading type='ripple' /></Absolute>
        <Absolute layout='topRight' mr={30} mt={190} ><Loading type='ripple' /></Absolute>
      </Flex>
    </Flex>
    {/* <DeveloperStatus /> */}
    {/* <Container my={3} maxWidth={800}>
      <Flex center column>
        <Image src='https://imgur.com/NhCRGGI.png'/>
        <Heading>Join Us on the March to 1,000,000 Developers</Heading>
      </Flex>
    </Container> */}
    <Box py={40}>

      <Container>
        <Flex alignCenter p={4}>
        <Flex flex={2}>
           <Box width='150%' ml='-50%'>
              <Image
                maxWidth={600} borderRadius='0 100px 100px 0' p={1} 
                src={'https://images.ui8.net/uploads/blockchain_platform_5_1527438188551.jpg'}/>
           </Box>
          </Flex>
          <Box flex={3} p={5}>
            <Heading lg heavy>Discover the <Span>"Ah-Ha"</Span> moment</Heading>
            <Heading md thin>Find what makes blockchain great. <strong><em>Composability</em></strong>.</Heading>
            <Paragraph>
              The Ethereum Blockchain is a global computer. The computer provides the building blocks for crafting composable functions.
            </Paragraph>
            <Paragraph>
              <em><strong>The power is immense.</strong> What can be built is <strong>extraordinary</strong>.</em>
            </Paragraph>
            <Paragraph>
              Discover the blockchain "ah-ha" moment by first understanding why <strong>global composability is world changing</strong>. 
            </Paragraph>
            <Span pointer tag='green' >
              <Flex alignCenter>
                <Image maxWidth={28} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
                <Link to='/discover' color='white' >
                  <Span color='white !important' mx={3}>Discover <Span><strong> Your Ah-Ha </strong></Span> Moment</Span>
                </Link>
              </Flex>
              </Span>
          </Box>
          
        </Flex>
      </Container>
      <Container>
        <Flex alignCenter p={4}>
          <Box flex={3} p={5}>
            <Heading lg heavy>Quest to <Span> Collect Precious DEV</Span> Token</Heading>
            <Heading md thin>Earn reputation in the developer community. <strong><em>Earn DEV</em></strong>.</Heading>
            <Paragraph>
              Start earning DEV
            </Paragraph>
            <Span pointer tag='blue' >
              <Flex alignCenter>
                <Image maxWidth={28} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
                <Link to='/discover' >
                  <Span color='white !important' mx={3}>Earn<Span><strong> DEV </strong></Span> Token</Span>
                </Link>
              </Flex>
              </Span>
          </Box>

          <Flex flex={2}>
           <Box width='150%' mr='-50%'>
              <Image
                maxWidth={600} borderRadius='100px 0 0 100px' p={1} 
                src='https://images.ui8.net/uploads/blockchain_platform_3_1527438195999.jpg'/>
           </Box>
          </Flex>
          
        </Flex>
      </Container>
      
    </Box>
  </>


export default Home