import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router"
import { Button, Box, Flex, Heading, Span, Container } from '@horizin/design-system';

const Footer = ({ children, styled, ...props }) =>
<Container {...styled}>
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
</Container>

Footer.defaultProps = {
  styled: undefined
}

Footer.propTypes = {
  styled: PropTypes.object
}

export default Footer