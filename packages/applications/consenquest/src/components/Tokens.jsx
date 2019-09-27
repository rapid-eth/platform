/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Box, Flex, Form, Field, Button, Text, Span, Heading } from '@horizin/design-system'
import { EthersWrapper as EW } from '@rapid/ethers-react'

// Contracts
import ERC20 from '../contracts/ERC20'
import MintableToken from '../contracts/MintableToken'
import CappedMintableToken from '../contracts/CappedMintableToken'


/**
 * @function TokenInitList
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
export const TokenInitList = ({ ethers, styled, ...props}) => {

  return (
    <Box>
    {
      ethers && ethers.contracts && 
      Object.values(ethers.contracts).map( (contract, key) => <ContractDeployed key={key} {...contract} /> )
    }
    </Box>
  )
}

const ContractDeployed = ({ contract, styled, ...props}) => {
  const [ contractDetails, setContractDetails ] = useState({})
  useEffect( () => {
    if (props.contractType === 'ERC20') {
      const runEffect = async() => {
        try {
          const symbol = await props.symbol()
          const name = await props.name()
          const decimals = await props.decimals()
          console.log(decimals, 'contract deployed')
          setContractDetails({
            symbol,
            name,
            decimals
          })
        } catch (error) {
          
        }
      }

      runEffect();
    }
  }, [props] )
  return(
   <Box card m={3}>
     <Heading lg thin><strong>Token:</strong> {contractDetails.name}</Heading>
     <Heading xs>Address: {props.address}</Heading>
     <Flex>
       <Span variant='tag' bg='green' >symbol: {contractDetails.symbol}</Span>
       <Span variant='tag' bg='orange' mx={10} >name: {contractDetails.name}</Span>
       <Span variant='tag' bg='blue' >decimals: {contractDetails.decimals}</Span>
     </Flex>
     <Box mt={20}>
       <Heading md>Contract Actions</Heading>
     </Box>
     {
       props.contractType === 'ERC20'
       ? <Flex my={20}>
            <Button xs variant='green'>Transfer</Button>
            <Button xs variant='blue' ml={10}>Approve</Button>
            {/* <Button xs variant='tag' ml={10}>Save</Button> */}
          </Flex>
        : null
      }
      <Heading xs>Contract Type: {props.contractType}</Heading>
   </Box>
 )}

/**
 * @function ERC20TokenInitialize
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const ERC20TokenInitialize = ({ ethers, contractAddress, contractType, delta, styled, ...props }) => {
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)

  // Form Submit Handler
  const onSubmit = async (values) => {
    ethers.initContract({
      delta,
      abi: MintableToken.abi,
      address: values.address,
      contractType: contractType || 'ERC20'
    })
    setDeploying(true)
  }

  return (
    <Form callback={onSubmit} setState={setState} >
      <Field
        name="address"
        placeholder="Address"
      />
      {
        <Button sm type="submit" variant='green'>Connect to Token Contract</Button>
      }
    </Form>
  );
}

/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const ERC20TokenTransfer = ({ address, amount, ethers, contractName, delta, styled, ...props }) => {
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)

  // Form Submit Handler
  const onSubmit = async (values) => {
    ethers.contracts[contractName]({
      delta,
      contract: MintableToken,
      values: [
        values.name,
        values.symbol,
        Number(values.amount || 18),
      ]
    })
    setDeploying(true)
  }

  return (
    <Form callback={onSubmit} setState={setState} >
      <Field
        name="amount"
        label='Amount'
        defaultValue={amount}
        placeholder="Amount"
      />
      <Field
        name="address"
        label='Address'
        defaultValue={address}
        placeholder="Address"
      />
      {
        deploying
          ? <Span>Sending Tokens</Span>
          : <Button sm type="submit" variant='green' fullWidth>Send Tokens</Button>
      }
    </Form>
  );
}


// Constructor
// (
//     string  memory _tokenName,
//     string memory _tokenSymbol,
//     uint8   _decimalUnits,
//     uint256 _cap
// )
const ContractDeployToken = ({ ethers, delta, styled, ...props }) => {
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)

  const onSubmit = async (values) => {
    ethers.deployContract({
      delta,
      contract: MintableToken,
      values: [
        values.name,
        values.symbol,
        Number(values.amount || 18),
      ]
    })
    setDeploying(true)
  }

  return (
    <Form callback={onSubmit} setState={setState} >
      <Field
        name="name"
        placeholder="Name (DEV Token)"
      />
      <Field
        name="symbol"
        placeholder="Symbol (DEV)"
      />
      <Field
        name="decimals"
        placeholder="Decimals (0-18)"
      />
      <Field
        name="amount"
        placeholder="Amount (1,000,000)"
      />
      <Field
        name="image"
        placeholder="Image"
      />
      {
        deploying
          ? <Span>Deploying Token</Span>
          : <Button sm fullWidth type="submit" variant='green'>Create Token</Button>
      }
    </Form>
  );
}

export const ERC20TokenTransferStateful = props =><EW><ERC20TokenTransfer {...props} /></EW>
export const ERC20TokenInitializeStateful = props =><EW><ERC20TokenInitialize {...props} /></EW>
export const TokenInitListStateful = props =><EW><TokenInitList {...props} /></EW>
export const ContractDeployTokenStateful = props =><EW><ContractDeployToken {...props} /></EW>


export default {
  ContractDeployTokenStateful,
  ERC20TokenTransferStateful,
  ERC20TokenInitializeStateful,
  TokenInitListStateful
}