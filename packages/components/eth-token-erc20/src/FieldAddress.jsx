/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Flex, Field, Span, QRReader, Toast  } from '@horizin/design-system'
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
      }}
      styledOuter={{
        flex:7
      }}
    />
    <Flex flex={1} justifyContent='flex-end'>
      <Box textCenter justifySelf='flex-end' mx={3}>
        <Toast content={<QRReader onSuccess={setAddress} />}>
          <Span xs pointer bg='blue' color='white' variant='tag' my={3} >Friends</Span>
        </Toast>
      </Box>
      <Box justifySelf='flex-end'>
        <Toast content={<QRReader onSuccess={setAddress} />}>
          <Span pointer bg='gray' color='charcoal' variant='tag' my={3} >QR</Span>
        </Toast>
      </Box>
    </Flex>
  </Flex>
)}

export default AddressField