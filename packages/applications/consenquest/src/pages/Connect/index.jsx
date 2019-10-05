import React from 'react';
import { Flex, Heading, Modal, BackgroundImage, Paragraph, Box, Button, Span, Absolute, Image } from '@horizin/design-system';

import {
  BoxLoginCard, BoxProfileRetrieve
} from '@kames/3box-components/dist'

const ATM = props =>
<>
  <Flex fullWidth minHeight='90vh' >

    <Flex center column flex={1} px={100} py={100}  >
      <Box fullWidth>
        <Heading lg>Get Connected</Heading>
        <Span sm fontSize={4}>Connect to the ETHub decentralized network.</Span>
        <br/>
        <Span xxs><strong>You've been referred by</strong></Span>
        <Box card my={3}>
          <BoxProfileRetrieve address={props.address} />
        </Box>
        <Flex>
            <Button sm variant='white'>Follow Friend</Button>
            <Button sm variant='white' mx={3}>View Profile</Button>
        </Flex>
      </Box>
        <Box alignSelf='flex-end' mt='auto'>
          <Paragraph xs>
            The ETHub network is a place for Ethereum developers to connect. A place to share projects, code and ideas. And even level up skills.
          </Paragraph>
          <Modal
            content={<div />}
            label='The Network'
            styled={{
              position: 'fullScreen',
              m: 80
            }}
          >
            <Button sm variant='blue' mt={20}>View Network Activity</Button>
          </Modal>
        </Box>
    </Flex>


    <Flex center column flex={2} py={100} >
      <BackgroundImage ratio={.75} backgroundPosition='100px -215px' backgroundSize='150%'  src='https://images.ui8.net/uploads/blockchain_platform_5_1527438188551.jpg' />
      <Absolute top={0} bottom={0} left={0}>
        <Flex center column height='100%'>
          <Flex center column card circle  boxShadow='sunset' ml={-85} p={4} maxWidth={250}>
            <Image card circle boxShadow='sunset' p={2} mt={-60} mb={2} maxWidth={80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'/>
            <Heading lg heavy>50 DEV</Heading>
            <Span center>Join ETHub network and follow friend.</Span>
            <Span xxs tag='white'>Learn More</Span>
          </Flex>
        </Flex>
      </Absolute>
      <BoxLoginCard />
    </Flex>
  </Flex>

</>

export default ATM