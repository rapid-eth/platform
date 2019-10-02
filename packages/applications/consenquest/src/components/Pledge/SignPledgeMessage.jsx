/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Button } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

const SignMessageTyped = ({
  ethers,
  dispatchSignRequest,
  delta, message,
  styled, ...props
}) => {

  const [ dispatch, setDispatchStatus ] = useState(dispatchSignRequest)

  useEffect( () => {
    if(dispatch) {
      ethers.signMessageTyped({
        delta,
        message: [
          {
            type: 'string',
            name: 'pledge',
            value: 'I pledge to grow the Web3 ecosystem. To build, explore and connect with others. Pellentesque sagittis eget dui at sollicitudin.'
          },
          {
            type: 'string',
            name: 'name',
            value: 'Full Name'
          },
        ]
      }) 
    }
  }, [ dispatch, delta, ethers ])


  return (
    <>
      <Button {...styled} onClick={(setDispatchStatus)(true)} >Sign Pledge</Button>
    </>
  )
}

SignMessageTyped.defaultProps = {

}
export default props =>
<EthersWrapper>
  <SignMessageTyped {...props} />
</EthersWrapper>