import styled from 'styled-components'
import Text from '../Text'
import is from 'styled-is';
import { variant } from 'styled-system'

const Span = styled(Text)`
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
          color: '#FFF',
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
`

Span.defaultProps = {
  as: 'span',
  display: 'inline-block',
}

export default Span