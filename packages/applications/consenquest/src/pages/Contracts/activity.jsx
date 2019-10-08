/* --- Global Dependencies --- */
import React, { useState } from 'react';
import {
  Box, Flex, Image, Button, Heading, Paragraph, Form, Field, Span
} from '@horizin/design-system';
import {
  TransferEventList, Transfer, Approve, Redeem,
  DetailsERC20, TotalSupply, TransferToast, BalanceOfToast, ApproveToast, DeployERC20, InitializeERC20
} from '@rapid/eth-token-erc20'

/* --- Local Dependencies --- */
import TokenTabs  from './tabs'
import { ethers } from 'ethers';
/* --- CMS Global Configs --- */
const TOKEN = process.env.REACT_APP_DEFAULT_TOKEN

/**
 * @function Earn
 * @description Earn Page
 * @return {Object} React Component
 */
const Earn = () => {
  const [ address, setAddress ] = useState()

  const actionHAndler = (values) => { 
    console.log(values)
    setAddress(values.address)
  }

  return (

   <Box>
      <Box gradient='gray' width='100%' p={4}>
        <Form callback={actionHAndler}>
          <Field 
            name='address'
            label='Address'
          />
          <Flex alignCenter between>
           <Flex alignCenter>
              <Span xxs>Example: </Span>
              <Span xxs tag='white' ml={3}>0xc190444d7f04120642411acfeb1a1df25a682ff1</Span>
           </Flex>
            <Button xs type='submit'>Load Token</Button>
          </Flex>
        </Form>
      </Box>
  
  <Box p={4} width='100%'>
    {
      address &&
      <InitializeERC20 address={address} />
    }
    
    <Flex>
      <Flex flex={5} p={4}>
        <Transfer address={address} label={false} />
      </Flex>
      <Flex column gradient='gray' flex={2} p={4}>
        <Heading>Transfer Tokens</Heading>
        <Paragraph xs>
          <strong>Transfer tokens to another Ethereum account.</strong> Send your tokens to friends or even yourself. Remember to enable a Web3 enabled browser. 
        </Paragraph>
      </Flex>
    </Flex>
    
    <Flex mt={4}>
      <Flex flex={5} p={4}>
        <Approve address={address} label={false} />
      </Flex>
      <Flex column gradient='gray' flex={2} p={4}>
        <Heading>Approve Tokens</Heading>
        <Paragraph xs>
          <strong>Transfer tokens to another Ethereum account.</strong> Send your tokens to friends or even yourself. Remember to enable a Web3 enabled browser. 
        </Paragraph>
      </Flex>
    </Flex>
    
    <Flex mt={4}>
      <Flex flex={5} p={4}>
        <Approve address={address} label={false} />
      </Flex>
      <Flex column gradient='gray' flex={2} p={4}>
        <Heading>Balance Lookup</Heading>
        <Paragraph xs>
          <strong>Transfer tokens to another Ethereum account.</strong> Send your tokens to friends or even yourself. Remember to enable a Web3 enabled browser. 
        </Paragraph>
      </Flex>
    </Flex>
    
    <Flex mt={4}>
      <Flex flex={5} p={4}>
        <Redeem address={address} label={false} />
      </Flex>
      <Flex column gradient='gray' flex={2} p={4}>
        <Heading>Redeem Certificate</Heading>
        <Paragraph xs>
          <strong>Transfer tokens to another Ethereum account.</strong> Send your tokens to friends or even yourself. Remember to enable a Web3 enabled browser. 
        </Paragraph>
      </Flex>
    </Flex>
  
  
  </Box>
  </Box>
  )
}

export default Earn