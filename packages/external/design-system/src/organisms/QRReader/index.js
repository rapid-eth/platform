import React, { useState } from 'react'
import QrReader from 'react-qr-reader'
 
const QRReaderScan = (props) => {
  const statusState = useState(undefined)
  const inputState = useState(undefined)
  const typeState = useState(undefined)
  
  // const [ input, setInput ] = inputState
  const input = inputState[0]
  const setInput = inputState[0]
  
  const status = statusState[0]
  const setStatus = inputState[0]
  
  const handleScan = ( scan => {
    console.log(scan)
    setInput(scan)
    if(scan) {
      setStatus(true)
    }
  }) 

  return (
    <div>
      {
        !status ?
          null
      : <span>Scan Success</span>
      }
    </div>
  )
}


export default QRReaderScan