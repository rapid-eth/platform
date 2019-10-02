import idx from 'idx'
import React from 'react';
import { Button } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/**
 * @function BoxThreadPostCreate
 * @param {Object} props 
 * @param {Object} props.box 
 * @param {String} props.threadName 
 * 
 * @return {Component}
 */

const PledgePublish = ({ box, threadName, message, ...props}) => {
  console.log(props.ethSelector, 'ethSelector')
  const actionHandler = (values) => {
    try {
      console.log('posting msg', box)
      const { payload, signature } = props.ethSelector
      box.threadPost({threadName, message: payload, signature})
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    idx(box, _=>_.threads[threadName].instance)
    ? <Button lg fullWidth variant='green' onClick={() =>actionHandler()}>Publish Pledge</Button>
    : null
  );
}

export default props =>
<BoxWrapper>
  <PledgePublish {...props} />
</BoxWrapper>
