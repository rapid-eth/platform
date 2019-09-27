import React from 'react';
import { Card, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Span, QRReader } from '@horizin/design-system';

const ATM = ({ styled, ...props }) =>
  <>
    <Flex fullWidth >

      <Flex center column flex={1} px={100} py={200}  >
        <Box>
          <Heading lg>Digital ATM</Heading>
          <Span sm fontSize={4}>Issue Token Certificates from your mobile device.</Span>
          <Paragraph sm>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
          </Paragraph>
          <QRReader/>
        </Box>
      </Flex>

      <Flex center column flex={2} py={200} >
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/03_1527461548946.png' />
        <Flex column flex={1} p={40}>
          <Flex center column card mt={50} ml={0} width={500} p={30}>
            <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
              <Image maxWidth={80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
            </Flex>

            <Heading my={10} center>Connect Smarthone</Heading>
            <Paragraph xs center>
              Add a mobile wallet with signing capabilities to the Public Lockbox.
            </Paragraph>

            {/* <SignPledgeFormInputs fullWidth /> */}

            <Span xs my={15}>596 Signed Pledges</Span>
          </Flex>
        </Flex>
      </Flex>
      </Flex>

  </>

export default ATM