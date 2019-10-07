/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import Component from './Component'
/* --- React Component --- */
const StorageSelector = ({ box, type, selector, ...props }) => {
  const [ selection, setSelection ] = useState()
  useEffect( () => { 
    setSelection(dot(box).get(`data.profiles.${selector}`).value())
  }, [dot(box).get(selector).value()] )
  return <Component selection={selection} component={props.component} />
}

StorageSelector.defaultProps = {
  component: () => null,
}

StorageSelector.propTypes = {
  component: PropTypes.func,
  type: PropTypes.string,
  selector: PropTypes.string,
}

export default props =>
<BoxWrapper>
  <StorageSelector {...props} />
</BoxWrapper>
