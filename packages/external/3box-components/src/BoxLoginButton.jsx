/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxLoginButton = ({ box, variant, children, styled, ...props }) => 
!box.instance
  ? <ButtonLogin
      box={box}
      isLoggingIn={box.isLoggingIn}
      variant={variant}
      {...styled}
    />
  : box.profile && box.isLoggedIn
    ? <Flex alignCenter>
        <Span xs mx={10} onClick={box.logout}>Logout</Span>
        <Button white variant={variant} {...styled}>{box.profile.name}</Button>
      </Flex>
    : <ButtonLogin
        open={box.open}
        isLoggingIn={box.isLoggingIn}
        variant={variant}
        children={children}
        styled={styled}
      />


const ButtonLogin = ({ children, isLoggingIn, open, variant, styled }) => {
  return (
    <Button variant={variant} onClick={()=>open()} {...styled} >
    { 
      isLoggingIn
      ? <Span pl={10} pr={10}>Loading...</Span>
      : <Span>
        {
          children ? children : <><strong>ΞID</strong> Login</>
        }
      </Span>
    }
    </Button> 
  )
}

export default props =>
<BoxWrapper>
  <BoxLoginButton {...props} />
</BoxWrapper>