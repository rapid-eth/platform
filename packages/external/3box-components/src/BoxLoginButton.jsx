/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxLoginButton = ({ box, variant, children, ...props }) => 
!box.instance
? <ButtonLogin box={box} isLoggingIn={box.isLoggingIn} variant={variant} />
: box.profile && box.isLoggedIn
  ? <Flex alignCenter>
      <Span xs mx={10} onClick={box.logout}>Logout</Span>
      <Button white sm variant={variant} >{box.profile.name}</Button>
    </Flex>
  : <ButtonLogin open={box.open} isLoggingIn={box.isLoggingIn} variant={variant} /> 


const ButtonLogin = ({ isLoggingIn, open, variant, }) => {
  return (
    <Button variant={variant} sm onClick={()=>open()} >
    { 
      isLoggingIn
      ? <Span pl={10} pr={10}>Loading...</Span>
      : <Span><strong>ΞID</strong> Login</Span>
    }
    </Button> 
  )
}

export default props =>
<BoxWrapper>
  <BoxLoginButton {...props} />
</BoxWrapper>