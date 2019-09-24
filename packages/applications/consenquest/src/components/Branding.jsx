import React from 'react';
import { Link } from "@reach/router"
import { Button, Box, Flex, Heading, Span } from '@horizin/design-system';

const MenuDefault = ({ styled, ...props }) =>
  <Flex between alignCenter {...styled}>
    <Flex alignCenter flex={1}>
      <Heading md thin noMargin>Consen<strong>Quest</strong></Heading>
      <Flex between ml={20} >
        <Link to='/'><Span sm>Home</Span></Link>
        <Link bg='green' variant='tag' to='/dashboard'><Span sm ml={10}>Dashboard</Span></Link>
      </Flex>
    </Flex>

    <Flex alignCenter justifyEnd flex={1} width={.5}>
      <Box alignSelf='flex-end'>
        <Button xs >Login</Button>
      </Box>
    </Flex>
  </Flex>

export default MenuDefault