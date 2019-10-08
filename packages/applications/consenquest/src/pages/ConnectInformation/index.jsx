import React from 'react';
import { Flex, Heading, BackgroundImage,Box, Container, Button, Paragraph } from '@horizin/design-system';

import {
  BoxLoginCard, BoxProfileRetrieve
} from '@kames/3box-components/dist'

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

  <Container py={100} maxWidth={780}>
      <Heading xxl>Collecting Referrals</Heading>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan felis lacus, id faucibus erat lacinia nec. Nullam luctus justo ac sem rutrum tincidunt. Suspendisse tempor, dui condimentum semper aliquet, dui dolor accumsan lorem, cursus porta metus eros at nunc. Integer a viverra nibh. Nunc condimentum libero ex. Aliquam erat volutpat. Mauris convallis dapibus mi non volutpat. Curabitur sagittis interdum ligula, in porta tortor pretium in. Proin vel tincidunt felis. Curabitur vitae nibh magna. Ut id tellus a ante vulputate mollis. Etiam finibus pellentesque eros ut maximus. Curabitur consectetur sit amet tortor nec pellentesque. Integer vitae urna massa.
      </Paragraph>

      <Heading xxl>Get Rewarded</Heading>
      <Paragraph>
        Ut tristique risus eget dolor imperdiet, in auctor ipsum commodo. Nulla facilisi. Cras vulputate, dolor a convallis tincidunt, mauris dolor placerat mauris, eget mollis lorem tellus molestie velit. Nulla consectetur est nec ipsum luctus mollis. Aenean ac urna porta, elementum odio vel, volutpat sapien. Vivamus dignissim ligula est, at tincidunt est dignissim vel. Nam risus tellus, gravida sit amet arcu sed, elementum venenatis urna. Praesent ac sollicitudin mauris.
      </Paragraph>

      <Heading xxl>Earn Reputation</Heading>
      <Paragraph>
        Sed ornare tincidunt dui, et facilisis ipsum tempus ac. Fusce suscipit id augue id egestas. Donec tempor, libero placerat pulvinar congue, nulla est volutpat quam, id volutpat ipsum felis at mauris. In scelerisque non risus aliquam pretium. Nunc condimentum enim id malesuada ullamcorper. Maecenas id rhoncus neque, vitae efficitur lacus. Quisque eleifend magna nec turpis molestie, eu dignissim mi aliquam. Suspendisse sit amet aliquet eros. Cras a felis commodo, cursus sem ut, auctor lectus. In egestas rhoncus scelerisque. Mauris viverra sed sapien sed feugiat. Fusce id ligula tristique purus accumsan gravida eget sed augue. Quisque eu lorem suscipit sapien auctor euismod eget vel elit. Praesent sit amet arcu eget neque blandit ultricies.
      </Paragraph>
  </Container>
</>

export default ConnectInformation