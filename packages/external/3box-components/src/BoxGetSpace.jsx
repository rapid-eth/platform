/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { async } from 'q'

/* --- React Component --- */
const BoxOpenSpace = ({ box, children, ...props }) => {
  const [ dispatch, setDispatched ] = useState(false)
  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   */
  useEffect(() => {
    if(!dispatch && props.address && props.space) {
      box.getSpace({address: props.address, space: props.space})
      setDispatched(true)
    }
  }, [dispatch])

  return (
    <Box>
      
    </Box>
  )
}

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Space...',

}

BoxOpenSpace.propTypes = {
  space: PropTypes.string.isRequired,
}

export default props =>
<BoxWrapper>
  <BoxOpenSpace {...props} />
</BoxWrapper>
