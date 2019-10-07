/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxSelector = ({ box, selector, children, ...props }) => {
  const [ selection, setSelection ] = useState()
  useEffect( () => { 
    if(box && props.message && props.message.data) {
      const item = dot(box).get(`data.spaces.eth.public.quest`).value().filter( i => i.alias === props.message.data)
      console.log(item, 'itsmsm')
      setSelection(item[0])
    }
  }, [dot(box).get('data').value()] )

  console.log(selection,props, 'sksksksks')
  return (
    selection 
      ? React.createElement(props.component, {...selection})
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
