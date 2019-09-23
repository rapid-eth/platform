import React from 'react';
import { Box, Flex, Heading } from '@horizin/design-system';

import {
  BoxLoginButton, BoxProfile, BoxLoginProfile, BoxSpaceList,
  BoxThreadManage, BoxThreadManageDetails, BoxThreadManagePeople,
  BoxSpaceManage, BoxThreadList, BoxQuestPostCreate, BoxThreadCreate
} from '@kames/3box-components/dist'

import { BoxWrapper } from '@kames/3box-hooks/dist'

const DashboardCredentials = ({ styled, ...props }) =>
  <>
    <Box p={30} flex={10}>
      <Flex column>

        <BoxSpaceList to='/dashboard/space' />

      </Flex>
    </Box>

    <Flex card column minHeight='100%' flex={3} maxWidth='30%'>
      <BoxLoginButton />
      <BoxWrapper>
        <BoxSpaceManage space='meshhub' />
      </BoxWrapper>
      <BoxThreadCreate
        space='meshhub'
      />
    </Flex>
  </>

export default DashboardCredentials