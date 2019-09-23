/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../index'
import Input from '../../atoms/Input';
import Error from './message';

/* --- Component --- */
export default ({
  type = 'text',
  name, label, placeholder, error, errors, register, validation,
  component, styled, ...props 
}) =>
!register ? <div>no register</div> :
<>
  {
    label &&
    <label>{label}</label>
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
