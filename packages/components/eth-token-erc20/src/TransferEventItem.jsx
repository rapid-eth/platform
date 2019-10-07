/* --- Global --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Heading, Span, Box, Flex } from '@horizin/design-system'
import { BoxProfileRetrieve } from '@kames/3box-components/dist'

import BalanceFormatted from './BalanceFormatted'
/* ========== Component ========== */
const TransferEventItem = ({ ...props}) => { 
 return(
  <Flex alignCenter {...props.styled}>
    <Box flex={1}>
      <BoxProfileRetrieve address={props.decoded.from}/>
    </Box>
    <Box flex={1}>
      <BoxProfileRetrieve address={props.decoded.to}/>
    </Box>
    <Box flex={1}>
      <strong>Amount:</strong> <BalanceFormatted balance={props.decoded.value} />
    </Box>
  </Flex>
)}

TransferEventItem.defaultProps = {
  styled: {
    as: 'h5',
    fontSize: 2
  },
  styledLabel: {
    fontWeight: 700
  },
}

TransferEventItem.propTypes = {
  decoded: PropTypes.object.isRequired,
  styled: PropTypes.object,
  styledLabel: PropTypes.object,
}

export default TransferEventItem