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
          <Heading xl heavy><Span md thin>OUR MISSION</Span><br /><Span heavy>1 Million Developers</Span> </Heading>
          <Paragraph mt={3}>
            <strong>Developers. Developers. Developers.</strong><br />The goal of this platform is to help play a role in the expansion of the Ethereum developer ecosystem. We believe that the continued success of Ethereum is reliant on the attraction of the best and brightest talent to the space.
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

    <Box py={40}>

      <Container>
        <Flex alignCenter p={4}>
          <Flex flex={2}>
            <Box width='150%' ml='-50%'>
              <Image
                maxWidth={600} borderRadius='0 100px 100px 0' p={1}
                src={'https://images.ui8.net/uploads/blockchain_platform_5_1527438188551.jpg'} />
            </Box>
          </Flex>
          <Box flex={3} p={5}>
            <Heading lg heavy>Discover your <Span>"Ah-Ha"</Span> moment</Heading>
            <Heading md thin>Find out what makes Ethereum great.</Heading>
            <Paragraph>
              A common thread amongst Ethereum ecosystem participants seems to be their experience of a revelation - an 'a-ha' moment when they finally grasped the potential of Ethereum and dropped everything to work on it.
            </Paragraph>
            <Paragraph>
              Find your 'a-ha' moment by completing the interactive <strong>Adventures</strong> and <strong>Quests</strong> we've established to help introduce you to some of the most important aspects of Ethereum.
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
            <Heading lg heavy><Span> Collect Precious </Span>DEV Token</Heading>
            <Heading md thin>Build reputation in the developer community. <strong><em>Earn DEV</em></strong>.</Heading>
            <Paragraph>
              Have you already experienced your 'a-ha' moment?
            </Paragraph>
            <Paragraph>
              Earn DEV token by completing quests or referring your friends!
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
                src='https://images.ui8.net/uploads/blockchain_platform_3_1527438195999.jpg' />
            </Box>
          </Flex>

        </Flex>
      </Container>

    </Box>
  </>


export default Home