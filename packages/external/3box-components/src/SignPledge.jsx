import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import { Button } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

const SignMessageTyped = ({
  ethers, dispatchSignRequest,
  delta, label, message, typed,
  styled, ...props
}) => {
  const [ dispatch, setDispatchStatus ] = useState(dispatchSignRequest)


  console.log(ethers.signatures[delta], 'pledge')
  useEffect( () => {
    console.log(ethers.signatures[delta], 'posting now')
    if(ethers.signatures[delta]) {
      const url = 'https://brn68gkbcf.execute-api.us-east-1.amazonaws.com/cors/dev-pledge'
      window.fetch(url, {
        method: 'POST',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "address": window.ethereum.selectedAddress,
          "payload": ethers.signatures[delta]
        })
      })
      .then(res => {
        if(res.json)
          res.json()
          .then (msg => {
            console.log(msg)
          })
      })
      .catch( err => {
        console.log(err)
      })
    }
  }, [ ethers.signatures[delta] ])

  /**
   * @function Dispatch Sign Messages
   * @description Send message signing request to current Web3 provider.
   */
  useEffect( () => {
    if(dispatch && message) {
      if(typed) {
        ethers.signMessageTyped({
          delta,
          message
        }) 
      } else {
        ethers.signMessage({
          delta,
          message
        }) 
      }

      setDispatchStatus(false)
    }
  }, [ ethers, dispatch, message, typed, delta ])

  return (
    <Button 
      {...styled}
      {...props}
      onClick={() => (setDispatchStatus)(true)}
    >
      {label}
    </Button>
  )
}

SignMessageTyped.propTypes = {
  delta: PropTypes.string,
  dispatchSignRequest: PropTypes.bool,
  ethers: PropTypes.object.isRequired,
  label: PropTypes.string,
  message: PropTypes.object.isRequired,
  styled: PropTypes.object,
  typed: PropTypes.bool,
}

SignMessageTyped.defaultProps = {
  delta: undefined,
  dispatchSignRequest: undefined,
  label: 'Sign Developer Pledge',
  typed: true,
  message: [
    {
      type: 'string',
      name: 'pledge',
      value: 'I pledge to help grow the Ethereum ecosystem.'
    },
  ],
  styled: {
    width: '100%'
  },
}

export default props =>
<EthersWrapper>
  <SignMessageTyped {...props} />
</EthersWrapper>