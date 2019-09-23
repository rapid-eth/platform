/* --- Global Dependencies --- */
import React from "react";
import styled from 'styled-components'
import Box from '../Box'

/* ------ Component ------ */
const BackgroundGradient = ({ ...props }) => <Box absolute fill overflow='hidden' zIndex={0 } {...props}/>

export default BackgroundGradient
