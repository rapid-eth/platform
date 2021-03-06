/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import useForm from "react-hook-form";
import { Box, Flex, Form, Field, Button, Text, Span, Label, QRReader, Toast  } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

// Contracts
import TokenDropbox from '../../contracts/TokenDropbox'


/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const BankAddDelegate = ({ amount, ethers, contractAddress, contractName, delta, styled, ...props }) => {
  const { handleSubmit, register, errors } = useForm();
  const [address, setAddress] = useState()
  const [state, setState] = useState()
  const [deploying, setDeploying] = useState(false)

  // Form Submit Handler
  const onSubmit = async (values) => {
    console.log(values)
    let overrides = {

      // The maximum units of gas for the transaction to use
      gasLimit: 999000,
  };
    ethers.contracts[contractAddress].addDelegate(values.address, overrides)
    setDeploying(true)
  }

  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}} >
      
        <AddressField
          name="from"
          register={register}
          errors={errors}
          defaultValue={address}
          placeholder="From Address"
        />
        <AddressField
          name="token"
          register={register}
          errors={errors}
          placeholder="Token Address"
        />
        <Field
          name='amount'
          register={register}
          errors={errors}
          placeholder="Amount"
        />
        <Field
          name='message'
          register={register}
          errors={errors}
          placeholder="Nonce"
        />
        <Field
          name='message'
          register={register}
          errors={errors}
          placeholder="Message"
        />
      <Button sm variant='green' disabled={!address} fullWidth>Claim Tokens (ATM Withdrawl)</Button>
    </form>
    </>
  );
}

const AddressField = ({ name, register, placeholder, errors, styled, ...props}) => { 
  const [address, setAddress] = useState()

 return(
  <Flex alignCenter>
  <Field
    name={name}
    register={register}
    errors={errors}
    defaultValue={address}
    placeholder={placeholder}
    flex={5}
    styled={{
      flex:6,
    }}
  />
  <Box textCenter flex={1} mx={3}>
    <Toast content={<QRReader onSuccess={setAddress} />}>
      <Span xs pointer bg='blue' color='white' variant='tag' my={3} >Friends</Span>
    </Toast>
  </Box>
  <Box textCenter flex={1}>
    <Toast content={<QRReader onSuccess={setAddress} />}>
      <Span pointer bg='gray' color='charcoal' variant='tag' my={3} >QR</Span>
    </Toast>
  </Box>
</Flex>
)
}

export default props =>
<EthersWrapper>
  <BankAddDelegate {...props}/>
</EthersWrapper>