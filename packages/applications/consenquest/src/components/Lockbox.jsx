/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Flex, Form, Field, Button, Text, Span, Label, QRReader, Toast  } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

// Contracts
import TokenDropbox from '../contracts/TokenDropbox'


/**
 * @function ContractDeployLockboxAddDelegate
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const ContractDeployLockboxAddDelegate = ({ contract,ethers, delta, styled, ...props }) => {
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)
  
  // Form Submit Handler
  const onSubmit = async (values) => {

    ethers.contracts[contract].addDelegates({
      delta,
      contract: TokenDropbox,
      values: [
        values.address
      ]
    })
    setDeploying(true)
  }

  return (
    <Form callback={onSubmit} setState={setState} >
      <Field
        name="address"
        placeholder="Address"
      />
      <Field
        name="amount"
        placeholder="Amount"
      />
      {
        deploying
          ? <Span>Adding Delete</Span>
          : <Button sm type="submit" variant='green'>Add Delegate</Button>
      }
    </Form>
  );
}

/**
 * @function ContractDeployToken
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
 const ContractDeployTokenLockbox = ({ ethers, delta, styled, ...props }) => {
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)
  
  // Form Submit Handler
  const onSubmit = async (values) => {

    ethers.deployContract({
      delta,
      contract: TokenDropbox,
      values: []
    })
    setDeploying(true)
  }

  return (
    <Button sm variant='blue' onClick={onSubmit} >Create Bank</Button>
  );
}

/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const BankAddDelegate = ({ amount, ethers, contractName, delta, styled, ...props }) => {
  const [address, setAddress] = useState()
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)

  // Form Submit Handler
  const onSubmit = async (values) => {
    console.log(values)
  }

  return (
    <>
    
    <Form callback={onSubmit} setState={setState} fullWidth width={'100%'} >
      
      <Field
        name="address"
        defaultValue={address}
        placeholder="ETH Address (0x...)"
      />
      {
        address
        ? <></>
        : <Toast content={<QRReader onSuccess={setAddress} />}>
            <Button variant='green' fullWidth>Scan QR Code</Button>
          </Toast>
      }
      <Button sm variant='green' disabled={!address} fullWidth>Send Tokens</Button>
    </Form>
    </>
  );
}


export const ContractDeployTokenLockboxStateful = () =>
<EthersWrapper>
  <ContractDeployTokenLockbox />
</EthersWrapper>



export default {
  ContractDeployTokenLockboxStateful
}