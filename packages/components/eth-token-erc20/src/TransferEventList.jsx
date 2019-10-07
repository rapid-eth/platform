/* --- Global --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Heading, Box } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'
import { Component } from '@kames/3box-components/dist'

/* --- Local --- */
import { decodeLogs } from './utils'
import TransferEventItem from './TransferEventItem'

/* ========== Component ========== */
/**
 * @function ERC20TotalSupply
 * @param {Object} props props
 * @returns {Object} Form Component 
 */

const ERC20TotalSupply = ({ ethers, styled, ...props }) => {
  const [ list, setEventList ] = useState()

  /**
   * @function effectHandlerWithContract
   * @description Read from initialized contract.
   * @todo Remove async in effect. Handle in data store.
   */
  const effectHandlerWithContract = async () => {
    try {
      if(ethers.contracts[props.address]) {
        let events
        events = await ethers.contracts[props.address].filters.Transfer(null, null) // Read Public Function
        
        // Filter Config
        const filter = {
          address: props.address,
          fromBlock: 0,
          toBlock: "latest",
          topics: events.topics
        };

        const logs = await ethers.provider[props.network].getLogs(filter);
        const data = logs.map( event => decodeLogs(event, ethers.contracts[props.address].interface.events.Transfer))
        setEventList(data)
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
  return (
    <Component
      selection={list}
      component={TransferEventItem}
      pass={{
        styled: {
          card: true,
          my: 3
        }
      }} />
  )
}

ERC20TotalSupply.defaultProps = {
  label: 'Total Supply',
  network: 'rinkeby',
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
  network: PropTypes.string,
  label: PropTypes.string,
}


export default props =><EthersWrapper><ERC20TotalSupply {...props}/></EthersWrapper>