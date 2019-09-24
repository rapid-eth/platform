/* --- Global Dependencies --- */
import React from "react"
import { PortalProvider, PortalWithContext, PortalComponent } from '@horizin/react-hooks-portal'
const Portal = ({ styled, ...props }) =>
  <PortalProvider>

    {PortalWithContext(props => (
      <PortalComponent
        label='Portal'
        className="portal"
        activeClassName="is-active"
        backgroundClassName="portal-background"
        position={props.position || 'panel'}
        {...props}
      />
    ))}

  </PortalProvider>

export default Portal