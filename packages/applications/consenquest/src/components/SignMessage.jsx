/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Box, Flex, Button } from '@horizin/design-system'
import { ethers, Ethers, EthersWrapper } from '@rapid/ethers-react'

console.log(Ethers.Consumer, 'EthersWrapper')

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