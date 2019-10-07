/* --- Global --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { utils } from 'ethers'
import { Span } from '@horizin/design-system'

/* ========== Component ========== */
/**
 * @function BalanceFormatted
 * @param {Object} props props
 * @returns {Object} Form Component 
 */

const BalanceFormatted = ({...props }) => {
  const [ balanceFormatted, setBalance ] = useState()

  useEffect( () => { 
    if(props.balance) {
      let formatted
      formatted = utils.commify( // Human Readable
        utils.formatEther( // Handle Decimals
          props.balance // Read Public Function
          ))
      if(formatted) setBalance(formatted)
    }
  }, props.balance)

  /* --- Component --- */
return (
  <>
    <Span {...props.styled}>{balanceFormatted}</Span>
  </>
)}

BalanceFormatted.defaultProps = {
  styled: {
    as: 'h2',
    fontWeight: 300,
    fontSize: 4,
  },
}

BalanceFormatted.propTypes = {
  balance: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  styled: PropTypes.object,
}

export default BalanceFormatted