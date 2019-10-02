import React from 'react';
import { Tabs, Tab, TabList, TabPanel, TabPanelWrapper } from '@horizin/react-hooks-tabs'
import { Flex } from '@horizin/design-system';

export default () => (
  <Tabs>
    <TabList tabGroup='account' tabIdSelected='panel2'>
      <Tab tabId='profile' >Profile</Tab>
      <Tab tabId='credentials' >Credentials</Tab>
      <Tab tabId='projects' >Updates</Tab>
    </TabList>
    
    <TabPanelWrapper tabGroup='account' p={20}>
      <TabPanel tabGroup='account' tabId='profile'>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel tabGroup='test' tabId='credentials'>
        <h2>Any content 2</h2>
      </TabPanel>
    </TabPanelWrapper>  
  </Tabs>
);