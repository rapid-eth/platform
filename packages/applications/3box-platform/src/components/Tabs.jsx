import React from 'react';
import { Box, Card, Flex, Heading, Image } from '@horizin/design-system';
import { Tab, TabList, TabPanel, TabPanelWrapper, TabsDesignSystem } from '@horizin/react-context-tabs'
import {
  GuildCreate, ProfileCreate,
  QuestList, QuestCreate
} from '@kames/dao-system/dist'

export default ({ id, styled, ...props }) =>
  <>
    <Flex column flex={2} px={20} width={1}>
      <TabList direction='row' id={id} tabIdSelected='first' template={props.variant} styled={{ flexDirection: 'row' }}>

        <Tab tabId='first' colorBackgroundSelected='#f6f6f6'>
          <Flex center column>
            <Box circle bg='white' p={20} boxShadow='shadowBlue' maxWidth={100} mt={-40}>
              <Image circle src='https://hackernoon.com/hn-images/1*9fsk1eZQlLrQ-st1nRX1AA.gif' />
            </Box>
            <Heading noMargin md>Guilds</Heading>
          </Flex>
        </Tab>
        <Tab id={id} tabId='second' colorBackgroundSelected='#f6f6f6'>
          <Flex center column>
            <Box circle bg='white' p={20} boxShadow='shadowBlue' maxWidth={100} mt={-40}>
              <Image circle src='https://hackernoon.com/hn-images/1*9fsk1eZQlLrQ-st1nRX1AA.gif' />
            </Box>
            <Heading noMargin md>Quests</Heading>
          </Flex>
        </Tab>
        <Tab id={id} tabId='third' colorBackgroundSelected='#f6f6f6'>
          <Flex center column>
            <Box circle bg='white' p={20} boxShadow='shadowBlue' maxWidth={100} mt={-40}>
              <Image circle src='https://hackernoon.com/hn-images/1*9fsk1eZQlLrQ-st1nRX1AA.gif' />
            </Box>
            <Heading noMargin md>Rewards</Heading>
          </Flex>
        </Tab>
      </TabList>
    </Flex>

    <Box flex={5} bg='#f6f6f6'>
      <TabPanel id={id} tabId='first' styled={{ bg: '#f6f6f6' }}>
        <Flex gutter3 mt={30}>
          <QuestList
            threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
            space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
        </Flex>
      </TabPanel>

      <TabPanel tabId='second' id={id} >
        <Flex gutter3 mt={30}>
          <QuestList
            threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
            space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
        </Flex>
      </TabPanel>

      <TabPanel tabId='third' id={id}>
        <Flex gutter3 mt={30}>
          <QuestList
            threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
            space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
        </Flex>
      </TabPanel>
    </Box>
  </>