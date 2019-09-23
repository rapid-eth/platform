/* --- Global Dependencies --- */
import React from 'react'
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Absolute, Box, Image } from '@horizin/design-system/dist'

/* --- Styled --- */
const Wrapper = styled(Box)`
  position: relative;

  img {
    max-width: 100% !important;
    width: 100% !important;
  }
  z-index: 10;
`

/* ------ Component ------ */
export default props =>
<Wrapper {...props} >
  <Absolute top left right mt={'3%'} ml='24%' mr='24%'  zIndex={25} >
    <Image src='https://imgur.com/DQfwV0h.png' width={'100%'}/>
  </Absolute>
  <Image src={'https://imgur.com/JUw4GJI.png'} />
  <Absolute top bottom left right borderRadius={22} gradient='blue' mb={['7.15%']} ml={['5.15%']} mr={['4%']} mt={['5.125%']} overflow='hidden' zIndex={[20]}>
    {props.children}
  </Absolute>
</Wrapper>