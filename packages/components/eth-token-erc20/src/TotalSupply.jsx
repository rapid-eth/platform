/* --- Global --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { utils } from 'ethers'
import { Heading, Span } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

/* ========== Component ========== */
/**
 * @function ERC20TotalSupply
 * @param {Object} props props
 * @returns {Object} Form Component 
 */

const ERC20TotalSupply = ({ ethers, styled, ...props }) => {
  const [ totalSupply, setSupply ] = useState(0)

  /**
   * @function effectHandlerWithContract
   * @description Read from initialized contract.
   * @todo Remove async in effect. Handle in data store.
   */
  const effectHandlerWithContract = async () => {
    try {
      if(ethers.contracts[props.address]) {
        let formatted
        formatted = utils.commify( // Human Readable
          utils.formatEther( // Handle Decimals
            await ethers.contracts[props.address].totalSupply() // Read Public Function
          ))
        if(formatted) setSupply(formatted)
      } else {
        return null
      }
    } catch (error) {
      console.log(error) // What errors are we catching?
    }      
  }

  /**
   * @function statusEffect
   * @description Display component state to user.
   * @return {undefined}
   */
  useEffect( () => { 
    if(ethers.contracts[props.address]) {
      effectHandlerWithContract()
    }
  }, [ethers.contracts[props.address]])

  /* --- Init Effects --- */
  // statusEffect()

  /* --- Component --- */
  return (<Heading {...styled}> <Span {...props.styledLabel}>{props.label}</Span>: {totalSupply}</Heading>)
}

ERC20TotalSupply.defaultProps = {
  label: 'Total Supply',
  styled: {
    as: 'h5',
    fontSize: 2
  },
  styledLabel: {
    fontWeight: 700
  },
}

ERC20TotalSupply.propTypes = {
  address: PropTypes.string.isRequired,
  styled: PropTypes.object,
  styledLabel: PropTypes.object,
  label: PropTypes.string,
}

export default props =><EthersWrapper><ERC20TotalSupply {...props}/></EthersWrapper>