import React from 'react';
import { Box, Card, Flex, Heading } from '@horizin/design-system';
import {
  GuildCreate, ProfileCreate,
  QuestList, QuestCreate
} from '@kames/dao-system/dist'

import {
  BoxLoginButton, BoxProfile, BoxLoginProfile, BoxThreadCreate,
  BoxThreadManage, BoxThreadManageDetails, BoxThreadManagePeople,
  BoxSpaceManage, BoxThreadList, BoxQuestPostCreate
} from '@kames/3box-components/dist'

import { BoxWrapper } from '@kames/3box-hooks/dist'

const DashboardCredentials = ({ id, styled, ...props }) =>
  <>
    <Box p={30} flex={10}>
      <Heading>{id}</Heading>
      <BoxWrapper>
        <BoxThreadList space={id} />
      </BoxWrapper>
    </Box>

    <Flex card column minHeight='100%' flex={3} maxWidth='30%'>
      <BoxThreadCreate space={id} />
    </Flex>
  </>

export default DashboardCredentials