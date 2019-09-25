import React from 'react';
import { Link } from "@reach/router"
import { Button, Box, Flex, Heading, Span } from '@horizin/design-system';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxLoginProfile } from '@kames/3box-components/dist'

console.log(BoxWrapper, 'BoxLoginProfile')

const MenuDefault = ({ styled, ...props }) =>
  <Flex between alignCenter>
    <Box flex={1}>
      <Heading md heavy uppercase noMargin>MESH</Heading>
    </Box>

    <Flex alignCenter justifyEnd flex={1} width={.5}>
      <Flex between mx={10} >
        <Link to='/'><Span xs>Home</Span></Link>
        <Link to='/communities'><Span xs ml={10}>Communities</Span></Link>
        <Link to='/guilds'><Span xs ml={10}>Guilds</Span></Link>
        <Link to='/quests'><Span xs ml={10}>Quests</Span></Link>
        <Link bg='green' variant='tag' to='/dashboard'><Span xs ml={10}>Dashboard</Span></Link>
      </Flex>
      <Box alignSelf='flex-end'>
        <BoxWrapper>
          <BoxLoginProfile styled={{ mx: 0 }} />
        </BoxWrapper>
      </Box>
    </Flex>
  </Flex>

export default MenuDefault