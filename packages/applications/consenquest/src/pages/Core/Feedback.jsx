/* --- Global --- */
import React from 'react';
import { Container, Box, Flex, Heading,Markdown, BackgroundImage } from '@horizin/design-system';

/* --- Local --- */
import { Feedback } from './content'

const FeedbackPage = () => 
<>
  {/* Header */}
  <Box color='white' gradient='blue' p={150}>
    <BackgroundImage ratio={.35} src='https://cdn.dribbble.com/users/562996/screenshots/4498979/the_cryptographer_v01_800.gif' opacity={0.2} />
    <Flex center column>
      <Heading giga>
        Feedback
      </Heading>
      <Heading md thin>
        Provide feedback to help make Ethereum better.
      </Heading>
    </Flex>
  </Box>

  {/* Content */}
  <Container maxWidth={700}>
    <Box card p={4} mt={-100}>
      <Markdown>
        {Feedback}
      </Markdown>
    </Box>
  </Container>
</>

export default FeedbackPage