import styled from 'styled-components'
import Text from '../Text'
import is from 'styled-is';
import { variant } from 'styled-system'

const Span = styled(Text)`
${
variant({
  prop: 'tag',
  variants: {
    white: {
      borderColor: '#eeeded',
      borderWidth: 1,
      borderStyle: 'solid',
      color: '#3e3e3e',
      bg: '#FFF',
      "&:hover": {
        color: '#3e3e3e !important',
      }
    },
    primary: {
      bg: 'primary',
      color: '#ffffffe6'
    },
    secondary: {
      bg: 'secondary',
      color: '#ffffffe6'
    },
    tertiary: {
      bg: 'tertiary',
      color: '#ffffffe6'
    },
    green: {
      bg: 'green',
      color: '#ffffffe6'
    },
    red: {
      bg: 'red',
      color: '#ffffffe6'
    },
    blue: {
      bg: 'blue',
      color: '#ffffffe6'
    },
    rust: {
      bg: 'rust',
      color: '#ffffffe6'
    },
    orange: {
      bg: 'orange',
      color: '#ffffffe6'
    },
    purple: {
      bg: 'purple',
      color: '#ffffffe6'
    },
  }
  })
}

${ props =>
  variant({
    variants: {
      tag: {
        borderColor: '#ffffff45',
        borderWidth: 1,
        borderStyle: 'inset',
        borderRadius: 80,
        bg: props.highlight,
        padding: 2,
        px: 3,
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: 0
      }
    }
  })
}

  ${is('center')`
    display: block;
    margin: 0 auto;
  `};

  ${is('gem')`
    border-radius: 30px;
    padding: 8px;
    text-transform: uppercase;
    font-weight: normal;
    fontSize: 0;
    &:hover {
      color: #FFF;
      top: -1px;
    }
  `};
  ${is('tag')`
    border-radius: 80px;
    padding: 8px;
    padding-left: 10px;
    padding-right: 10px;
    text-transform: uppercase;
    font-weight: 700;
    fontSize: 0;
    &:hover {
      color: #FFF;
      top: -1px;
    }
  `};
`

Span.defaultProps = {
  as: 'span',
  display: 'inline-block',
}

export default Span