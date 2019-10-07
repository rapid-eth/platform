/* --- Global --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { utils } from 'ethers'
import { Heading, Span } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

/* ========== Component ========== */
/**
 * @function ERC20Details
 * @param {Object} props props
 * @returns {Object} Form Component 
 */

const ERC20Details = ({ ethers, ...props }) => {
  const [ name, setName ] = useState()
  const [ symbol, setSymbol ] = useState()

  /**
   * @function effectHandlerWithContract
   * @description Read from initialized contract.
   * @todo Remove async in effect. Handle in data store.
   */
  const effectHandlerWithContract = async () => {
    try {
      if(ethers.contracts[props.address]) {
        setName(await ethers.contracts[props.address].name()) // Token Name
        setSymbol(await ethers.contracts[props.address].symbol()) // Token Symbol
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
  return ({
    full: (
      <>
        <Heading {...props.styled}>
          <Span {...props.styledLabel}>{props.label}: </Span>
          <Span ml={2}>{name}</Span>
        </Heading>
        <Heading {...props.styledSymbol}>
          <Span {...props.styledSymbolLabel}>{props.labelSymbol}: </Span> 
          <Span ml={2}>{symbol}</Span>
        </Heading>
      </>
    ),
    name: <Span {...props.styled} >{name}</Span>,
    symbol: <Span {...props.styled}>{symbol}</Span>,
  }[props.variant])
}

ERC20Details.defaultProps = {
  view: 'full',
  label: 'Name',
  labelSymbol: 'Symbol',
  styled: {
    as: 'h2',
    fontWeight: 300,
    fontSize: 7,
  },
  styledLabel: {
    fontWeight: 700
  },
  styledSymbol: {
    as: 'h5',
    fontSize: 2,
  },
  styledSymbolLabel: {
    fontWeight: 700
  },
}

ERC20Details.propTypes = {
  address: PropTypes.string.isRequired,
  styled: PropTypes.object,
  styledLabel: PropTypes.object,
  styledSymbol: PropTypes.object,
  styledSymbolLabel: PropTypes.object,
  label: PropTypes.string,
  labelSymbol: PropTypes.string,
}

export default props =><EthersWrapper><ERC20Details {...props}/></EthersWrapper>