
import styled from 'styled-components'
import Box from '../Box'

const Absolute = styled(Box)`
  position: absolute;
`

Absolute.defaultProps = {
  relative: false,
  absolute: true,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  height: '100%',
  width: 1,
}

export default Absolute