import styled from 'styled-components'
import Box from '../Box'
import { variant } from 'styled-system'

const Image = styled(Box)
`
${variant({
    variants: {
      avatar: {
        border: '1px solid #FFF',
        boxShadow: '0px 0px 6px #999',
        borderRadius: 9999,
        maxWidth: 64,
      },
      card: {
        border: '2px solid #FFF',
        boxShadow: '0px 0px 6px #999',
        borderRadius: 4,
      },
    }
  })
}
`

Image.defaultProps = {
  as: 'img',
  height: 'auto',
  maxWidth: '100%'
}

export default Image