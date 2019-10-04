import React from 'react';
import { Buton, Blockquote,
  Loading, Span, Modal, Flex, Heading, Image, BackgroundImage, Tabs, Popover,
  Paragraph, Box, Container, Button, Card, HorizontalRule, Panel, Absolute, Link
} from '@horizin/design-system';

import {
  BoxAccess, BoxThreadPostList, BoxSpaceOpen,
  BoxLoginCard, BoxLoginButton, BoxVerified } from '@kames/3box-components/dist'

import EtheruemFeatures from './EthereumFeatures'


const Home = ({ styled, ...props }) =>

  <>
    <Flex fullWidth >

      <Flex center column flex={3} py={50} minHeight='600px' >
        <Absolute layout='bottomRight' m={3}>
          <Span thin tag='white' xxs ><strong><a href='#'>Contribute to DEVLand</a></strong></Span>
        </Absolute>
        <Box px={200}>
          <Popover />
          <Heading xl heavy><Span md thin>ETHEREUM MISSION</Span><br/><Span heavy>1 Million Developers</Span> </Heading>
          <Paragraph mt={3}>
            <strong>A core feature of blockchain is composability.</strong> Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and libraries. 
          </Paragraph>
          <Flex alignCenter>
            <Span xs tag='blue'>Beginner</Span><br/>
            <Span xxs  mx={3}>Enble Web3 Browser</Span>
          </Flex>
          <Flex alignCenter mt={3}>
            <Span xs tag='green'>Intermediate</Span><br/>
            <Span xxs mx={3}>Smart Contract Playground</Span>
          </Flex>
          <Flex alignCenter mt={3}>
            <Span xs tag='red'>Advanced</Span><br/>
            <Span xxs normal mx={3}>Submit Open Source Project</Span>
          </Flex>
          
        </Box>
      </Flex>

      <Flex boxShadow='insetLeftHeavy' gradient='blue' flex={2} py={50}  >
        <BackgroundImage opacity={.86} ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />
        <Flex center column mt={50} ml={-160} p={30}>
          <BoxLoginCard />
        </Flex>
        <Absolute layout='bottomLeft' mb={3} >
          <Box mx={3}>
            <Span xxs tag='green'><Span fontWeight={700}><strong>Join 10,000+ Active Developers</strong></Span></Span>
          </Box>
        </Absolute>
        <Absolute layout='topRight' mr={155} mt={220} ><Loading type='ripple' /></Absolute>
        <Absolute layout='topRight' mr={200} mt={420} ><Loading type='ripple' /></Absolute>
        <Absolute layout='topRight' mr={30} mt={190} ><Loading type='ripple' /></Absolute>
      </Flex>
    </Flex>
    {/* <DeveloperStatus /> */}
    <Box py={40}>

      <Container>
        <Flex alignCenter p={4}>
        <Flex flex={2}>
           <Box width='150%' ml='-50%'>
              <Image
                maxWidth={600} borderRadius='0 100px 100px 0' p={1} 
                src={'https://images.ui8.net/uploads/blockchain_platform_5_1527438188551.jpg'}/>
           </Box>
          </Flex>
          <Box flex={3} p={5}>
            <Heading lg heavy>Discover the <Span>"Ah-Ha"</Span> moment</Heading>
            <Heading md thin>Find what makes blockchain great. <strong><em>Composability</em></strong>.</Heading>
            <Paragraph>
              The Ethereum Blockchain is a global computer. The computer provides the building blocks for crafting composable functions.
            </Paragraph>
            <Paragraph>
              <em><strong>The power is immense.</strong> What can be built is <strong>extraordinary</strong>.</em>
            </Paragraph>
            <Paragraph>
              Discover the blockchain "ah-ha" moment by first understanding why <strong>global composability is world changing</strong>. 
            </Paragraph>
            <Span pointer tag='green' >
              <Flex alignCenter>
                <Image maxWidth={28} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
                <Link to='/discover' >
                  <Span mx={3}>Discover <Span><strong> Your Ah-Ha </strong></Span> Moment</Span>
                </Link>
              </Flex>
              </Span>
          </Box>
          
        </Flex>
      </Container>
      <Container>
        <Flex alignCenter p={4}>
          <Box flex={3} p={5}>
            <Heading lg heavy>Quest to <Span> Collect Precious DEV</Span> Token</Heading>
            <Heading md thin>Earn reputation in the developer community. <strong><em>Earn DEV</em></strong>.</Heading>
            <Paragraph>
              The Ethereum Blockchain is a global computer. The computer provides the building blocks for crafting composable functions.
            </Paragraph>
            <Paragraph>
              <em><strong>The power is immense.</strong> What can be built is <strong>extraordinary</strong>.</em>
            </Paragraph>
            <Paragraph>
              Discover the blockchain "ah-ha" moment by first understanding why <strong>global composability is world changing</strong>. 
            </Paragraph>
            <Span pointer tag='green' >
              <Flex alignCenter>
                <Image maxWidth={28} circle mx={2} src='https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg' />
                <Link to='/discover' >
                  <Span mx={3}>Discover <Span><strong> Your Ah-Ha </strong></Span> Moment</Span>
                </Link>
              </Flex>
              </Span>
          </Box>

          <Flex flex={2}>
           <Box width='150%' mr='-50%'>
              <Image
                maxWidth={600} borderRadius='100px 0 0 100px' p={1} 
                src='https://images.ui8.net/uploads/blockchain_platform_3_1527438195999.jpg'/>
           </Box>
          </Flex>
          
        </Flex>
      </Container>
      
    </Box>
  </>

const DeveloperStatus = ({ styled, ...props}) => { 
 return(
  <Box color='white' bg='dark' gradient='black' p={4} >
    <Flex alignCenter between width='100%'>
      <Flex>
        <Span xxs tag='green'>Status: Enabled</Span>
        <Span xxs tag='white' mx={3}>Address: 0xfA6...a48cE</Span>
        <Span xxs tag='white'>Network: Rinkeby</Span>
      </Flex>
      <Flex>
        <Span sm  >Earn DEV - Refer A Friend</Span>
      </Flex>
      <Flex>
        <Panel
            content={<div>hello</div>}
            styled={{
            }}
            >
          <Button sm mx={1} variant='red'>Manage Profile</Button>
        </Panel>
        <Modal
            content={<div>hello</div>}
            styled={{
            }}
            >
          <Button sm mx={1}>Share Status Update</Button>
        </Modal>
      </Flex>
    </Flex>
  </Box>
)}

const CodeEditor = ({ styled, ...props}) => { 
 return(
  <Flex fullWidth >
    

    <Flex gradient='black' flex={1} py={50}  >
      <BackgroundImage ratio={.35} src='https://blockexplorer.com/news/wp-content/uploads/2018/08/ethereum-logo.jpg' opacity={.2} />
      <Flex center column mt={50} ml={-90} p={30}>
        <Image src={'https://i.imgur.com/0iBDGhY.jpg'} maxWidth={700} rounded card p={1} />
      </Flex>
    </Flex>

    <Flex center column flex={1} py={50} >
      <Box px={140}>
        <Heading xxl heavy><Span md thin>Smart Contracts Templates</Span></Heading>
        <Heading sm heavy>Get started now. Start experimenting with blockchain today.</Heading>
        <Paragraph mt={3}>
          <strong>The core feature of blockchain is composability.</strong> Help compose the future of Ethereum - contribute to an Open Catalog of smart contracts and decentralized libraries for everyone to use. 
        </Paragraph>
      </Box>
    </Flex>
  </Flex>
)}

export default Home