import React, { useState } from 'react';
import { Router } from '@reach/router'
import { Branch, Site, Span, Button } from '@horizin/design-system'
import { SiteHeader, SiteFooter } from '@horizin/design-system/dist/templates/Site'
import { Branding, Footer } from "../components";
import {
    Account
  } from "../views/Mobile";

const MobileRoutes = ({ styled, ...props }) => {
  const [ address, setAddress ] = useState()
  
  return (
    <Site>
      <SiteHeader>
        <Branding.Mobile />
      </SiteHeader>
        <Router primary={false}>
          <Account path='/*' />
        </Router>
      <SiteFooter>
        {/* <Footer /> */}
      </SiteFooter>
    </Site>
  )
}

export default MobileRoutes