/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'

/* --- Local Dependencies --- */
import ThreadAPI from './threadAPI'
import {
  Access
} from '@kames/3box-components/dist'
const NetworkThreads = props => { 
 return(
  <>


    <ThreadAPI
      label='Followers'
      summary='Public followers'
      threadName={`${props.address.toLowerCase()}`}
      address={props.address}
      />
    <ThreadAPI
      label='Apprentices'
      summary='Registered via Connection Link'
      threadName={`${props.address.toLowerCase()}_apprentices`}
      address={props.address}
      />
  </>
)}

NetworkThreads.propTypes = {
  address: PropTypes.string.isRequired,
}

NetworkThreads.defaultProps = {

}

export default NetworkThreads