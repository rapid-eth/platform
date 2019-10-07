import React from 'react';
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Site, Span, Box, Flex } from '@horizin/design-system'
import { SiteHeader, SiteFooter } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer } from "../components";
import {
    Home, Beginner, Intermediate, Advanced,
    ATM, ContractConnect, PledgeList, Community, Compose,
  } from "../views/Site";

import { Start } from '../pages/Guided'
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

const SiteRoutes = props =>
  <Site>
    <SiteHeader>
      <Branding />
    </SiteHeader>



      <FadeTransitionRouter primary={false}>
        <Home path='/*' />

        {/* Guided */}
        <Start path='/discover' />
        <AdventurePages path='/adventure/*' />
        <Adventures path='/adventures/*' />
        <Quest path='/quest/*' />
        <Quests path='/quests/*' />
        <CMS path='/cms/*' />
        <Connect path='/connect/:address' />
        <ConnectInformation path='/connect' />
        <Tokens path='/tokens/*' />

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
    <Box fixed bottom={0} right={0} p={3} zIndex={500} >
      <Flex>
        <Link to='/contribute'>
          <Span xxs mr={2} tag='blue'>Contribute</Span> 
        </Link>
        <Link to='/feedback'>
          <Span xxs tag='green'>Feedback</Span> 
        </Link>
      </Flex>
    </Box>
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

export default SiteRoutes