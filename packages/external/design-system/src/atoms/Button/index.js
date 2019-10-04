import idx from 'idx'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { variant } from 'styled-system'
import is from 'styled-is';
import Box from '../Box'

const Gradient = (gradient, direction, theme) =>
`
background: ${idx(theme, _=>_.gradient[gradient][0])};
background-image: -webkit-linear-gradient(${direction ? direction : '-90'}deg , ${idx(theme, _=>_.gradient[gradient][0])});
background-image: linear-gradient(${direction ? direction : '180'}deg , ${idx(theme, _=>_.gradient[gradient][0])})
`

const Button = styled(Box)
`
  box-shadow: 0 6px 8px -5px rgba(88,103,221,0.15);
  border-width: 0px;
  border-style: solid;
  border-radius: .25rem;
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 470;
  justify-content: center;
  line-height: 1.5;
  letter-spacing: 0.015em;
  padding: .65rem 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  vertical-align: middle;
  transition: top 1s;
  text-align: center;
  outline: 0!important;

${
  variant({
    variants: {
      white: {
        borderColor: '#eeeded',
        borderWidth: 1,
        borderStyle: 'solid',
        color: '#3e3e3e',
        bg: '#FFF',
      },
      primary: {
        border: 'none',
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        bg: 'secondary',
        color: 'white',
      },
      dark: {
        bg: '#29323a',
        color: 'white',
      },
      blue: {
        bg: 'blue',
        color: 'white',
      },
      green: {
        color: 'white',
        bg: 'green',
      },
      orange: {
        color: 'white',
        bg:'rust',
      },
      red: {
        color: 'white',
        bg: 'red',
      },
    }
  })
}
${ props =>
  variant({
    prop: 'gradient',
    variants: {
      white: {
        color: '#3e3e3e',
        bg: 'white',
      },
      primary: {
        color: 'white',
        bg: 'primary',
      },
      secondary: {
        bg: 'secondary',
        color: 'white',
      },
      blue: {
        color: 'white',
        gradient: Gradient('blue', '180', props.theme),
      },
      green: {
        color: 'white',
        gradient: Gradient('green', '0', props.theme),
      },
      orange: {
        color: 'white',
        gradient: Gradient('orange', '180', props.theme),
      },
      red: {
        color: 'white',
        gradient: Gradient('orange', '180', props.theme),
      },
    }
  })
}

${is('disabled')`
  background-color: ${palette('gray', 2)} !important;
  border-color: ${palette('gray', 2)} !important;
  color: #FFF !important;
`};



${is('uppercase')`
    text-transform: uppercase;
  `};
  
  ${is('xs')`
    font-size: 0.65rem;
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: 0.055em;
    padding: .65rem 1.25rem;
  `};

${is('sm')`
  font-size: 0.85rem;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.055em;
  padding: .65rem 1rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`};

${is('lg')`
  font-size: 0.95rem;
  font-weight: 500;
  line-height: 1.75;
  letter-spacing: 0.055em;
  padding: .65rem 1rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
`};

&:hover {

  box-shadow: 0 2px 6px 0 rgba(0,0,0,.1);
  transition: top 1s;
  top: -1px;
}

// Button States
&:active {
  top: -3px;
}
`

Button.defaultProps = {
  as: 'button',
  cursor: 'pointer',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal',
  variant: 'white',
  width: 'auto'
}

export default Button