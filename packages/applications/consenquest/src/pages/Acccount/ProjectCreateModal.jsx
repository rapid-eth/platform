/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import {
  Messaging, Reference, Access, Storage
} from '@kames/3box-components/dist'
import {
  Flex, Heading,
} from '@horizin/design-system';
import { ProjectCreate } from '@kames/dao-system'

// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const ProjectCreateModal = ({ styled, ...props}) => { 
 return(
  <Flex gradient='white' p={4} height='100%' width='100%'>
    <Flex gradient='gray' flex={3} p={3}>
      <Heading>Create Project</Heading>
    </Flex>
    <Flex flex={7} px={3}>
      <Access
        spaceAuto loginAuto
        level='space'
        space={SPACE}
      >
        <ProjectCreate space={SPACE} key='projects' alias='projects' styled={{flex: 1}} />
    </Access>
    </Flex>
  </Flex>
)}


export default ProjectCreateModal