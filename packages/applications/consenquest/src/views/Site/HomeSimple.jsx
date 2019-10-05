import React from 'react';
import { Buton, Blockquote, Span, Modal, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Card } from '@horizin/design-system';

import {
  BoxAccess, BoxThreadPostList, BoxSpaceOpen,
  BoxLoginCard, BoxLoginButton, BoxVerified } from '@kames/3box-components/dist'
import {
  EthereumEnableMetaMask
} from "../../components/Signatures";

import {
  FormWebLandStatus
} from "../../components/3Box";
import {
  EthStateAccess,
} from "../../components/Ethereum";

const Home = ({ styled, ...props }) =>

  <>
    <Flex fullWidth >

      <Flex column flex={1} px={200} py={200} >
        <Heading mega noMargin>1 Million Developers</Heading>
        <Span normal fontSize={4}>Join The Web3 Guild. <strong>Develop the Future.</strong></Span>
        <Paragraph>
          <strong>Join the Web3 adventure. </strong>Whether just getting started or a veteran the Web3Land Decentralized Application has a place for you.
        </Paragraph>
        <Flex>
          <Button xs variant='blue' m={1}>Earn <strong> 100 DEV </strong> (Verify Github)</Button>
          <Button xs variant='orange' m={1}>Earn <strong> 400 DEV</strong> (Refer a Developer)</Button>
        </Flex>
        <Flex alignCenter mt={4}>
          <Box circle card
            maxWidth={80}>
            <Image circle
              src='https://cdn.shopify.com/s/files/1/1780/4539/products/mockup-d6f4c645_530x@2x.jpg?v=1519599291'/>
          </Box>
            <Box ml={3}>
              <Heading>2,000 DEV = 1 Limited Edition Shirt</Heading>
              <Heading xs as='h5'>Get a limited addition DEV shirt. It's all the ETH!</Heading>
            </Box>
        </Flex>
        <Flex fullWidth mt={30}>
          {/* <EthereumEnableMetaMask /> */}
        </Flex>
      </Flex>

      <Flex flex={1} py={100} pb={170} >
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_7_1569070970063.png' />
        <Flex column flex={1} p={40}>
          <Flex center column card mt={50} ml={-160} width={300} p={30}>
            <Flex card circle maxWidth={120} boxShadow='sunset' mt={-80}>
              <Image maxWidth={80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
            </Flex>

            <Heading my={10} center>Web3 Community</Heading>
            <Paragraph xs center>
              Join the community. Share knowledge and experience. <strong>Grow as a developer.</strong>
            </Paragraph>

              <Modal
                content={<Web3PledgeSign />}
                position='fullScreen'
                variant='fullScreen'
                styled={{
                  position: 'fullScreen',
                  m: 80
                }}
              >
              <Button fontSize={7} variant='blue' mt={20}>Join Web3 Today</Button>
            </Modal>

            <Span sm my={15}>202 Quests Published</Span>
            <Button xs mb={-40} variant='green'>54,391+  Active Developers</Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    
  </>


const Web3PledgeSign = ({ styled, ...props}) => { 
 return(
  <Flex bg='white' fullWidth flex={1} width={['100%'] } height='100%'>
    <Flex center column gradient='gray' flex={1} fullWidth height='100%' p={20}>
      <Flex center column fullWidth maxWidth={370} mt={0}>
        <BoxLoginCard />
      </Flex>
    </Flex>
    <Flex justifyCenter flex={2} >
      <Flex center column width='100%' p={40}>
       
       {/* 
         Box Access 
         Manage multiple levels of authentication with 3Box services
        */}
        <BoxAccess
          space='web3'
          threadName='pledges'
          componentLogin={<Quotes space='web3' />}
          componentSpace={<SpaceOpenCard space='web3' />}
          componentThread={<ThreadOpenCard space='web3' threadName='statusUpdatesCommunity' />}
        >
          {/* <SpaceOpenCard />
          */}
          </BoxAccess>
          
        
      </Flex>
    </Flex>
  </Flex>
)
}

const Quotes = ({ styled, ...props}) => { 
 return(
<>
    <BackgroundImage
      boxShadow='sunset' overflow='hidden' opacity={.1}
      src='https://cdn.dribbble.com/users/548267/screenshots/7111037/media/4d7376a05741d008464edb7d126d7334.png' />
    <Blockquote card>
    <Heading xl heavy>Global Virtual Machine</Heading>
      <em>When I discovered Ethereum, I realized that it used a virtual machine that spanned the globe: a world computer. And even better, I could write programs for that world computer. As soon as I realized the implications of this technology I knew this was what I would be doing for the rest of my career.</em>
      <Flex alignCenter justifyEnd>
        <Box textRight>
          <Heading md heavy>Daniel Ellison</Heading>
          <Heading sm thin>Hardware Engineer Extraordinaire!</Heading>
        </Box>
        <Image mx={10} variant='avatar' src='https://pbs.twimg.com/profile_images/925445911181869056/9ZSadlR9_400x400.jpg' />
      </Flex>
  </Blockquote> 
</>
)
}

const SpaceOpenCard = ({ space, styled, ...props}) => { 
 return(
<>
  <BackgroundImage
    boxShadow='sunset' overflow='hidden' opacity={.1}
    src='https://cdn.dribbble.com/users/548267/screenshots/7111037/media/4d7376a05741d008464edb7d126d7334.png' />
    <Box card minWidth={250}>
      <Flex center column>
        <Flex card circle maxWidth={420} width={470} minHeight={130} mt={-80} mb={20} mx={80}>
          <BackgroundImage
            borderRadius={70} boxShadow='sunset' ratio={.35} styledContainer={{overflow:'visible'}}
            src='https://cdn.dribbble.com/users/548267/screenshots/7111037/media/4d7376a05741d008464edb7d126d7334.png' />
        </Flex>
        <Box my={3} textCenter>
          <Heading xxl>Web3 Ξ Land</Heading>
          <BoxSpaceOpen space={space} />  
          <Paragraph>
            Join the growing community of Web3 Developers.<br/><strong>Find a project you love!</strong>
          </Paragraph>
        </Box>
      </Flex>
      <Flex between>
        <Button xs>How It Works</Button>
        <Button xs>Open Source</Button>
        <Button xs>Find A Team</Button>
      </Flex>
    </Box>
</>
)
}

const ThreadOpenCard = ({ space, styled, ...props}) => { 
 return(
<>
  <BackgroundImage
    boxShadow='sunset' overflow='hidden' opacity={.31}
    src='https://cdn.dribbble.com/users/648922/screenshots/6833362/office_4x.png' />
    <Box card minWidth={250}>
      <Flex center column>
        <Box height={100} mt={-40} width={420}>
          <BackgroundImage
            boxShadow='sunset' ratio={.3} styledContainer={{borderRadius: '70px', boxShadow: 'sunset', height: 100}}
            src='https://cdn.dribbble.com/users/648922/screenshots/6833362/office_4x.png' />
        </Box>
        <Box textCenter my={3}>
          <Heading xl>Developer Status</Heading>
          <Paragraph>
            Tell Everyone what you are working on. 
          </Paragraph>
        </Box>
        <Box mx='auto' mb={30} fullWidth maxWidth={380}>
          <FormWebLandStatus />
        </Box>
      </Flex>
    </Box>
    
</>
)
}

export default Home