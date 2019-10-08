/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'
import {
  Box, HorizontalRule, Heading, Image, Span, Flex,
} from '@horizin/design-system';

import {
  Messaging, Reference, ReferenceProfile
} from '@kames/3box-components/dist'
import {
  QuestCatalogItem, UserItemSmall
} from '@kames/dao-system'

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
    <TabList tabGroup='account' tabIdSelected='questing'>
      <Tab tabId='questing'>
        <Flex alignCenter center>
          <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1673/1673599.svg' /></Span>
          <Span ml={3}>Questing</Span>
        </Flex>
      </Tab>
      <Tab tabId='network'>
        <Flex alignCenter center>
          <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1679/1679754.svg' /></Span>
          <Span ml={3}>Network</Span>
        </Flex>
      </Tab>
    </TabList>

    {/* Tabs */}
    <Box p={3}>
      <TabPanel tabGroup='account' tabId='network'>
        <Box p={3}>
          <Heading>Followers <Span xxs tag='white'>ETH Space</Span></Heading>
          <HorizontalRule my={3} />
            <Messaging
              space={SPACE}
              threadName={props.address.toLowerCase()}
              firstModerator={props.address}
              component={ReferenceProfile}
              members={false}
              styled={{my: 3, p: 2}}
              pass={{
                space: SPACE, threadName: 'users', access: 'public', index:'users',
                component: UserItemSmall
              }}
            />
          {/* <NetworkThreads address={props.address} /> */}
        </Box>
      </TabPanel>

      {/* Quest Catalog */}
      <TabPanel tabGroup='account' tabId='questing'>
        <Box p={3}>
          <Heading>Quest Journal <Span xxs tag='white'>Public</Span></Heading>
          <HorizontalRule my={3} />
          <Messaging
            space={SPACE}
            threadName='quest_catalog'
            firstModerator={props.address}
            component={Reference}
            styled={{my: 3}}
            pass={{
              space:SPACE, threadName: 'quest_catalog', access:'public', index:'quest',
              component: QuestCatalogItem,
              pass: {
                space: SPACE, threadName: 'quest_catalog',
                optionsThread: {
                  members: true,
                  firstModerator: props.address
                },
                styled: {
                  m: 2,
                  p: 2
                }
              }
            }}
          />
        </Box>
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