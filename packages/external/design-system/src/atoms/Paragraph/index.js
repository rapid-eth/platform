import styled from 'styled-components'
import Text from '../Text'

const Span = styled(Text)
`
// Add Styles
`

Span.defaultProps = {
  as: 'p',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal'
}

export default Span