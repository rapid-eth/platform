import React from 'react';
import { Box, Card, Flex, Heading } from '@horizin/design-system';
import {
  GuildCreate, ProfileCreate,
  QuestList, QuestCreate
} from '@kames/dao-system/dist'

import {
  BoxLoginButton, BoxProfile, BoxLoginProfile,
  BoxThreadManage, BoxThreadManageDetails, BoxThreadManagePeople,
  BoxSpaceManage, BoxThreadList, BoxQuestPostCreate
} from '@kames/3box-components/dist'

import { BoxWrapper } from '@kames/3box-hooks/dist'

const DashboardCredentials = ({ styled, ...props }) =>
  <>
    <Box p={30} flex={10}>
      <Flex>
        <Flex gutter3>
          <QuestList space='meshhub' threadName='3box.thread.meshhub.meshhub' component={Card} />
        </Flex>
      </Flex>
      <BoxWrapper>
        <BoxThreadList space='meshhub' />
      </BoxWrapper>
    </Box>

    <Flex card column minHeight='100%' flex={3} maxWidth='30%'>
      <BoxQuestPostCreate threadName='3box.thread.meshhub.meshhub' />
      <BoxThreadManageDetails threadName='3box.thread.meshhub.meshhub' />
      <BoxThreadManagePeople threadName='3box.thread.meshhub.meshhub' />
    </Flex>
  </>

export default DashboardCredentials