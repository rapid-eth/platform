/* --- Global Dependencies --- */
import React from "react";
import { PortalContext } from '@horizin/react-hooks-portal'

export default ({
  content,
  id,
  label,
  styled,
  closeTimer,
  closeOnClick,
  children,
}) => (
    <PortalContext>
      {
        portal => (
          <span onClick={() => portal.openToast({ content, closeTimer, closeOnClick, label, id, styled })}>
            {children}
          </span>
        )
      }
    </PortalContext>
  )