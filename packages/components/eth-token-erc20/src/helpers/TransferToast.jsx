/* --- Global --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

/* --- Local --- */
import Transfer from '../forms/Transfer'
import { Toast, Box } from '@horizin/design-system';

/**
 * @function ERC20TokenTransferToast
 * @param {Object} props props
 * @returns {Object} Form Component 
 */
const TransferToast = props => {

  /* --- Component --- */
  return (
    <Toast content={<Container {...props} />}>
      {props.children}
    </Toast>
  )
}

const Container = ({ styled, ...props}) => { 
 return(
  <Box {...styled}>
    <Transfer {...props} />
  </Box>
)
}


TransferToast.defaultProps = {

}

TransferToast.propTypes = {
  children: PropTypes.object.isRequired,
}

export default TransferToast