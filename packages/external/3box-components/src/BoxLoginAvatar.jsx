/* --- Global Dependencies --- */
import React from 'react'
import { Box, Button, Heading, Span, Flex, Image } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { GenerateImagefromHash } from './utilities'
import BoxLoginButton from './BoxLoginButton'
import BoxLoginButtonStateless from './BoxLoginButtonStateless'

/* --- React Component --- */
const BoxLoginAvatar = ({ 
  box, image, role, employer,
  variant, children, styled,
   ...props 
}) => 
<>
<Flex column center {...styled}>
  <Box>
    <Image variant='avatar' maxWidth={80} src={GenerateImagefromHash(image)} />
  </Box>
  <Heading md heavy>{name}</Heading>
  <Heading xs as='h5'>{role} at {employer}</Heading>
  {/* <BoxLoginButton box={box} /> */}
  <BoxLoginButton />
</Flex>
</>

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

BoxLoginAvatar.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys',
}

export default props =>
<BoxWrapper>
  <BoxLoginAvatar {...props} />
</BoxWrapper>