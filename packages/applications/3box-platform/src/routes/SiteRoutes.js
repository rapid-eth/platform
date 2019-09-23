import React from 'react';
import { Router } from '@reach/router'

import SiteHome from '../views/SiteHome'
import SiteGuilds from '../views/SiteGuilds'
import SiteCommunities from '../views/SiteCommunities'
import { Site } from '@horizin/design-system'
import { QuestItem } from "../views/Site";

const SiteRoutes = ({ styled, ...props}) =>
<Router>
  <SiteHome path='/' />
  <SiteGuilds path='/guilds/*' />
  <SiteCommunities path='/communities/*' />
  <QuestItem path='/quest/:thread/:id/*' />
</Router>

export default SiteRoutes