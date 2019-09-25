import React from 'react';
import { Router } from '@reach/router'
import { Site } from '@horizin/design-system'
import { SiteHeader, SiteFooter, SiteMain } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer } from "../components";
import { Home, Communities, Guilds, Quests, QuestCreate, QuestItem } from "../views/Site";

const SiteRoutes = ({ styled, ...props }) =>
  <Site>
    <SiteHeader>
      <Branding />
    </SiteHeader>
    
    <SiteMain>

      <Router>
        <Home path='/' />
        <Guilds path='/guilds/*' />
        <Communities path='/communities/*' />
        <Quests path='/quests' />
        <QuestCreate path='/quest/create' />
        <QuestItem path='/quest/:thread/:id/*' />
      </Router>

    </SiteMain>

    <SiteFooter>
      <Footer />
    </SiteFooter>
  </Site>

export default SiteRoutes