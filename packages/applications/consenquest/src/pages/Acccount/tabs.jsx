/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'
import {
  Box, HorizontalRule, Heading, Image, Span, Flex, Modal, Button,
} from '@horizin/design-system';
import {
  Messaging, Reference, Access, Storage
} from '@kames/3box-components/dist'
import {
  QuestCatalogItem, ItemSmall
} from '@kames/dao-system'

import ThreadAPI from './threadAPI'
import NetworkThreads from './NetworkThreads'
import ProjectCreateModal from './ProjectCreateModal'
import PollCreateModal from './PollCreateModal'
// import StatusPublishModal from './StatusPublishModal'



// CMS Global Configs
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

/**
 * @function Tabs
 * @param {Object} props
 * @description Tabs Page
 * @return {Object} React Component
 */
const Tabs = props => {
  console.log(props, 'tabs props')
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
          <NetworkThreads address={props.address} />
        </Box>
      </TabPanel>

      <TabPanel tabGroup='account' tabId='projects'>
        <Flex alignCenter between gradient='gray' p={3} width='100%'>
          <Heading md heavy>Projects</Heading>
          <Modal content={<ProjectCreateModal />}
            variant='default'
            variantInner='fullScreen'
            styled={{
              m: 80
            }}
              >
          <Button variant='green' >Add Project</Button>
        </Modal>
        
        </Flex>
        <Storage
          spreadObject
          space={SPACE}
          address={props.address}
          selector='eth.public.projects'
          component={ItemSmall}
          styled={{m:3}}
          pass={{
            toPrepend: `account/project/`,
          }}
        />
      </TabPanel>



      <TabPanel tabGroup='account' tabId='questing'>
        {/* <Heading>Questing</Heading> */}
        <Messaging
          space={SPACE}
          threadName='quest_catalog'
          component={Reference}
          pass={{
            space:SPACE, access:'public', index:'quest',
            component: QuestCatalogItem,
            m: 3,
            p: 4
          }}
        />
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