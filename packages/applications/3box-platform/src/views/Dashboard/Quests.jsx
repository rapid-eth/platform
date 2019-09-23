import React from 'react';
import { Box, Card, Flex } from '@horizin/design-system';
import { GuildCreate, ProfileCreate, QuestList, QuestCreate } from '@kames/dao-system/dist'

const Quests = ({ id, styled, ...props }) =>
  <>
    <Box p={30} flex={10}>
      <Flex gutter3>
        <QuestList
          threadAddress='/orbitdb/zdpuApMKWj5LturWB6YbkdVSijU2WS3FJGwzbKqMkzjXwQGo5/3box.thread.meshhub.meshhub'
          space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
      </Flex>
    </Box>

    <Flex card column minHeight='100%' flex={3} maxWidth='30%'>
      <QuestCreate
        threadName='3box.thread.meshhub.meshhub'
      />
    </Flex>
  </>

export default Quests