import React from 'react';
import {
  Loading, Span, Flex, Heading, Image, BackgroundImage,
  Paragraph, Box, Container, Absolute, Link
} from '@horizin/design-system';

import { BoxLoginCardPledge, UploadImage } from '@kames/3box-components/dist'
import Pledge from './pledge'
const Home = ({ styled, ...props }) =>

  <>
    <Flex fullWidth >

      <Flex center column flex={3} py={50} minHeight='600px' >
        <Box px={200}>
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
        <BackgroundImage opacity={.86} ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />
        <Flex center column mt={50} ml={-160} p={30}>
          <BoxLoginCardPledge />
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

    <Flex center column py={50} textCetner width='100%'>
      <Pledge />
    </Flex>
    <Box py={100}>

      <Container>


        <Flex alignCenter>
          <Box flex={4} p={3}>
            <Image src='https://i.imgur.com/9gtMCVU.png' />
          </Box>
          <Box flex={5} p={3}>
            <Heading xxl>Decentralized Developer Profiles</Heading>
            <Heading lg>Building the Ethereum Community</Heading>

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


        <Flex alignCenter mt={5}>
          <Box flex={4} p={3}>
            <Image src='https://i.imgur.com/Xx9tjc4.png' />
          </Box>
          <Box flex={5} p={3}>
            <Heading xxl>Interactive Quests & Adventures</Heading>
            <Heading lg>Discover your ‘ah-ha’ moment</Heading>

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


        <Flex alignCenter mt={5}>
          <Box flex={4} p={3}>
            <Image src='https://imgur.com/MyJPzrg.png' />
          </Box>
          <Box flex={5} p={3}>
            <Heading xxl>Community-Curated Quests</Heading>
            <Heading lg>Share your ‘ah-ha’ moment</Heading>

            <Paragraph>
              Have you had an ‘ah-ha’ Ethereum moment yourself? Create your own Adventures and Quests to introduce others to that moment, or to introduce others to the platforms, tools, or projects you’ve been working on or obsessed with.
          </Paragraph>

            <Paragraph>
              Using our extensible 3box-enabled platform, easily curate an interactive and immersive experience for users to guide them through an experience you believe is valuable.
          </Paragraph>

            <Paragraph>
              Join the Ethereum community in a central hub for Ethereum developers, where your digital identity is self-sovereign, your data is your own, and the rewards you earn are provably scarce and unique!
          </Paragraph>

          </Box>
        </Flex>

        <Flex alignCenter mt={5}>
          <Box flex={4} p={3}>
            <Image src='https://imgur.com/7zjCq7M.png' />
          </Box>
          <Box flex={5} p={3}>
            <Heading xxl>Track Blockchain Progress</Heading>
            <Heading lg>Get Rewarded for Completing Actions On-Chain</Heading>

            <Paragraph>
              Have you had an ‘ah-ha’ Ethereum moment yourself? Create your own Adventures and Quests to introduce others to that moment, or to introduce others to the platforms, tools, or projects you’ve been working on or obsessed with.
          </Paragraph>

            <Paragraph>
              Using our extensible 3box-enabled platform, easily curate an interactive and immersive experience for users to guide them through an experience you believe is valuable.
          </Paragraph>

            <Paragraph>
              Join the Ethereum community in a central hub for Ethereum developers, where your digital identity is self-sovereign, your data is your own, and the rewards you earn are provably scarce and unique!
          </Paragraph>

          </Box>
        </Flex>

        <Flex alignCenter mt={5}>
          <Box flex={4} p={3}>
            <Image src='https://imgur.com/iPc1siu.png' />
          </Box>
          <Box flex={5} p={3}>
            <Heading xxl>Curate An Adventure</Heading>
            <Heading lg>Craft A Custom Quest with just Smart Contract Addresses</Heading>

            <Paragraph>
              Have you had an ‘ah-ha’ Ethereum moment yourself? Create your own Adventures and Quests to introduce others to that moment, or to introduce others to the platforms, tools, or projects you’ve been working on or obsessed with.
          </Paragraph>

            <Paragraph>
              Using our extensible 3box-enabled platform, easily curate an interactive and immersive experience for users to guide them through an experience you believe is valuable.
          </Paragraph>

            <Paragraph>
              Join the Ethereum community in a central hub for Ethereum developers, where your digital identity is self-sovereign, your data is your own, and the rewards you earn are provably scarce and unique!
          </Paragraph>

          </Box>
        </Flex>



      </Container>

    </Box>


  </>


export default Home