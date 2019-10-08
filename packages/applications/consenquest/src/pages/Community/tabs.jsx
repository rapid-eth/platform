/* --- Global Dependencies --- */
import React from 'react';
import {
  Box, Flex, HorizontalRule, Paragraph, Heading, Span
} from '@horizin/design-system';
import { Messaging } from '@kames/3box-components/dist'
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'
import {
  TransferEventList,
} from '@rapid/eth-token-erc20'
import {
  ItemPublish, ItemView,
  CommentPublish, CommentItem
} from '@kames/dao-system'

/* --- Local Dependencies --- */
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const TOKEN = process.env.REACT_APP_DEFAULT_TOKEN

/**
 * @function CommunityTabs
 * @description CommunityTabs Page
 * @return {Object} React Component
 */
const CommunityTabs = () =>
<>
  <Box bg='gray' boxShadow={1} p={3} p={3} width='100%' zIndex={100}>
    <Flex alignCenter between width='100%'>
      <Box width='100%'>
        <TabList tabGroup='community' tabIdSelected='latest'>
          <Tab tabId='latest'>Town Square</Tab>
          <Tab tabId='proposals'>Latest Proposals</Tab>
          <Tab tabId='create'>New Projects</Tab>
        </TabList>
      </Box>
    </Flex>
    
  </Box>
  <Box>

    {/* Town Square Panel */}
    <TabPanel tabGroup='community'  tabId='latest'>
      <Box>
        <Flex flex={1}>
          <Flex flex={7} p={4} width='85%'>
            <Flex column flex={1}>
              <Messaging
                space={SPACE}
                threadName='communityupdates'
                firstModerator={ROOT}
                members={false}
                component={CommentItem}
                pass={{
                  threadName: 'communityupdates',
                }}
              />
            </Flex>
          </Flex>
          <Flex gradient='gray' flex={3} width={'15%'} p={4}>
            <TownSquareInformation />
          </Flex>
        </Flex>
      </Box>
    </TabPanel>


    <TabPanel tabGroup='community'  tabId='transfers'>
      <Box>
        <TransferEventList address={TOKEN} />
      </Box>
    </TabPanel>

    {/* Proposals */}
    <TabPanel tabGroup='community'  tabId='proposals'>
      <Box>
        <Flex flex={1}>
          <Flex flex={7} p={4} width='85%'>
            <Flex column baselineChildren flex={1}>
              <Box width='100%'>
                <Messaging
                  space={SPACE}
                  threadName='communityproposallist'
                  firstModerator={ROOT}
                  members={false}
                  component={ItemView}
                  pass={{
                    threadName: 'communityproposallist',
                  }}
                />
              </Box>
            </Flex>
          </Flex>
          <Flex gradient='gray' flex={3} width={'15%'} p={4}>
            <ProposalInformation />
          </Flex>
        </Flex>
      </Box>
    </TabPanel>

    {/* Create Quest */}
    <TabPanel tabGroup='community'  tabId='create'>
      <Box>
        <Flex flex={1}>
          <Flex flex={7} p={4} width='85%'>
            <Flex column flex={1}>
              <Messaging
                space={SPACE}
                threadName='communityquestlist'
                firstModerator={ROOT}
                members={false}
                component={CommentItem}
                pass={{
                  threadName: 'communityquestlist',
                }}
              />
            </Flex>
          </Flex>
          <Flex gradient='gray' flex={3} width={'15%'} p={4}>
            <QuestInformation />
          </Flex>
        </Flex>
      </Box>
    </TabPanel>



  </Box>
</>


const TownSquareInformation = props => { 
 return(
  <Box>
    <Heading>Broadcast Message <Span xxs tag='white'>Share Status Update</Span></Heading>
    <HorizontalRule my={3} />
    <Paragraph xs>
      Share a developer status update with the community.
    </Paragraph>
    <CommentPublish
        space={SPACE}
        threadName='communityupdates'
        optionsThread={{
          members: false,
          firstModerator: ROOT
        }}
      />
    <Paragraph xs>
      The current <strong>Town Square</strong> is open to the public. However, in the <strong>coming weeks public acess will be disabled.</strong> A verifiable credential will be required to enable application features.
    </Paragraph>
    <Paragraph xxs>
      Future application features will only be enabled for verified decentralized identities and token holders.
    </Paragraph>
  </Box>
)}

const ProposalInformation = props => { 
  return(
   <Box>
     <Heading>Create Proposal <Span xxs tag='white'>Influence Decisions</Span></Heading>
     <HorizontalRule my={3} />
     <Paragraph xs>
       Propose an idea to the community
     </Paragraph>
      <ItemPublish
         space={SPACE}
         threadName='communityproposallist'
         optionsThread={{
           members: false,
           firstModerator: ROOT
         }}
       />
     <Paragraph xs>
       The current <strong>Town Square</strong> is open to the public. However, in the <strong>coming weeks public acess will be disabled.</strong> A verifiable credential will be required to enable application features.
     </Paragraph>
     <Paragraph xxs>
       Future application features will only be enabled for verified decentralized identities and token holders.
     </Paragraph>
   </Box>
 )}

 const QuestInformation = props => { 
  return(
   <Box>
     <Heading>Broadcast Message <Span xxs tag='white'>Share Status Update</Span></Heading>
     <HorizontalRule my={3} />
     <Paragraph xs>
       Share a developer status update with the community.
     </Paragraph>
     <ItemPublish
         space={SPACE}
         threadName='communityquestlist'
         optionsThread={{
           members: false,
           firstModerator: ROOT
         }}
       />
     <Paragraph xs>
       The current <strong>Town Square</strong> is open to the public. However, in the <strong>coming weeks public acess will be disabled.</strong> A verifiable credential will be required to enable application features.
     </Paragraph>
     <Paragraph xxs>
       Future application features will only be enabled for verified decentralized identities and token holders.
     </Paragraph>
   </Box>
 )}


export default CommunityTabs