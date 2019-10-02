import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import {
  BackgroundGradient, BackgroundImage, Flex, Card, Box, Menu,
  Markdown, Modal,
  Heading, Image, Link, HorizontalRule, Button, Container, Panel, Span, Paragraph, Toast
} from '@horizin/design-system';

import {
  BoxAccess, BoxThreadPostList, BoxSpaceOpen, BoxFormProfileBasics,
  BoxLoginCard, BoxLoginButton, BoxVerified } from '@kames/3box-components/dist'

import MenuItems from '../../../static/menus/community'

import TokenDropbox from '../../../contracts/TokenDropbox'
import {
  ERC20TokenATMTransferStateful
} from '../../../components/Tokens'
import {
  ContractInitializeStateful
} from '../../../components/Ethers'
import {
  ContractDeployTokenLockboxStateful
} from '../../../components/Lockbox'

import {
  BankAddDelegate,
  BankFund,
  BankCertificate,
  BankRedeem,
  BankRemoveDelegate,
  BankVerifyCertificate
} from '../../../components/Bank'

const Bank = ({ styled, ...props}) => { 
 return(
  <Flex minHeight={'100vh'} width='100%'>
    <Flex gradient='gray' flex={1} >
      <Box fullWidth>
        <Menu vertical items={MenuItems} />
      </Box>
    </Flex>

    <Flex column height='100%' flex={5}>
      <BankInteraction />
    </Flex>
  </Flex>
)
}

const BankInteraction = ({ name, tagline, content, summary, image, imageCover, tag, styled, ...props}) => { 
 return(
  <>
    <ContractInitializeStateful
        address='0xfc035dc2dcc87a983d69f81bde97725829a016ce'
        contract={TokenDropbox} />

      <Flex fullWidth height='100%' width='100%'>

        <Flex center gradient='purpink' column flex={2} py={80} >
          <BackgroundImage
            ratio={.35} opacity={.2}
            src='https://cdn.dribbble.com/users/329207/screenshots/6522800/2026_nationwide_02_train_landscape_v01.00.jpg' />

          {/* Box Login */}
          <BoxLoginCard />

        </Flex>

        <Flex center column flex={1} px={100} py={100}  >
          <Box fullWidth>
            <Heading xl uppercase >Ξdentity</Heading>
            <Paragraph>
              <strong>Let's get started. </strong>Creating a decentralized identity is easy. <em>Just a few clicks.</em>
            </Paragraph>
            <Box my={40}>
              <Toast
                label='Profile Edit'
                closeOnClick={false}
                content={<ProfileEdit />}>
                  <Flex alignCenter pointer>
                    <Image maxWidth={22} src='https://image.flaticon.com/icons/svg/1673/1673620.svg'/>
                    <Span pointer ml={2}>Public Profile </Span>
                  </Flex>
              </Toast>
              <Span my={3}><Toast
                label='Profile Edit'
                closeOnClick={false}
                content={<ProfileEdit />}>
                  <Flex alignCenter pointer>
                    <Image maxWidth={22} src='https://image.flaticon.com/icons/svg/1673/1673592.svg'/>
                    <Span pointer ml={2}>Setup Spaces</Span>
                  </Flex>
              </Toast></Span>
              <Toast
                label='Profile Edit'
                closeOnClick={false}
                content={<ProfileEdit />}>
                  <Flex alignCenter pointer>
                    <Image maxWidth={22} src='https://image.flaticon.com/icons/svg/1673/1673559.svg'/>
                    <Span pointer ml={2}>Create Threads</Span>
                  </Flex>
              </Toast>
            </Box>
            <HorizontalRule mt={45} mb={15} />
            <Flex column >
              <Panel
                content={<TokenList />}
                label='Manage Tokens'
              >
                <Button sm >🏦 Tokens</Button>
              </Panel>
              <br/>
              <Panel
                content={<TokenList />}
                label='Manage Tokens'
              >
                <Button sm >🛡️ Emblems</Button>
              </Panel>
              <br/>
              <Panel
                content={<TokenList />}
                label='Manage Tokens'
              >
                <Button sm >🆔 Credentials</Button>
              </Panel>
            </Flex>
          </Box>

        </Flex>
  
  
        
      </Flex>
  </>
)
}

const ProfileEdit = ({ styled, ...props}) => { 
  return(
   <Box bg='white' p={20} minWidth={270}>
     <BoxFormProfileBasics />
   </Box>
 )}

const TokenList = ({ styled, ...props}) => { 
  return(
   <Flex fullWidth height='100%'>
     <Flex gradient='gray' flex={1} p={20}>
       Search
     </Flex>
     
   </Flex>
 )
 }






export default Bank