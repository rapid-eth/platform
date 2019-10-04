/* --- Global Dependencies --- */
import React, { useState } from "react";
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Popover from 'react-tiny-popover'
import { Span } from "../../../dist/atoms";
 
const PopoverButton = ({ content, label, styledLabel, children, ...props}) => {
  const state = useState(false)
  const isPopoverOpen = state[0]
  const setPopover = state[1]
  return (
    <Popover
      isOpen={isPopoverOpen}
      position={['bottom', 'right', 'left', 'bottom']} // if you'd like, supply an array of preferred positions ordered by priority
      padding={10} // adjust padding here!
      onClickOutside={() => setPopover(!isPopoverOpen)} // handle click events outside of the popover/target here!
      content={({ position, nudgedLeft, nudgedTop, targetRect, popoverRect }) => 
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
      }
    >
    <div onClick={() => {
      setPopover(!isPopoverOpen)
    } }>
        <Span pointer {...styledLabel}>{label}</Span>
    </div>
</Popover>
  )
}

PopoverButton.defaultProps = {
  label: 'Open Popover'
}

export default PopoverButton
