import React from 'react';
import { Link } from "@reach/router"
import { Button, Box, Flex, Image, Heading, Span } from '@horizin/design-system';

const MenuDefault = ({ styled, ...props }) =>
<Flex between alignCenter {...styled}>
  <Flex alignCenter flex={1}>
      <Flex bg='white' p={2} circle maxWidth={50} boxShadow='sunset' mr={10} >
        <Image maxWidth={20} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
      </Flex>
    <Heading md thin noMargin>Web3<strong>Land</strong></Heading>
    <Flex alignCenter between ml={20} >
      {/* <Link to='/'><Span sm>Home</Span></Link> */}
      {/* <Link to='/'><Span sm ml={15}>How It Works</Span></Link> */}
      <Link to='/'><Span xs bg='red' variant='tag' ml={15}>Start Journey</Span></Link>
      <Link to='/beginner'><Span sm ml={15}>Beginner</Span></Link>
      <Link to='/intermediate'><Span sm ml={15}>Intermediate</Span></Link>
      <Link to='/advanced'><Span sm ml={15}>Advanced</Span></Link>
    </Flex>
  </Flex>

  <Flex alignCenter justifyEnd flex={1} width={.5}>
    <Link to='/atm'><Span sm  bg='green' variant='tag' mx={10}>Decentralized ATM</Span></Link>
    <Box alignSelf='flex-end'>
      <Button xs >Login</Button>
    </Box>
  </Flex>
</Flex>

export default MenuDefault