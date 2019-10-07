/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import {
  Access
} from '@kames/3box-components/dist'
import {
  Flex, Heading, Box,
} from '@horizin/design-system';

import { UserStatusPost } from '@kames/dao-system'

// CMS Global Configs
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const ProjectCreateModal = ({ styled, ...props}) => { 
 return(
  <Flex card center column flex={1} p={4} borderRadius={20}>
    <Heading lg heavy>Status Update</Heading>
    <Heading md thin>#buidl</Heading>
    <UserStatusPost space={SPACE} key='projects' alias='projects' styled={{flex: 1}} />
  </Flex>
)}


export default ProjectCreateModal