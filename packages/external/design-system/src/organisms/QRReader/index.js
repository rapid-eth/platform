import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
import { Box } from '../../../dist'

 
const QRReaderScan = ({ onSuccess, props}) => {
  const statusState = useState(undefined)
  const inputState = useState(undefined)
  const typeState = useState(undefined)
  
  // const [ input, setInput ] = inputState
  const input = inputState[0]
  const setInput = inputState[1]
  
  const status = statusState[0]
  const setStatus = statusState[1]
  
  const handleScan = ( scan => {
    console.log(scan)
    setInput(scan)
    if(scan) {
      setStatus(true)
      if(onSuccess) onSuccess(scan)
    }
  }) 

  return (
    <div>
      {
        !status ?
          <Box height={200} width={200}>
            <QrReader
              delay={300}
              // onError={handleError}
              onScan={handleScan}
              style={{ width: '100%' }}
            />
          </Box>
      : <Box card>Scan Success</Box>
      }
    </div>
  )
}


export default QRReaderScan