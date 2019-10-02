/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

const SignMessageButton = ({ ethers, delta, styled, ...props}) => {
  return (
    <>
      <Button onClick={() => ethers.signMessage({
        delta,
        message: 'kames'
      })} >
        Sign Message
      </Button>
    </>
  )
}

export default props =>
<EthersWrapper>
  <SignMessageButton {...props} />
</EthersWrapper>