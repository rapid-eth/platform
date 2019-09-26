/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Flex, Form, Field, Button, Text, Span } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'
import { Heading } from '@horizin/design-system/dist/atoms';

// Contracts
import ERC20 from '../contracts/ERC20'
import MintableToken from '../contracts/MintableToken'
import CappedMintableToken from '../contracts/CappedMintableToken'

// constructor
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

const DeployToken = ({ ethers, delta, styled, ...props }) => {

  const onSubmit = async (values) => {
    ethers.deployContract({
      delta,
      contract: ERC20,
      values: Object.values(values)
    })
  }

  Object.values()

  return (
    <Form callback={onSubmit} {...styled} {...props}>
      <Field
        name="message"
        placeholder="GitHub Profile"
      />
      <Button sm fullWidth type="submit" variant='green'>Sign Pledge</Button>
    </Form>
  );
}

const SignPledgeForm = ({ ethers, styled, ...props }) => {

  const onSubmit = async (values) => {
    ethers.signMessage(values.message, 'pledge')
  }

  return (
    <Form callback={onSubmit} {...styled} {...props}>
      <Field
        name="message"
        placeholder="GitHub Profile"
      />
      <Button sm fullWidth type="submit" variant='green'>Sign Pledge</Button>
    </Form>
  );
}

const SignMessageForm = ({ ethers, styled, ...props }) => {

  const onSubmit = async (values) => {
    ethers.signMessage(values.message, values.delta)
  }

  return (
    <Form callback={onSubmit}>
      <Field
        name="delta"
        placeholder="ID"
      />
      <Field
        name="message"
        as='textarea'
        placeholder="Message"
      />
      <Button sm type="submit" variant='green'>Submit Evidence</Button>
    </Form>
  );
}

const EthereumEnable = ({ ethers, styled, ...props }) => {
  return (
    <>
      <Button variant='dark' onClick={() => ethers.enable()} >Enable Ethereum</Button>
    </>
  )
}

const SignMessageButton = ({ ethers, styled, ...props }) => {
  const signature = ethers.signatures && ethers.signatures['magic']
  return (
    <>
      <Button onClick={() => ethers.signMessage('kames', 'magic')} >Sign Message</Button>
      {
        signature &&
        signature.signature
      }
    </>
  )
}

const Signatures = ({ ethers, styled, ...props }) => {
  const signatures = ethers.signatures
  return (
    signatures
      ? Object.keys(signatures).map(delta => <SignatureItem key={delta} {...signatures[delta]} />)
      : <Span>No Signatures</Span>
  )
}

const SignatureItem = ({ message, signature, id, ...props }) =>
  <Box card m={3}>
    <Heading>{id}</Heading>
    <Text wordBreakAll>
      <strong>message:</strong> {message}
    </Text>
    <Text wordBreakAll>
      <strong>signature:</strong> {signature}
    </Text>
  </Box>

export const ContractDeployTokenERC20 = () =>
  <EthersWrapper>
    <ContractDeployToken />
  </EthersWrapper>

export const SignMessage = () =>
  <EthersWrapper>
    <SignMessageButton />
  </EthersWrapper>

export const SignatureList = () =>
  <EthersWrapper>
    <Signatures />
  </EthersWrapper>

export const SignMessageFormInputs = () =>
  <EthersWrapper>
    <SignMessageForm />
  </EthersWrapper>

export const SignPledgeFormInputs = () =>
  <EthersWrapper>
    <SignPledgeForm />
  </EthersWrapper>

export const EthereumEnableMetaMask = () =>
  <EthersWrapper>
    <EthereumEnable />
  </EthersWrapper>

export default {
  ContractDeployTokenERC20,
  SignMessage,
  SignMessageFormInputs,
  SignPledgeFormInputs,
  EthereumEnableMetaMask,
  SignatureList
}