/* --- Global Dependencies --- */
import React from 'react';
import { Tabs, Tab, TabList, TabPanel, TabPanelWrapper } from '@horizin/react-hooks-tabs'
import { Box, Flex, Heading } from '../../atoms'


const DefaultComp =  ({ title, tagline, styled, ...props }) =>
  <>
    <Heading>{title}</Heading>
    <Heading xs thin>{tagline}</Heading>
  </>
const PanelDefault = ({ styled, ...props }) =>
  <Box>
    <Heading>INSERT DEFAULT PANEL COMPONENT</Heading>
  </Box>

export default ({ id, panels, panelComponent, tabs, tabComponent, styled, ...props }) => {
  tabComponent = tabComponent ? tabComponent : DefaultComp
  panelComponent = panelComponent ? panelComponent : PanelDefault

  return (
    <>
      <Tabs>
        <Flex column flex={2} px={20}>
          <TabList id={id} tabIdSelected='first' template={props.variant}>
            {
              tabs && Array.isArray(tabs) && tabs.length > 0 &&
              tabs.map(tab => <Tab id={id} tabId={tab.tabId} >{React.createElement(tabComponent, { ...tab })}</Tab>)
            }
          </TabList>
        </Flex>

        <Box flex={5}>

          <TabPanelWrapper p={20}>
            {
              panels && Array.isArray(panels) && panels.length > 0 &&
              panels.map((panel) =>
                <TabPanel key={panel.tabId} tabId={panel.tabId} >
                  {
                    panel.component
                  }
                </TabPanel>)
            }
          </TabPanelWrapper>
        </Box>
      </Tabs>
    </>
  )
}