import React from 'react';
import { Link } from "@reach/router"
import { Button, Box, Flex, Heading, Span } from '@horizin/design-system';
const MenuDefault = ({ styled, ...props }) =>
  <Flex between alignCenter>
    <Flex alignCenter flex={1}>
      <Heading md heavy uppercase noMargin>MESH</Heading>
      <Flex between mx={10} >
        <Link to='/'><Span xs>Home</Span></Link>
        <Link bg='green' variant='tag' to='/dashboard'><Span xs ml={10}>Dashboard</Span></Link>
      </Flex>
    </Flex>

    <Flex alignCenter justifyEnd flex={1} width={.5}>
      <Box alignSelf='flex-end'>
        <Box>
          Login
        </Box>
      </Box>
    </Flex>
  </Flex>

export default MenuDefault