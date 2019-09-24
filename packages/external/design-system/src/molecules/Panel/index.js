/* --- Global Dependencies --- */
import React from "react";
import { PortalProvider, PortalComponent, PortalWithContext, PortalApi } from '@horizin/react-hooks-portal/dist'

/* ------- Component ------- */
export default ({
  content,
  children,
  position
}) =>
  <>
    <PortalProvider>
      <span onClick={() => PortalApi.open(content, 'panel', position)}>
        {children}
      </span>
    </PortalProvider>
  </>