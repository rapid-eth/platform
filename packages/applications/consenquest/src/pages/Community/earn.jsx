/* --- Global Dependencies --- */
import React from 'react';
import {
  Box, Flex, Image, Button
} from '@horizin/design-system';
import {
  TransferEventList,
  DetailsERC20, TotalSupply, TransferToast, BalanceOfToast, ApproveToast
} from '@rapid/eth-token-erc20'

/* --- Local Dependencies --- */
import TokenTabs  from './tabs'
/* --- CMS Global Configs --- */
const TOKEN = process.env.REACT_APP_DEFAULT_TOKEN

/**
 * @function Earn
 * @description Earn Page
 * @return {Object} React Component
 */
const Earn = () =>
<Box p={4} width='100%'>
  <TransferEventList address={TOKEN} />
</Box>

export default Earn