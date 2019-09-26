/* eslint-disable react/prop-types */
import React from 'react';
import { Button } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

const SignMessageButton = ({ ethers, styled, ...props}) => {
  return (
    <>
    <Button onClick={() => ethers.signMessage('kames', 'magic')} >Sign Message</Button>
    </>
  )
}

export default  () =>
<EthersWrapper>
  <SignMessageButton />
</EthersWrapper>