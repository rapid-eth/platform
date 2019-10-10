import React from 'react';
import {
  Loading, Span, Flex, Heading, Image, BackgroundImage,
  Paragraph, Box, Container, Absolute, Link
} from '@horizin/design-system';

import { BoxLoginCardPledge, UploadImage } from '@kames/3box-components/dist'
import Pledge from './pledge'
const Home = ({ styled, ...props }) =>

  <>
    <Flex column fullWidth >

      <Flex center column flex={3} py={40} >
        <Box px={40}>
          <Heading xl heavy><Span md thin>OUR MISSION</Span><br /><Span heavy>1 Million Developers</Span> </Heading>
          <Paragraph mt={3}>
            <strong>Around the world, Ethereum developers are ushering in radical change one keystroke at a time.</strong>
          </Paragraph>

          <Paragraph>
            We hope to expand the Ethereum developer family - and to bring that family closer together - by providing an interactive and immersive space for newbies and veterans alike, to learn, collaborate, share, and buidl in a fun and easy manner.
          </Paragraph>

        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
        <BackgroundImage opacity={.86} backgroundSize='130%' ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />
        <Flex center column p={30} width='100%'>
          <BoxLoginCardPledge />
        </Flex>
      </Flex>
    </Flex>

    <Flex bg='blue' color='white' center column py={50} textCetner width='100%'>
    <BackgroundImage opacity={.06} ratio={.35} backgroundPosition='-400px' src='https://cdn3.vectorstock.com/i/1000x1000/85/12/crypto-currency-ethereum-on-brain-background-vector-17918512.jpg' />
      <Pledge />
    </Flex>
    <Box py={100}>

    <Container>
        <Flex column alignCenter p={3}>
          <Box flex={3} p={3}>
            <Heading xl>Decentralized Developer Profiles</Heading>
            <Heading md>Building the Ethereum Community</Heading>

            <Paragraph>
              Share your projects. Show off your actions. Build your reputation. Connect with friends.
          </Paragraph>

            <Paragraph>
              Discover what Ethereum truly has to offer.
          </Paragraph>

            <Paragraph>
              Join the Ethereum community in a central hub for Ethereum developers, where your digital identity is self-sovereign, your data is your own, and the rewards you earn are provably scarce and unique!
          </Paragraph>
          </Box>

        </Flex>

        <Flex flex={2}>
            <Box width='150%' ml='-45%'>
              <Image
                boxShadow='sunset'
                maxWidth={600} borderRadius='0 70px 70px 0' p={1}
                src={'https://i.imgur.com/9gtMCVU.png'} />
            </Box>
          </Flex>
      </Container>


      <Container>
        <Flex column alignCenter p={3}>
          <Box flex={3} p={3}>
          <Heading xl>Interactive Quests & Adventures</Heading>
            <Heading md>Discover your ‘ah-ha’ moment</Heading>

            <Paragraph>
              A common thread amongst Ethereum ecosystem participants seems to be their experience of a revelation - an 'ah-ha' moment when they finally grasped the potential of Ethereum and dropped everything to participate in the Web3 movement.
          </Paragraph>

            <Paragraph>
              Find your Ethereum 'ah-ha' moment by completing interactive Adventures and Quests which introduce you to amazing tools and concepts around our equally amazing ecosystem.
          </Paragraph>

            <Paragraph>
              And, earn rewards for doing so!
          </Paragraph>
          </Box>

          <Flex flex={2}>
            <Box width='150%' mr='-50%'>
              <Image
                boxShadow='sunset'
                maxWidth={600} borderRadius='100px 0 0 100px' p={1}
                src='https://i.imgur.com/Xx9tjc4.png' />
            </Box>
          </Flex>

        </Flex>
      </Container>

      <Container>
        <Flex column alignCenter p={3}>
          <Box flex={3} p={3}>
            <Heading xl>Interactive Quests & Adventures</Heading>
            <Heading md>Discover your ‘ah-ha’ moment</Heading>

            <Paragraph>
              A common thread amongst Ethereum ecosystem participants seems to be their experience of a revelation - an 'ah-ha' moment when they finally grasped the potential of Ethereum and dropped everything to participate in the Web3 movement.
          </Paragraph>

            <Paragraph>
              Find your Ethereum 'ah-ha' moment by completing interactive Adventures and Quests which introduce you to amazing tools and concepts around our equally amazing ecosystem.
          </Paragraph>

            <Paragraph>
              And, earn rewards for doing so!
          </Paragraph>
          </Box>

        </Flex>
        <Flex flex={2}>
            <Box width='150%' ml='-45%'>
              <Image
                boxShadow='sunset'
                maxWidth={600} borderRadius='0 70px 70px 0' p={1}
                src={'https://i.imgur.com/vaTcwti.png'} />
            </Box>
          </Flex>
      </Container>

    </Box>


  </>


export default Home