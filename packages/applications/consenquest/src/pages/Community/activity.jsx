/* --- Global Dependencies --- */
import React from 'react';
import {
  Box, Flex, Image, Button
} from '@horizin/design-system';
import {
  DetailsERC20, TotalSupply, TransferToast, BalanceOfToast, ApproveToast
} from '@rapid/eth-token-erc20'

/* --- Local Dependencies --- */
import TokenTabs  from './tabs'
/* --- CMS Global Configs --- */
const TOKEN = process.env.REACT_APP_DEFAULT_TOKEN

/**
 * @function Activity
 * @description Activity Page
 * @return {Object} React Component
 */
const Activity = () =>
<Box width='100%'>
  <TokenTabs />
</Box>



export default Activity