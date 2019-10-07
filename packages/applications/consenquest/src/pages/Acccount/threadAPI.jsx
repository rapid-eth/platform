/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import {
  HorizontalRule, Heading, Flex, Span,
} from '@horizin/design-system';

import {
  Messaging, ReferenceProfile
} from '@kames/3box-components/dist'

import {
  UserItemSmall
} from '@kames/dao-system'


// CMS Global Configs
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const UserThreadAPI = ({ styled, ...props}) => { 
 return(
  <>
    <Flex alignCenter between>
      <Heading lg heavy>{props.label}</Heading>
      {props.summary && <Span xxs tag='white'>{props.summary}</Span> }
    </Flex>
    <HorizontalRule my={3}/>
    <Messaging
      threadName={props.threadName}
      firstModerator={props.address}
      component={ReferenceProfile}
      space={'eth'}
      members={false}
      styled={{my: 3, p: 2}}
      pass={{
        space: SPACE, threadName: 'users', access: 'public', index:'users',
        component: props.component,
      }}
    />
  </>
)}

UserThreadAPI.propTypes = {
  address: PropTypes.string.isRequired,
  label: PropTypes.string,
  summary: PropTypes.string,
  threadName: PropTypes.string.isRequired,
  component: PropTypes.string,
}

UserThreadAPI.defaultProps = {
  component: UserItemSmall,
  label: 'Thread',
  summary: undefined
}

export default UserThreadAPI