/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { PortalProvider, PortalComponent, PortalWithContext, PortalApi } from '@horizin/react-hooks-portal/dist'

/* ------- Component ------- */
export default ({
  content,
  children
}) =>
  <>
    <PortalProvider>
      <span onClick={() => PortalApi.open(content, 'modal')}>
        {children}
      </span>
    </PortalProvider>
  </>