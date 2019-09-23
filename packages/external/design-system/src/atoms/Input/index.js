import styled from 'styled-components'
import { variant } from 'styled-system'
import Text from '../Text'

const Input = styled(Text)`

padding: 20px;
${
  variant({
    variants: {
      default: {
        border: '1px solid #f5f5f5',
        borderRadius: 5,
        boxShadow: '0 1px 3px rgba(245,243,243,.05), 0 1px 2px rgba(0,0,0,.15)',
        display: 'block',
        mb: 2,
        p: 15,
        width: '100%'
      },
    }
  })
}
`

Input.defaultProps = {
  as: 'input',
  variant: 'default'
}

export default Input