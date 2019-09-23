/* --- Global Dependencies --- */
import { Router } from "@reach/router"
import styled from 'styled-components'
import { border, position, color, layout, flexbox, grid, background, typography, shadow, system, space } from 'styled-system'

const RouterStyled = styled(Router)`
  ${border}
  ${color}
  ${layout}
  ${flexbox}
  ${grid}
  ${background}
  ${typography}
  ${position}
  ${shadow}
  ${space}
`

RouterStyled.defaultProps = {
  display: 'flex',
  flex: 1,
  flexDirection: 'row',
  minHeight: '100%',
  width: '100%'
}

export default RouterStyled