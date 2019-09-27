import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router"
import { Button, Box, Flex, Image, Heading, Span, Container } from '@horizin/design-system';

const Footer = ({ children, styled, ...props }) =>
<Container>
  <Flex between alignCenter rounded gradient='gray' boxShadow='blue' mt={-80} p={30}>
    <Box>
      <Heading lg color='charcoal' >Become A Legend</Heading>
      <Heading xs color='charcoal' >Grow The Ethereum Network</Heading>
    </Box>
    <Link to='/'><Span xs bg='green' variant='tag' ml={15}>Generate Referall Code</Span></Link>
    <Link to='/'><Span xs bg='red' variant='tag' ml={15}>Open Source Code</Span></Link>
    <Link to='/'><Span xs bg='blue' variant='tag' ml={15}>Join Public Bank</Span></Link>
  </Flex>
  <Flex between {...styled}>
    <Flex flex={1}>
        <Flex column>
        <Span><Image bg='white' circle p={10} maxWidth={40} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' /></Span>
        <Heading md thin noMargin>Web3<strong>Land</strong></Heading>
        <Button xs >Login</Button>
        </Flex>
      <Flex column mx={20} ml={80} >
        <Link to='/beginner'><Span sm ml={15}>Beginner</Span></Link>
        <Link to='/intermediate'><Span sm ml={15}>Intermediate</Span></Link>
        <Link to='/advanced'><Span sm ml={15}>Advanced</Span></Link>
      </Flex>
      <Flex column mx={20} >
        <Link to='/contracts'><Span sm ml={15}>Contract Connect</Span></Link>
        <Link to='/quests'><Span sm ml={15}>Quests</Span></Link>
      </Flex>
    </Flex>
  
    <Flex column alignItems='flex-end' flex={1} width={.5}>
      <Box alignSelf='flex-end'>
        
      </Box>
    </Flex>
  </Flex>
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