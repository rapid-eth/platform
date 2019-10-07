/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import {
  Access
} from '@kames/3box-components/dist'
import {
  Flex, Heading, Box,
} from '@horizin/design-system';

import { PollCreate } from '@kames/dao-system'

// CMS Global Configs
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const ProjectCreateModal = ({ styled, ...props}) => { 
 return(
  <Flex card center column flex={1} p={4} borderRadius={50}>
    <Heading lg heavy>Create Poll</Heading>
    <Heading md thin>Get feedback from followers.</Heading>
    <PollCreate space={SPACE} key='projects' alias='projects' styled={{flex: 1}} />
  </Flex>
)}


export default ProjectCreateModal