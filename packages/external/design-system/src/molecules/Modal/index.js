/* --- Global Dependencies --- */
import React from "react";
import { PortalContext } from '@horizin/react-hooks-portal'

export default ({
  content,
  id,
  label,
  styled,
  variant,
  variantInner,
  position,
  children
}) =>(
<PortalContext>
  {
    portal => (
      <span onClick={() => portal.openModal({ id, content, label, variant, variantInner, position, styled })}>
      {children}
    </span>
    )
  }
</PortalContext>
)