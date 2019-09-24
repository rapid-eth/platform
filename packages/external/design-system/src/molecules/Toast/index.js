/* --- Global Dependencies --- */
import React from "react";
import { PortalProvider, PortalApi } from '@horizin/react-hooks-portal/dist'

/* ------- Component ------- */
export default ({
  content,
  children
}) =>
  <>
    <PortalProvider>
      <span onClick={() => PortalApi.open(content, 'toast')}>
        {children}
      </span>
    </PortalProvider>
  </>