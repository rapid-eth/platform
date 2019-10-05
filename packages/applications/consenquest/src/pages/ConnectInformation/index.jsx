import React from 'react';
import { Flex, Heading, Modal, BackgroundImage, Paragraph, Box, Button, Span, Absolute, Image } from '@horizin/design-system';

import {
  BoxLoginCard, BoxProfileRetrieve
} from '@kames/3box-components/dist'
import { Container } from '@horizin/design-system/dist/atoms';

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

  <Box minHeight={600} >
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
</>

export default ConnectInformation