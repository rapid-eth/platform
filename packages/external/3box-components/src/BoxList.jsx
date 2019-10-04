/* --- Global Dependencies --- */
import idx from 'idx';
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Router } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { async } from 'q'

/* --- React Component --- */
const BoxOpenSpace = ({ box, selector, children, ...props }) => {
  const [ loading, setLoading ] = useState(false)
  const [ list, setList ] = useState()
  const [ selectors, setSelectors ] = useState()


  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   * @todo Add dot notation to access objects.
   */
  useEffect( () => { 
    if(selector) {
      const [ space, access, key ] = selector.split('.')
      setSelectors({space, access, key})
    }
  }, [selector])
  
  /**
   * @function BoxGetSpace
   * @description Get Static Space Data
   */
  useEffect(() => {
    let read
    if(props.space) {
      read = idx(box, _=>_.spaces[props.space][props.access][props.id])
      setList(read)
    } else {
      read = idx(box, _=>_[props.access][props.id])
      setList(read)
    }
  }, [box.public, box.spaces])

  return list && list.length > 0
  ? props.isRouter 
    ? <Router>
        {list.map(item => React.createElement(props.component, { ...item.properties, children, props }))}        
      </Router>
    : list.map(item => React.createElement(props.component, { ...item, ...item.properties, children, props,}))
  : null
}


BoxOpenSpace.defaultProps = {
  component: () => <div>hello world</div>,
  threadName: undefined,
  labelLoading: 'Loading Space...',
  isRouter: false
}

BoxOpenSpace.propTypes = {
  space: PropTypes.string.isRequired,
  isRouter: PropTypes.boolean,
}

export default props =>
<BoxWrapper>
  <BoxOpenSpace {...props} />
</BoxWrapper>
