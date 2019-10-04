/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxOpenSpace = ({ box, auto, space, styled, styledLoading, componentLoading, children }) => {
  const [ loading, setLoading ] = useState(false)

  /**
   * @function ComponentActionHandler
   * @description Handle component click event. 
   */
  const actionHandler = () => {
    box.openSpace(space)
    setLoading(true) 
  }

  /**
   * @function AutoEffect
   * @description Automatically connect to space without requiring use input.
   */
  useEffect(() => {
    if(auto) {
      box.openSpace(space) ; setLoading(true)
    }
  }, [auto])

  return (
    !auto ? loading 
      ? componentLoading ? componentLoading :
        <Box fullWidth>
          <Button {...styledLoading}>Loading Space...</Button>
        </Box>
      : <Box fullWidth onClick={actionHandler}>
          {
            children ? children :
            <Button {...styled}>open <strong>{space}</strong> space</Button>
          }
        </Box>
    : null
  )
}

BoxOpenSpace.defaultProps = {
  threadName: undefined,
  labelLoading: 'Loading Space...',
  styled: {
    fontWeight: 'normal',
    width: '100%'
  },
  styledLoading: {
    width: '100%'
  },
}

BoxOpenSpace.propTypes = {
  space: PropTypes.string.isRequired,
}

export default props =>
<BoxWrapper>
  <BoxOpenSpace {...props} />
</BoxWrapper>
