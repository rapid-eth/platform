import React from 'react';
import { Router, Link, Redirect, Location } from "@reach/router";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Site } from '@horizin/design-system'
import { SiteHeader, SiteFooter } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer } from "../components";
import {
    Home, Beginner, Intermediate, Advanced,
    ATM, ContractConnect, PledgeList, Account, Community, Resources, Compose,
  } from "../views/Site";

import { Start } from '../pages/Guided'
import AdventurePages from '../pages/Adventure'
import CMS from '../pages/CMS'
import Quest from '../pages/Quest'
import Quests from '../pages/Quests'

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
        <Quest path='/quest/*' />
        <Quests path='/quests/*' />
        <CMS path='/cms/*' />


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


const FadeTransitionRouter = props => (
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
);

export default SiteRoutes