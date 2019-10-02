import React from 'react';
import { Card, Toast, Flex, Heading, Modal, Panel, Image, BackgroundImage, Paragraph, Box, Container, Button, Span, QRReader } from '@horizin/design-system';

import TokenDropbox from '../../contracts/TokenDropbox'
import {
  ERC20TokenATMTransferStateful
} from '../../components/Tokens'
import {
  ContractInitializeStateful
} from '../../components/Ethers'
import {
  ContractDeployTokenLockboxStateful
} from '../../components/Lockbox'

import {
  BankAddDelegate,
  BankFund,
  BankCertificate,
  BankRedeem,
  BankRemoveDelegate,
  BankVerifyCertificate
} from '../../components/Bank'
const ATM = ({ styled, ...props }) =>
  <>
    <ContractInitializeStateful
      address='0xfc035dc2dcc87a983d69f81bde97725829a016ce'
      contract={TokenDropbox} />
    <Flex fullWidth >

      <Flex center column flex={1} px={100} py={100}  >
        <Box fullWidth>
          <Heading lg>Decentralized Bank</Heading>
          <Span sm fontSize={4}>Make a deposit in a local Bank branch. <strong>Keep Your ATM funded.</strong></Span>
          <Box mt={40}>
            <BankFund />
            <Modal
              content={<BankList />}
              label='All Public Banks'
              styled={{
                position: 'fullScreen',
                m: 80
              }}
            >
              <Button sm variant='blue' mt={20}>🏦 Search Community Banks</Button>
            </Modal>
          </Box>
        </Box>
          <Box alignSelf='flex-end' mt='auto'>
            <Paragraph xs>
              A bank allows you and your friends to setup on-the-go ATMs. Deposit tokens into a digital ATM and sign Token Certifiates for friends.<br/><strong>They pay blockchain gas costs for claiming tokens.</strong>
            </Paragraph>
            <ContractDeployTokenLockboxStateful />
          </Box>
      </Flex>


      <Flex center column flex={2} py={100} >
        <BackgroundImage ratio={.75} backgroundPosition='100px -215px' backgroundSize='150%'  src='https://images.ui8.net/uploads/blockchain_platform_5_1527438188551.jpg' />
        <Flex column flex={1} p={40}>
          <Flex center column card mt={50} ml={0} width={360} p={30}>
            <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
              <Image maxWidth={80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
            </Flex>

            <Heading lg my={10} center>Smartphone ATM</Heading>
            <Paragraph sm center>
              Manage the blockchain ATM directly from a smartphone.
            </Paragraph>

            <BankAddDelegate
              contractAddress='0xfc035dc2dcc87a983d69f81bde97725829a016ce'
            />

            <Panel
              content={<BankActionList />}
              label='Public Bank Features'
            >
              <Button sm variant='blue' mt={20}>All Bank Features</Button>
            </Panel>
            
          </Flex>
        </Flex>
      </Flex>
      </Flex>

  </>


const BankList = ({ styled, ...props}) => { 
 return(
  <Flex fullWidth height='100%'>
    <Flex gradient='gray' flex={1} p={20}>
      Search
    </Flex>
    <Flex flex={4} >
      <Box p={40}>
        <Flex gutter3>
          <Card />
          <Card />
          <Card />
        </Flex>
      </Box>
    </Flex>
  </Flex>
)
}

const BankActionList = ({ styled, ...props}) => { 
 return(
  <Flex column p={20}>
    <Box mt={25}>
      <Heading sm >ATM Withdrawl</Heading>
      <Heading xs thin mt={3}>Withdrawl from the ATM</Heading>
      <BankRedeem />
    </Box>
    <Box mt={25}>
      <Heading sm>Add ATM</Heading>
      <Heading xs thin mt={3}>Add mobile ATM</Heading>
      <BankAddDelegate
        contractAddress='0xfc035dc2dcc87a983d69f81bde97725829a016ce'
      />
    </Box>
    <Box mt={25}>
      <Heading sm>Remove ATM</Heading>
      <Heading xs thin mt={3}>Remove an active ATM</Heading>
      <BankRemoveDelegate />
    </Box>
    
    <Box mt={25}>
      <Heading sm>Certificate Data</Heading>
      <Heading xs thin mt={3}>Analyze ATM Certificate</Heading>
      <BankCertificate />
    </Box>
    <Box mt={25}>
      <Heading sm >Verify ATM Certificate</Heading>
      <Heading xs thin mt={3}>Check an issued certificate.</Heading>
      <BankVerifyCertificate />
    </Box>
  </Flex>
)
}

export default ATM