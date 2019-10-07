import React from 'react';
import { PropTypes } from 'prop-types'
import {
  HorizontalRule,
  Button, Box, Flex, Heading, Image, Span,  Link, Panel, Modal
} from '@horizin/design-system';
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'

import {
  BoxGetSpace, Messaging, ReferenceProfile
} from '@kames/3box-components/dist'


import {
  QuestFeatured, QuestFeaturedList, QuestFeaturedListUpdate,
} from '@kames/dao-system'

import {
  UserItemCard, UserAddToThread
} from '@kames/dao-system'


import ListItem from './ListItem'

// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

/**
 * @function CMSCuration
 * @param {Object} props props
 * @return {Obect} component
 */
const Curation = ({ styled, ...props }) => {
  return (
    <Box width='100%'>
      <BoxGetSpace space={SPACE} access='public' address={ROOT}  />
      <TabList tabGroup='curation' tabIdSelected='users'>
        <Tab tabId='users'>Users</Tab>
        <Tab tabId='adventures'>Adventures</Tab>
        <Tab tabId='quests'>Quests</Tab>
        <Tab tabId='resources'>Resources</Tab>
      </TabList>
      <TabPanel tabGroup='curation' tabId='users'>
        <Flex>
          <Flex gradient='gray' flex={1} p={4}>
            <TabList tabGroup='curation_users' tabIdSelected='active'>
              <Flex column>
                <Span><Tab tabGroup='curation_users' tabId='active'>Active</Tab></Span>
                <Span><Tab tabGroup='curation_users' tabId='adventures'>Featured</Tab></Span>
                <Span><Tab tabGroup='curation_users'tabId='quests'>Verified</Tab></Span>
              </Flex>
            </TabList>
          </Flex>
          <Flex column flex={5}>    
            <TabPanel tabGroup='curation_users' tabId='active'>
              <Flex center column gradient='gray' minHeight={200} width='100%'>
                <UserAddToThread space={SPACE} />
              </Flex>
              <Box p={3}>
                <Flex gutter3>
                  <Messaging
                    threadName='users'
                    component={ReferenceProfile}
                    pass={{
                      space: SPACE, threadName: 'users', access: 'public', index:'users',
                      component: UserItemCard,
                      m: 3,
                      p: 4
                    }}
                  />
                </Flex>
              </Box>
            </TabPanel>
            
          </Flex>
        </Flex>
      </TabPanel>
      <TabPanel tabGroup='curation' tabId='adventures'>
        <Flex column width='100%'>
          <Box m={2} flex={1}>
            <Heading lg heavy>Featured</Heading>
            <HorizontalRule />
            <Flex py={3}>
              <Box flex={7}>
                <QuestFeaturedList root={ROOT} space={SPACE} threadName='featured' members={true} firstModerator={ROOT} />
              </Box>
              <Flex flex={3}>
                <Box px={4} width='100%'>
                  <Heading md normal>Add Quest to List</Heading>
                  <HorizontalRule />
                  <QuestFeaturedListUpdate />
                </Box>
              </Flex>
            </Flex>
          </Box>
          <Box m={2} flex={3}>
            <Heading lg heavy>Popular</Heading>
            <HorizontalRule />
            <QuestFeaturedList space={SPACE} threadName='featureds' root={ROOT} members={true} firstModerator={ROOT} />
          </Box>
        </Flex>
      </TabPanel>
    </Box>
  )
}


Curation.defaultProps = {
  styled: {}
}

Curation.propTypes = {
  styled: PropTypes.object
}

const CreatePanel = ({ styled, ...props}) => { 
 return(
  <Box minWidth={420}>
    <BoxGetSpace space={SPACE} access='public' address={ROOT}  />
    {
      props.name &&
      <Flex alignCenter p={3}>
        <Image src={props.image} maxWidth={28} mr={3} />
        <Box>
          <Link to={`/quest/${props.alias}`}>
            <Heading sm thin noMargin>{props.name}</Heading>
          </Link>
          <Heading xs thin noMargin>{props.tagline}</Heading>
        </Box>
      </Flex>
    }
    <Box>
      <Heading>Quests</Heading>
      <QuestFeatured space={SPACE} threadName='featured' root={ROOT} members={true} firstModerator={ROOT} />
    </Box>
  </Box>
)
}

export default Curation