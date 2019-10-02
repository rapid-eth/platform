/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Flex, Form, Field, Button, Text, Span, Label, QRReader, Toast  } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'
import useForm from "react-hook-form";
// Contracts
import TokenDropbox from '../../contracts/TokenDropbox'


/**
 * @function ERC20TokenTransfer
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const BankAddDelegate = ({ amount, ethers, contractAddress, contractName, isScanner, delta, styled, ...props }) => {
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
    ethers.contracts[contractAddress].approve(
      values.address,
      values.amount,
      overrides
    )
    setDeploying(true)
  }



  return (
    <>
    
    <form onSubmit={handleSubmit(onSubmit)} >
      {
        isScanner && 
        <Box textCenter>
          <Toast content={<QRReader onSuccess={setAddress} />}>
            <Span pointer bg='gray' color='charcoal' variant='tag' my={3} >QR Scanner</Span>
          </Toast>
        </Box>
      }
      
      <Field
        name="address"
        register={register}
        errors={errors}
        defaultValue={address}
        placeholder="ETH Address (0x...)"
      />
      <Field
        name="amount"
        register={register}
        errors={errors}
        defaultValue={amount}
        placeholder="Amount (42)"
      />
      <Button sm variant='green' disabled={!address} fullWidth>Add Funds to Bank</Button>
    </form>
    </>
  );
}


export default props =>
<EthersWrapper>
  <BankAddDelegate {...props}/>
</EthersWrapper>