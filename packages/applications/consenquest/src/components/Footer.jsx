import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@reach/router"
import { Box, Flex, Image, Heading, Span, Container, HorizontalRule } from '@horizin/design-system';
import { Paragraph } from '@horizin/design-system/dist/atoms';

const Footer = ({ styled, ...props }) =>
<Container>
  <Flex alignCenter between {...styled}>
    <Flex flex={3}>
        <Flex column maxWidth={260}>
        <Link to='/' color='#FFF !important' >
          <Flex alignCenter>
            <Span circle width={25} mt={1} mr={2}><Image src='https://image.flaticon.com/icons/svg/2165/2165602.svg' /></Span>
            <Flex column>
              <Heading fontSize={3} thin noMargin>ETHEREUM</Heading>
              <Span xxs>1 Million Developers</Span> 
            </Flex>
          </Flex>
        </Link>
        <Paragraph xs>
          Discover why blockchain is great. Interact with the ecosystem and meet other developers.
          <br/><strong>Decentralize all the things.</strong><br/> 
        </Paragraph>
        </Flex>
      
      <Flex column mx={20} >
        <Span heavy >Tools</Span>
        <HorizontalRule dash my={10} />
        <Link to='/contracts'><Span sm mb={3}>Deploy Tokens Contracts <Span xxs mx={2} tag='blue'>Developer</Span></Span></Link>
        <Link to='/account'><Span sm mb={3}>Create Decentralized Profile <Span xxs mx={2} tag='blue'>3Box</Span></Span></Link>
        <Link to='/cms'><Span sm mb={3}>Content Management System<Span xxs my={2} mx={2} tag='green'>Beta</Span></Span></Link>
        <Link to='/atm'><Span sm mb={3}>Bank & ATM Deploy<Span xxs mx={2} tag='green'>Beta</Span></Span></Link>
      </Flex>
      <Flex column mx={50} >
        <Span heavy >Community</Span>
        <HorizontalRule dash my={10} />
        <Link to='/adventures'><Span sm >Adventures</Span></Link>
        <Link to='/quests'><Span sm mt={3} >Quests</Span></Link>
      </Flex>
    </Flex>
    

    <Flex column alignItems='flex-end' flex={1} width={.5}>
      <Box alignSelf='flex-end'>
        <Link to='/team'>
          <Heading sm thin noMargin textCenter><strong>Rapid Prototype</strong></Heading>
          <Heading xs thin noMargin textCenter>Project and Team</Heading>
        </Link> 
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