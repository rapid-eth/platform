import React from 'react';
import { Button, Box, Flex, Image, Link, Heading, Span, Panel, Popover, Menu } from '@horizin/design-system';
import { BoxLoginProfile } from '@kames/3box-components/dist'
import MenuItems from '../static/menus/mobile'

const Branding = ({ styled, ...props }) =>
<Flex between alignCenter {...styled}>
  <Flex alignCenter flex={1}>
    <Box>
      <Link to='/'>
        <Heading lg thin noMargin>Ξ</Heading><Span xxs>HUB</Span> 
      </Link>
    </Box>
    
    <Flex alignCenter between ml={20} >
      <StartJourneyPopover />
    </Flex>
  </Flex>
  <Flex alignCenter justifyEnd flex={1} width={.5}>
    <Link to='/resources'><Span xxs tag='green' mx={10}>Resources</Span></Link>
    <BoxLoginProfile />
    <Box alignSelf='flex-end'>
      <Link to='/account'>
        <Button xs>ΞID</Button>
      </Link>
    </Box>
  </Flex>
</Flex>

const Mobile = ({ styled, ...props }) =>
<Flex between alignCenter {...styled}>
  <Flex alignCenter flex={1}>
      {/* <Flex bg='white' p={2} circle maxWidth={50} boxShadow='sunset' mr={10} >
        <Image maxWidth={20} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
      </Flex> */}
    <Heading thin noMargin fontSize={[3]}>Web<strong>ΞLand</strong></Heading>
  </Flex>

 
  <Flex alignCenter justifyEnd flex={1} width={.5}>
    <Box alignSelf='flex-end' mr={3}>
      <Link to='/account'>
        <Button xs >ΞID</Button>
      </Link>
    </Box>
    <Panel
      label='Web3 Land Menu'
      content={<MobilePanel />}>
      <Link to='/community'><Button xs><Span>MENU</Span></Button></Link>
    </Panel>
  </Flex>
</Flex>

const MobilePanel = ({ styled, ...props}) => { 
 return(
  <Box>
    <Menu vertical items={MenuItems} />
    <Flex column between ml={20} >
      <Link to='/'><Span xs tag='red' ml={15}>Start Journey</Span></Link>
      <Link to='/beginner'><Span sm ml={15}>Beginner</Span></Link>
      <Link to='/intermediate'><Span sm ml={15}>Intermediate</Span></Link>
      <Link to='/advanced'><Span sm ml={15}>Advanced</Span></Link>
    </Flex>
  </Box>
)
}

Branding.Mobile = Mobile


const StartJourneyPopover = ({ styled, ...props}) => { 
 return(
  <Popover label='Start Journey' styledLabel={{mx:2, tag: 'red', xxs: true}} >
      <Box minHeight={200} minWidth={480} ml={30}>
        <Flex>
          <Flex column gradient='gray' flex={1}>
            <Flex column p={3}>
              <Link to='/beginner'>
                <Heading>Beginner</Heading>
              </Link>
              <Link to='/intermediate'>
                <Heading>Intermediate</Heading>
              </Link>
              <Link to='/advanced'>
                <Heading>Advanced</Heading>
              </Link>
              <Link to='/quests'>
                <Span xxs tag='green'>Decentralized Quests</Span>
              </Link>
            </Flex>
          </Flex>
          <Flex gradient='white' flex={1}>
            
          </Flex>
        </Flex>
      </Box>
  </Popover>
)}
const BeginnerPopover = ({ styled, ...props}) => { 
 return(
  <Popover label='Beginner' styledLabel={{mx:2}} >
      <Box minHeight={200} minWidth={380}>
        <Flex>
          <Flex gradient='white' flex={1}>
            
          </Flex>
          <Flex gradient='gray' flex={1}>
            <Box p={3}>
              <Heading>Beginner Quests</Heading>
            </Box>
            
          </Flex>
        </Flex>
      </Box>
  </Popover>
)}
const IntermediatePopover = ({ styled, ...props}) => { 
 return(
  <Popover label='Intermediate' styledLabel={{mx:2}} >
      <Box minHeight={200} minWidth={380}>
        <Flex>
          <Flex gradient='white' flex={1}>
            
          </Flex>
          <Flex gradient='gray' flex={1}>
            <Box p={3}>
              <Heading>Intermediate Quests</Heading>
            </Box>
            
          </Flex>
        </Flex>
      </Box>
  </Popover>
)}
const AdvancedPopover = ({ styled, ...props}) => { 
 return(
  <Popover label='Advanced' styledLabel={{mx:2}} >
      <Box minHeight={200} minWidth={380}>
        <Flex>
          <Flex gradient='white' flex={1}>
            
          </Flex>
          <Flex gradient='gray' flex={1}>
            <Box p={3}>
              <Heading>Advanced Quests</Heading>
            </Box>
            
          </Flex>
        </Flex>
      </Box>
  </Popover>
)}

export default Branding