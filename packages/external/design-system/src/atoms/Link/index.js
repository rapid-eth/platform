/* --- Global Dependencies --- */
import { Link } from "@reach/router"
import styled from 'styled-components'
import styledBy from 'styled-by'
import is from 'styled-is';
import { border, position, color, layout, flexbox, grid, background, typography, shadow, system, space } from 'styled-system'

const LinkStyled = styled(Link)`
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
  ${is('fullWidth')`
    width: 100%;
  `};
  &:hover {
    ${styledBy('colorHover', props => `color: ${props.colorHover}`)}
  }
  ${is('active')`
    &:hover {
      ${color}
      opacity: 0.9;
    }
  `};

  ${is('opaque')`
    opacity: 0.7;
    &:hover {
      color: #4f6ee4;
      opacity: 1;
    }
  `};
`

LinkStyled.defaultProps = {
  colorHover: '#2879c7',
}

export default LinkStyled