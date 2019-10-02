/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box, Flex, Form, Field, Button, Text, Span, Label } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

export const EthStateAccess = ({ ethers, styled, children, ...props}) => {
  const [ value, setValue ] = useState()
  
  /**
   * @function ValueSelector
   * @description Handle ethers state read and children display state.
   */
  useEffect(() => {
    const select = ethers.selector('signatures.pledge')
    if(select) setValue(select)
  }, [ ethers, value ])

  return (
    value
    ? 
      children && Array.isArray(children)
      ? children.map(child => React.cloneElement(child, { value }))
      : React.cloneElement(children, { ethSelector: value })
    : null
  )
}


export default props =>
<EthersWrapper>
  <EthStateAccess {...props} />
</EthersWrapper>
