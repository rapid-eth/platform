import React from 'react';
import { Flex, Heading, BackgroundImage,Box, Button } from '@horizin/design-system';

import {
  BoxLoginCard, BoxProfileRetrieve
} from '@kames/3box-components/dist'
import { Container } from '@horizin/design-system/dist/atoms';

import {
  TransferEventList,
  DetailsERC20, Transfer, DeployERC20, InitializeERC20, TotalSupply, Balance
} from '@rapid/eth-token-erc20'

const ConnectInformation = props =>
<>
  <Box gradient='blue' py={7}>
    <BackgroundImage ratio={.45} src='https://cdn.dribbble.com/users/1314508/screenshots/6437101/cryptocurrency_hero_landing_page_illustration_4x.jpg' opacity={.32} />
    {/* <BackgroundImage src='https://cdn.dribbble.com/users/1780890/screenshots/5672197/illu1_1x_4x.jpg' opacity={.32} /> */}
    <Flex color='white' center column>
      <Heading giga>Start Earning DEV Token</Heading>
      <Heading md>Grow the Ethereum network and start earning DEV token.</Heading>
      <Button xs p={3} tag='white'>onemilliondevelopers.com/connect/{window.ethereum.selectedAddress} | <strong>Copy Link</strong></Button>    
    </Flex>
  </Box>

  <Box >
    <Container mt={-80} card py={4} borderRadius={120}>
      <Flex between maxWidth={700} mx='auto'>
        <Box textCenter>
          <Heading giga>5</Heading>
          <Heading md thin>Connections</Heading>
        </Box>
        <Box textCenter>
          <Heading giga>1,000</Heading>
          <Heading md thin>DEV Token</Heading>
        </Box>
        <Box textCenter>
          <Heading giga>120</Heading>
          <Heading md thin>Followers</Heading>
        </Box>
      </Flex>
    </Container>
  </Box>

  <Container py={100}>
    <Flex>
      <Box flex={1} p={4} maxWidth={300}>
        {/* <Transfer address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05'/> */}
      </Box>
      <Box flex={1} p={4}>
        <DeployERC20 />
      </Box>
      <Box flex={1} p={4}>
        <InitializeERC20 address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05' />
        {/* <DetailsERC20 address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05'/>
        <TotalSupply address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05'/>
        <BoxProfileRetrieve address='0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE' />
        <Balance address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05' balanceOf='0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE' />
        <BoxProfileRetrieve address='0x068a1a9b6da95e03b6a2716fdeee0854117300a3' />
        <Balance address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05' balanceOf='0x068a1a9b6da95e03b6a2716fdeee0854117300a3' /> */}
      </Box>
    </Flex>
    <Box>
      <TransferEventList address='0x4c5effcd6eb5fa67e330c5d29f87df52dff01c05' />
    </Box>
  </Container>
</>

export default ConnectInformation