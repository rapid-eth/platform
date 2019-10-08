/* --- Global --- */
import React from 'react';
import PropTypes from 'prop-types'
import {
  Box, Flex, Menu, Image, Button, Router, HorizontalRule, Heading, Paragraph, Span
} from '@horizin/design-system';
import { Messaging } from '@kames/3box-components/dist'
import {
  DetailsERC20, InitializeERC20, TotalSupply,
  TransferToast, ApproveToast, BalanceOfToast
} from '@rapid/eth-token-erc20'

import {
  CommentPublish, CommentItem
} from '@kames/dao-system'
/* --- Local --- */
import MenuItems from '../../static/menus/contracts'
import Activity from './activity'
import Deploy from './deploy'

/* --- CMS Global Configs --- */
const TOKEN = process.env.REACT_APP_DEFAULT_TOKEN
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const Component = props => { 
 return(
  <Flex minHeight='60vh'>
  <InitializeERC20 address={TOKEN} />
  <Flex column gradient='gray' boxShadow={4} flex={2} zIndex={100}>
    <Box p={30}>
      <Menu vertical items={MenuItems} />
    </Box>
  </Flex>
  <Flex column flex={8}>
    <Header />
    <Router primary={false}>
      <Activity path='/' />
      <Deploy path='/deploy' />
      <Manage path='/manage' />
    </Router>
  </Flex>
</Flex>
)}


Component.defaultProps = {

}

Component.propTypes = {
  space: PropTypes.string.isRequired,
}


const QuestInformation = props => { 
 return(
  <Flex column flex={1} p={4}>
    <Heading xl><Span heavy >Community Quests</Span> Coming Soon</Heading>
    <Paragraph>
      What questing features would be cool? <em>Creating teams?</em> <strong>More emblems?</strong>
    </Paragraph>
    <HorizontalRule />
    <CommentPublish
        space={SPACE}
        threadName='featurequest'
        optionsThread={{
          members: false,
          firstModerator: ROOT
        }}
      />
    <Messaging
      space={SPACE}
      threadName='featurequest'
      firstModerator={ROOT}
      members={false}
      component={CommentItem}
      pass={{
        threadName: 'featurequest',
      }}
    />
  </Flex>
)}

const Manage = props => { 
 return(
  <Flex column flex={1} p={4}>
    <Heading xl><Span heavy >Peer-to-Peer Exchange</Span> Coming Soon</Heading>
    <Paragraph>
      What features are important to you? How can we organize decentralized communities? Share your thoughts and ideas.
    </Paragraph>
    <HorizontalRule />
    <CommentPublish
        space={SPACE}
        threadName='featurecommunity'
        optionsThread={{
          members: false,
          firstModerator: ROOT
        }}
      />
    <Messaging
      space={SPACE}
      threadName='featurecommunity'
      firstModerator={ROOT}
      members={false}
      component={CommentItem}
      pass={{
        threadName: 'communityupdates',
      }}
    />
  </Flex>
)}


const Header = props => { 
 return(
  <Box bg='dark' color='white' p={3} p={3} width='100%'>
    <Flex alignCenter between>
      <Flex alignCenter>
        <Image card circle p={2} maxWidth={52} mr={3} src='https://image.flaticon.com/icons/svg/2165/2165602.svg' />
        <Flex column>
          <DetailsERC20
              address={TOKEN}
              styled={{fontSize: 2}}
              variant='name'/>
          <DetailsERC20
              address={TOKEN}
              styled={{
                fontSize: 5
              }}
              variant='symbol'/>
        </Flex>

      </Flex>
        <Box textCenter flex={1}>
        <TransferToast address={TOKEN} >
          <Button xs mx={2}>Transfer</Button>
        </TransferToast>
        <ApproveToast address={TOKEN}>
          <Button xs mx={2}>Approve</Button>
        </ApproveToast>
        <BalanceOfToast address={TOKEN}>
          <Button xs mx={2}>Balance Lookup</Button>
        </BalanceOfToast>
      </Box>
      <Flex>
        <TotalSupply address={TOKEN}/>
      </Flex>
    </Flex>
  </Box>
)}

export default Component