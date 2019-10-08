/* --- Global --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { EthersWrapper } from '@rapid/ethers-react'

/* --- Local --- */
import Contract from '../../contracts/prd/QuestDevCoin'

/**
 * @function ERC20TokenInitialize
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const Initialize = ({ ethers, ...props}) => {
  const [ isInitialized, setInitialized ] = useState()

  useEffect( () => {
    if( !isInitialized && props.address && (props.abi || props.contract)) {
      console.log(ethers, props, 'init conttract')
      ethers.initContract({
        address: props.address,
        abi: Contract.abi,
        contractType: props.contractType,
      })
    }

    setInitialized(true)
  }, [ props.address, props.abi, props.contract, props.contractType, ethers ])

  /* --- Component --- */
  return null
}

Initialize.defaultProps = {
  address: undefined,
  abi: Contract.abi,
  contractType: 'token',
}

Initialize.propTypes = {
  address: PropTypes.string.isRequired,
  abi: PropTypes.object,
  contract: PropTypes.object,
}

export default props =><EthersWrapper><Initialize {...props}/></EthersWrapper>