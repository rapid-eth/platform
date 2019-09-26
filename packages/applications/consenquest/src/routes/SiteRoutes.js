import React from 'react';
import { Router } from '@reach/router'
import { Site } from '@horizin/design-system'
import { SiteHeader, SiteFooter, SiteMain } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer } from "../components";

import { Home, Beginner, Intermediate, Advanced } from "../views/Site";

const SiteRoutes = ({ styled, ...props }) =>
  <Site>
    <SiteHeader>
      <Branding />
    </SiteHeader>

    <SiteMain>

      <Router primary={false}>
        <Home path='/*' />
        <Beginner path='/beginner/*' />
        <Intermediate path='/intermediate/*' />
        <Advanced path='/advanced/*' />
      </Router>

    </SiteMain>

    <SiteFooter>
      <Footer />
    </SiteFooter>
  </Site>

export default SiteRoutes