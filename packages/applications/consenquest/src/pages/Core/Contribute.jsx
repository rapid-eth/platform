/* --- Global --- */
import React from 'react';
import { Container, Box, Flex, Heading,Markdown, BackgroundImage } from '@horizin/design-system';

/* --- Local --- */
import { Contribute } from './content'

const ContributePage = () => 
<>
  {/* Header */}
  <Box color='white' gradient='blue' p={150}>
    <BackgroundImage ratio={.5} src='https://cdn.dribbble.com/users/2498593/screenshots/5687155/illu4_4x.jpg' opacity={0.2} />
    <Flex center column>
      <Heading giga>
        Contribute
      </Heading>
      <Heading md thin>
        Become an Ethereum Guide
      </Heading>
    </Flex>
  </Box>

  {/* Content */}
  <Container maxWidth={700}>
    <Box card p={4} mt={-100}>
      <Markdown>
        {Contribute}
      </Markdown>
    </Box>
  </Container>
</>

export default ContributePage