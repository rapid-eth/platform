/* --- Global Dependencies --- */
import React from 'react';
import {
  Box, Flex, Image, Button, Heading, Paragraph
} from '@horizin/design-system';
import { DeployERC20 } from '@rapid/eth-token-erc20'

/**
 * @function Earn
 * @description Earn Page
 * @return {Object} React Component
 */
const Earn = () =>
<Box p={4} width='100%'>
  <Flex>
    <Flex flex={5} p={4}>
      <DeployERC20 label={false} />
    </Flex>
    <Flex column gradient='gray' flex={2} p={4}>
      <Heading>Deploy A Token</Heading>
      <Paragraph xs>
        <strong>Deploy a token to the Ethereum blockchain.</strong> Select the name, symbol and initial amount. Advanced users can also select the decimals.
      </Paragraph>
    </Flex>
  </Flex>
{/*   
  <Flex mt={4}>
    <Flex flex={5} p={4}>
      <DeployERC20 label={false} />
    </Flex>
    <Flex column gradient='gray' flex={2} p={4}>
      <Heading>Deploy Lockbox</Heading>
      <Paragraph xs>
        <strong>Deploy a token to the Ethereum blockchain.</strong> Select the name, symbol and initial amount. Advanced users can also select the decimals.
      </Paragraph>
    </Flex>
  </Flex> */}
</Box>

export default Earn