/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'

/* --- Local Dependencies --- */
import ThreadAPI from './threadAPI'
const APPRENTICES = process.env.REACT_APP_FLAG_APPRENTICES
const NetworkThreads = props => { 
 return(
  <>


    <ThreadAPI
      label='Followers'
      summary='Public followers'
      threadName={`${props.address.toLowerCase()}`}
      address={props.address}
      />
      {/* {
        APPRENTICES &&
        <ThreadAPI
        label='Apprentices'
        summary='Registered via Connection Link'
        threadName={`${props.address.toLowerCase()}_apprentices`}
        address={props.address}
        />
      } */}
  </>
)}

NetworkThreads.propTypes = {
  address: PropTypes.string.isRequired,
}

NetworkThreads.defaultProps = {

}

export default NetworkThreads