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
  label: 'Sign Message',
  typed: true,
  styled: {
    width: '100%'
  },
}

export default props =>
<EthersWrapper>
  <SignMessageTyped {...props} />
</EthersWrapper>