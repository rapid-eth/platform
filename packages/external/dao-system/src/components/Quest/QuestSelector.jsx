import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Box } from '@horizin/design-system';

const QuestSelector = ({ box, ...props}) => { 
  const [ Component, setComponent ] = useState(props.component)
  const [ item, setItem ] = useState()

  useEffect( () => { 
    if(!Component) setComponent(()=><div>{props.warning}</div>)
  }, [Component])

  /**
   * @function Selector
   */
  useEffect( () => { 
    if( !item && idx(box, _=>_.spaces[props.space][props.access][props.selector])) {
      const list = box.spaces[props.space][props.access][props.selector]
      const item = list.filter( ITEM => ITEM.alias === props.alias).map(i => i)
      if(item.length > 0) setItem(item[0].properties)
    }
  }, [item, box.spaces])

  return !item ? null :
  React.isValidElement(Component)
    ? React.createElement(props.component, { ...props, ...item })
    : props.component
}

QuestSelector.defaultProps = {
  space: process.env.REACT_APP_DEFAULT_SPACE,
  access: 'public',
  selector: 'quest',
  warning: 'set component'
}

export default props =>
  <BoxWrapper>
    <QuestSelector {...props} />
  </BoxWrapper>
