/* --- Global Dependencies --- */
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../Box'

const Container = styled(Box)``

Container.propTypes = {
  relative: PropTypes.string
}

Container.defaultProps = {
  mx: 'auto',
  maxWidth: 1220,
  relative: 1,
  width: 1,
  zIndex: 10
}

export default Container