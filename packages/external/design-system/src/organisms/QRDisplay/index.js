import React from 'react'
import { QRCode } from "react-qr-svg";
import { Box } from '../../index'
const QRDisplay = ({ value, dimensions, styled, styledContainer, children, ...props}) => {
  return (
    <Box {...styledContainer} {...props} width={dimensions} height={dimensions} >
      <QRCode
        bgColor="transparent"
        fgColor="#FFF"
        level="Q"
        style={{ width: '100%' }}
        value={value}
        {...styled}
      />
    </Box>
  )
}

QRDisplay.defaultProps = {
  value: 'ethereum:0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE'
}

export default QRDisplay