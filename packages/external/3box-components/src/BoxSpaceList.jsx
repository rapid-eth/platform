/* --- Global Dependencies --- */
import React, { useState} from 'react'
import { Box, Button, Span, Flex, Link } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxLoginButton = ({ box, variant, to, styled, children, ...props }) => {
  return (
    !box.spaces
    ? <Span {...styledNoData}>No Spaces Available</Span>
    : <>
        {
          Object.keys(box.spaces).map( space =>{
            const isEnabled = box.spaces[space]
            return(
              <Flex card cardHover m={2} between {...styled}>
                <Link to={`${to}/${space}`}>
                  <Span>{space}</Span>
                </Link>
                <BoxOpenButton openSpace={box.openSpace} isEnabled={isEnabled} space={space} />
              </Flex>
            )
          })
        }
      </>
  )
}

const BoxOpenButton = ({ box, openSpace, isEnabled, space, styled, ...props}) => {
  const [ isLoading, setLoading ] = useState(false)

  return (
    <Box>
    {
      isEnabled
      ? <Button><Span>Active</Span></Button>
      : <Button xs onClick={()=>{openSpace(space) ; setLoading(true) }} variant='green'>
          {
            isLoading
            ? 'Loading...'
            : 'Open'
          }
        </Button>
    }
    </Box> 
  )
}


export default props =>
<BoxWrapper>
  <BoxLoginButton {...props} />
</BoxWrapper>