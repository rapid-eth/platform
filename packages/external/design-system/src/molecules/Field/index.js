/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../index'
import Input from '../../atoms/Input';
import Error from './message';
import { Span } from '../../../dist/atoms';

/* --- Component --- */
export default ({
  type = 'text',
  name, label, placeholder, error, errors, register, validation,
  component, styled, ...props 
}) =>
!register ? null :
<>
  {
    label &&
    <Span xs as='label' my='5px' >{label}</Span>
  }
  <Box>
    {
      !component
      ? <Input 
          ref={register({
            ...validation
          })}
          name={name} placeholder={placeholder}
          {...styled} {...props} 
        />
      : component
    }
    {
      errors[name] && errors[name].message && 
        <Error floating name={name} error={error} className="input-error">
          {errors[name].message}
        </Error>
    }
  </Box>
</>
