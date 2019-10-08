import React from 'react';
import { Container, Box, Flex, Heading,Markdown, BackgroundImage } from '@horizin/design-system';

import { Start } from './content'
const StartPage = () => 
<>
  <Box color='white' gradient='blue' p={230}>
    <BackgroundImage src='https://cdn.dribbble.com/users/1780890/screenshots/5672197/illu1_1x_4x.jpg' opacity={0.2} />
    <Flex center column>
      <Heading giga>Getting Started</Heading>
      <Heading md thin>How To Join the Ethereum Ecosystem</Heading>
    </Flex>
  </Box>
  <Container maxWidth={700}>
    <Box card p={4} mt={-100}>
      <Markdown>
        {Start}
      </Markdown>
    </Box>
  </Container>
</>

export default StartPage