/* --- Global Dependencies --- */
import React from "react"
import { useMediaQuery } from 'react-responsive'
 
const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1020 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1020 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
 
const Example = ({ children, mobile, tablet, desktop, defaults }) => (
  <div>
    {
      desktop &&
      <Desktop>{desktop}</Desktop>
    }
    {
      tablet &&
      <Tablet>{tablet}</Tablet>
    }
    {
      mobile &&
      <Mobile>{mobile}</Mobile>
    }
    {
      <Default>{ children }</Default>
    }
  </div>
)
 
export default Example