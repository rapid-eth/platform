/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'
import {
  Box, HorizontalRule, Heading, Image, Span, Flex,
} from '@horizin/design-system';

import ThreadAPI from './threadAPI'
import NetworkThreads from './NetworkThreads'

import { ProjectCreate } from '@kames/dao-system'

// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

/**
 * @function Tabs
 * @param {Object} props
 * @description Tabs Page
 * @return {Object} React Component
 */
const Tabs = props => {

  return (
  <>
    <TabList tabGroup='account' tabIdSelected='network'>
      <Tab tabId='network'>
        <Flex alignCenter center>
          <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1679/1679754.svg' /></Span>
          <Span ml={3}>Network</Span>
        </Flex>
      </Tab>
      <Tab tabId='projects'>
        <Flex alignCenter center>
          <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1679/1679169.svg' /></Span>
          <Span ml={3}>Projects</Span>
        </Flex>
      </Tab>
      <Tab tabId='questing'>
        <Flex alignCenter center>
          <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1673/1673599.svg' /></Span>
          <Span ml={3}>Questing</Span>
        </Flex>
      </Tab>
    </TabList>

    {/* Tabs */}
    <Box p={3}>
      <TabPanel tabGroup='account' tabId='network'>
        <Box p={3}>
          <NetworkThreads address={props.address} />
        </Box>
      </TabPanel>
      <TabPanel tabGroup='account' tabId='projects'>
        <Heading>Projects</Heading>
        <ProjectCreate />
      </TabPanel>
      <TabPanel tabGroup='account' tabId='questing'>
        <Heading>Questing</Heading>
      </TabPanel>
    </Box>
  </>
)}

Tabs.propTypes = {
  address: PropTypes.string.isRequired,
}

Tabs.defaultProps = {

}

export default Tabs