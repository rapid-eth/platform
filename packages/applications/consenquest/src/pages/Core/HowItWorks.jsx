/* --- Global --- */
import React from 'react';
import { Container, Box, Flex, Heading,Markdown, BackgroundImage } from '@horizin/design-system';

/* --- Local --- */
import { HowItWorks } from './content'

const StartPage = () => 
<>
  {/* Header */}
  <Box color='white' gradient='blue' p={230}>
    <BackgroundImage src='https://cdn.dribbble.com/users/1780890/screenshots/5672197/illu1_1x_4x.jpg' opacity={0.2} />
    <Flex center column>
      <Heading giga>
        How It Works
      </Heading>
      <Heading md thin>
        A Community Curation Platform
      </Heading>
    </Flex>
  </Box>

  {/* Content */}
  <Container maxWidth={700}>
    <Box card p={4} mt={-100}>
      <Markdown>
        {HowItWorks}
      </Markdown>
    </Box>
  </Container>
</>

export default StartPage