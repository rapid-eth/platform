import React from 'react';
import { Button, Box, Flex, Heading, Container, Card } from '@horizin/design-system';

const Home = ({ styled, ...props }) =>
<>
<Box gradient='blue' py={[100]}>
  <Container maxWidth={720} >
    <Flex column center color='white'>
      <Heading xxl heavy noMargin>Start the Adventure</Heading>
      <Heading lg thin noMargin>Get the Game Going</Heading>
      <Flex evenly fullWidth mt={30}>
        <Button >How It Works</Button>
        <Button >Getting Started</Button>
      </Flex>
    </Flex>
  </Container>

</Box>
<Container py={30}>
  <Flex column>
    <Card />
    <Card />
    <Card />
  </Flex>
</Container>
</>

export default Home