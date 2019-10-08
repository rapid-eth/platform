import React, { useState } from 'react';
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Site, Span, Box, Flex, Heading, Image, Absolute, Modal } from '@horizin/design-system'
import { SiteHeader, SiteFooter } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer, Drawer } from "../components";
import {
    Home, Beginner, Intermediate, Advanced,
    ATM, ContractConnect, PledgeList, Compose,
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
import Community from '../pages/Community'
import Proposal from '../pages/Proposal'
import Contracts from '../pages/Contracts'

// COre
import { Start as Discover } from '../pages/Guided'
import Contribute from '../pages/Core/Contribute'
import Feedback from '../pages/Core/Feedback'
import HowItWorks from '../pages/Core/HowItWorks'
import Start from '../pages/Core/Start'
import Team from '../pages/Core/Team'

import InitDevQuest from '../components/DevQuestToken/Init'

const SiteRoutes = props =>
  <Site>
    <InitDevQuest address='0x4b001411186583FD65b8C0b92A57Ff028A459F9F' />
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
        <Community path='/community/*' />
        <Proposal path='/proposal/:postId' />

        {/* Core */}
        <Start path='/start' />
        <Contribute path='/contribute' />
        <Feedback path='/feedback' />
        <Team path='/team' />
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
        <Contracts path='/contracts/*' />
      </FadeTransitionRouter>

    <SiteFooter>
      <Footer />
      <Drawer />
    </SiteFooter>
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