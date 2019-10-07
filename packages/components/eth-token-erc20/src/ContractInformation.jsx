/* --- Global --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Box, Heading  } from '@horizin/design-system'
import { EthersWrapper } from '@rapid/ethers-react'

/* --- Local --- */
import AddressField from './FieldAddress'

/**
 * @function ContractInformation
 * @param {Object} props
 * @returns {Object} React Component 
 */
const ContractInformation = props => {

  /* --- Init Effects --- */

  /* --- Component --- */
  return (
    <>
      <Box {...props.styled}>
        <Heading>Contract Information</Heading>
      </Box>
    </>
  )
}

ContractInformation.defaultProps = {
  address: undefined,
  contractName: undefined,
  styled: {
    bg: 'white',
    minWidth: 200,
    p: 2
  },
  styledButton: {
    variant: 'green',
    width: '100%'
  },
  styledLabel: {
    fontWeight: 700
  }
}

ContractInformation.propTypes = {
  address: PropTypes.string.isRequired,
  contractName: PropTypes.string,
  canInitContract: PropTypes.bool,
  defaults: PropTypes.object,
  label: PropTypes.string,
}

export default props =><EthersWrapper><ContractInformation {...props}/></EthersWrapper>