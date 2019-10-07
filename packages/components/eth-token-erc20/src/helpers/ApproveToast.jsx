/* --- Global --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Toast, Box } from '@horizin/design-system';

/* --- Local --- */
import Approve from '../forms/Approve'

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
    <Approve {...props} />
  </Box>
)
}


TransferToast.defaultProps = {

}

TransferToast.propTypes = {
  children: PropTypes.object.isRequired,
}

export default TransferToast