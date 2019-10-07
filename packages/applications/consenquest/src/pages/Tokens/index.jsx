/* --- Global Dependencies --- */
import React from 'react';
import {
  BackgroundImage, Box, HorizontalRule, Flex, Heading, Menu, Span, Image, Button
} from '@horizin/design-system';
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'
/* --- Local Dependencies --- */
import MenuItems from '../../static/menus/tokens'
import {
  TransferEventList,
  DetailsERC20, Transfer, DeployERC20, InitializeERC20, TotalSupply, Balance,
  TransferToast, ApproveToast, BalanceOfToast
} from '@rapid/eth-token-erc20'

/* --- CMS Global Configs --- */
const TOKEN = process.env.REACT_APP_DEFAULT_TOKEN
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

/**
 * @function Resource
 * @description Resource Page
 * @return {Object} React Component
 */
const Resource = () =>
<Flex minHeight='60vh'>
<InitializeERC20 address={TOKEN} />
  <Flex column gradient='gray' boxShadow={4} flex={2} zIndex={100}>
w
    <Box p={30}>
      <Menu vertical items={MenuItems} />
    </Box>
  </Flex>
  <Flex column flex={8}>
    <Box bg='dark' color='white' p={3} p={3}>
      <Flex alignCenter between>
        <Flex alignCenter>
          <Image card circle p={2} maxWidth={52} mr={3} src='https://image.flaticon.com/icons/svg/2165/2165602.svg' />
          <Flex column>
            <DetailsERC20
               address={TOKEN}
               styled={{fontSize: 2}}
               variant='name'/>
            <DetailsERC20
               address={TOKEN}
               styled={{
                 fontSize: 5
               }}
               variant='symbol'/>
          </Flex>
          {/* <Heading lg heavy>DEV <Span thin>Token</Span></Heading> */}
        </Flex>
          <Box textCenter flex={1}>
          <TransferToast address={TOKEN} >
            <Button xs mx={2}>Transfer</Button>
          </TransferToast>
          <ApproveToast address={TOKEN}>
            <Button xs mx={2}>Approve</Button>
          </ApproveToast>
          <BalanceOfToast address={TOKEN}>
            <Button xs mx={2}>Balance Lookup</Button>
          </BalanceOfToast>
        </Box>
        <Flex>
          <TotalSupply address={TOKEN}/>
        </Flex>
      </Flex>
    </Box>
    <Box bg='gray'  p={3} p={3}>
      <Flex alignCenter between>
        <Box>
          <TabList tabGroup='tokens' tabIdSelected='latest'>
            <Tab tabId='latest'>Latest</Tab>
            <Tab tabId='leaderboard'>Leaderboard</Tab>
            <Tab tabId='personal'>Personal</Tab>
            <Tab tabId='search'>Search</Tab>
          </TabList>
        </Box>
      </Flex>
    </Box>

    <Box p={50}>

    <InitializeERC20 address={TOKEN} />
    <Box>
      <TransferEventList address={TOKEN} />
    </Box>

    </Box>
  </Flex>
</Flex>

export default Resource