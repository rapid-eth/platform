/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'

/* --- Local Dependencies --- */
import ThreadAPI from './threadAPI'

const NetworkThreads = props => { 
 return(
  <>
    <ThreadAPI
      label='Followers'
      summary='Public followers'
      threadName={`${props.address}`}
    />
  </>
)}

NetworkThreads.propTypes = {
  address: PropTypes.string.isRequired,
}

NetworkThreads.defaultProps = {

}

export default NetworkThreads