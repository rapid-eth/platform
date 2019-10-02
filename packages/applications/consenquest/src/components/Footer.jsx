import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router"
import { Button, Box, Flex, Image, Heading, Span, Container, HorizontalRule } from '@horizin/design-system';
import { Paragraph } from '@horizin/design-system/dist/atoms';

const Footer = ({ children, styled, ...props }) =>
<Container>
  <Flex alignCenter between {...styled}>
    <Flex flex={3}>
        <Flex column maxWidth={260}>
        <Flex alignCenter>
          <Span><Image bg='white' circle p={10} maxWidth={40} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' /></Span>
          <Heading md thin ml={10}>Web3<strong>Land</strong></Heading>
        </Flex>
        <Paragraph xs>
          Adventure the Web 3 Lands. Complete Quests. Make Friends. Decentralize the world!
          <br/><strong>Be part of something.</strong><br/> 
        </Paragraph>
        </Flex>
      <Flex column mx={20} ml={80} >
        <Span heavy>Journey</Span>
        <HorizontalRule dash my={10} />
        <Link to='/beginner'><Span sm >Beginner</Span></Link>
        <Link to='/intermediate'><Span sm >Intermediate</Span></Link>
        <Link to='/advanced'><Span sm >Advanced</Span></Link>
      </Flex>
      <Flex column mx={50} >
        <Span heavy >Community</Span>
        <HorizontalRule dash my={10} />
        <Link to='/quests'><Span sm >Quests</Span></Link>
        <Link to='/projects'><Span sm >Projects</Span></Link>
        <Link to='/guilds'><Span sm >Guilds</Span></Link>
      </Flex>
      <Flex column mx={20} >
        <Span heavy >Tools</Span>
        <HorizontalRule dash my={10} />
        <Link to='/atm'><Span sm >Bank & ATM Deploy</Span></Link>
        <Link to='/profile'><Span sm >Create Decentralized Profile</Span></Link>
        <Link to='/contracts'><Span sm>Smart Contract Connect</Span></Link>
        <Link to='/cms'><Span sm>Content Management System</Span></Link>
      </Flex>
    </Flex>
  
    <Flex column alignItems='flex-end' flex={1} width={.5}>
      <Box alignSelf='flex-end'>
      <Button xs mt={25} >Login</Button>
      </Box>
    </Flex>
  </Flex>
  {/* <Flex between alignCenter rounded gradient='gray' boxShadow='blue' mt={40} p={30}>
    <Box>
      <Heading lg color='charcoal' >Become A Legend</Heading>
      <Heading xs color='charcoal' >Grow The Ethereum Network</Heading>
    </Box>
    <Link to='/'><Span xs bg='green' variant='tag' >Generate Referall Code</Span></Link>
    <Link to='/'><Span xs bg='red' variant='tag' >Open Source Code</Span></Link>
    <Link to='/'><Span xs bg='blue' variant='tag' >Join Public Bank</Span></Link>
  </Flex> */}
</Container>

Footer.defaultProps = {
  styled: {
    py: 70
  }
}

Footer.propTypes = {
  styled: PropTypes.object
}

export default Footer