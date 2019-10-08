import React from 'react';
import { Container, Box, Flex, Heading,Markdown, BackgroundImage } from '@horizin/design-system';

import { Team } from './content'
const StartPage = () => 
<>
  <Box color='white' gradient='blue' p={150}>
    <BackgroundImage ratio={.4} src='https://cdn.dribbble.com/users/108482/screenshots/4007910/ether.png' opacity={0.42} />
    <Flex center column>
      <Heading giga>Pushing the Limits</Heading>
      <Heading md thin>Rapidly Prototyping Ethereum Applications</Heading>
    </Flex>
  </Box>
  <Container maxWidth={700}>
    <Box card p={4} mt={-100}>
      <Markdown>
        {Team}
      </Markdown>
    </Box>
  </Container>
</>

export default StartPage