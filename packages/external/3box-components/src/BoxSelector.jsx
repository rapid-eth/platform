/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxSelector = ({ box, selector, children, ...props }) => {
  const [ selection, setSelection ] = useState()
  useEffect( () => { 
    setSelection(dot(box).get(selector).value())
  }, [dot(box).get(selector).value()] )
  return (
    selection 
    ? Array.isArray(selection) 
      ? selection.map( item => (
        ! React.isValidElement(props.component)
          ? React.createElement(props.component, {
              ...item,
            })
          : React.cloneElement(props.component, {...item})
        ))
      :  React.isValidElement(props.component)
        ? React.createElement(props.component, {
            ...slection,
          })
        : React.cloneElement(props.component, {...selection})
    : null
  )
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
