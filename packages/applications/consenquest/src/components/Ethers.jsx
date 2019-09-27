/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Flex, Form, Field, Button, Text, Span, Label } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'
import { Heading } from '@horizin/design-system/dist/atoms';

// Contracts
import ERC20 from '../contracts/ERC20'
import MintableToken from '../contracts/MintableToken'
import CappedMintableToken from '../contracts/CappedMintableToken'


/**
 * @function ContractDeployList
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
export const ContractDeployList = ({ ethers, styled, ...props}) => {

  return (
    <Box>
    {
      ethers && ethers.deployed && Array.isArray(ethers.deployed) && ethers.deployed.length > 0 &&
      ethers.deployed.map( (contract, key) => <ContractDeployed key={key} {...contract} /> )
    }
    </Box>
  )
}

const ContractDeployed = ({ styled, ...props}) => { 
 return(
  <Box card>
    Data: {props.data}
    Creates: {props.creates}
  </Box>
)}

/**
 * @function ContractDeployToken
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const ContractDeployToken = ({ ethers, delta, styled, ...props }) => {
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)
  
  // Form Submit Handler
  const onSubmit = async (values) => {

    // Constructor
    // string  memory _tokenName,
    // string memory _tokenSymbol,
    // uint8   _decimalUnits,
    // uint256 _cap
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
        name="amount"
        placeholder="Amount (1,000,000)"
      />
      <Field
        name="image"
        placeholder="Image (https://ipfs.com/#)"
      />
      {
        deploying
          ? <Span>Deploying Token</Span>
          : <Button sm type="submit" variant='green'>Create Token</Button>
      }
    </Form>
  );
}

/**
 * @function GeneratePrivateKey
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const GeneratePrivateKey = ({ ethers, delta, styled, ...props }) => {
  const [wallet, setWallet] = useState({})
  // Form Submit Handler
  const onSubmit = async (values) => {
    const wallet = ethers.instance.Wallet.createRandom()
    setWallet(wallet)
  }

  return (
    <>
    <Form callback={onSubmit} >
      <label>Address</label>
      <Field
        name="address"
        value={wallet.address}
        placeholder="Address"
      />
      <label>Private Key</label>
      <Field
        name="privateKey"
        value={wallet.privateKey}
        placeholder="Private Key"
      />
      <label>Mnemonic Phrase</label>
      <Field
        name="mnemonic"
        value={wallet.mnemonic}
        placeholder="Mnemonic Phrase"
      />
      {
      <>
        <Button sm mb={20} fullWidth type="submit" variant='green'>Click to Generate New Wallet</Button>
      </>
      }
    </Form>
    </>
  );
}


export const ContractDeployTokenERC20 = () =>
<EthersWrapper>
  <ContractDeployToken />
</EthersWrapper>

export const ContractDeployListStateful = () =>
<EthersWrapper>
  <ContractDeployList />
</EthersWrapper>

export const GeneratePrivateKeyStateful = () =>
<EthersWrapper>
  <GeneratePrivateKey />
</EthersWrapper>


export default {
  ContractDeployTokenERC20,
  ContractDeployListStateful,
  GeneratePrivateKeyStateful
}