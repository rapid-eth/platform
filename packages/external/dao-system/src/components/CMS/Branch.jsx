/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import Component from './Component'
/* --- React Component --- */
const BoxSelector = ({ box, selector, ...props }) => {
  const [ selection, setSelection ] = useState()
  useEffect( () => { 
    setSelection(dot(box).get(selector).value())
  }, [dot(box).get(selector).value()] )
  return <Component selection={selection} component={props.component} />
}

BoxSelector.defaultProps = {
  component: () => null,
}

BoxSelector.propTypes = {
  component: PropTypes.func,
}

export default props =>
<BoxWrapper>
  <BoxSelector {...props} />
</BoxWrapper>
