/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'
import Box from '../Box'

const BackgroundImage = styled.div`${props =>`
  background-image: ${props.src ? `url(${props.src})` : null};
  background-size: cover;
  background-position: ${props.position ? props.position : 'center'};
  padding-bottom: ${((props.ratio || 3/4) * 100) + '%'};
  height: 100%;
  width: 100%;
`}`

/* ------ Component ------ */
export default ({ src, ratio, ...props}) =>
<Box absolute fill overflow='hidden' {...props}>  
  <BackgroundImage src={src} ratio={ratio} />
</Box>