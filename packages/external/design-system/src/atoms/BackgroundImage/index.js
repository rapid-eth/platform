/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'
import Box from '../Box'

const BackgroundImage = styled(Box)`${props =>`
  background-image: ${props.src ? `url(${props.src})` : null};
  padding-bottom: ${((props.ratio || 3/4) * 100) + '%'};
  height: 100%;
  width: 100%;
`}`

BackgroundImage.defaultProps = {
  backgroundPosition: 'center',
  backgroundSize: 'cover'
}

/* ------ Component ------ */
export default ({ src, ratio, styledContainer, styled, ...props}) =>
<Box absolute fill overflow='hidden' {...styledContainer}>  
  <BackgroundImage src={src} ratio={ratio} {...styled} {...props}/>
</Box>