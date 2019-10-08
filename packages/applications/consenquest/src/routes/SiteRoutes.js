import React, { useState } from 'react';
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Site, Span, Box, Flex, Heading, Image, Absolute } from '@horizin/design-system'
import { SiteHeader, SiteFooter } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer } from "../components";
import {
    Home, Beginner, Intermediate, Advanced,
    ATM, ContractConnect, PledgeList, Community, Compose,
  } from "../views/Site";


import AdventurePages from '../pages/Adventure'
import Adventures from '../pages/Adventures'
import CMS from '../pages/CMS'
import Quest from '../pages/Quest'
import Quests from '../pages/Quests'
import Profile from '../pages/Profile'
import Resources from '../pages/Resources'
import Connect from '../pages/Connect'
import ConnectInformation from '../pages/ConnectInformation'
import Account from '../pages/Acccount'
import Tokens from '../pages/Tokens'

// COre
import { Start as Discover } from '../pages/Guided'
import Contribute from '../pages/Core/Contribute'
import Feedback from '../pages/Core/Feedback'
import HowItWorks from '../pages/Core/HowItWorks'
import Start from '../pages/Core/Start'

const SiteRoutes = props =>
  <Site>
    <SiteHeader>
      <Branding />
    </SiteHeader>



      <FadeTransitionRouter primary={false}>
        <Home path='/*' />

        {/* Guided */}
        <Discover path='/discover' />
        <AdventurePages path='/adventure/*' />
        <Adventures path='/adventures/*' />
        <Quest path='/quest/*' />
        <Quests path='/quests/*' />
        <CMS path='/cms/*' />
        <Connect path='/connect/:address' />
        <ConnectInformation path='/connect' />
        <Tokens path='/tokens/*' />

        {/* Core */}
        <Start path='/start' />
        <Contribute path='/contribute' />
        <Feedback path='/feedback' />
        <HowItWorks path='/how-it-works' />
        {/* Profiles */}
        <Account path='/account/*' />
        <Profile path='/profile/:address' />

        <Compose path='/composability/*' />
        <Resources path='/resources/*' />
        <Community path='/adventure/*' />
        <Beginner path='/beginner/*' />
        <Intermediate path='/intermediate/*' />
        <Advanced path='/advanced/*' />
        <ATM path='/atm/*' />
        <PledgeList path='/pledges/*' />
        <ContractConnect path='/contracts/*' />
        <ContractConnect path='/admin/*' />
      </FadeTransitionRouter>

    <SiteFooter>
      <Footer />
    </SiteFooter>
    <Drawer />
  </Site>


const FadeTransitionRouter = props => {

  window.scrollTo(0, 0)

  return (
    <Location>
      {({ location }) => (
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Router location={location} className="router" primary={false}>
              {props.children}
            </Router>
          </CSSTransition>
        </TransitionGroup>
      )}
    </Location>
  )
}

const Drawer = ({ styled, ...props}) => { 
  const [ isOpen, setOpen ] = useState(false)
 return(
  <Box fixed left={0} bottom={isOpen ? 0 : -70} right={0} p={2} bg='dark' zIndex={500} >
      <Flex between>
        <Flex alignCenter color='white'>
          {/* <Heading noMargin>Adventures</Heading> */}
          <Flex ml={5}>

            <Link to='/adventure/adventure-intro'>
              <Span pointer tag='white'>
                <Flex alignCenter>
                  <Span width={12} ><Image src='https://image.flaticon.com/icons/svg/2082/2082491.svg' /></Span>
                  <Span xxs ml={2}>Introduction</Span>
                </Flex>
              </Span>
            </Link>
            
            <Link to='/adventure/adventure-composability'>
              <Span pointer tag='white' ml={2} opacity={0.7}>
                <Flex alignCenter>
                  <Span width={12} ><Image src='https://image.flaticon.com/icons/svg/993/993686.svg' /></Span>
                  <Span xxs ml={2}>Composability</Span>
                </Flex>
              </Span>
            </Link>
            
            <Link to='/adventure/adventure-digital-scarcity'>
              <Span pointer tag='white' ml={2} opacity={0.7}>
                <Flex alignCenter>
                  <Span width={12} ><Image src='https://image.flaticon.com/icons/svg/2133/2133011.svg' /></Span>
                  <Span xxs ml={2}>Scaricity</Span>
                </Flex>
              </Span>
            </Link>
            
            <Link to='/adventure/adventure-global-open-permissionless'>
              <Span pointer tag='white' ml={2} opacity={0.7}>
                <Flex alignCenter>
                  <Span width={12} ><Image src='https://image.flaticon.com/icons/svg/1279/1279546.svg' /></Span>
                  <Span xxs ml={2}>Global</Span>
                </Flex>
              </Span>
            </Link>

          </Flex>
        </Flex>

        <Flex top={isOpen ? 0 : -60}>
          <Link to='/contribute'>
            <Span xxs mr={2} tag='blue'>Contribute</Span> 
          </Link>
          <Link to='/feedback'>
            <Span xxs tag='green'>Feedback</Span> 
          </Link>
        </Flex>
      </Flex>
      <Absolute onClick={()=>setOpen(!isOpen)} top={isOpen ? -10 : -40} left={20} width={40}>
          <Span pointer boxShadow='sunset' tag='white'>Ξ</Span>
          {/* <Span xxs color='white'>Toggle</Span> */}
      </Absolute>
    </Box>
)}

export default SiteRoutes