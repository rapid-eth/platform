/* --- Global Dependencies --- */
import React from "react";
import { PortalContext } from '@horizin/react-hooks-portal'
export default ({
  content,
  id,
  label,
  styled,
  children
}) =>(
<PortalContext>
  {
    portal => (
    <span onClick={() => portal.openPanel({ content, label, id, styled })}>
      {children}
    </span>
    )
  }
</PortalContext>
)