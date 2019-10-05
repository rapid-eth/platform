import React from 'react';
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Site } from '@horizin/design-system'
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
import Account from '../pages/Account'
import Resources from '../pages/Resources'
import Connect from '../pages/Connect'
import ConnectInformation from '../pages/ConnectInformation'

const SiteRoutes = ({ styled, ...props }) =>
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


        <Account path='/account/*' />
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