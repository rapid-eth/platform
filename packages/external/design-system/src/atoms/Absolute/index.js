
import styled from 'styled-components'
import Box from '../Box'
import { variant } from 'styled-system'
const Absolute = styled(Box)`
${
  variant({
    prop: 'layout',
    variants: {
      default: {
        
      },
      bottomRight: {
        bottom: 0,
        right: 0,
      },
      bottomLeft: {
        bottom: 0,
        left: 0,
      },
      topRight: {
        top: 0,
        right: 0,
      },
    }
  })
  }

  position: absolute;
`

Absolute.defaultProps = {
  layout: 'default',
  relative: false,
  absolute: true,
}

export default Absolute