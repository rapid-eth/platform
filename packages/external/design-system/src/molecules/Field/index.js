/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'
import { Box } from '../../index'
import Input from '../../atoms/Input';
import Error from './message';
import { Span } from '../../../dist/atoms';



const internalLabel = [
  'radio',
  'checkbox'
]
/* --- Component --- */
const Field = ({
  inputAs, label, error, errors, register, validation,
  component, styled, children, ...props 
}) =>
!register ? null :
<>
  
  <Box>
    {
      !component
      ? <>
        {
          !internalLabel.includes(props.type) && label &&
          <Span xs as='label' my='5px' >{label}</Span>
        }
        <Input 
            ref={register({
              ...validation
            })}
            label={label}
            variant={props.type}
            as={inputAs}
            {...styled} {...props} 
          />
          {
            internalLabel.includes(props.type) && label &&
            <Span xs as='label' my='5px' >{label}</Span>
          }
        </>
      : component
    }
    {
      errors[props.name] && errors[props.name].message && 
        <Error floating name={props.name} error={error} className="input-error">
          {errors[props.name].message}
        </Error>
    }
  </Box>
</>

Field.defaultProps ={
  
}

export default Field