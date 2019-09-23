/* --- Global Dependencies --- */
import styled from 'styled-components'
import is from 'styled-is';
import { variant } from 'styled-system'
import { Span } from '../../index'

/* --- Styled Component --- */
const ErrorField = styled(Span)`
${
  variant({
    variants: {
      float: {
        background: '#FFF',
        boxShadow: 0,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'gray',
        p: 10,
        right: 10,
        top: -10,
        position: 'absolute !important',
      },
    }
  })
}
${is('withLabel')`
  top: 0
`};
`

ErrorField.defaultProps = {
  color: 'red',
  fontSize: 0,
  fontWeight: 'normal',
  variant: 'float'
}

export default ErrorField