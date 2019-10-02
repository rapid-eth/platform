import React from 'react';
import PropTypes from 'prop-types'
import { Card, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Span, Panel, BackgroundGradient } from '@horizin/design-system';

import {
  SmartContractCard
} from "../../components/SmartContracts";
import {
  SignPledgeFormInputs,
  SignatureList, SignMessageFormInputs,
  ContractDeployTokenERC20,
  EthereumEnableMetaMask
} from "../../components/Signatures";

import {
  ContractDeployListStateful
} from "../../components/Ethers";

import {
  TokenInitList, TokenInitListStateful,
  ERC20TokenInitialize, ERC20TokenInitializeStateful, ERC20TokenTransferStateful
} from "../../components/Tokens";

const Home = ({ styled, ...props }) =>
  <>
    <Flex fullWidth minHeight='100vh' >

      <Flex column flex={1} px={200} pt={200} >
        <Heading mega noMargin>Advanced</Heading>
        <Span normal fontSize={4}>Create A Decentralized Developer Profile</Span>
        <Paragraph sm>
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec dolor sapien, gravida eu dapibus eu, rutrum in nulla. Vestibulum in dapibus nisl.
        </Paragraph>
        <Flex column>
          <Button my={3} variant='primary'>Create Profile</Button>
        </Flex>
      </Flex>

      <Flex flex={1} pt={100} >
        <BackgroundImage ratio={.35} src='https://images.ui8.net/uploads/preview_3_1569070987100.png' />
        <Flex column flex={1} p={40}>

        </Flex>
      </Flex>
    </Flex>

  <Box>
  <Flex center column >
    <Heading fontSize={'3em'} heavy>Want to see how easy it is?</Heading>
    <Heading md as='h5' center>Instantly connect to blockchain services from anywhere: <strong><em>tokens, exchanges, tools, etc...</em></strong> </Heading>
  </Flex>
  <Container maxWidth={700}>
    <Flex column center mt={20} mb={80} >
      <Box maxWidth={500} fullWidth textCenter>
        <Span xs my={10}><strong>Example: </strong>0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE</Span>
        <ERC20TokenInitializeStateful />
      </Box>
    </Flex>

    <TokenInitListStateful />
    <ContractDeployListStateful />
  </Container>
  </Box>
    <iframe src='https://gitcoin.co/quests/2/pitch-your-ethereum-killer-to-the-vc-bro' width="100%" height='700px' />
  <Container>
  <Box>
    <Flex evenly width='100%' mx={-3} wrap='wrap'>
      <QuestCard styled={{width: .333, p: 3}} />
      <QuestCard styled={{width: .333, p: 3}} />
      <QuestCard styled={{width: .333, p: 3}} />
      <QuestCard styled={{width: .333, p: 3}} />
      <QuestCard styled={{width: .333, p: 3}} />
      <QuestCard styled={{width: .333, p: 3}} />
    </Flex>
  </Box>
  </Container>

    
  </>



const QuestCard = ({ name, tagline, content, summary, image, imageCover, styled, ...props}) => { 
  return(
   <Flex center column {...styled}>
     <Box cardHover width='100%'>
     <Flex column height='100%' >
       <Flex column flex={1} p={15} minHeight={90}>
         <BackgroundGradient gradient='blue'/>
         <BackgroundImage src={imageCover} opacity={0.2} ratio={0.3} />
         <Flex alignCenter between>
           <Box>
             <Span xs color='white' highlight='blue' alignSelf='flex-start'>Feb 27, 2019</Span>
           </Box>
           <Span variant='tag' highlight='green' alignSelf='flex-end'>Tag</Span>
         </Flex>
       </Flex>
   
       <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
       {image &&
         <Box inlineBlock circle boxShadow='sunset' p={20} gradient='white' maxWidth={120} mx='auto' mt={-100}>
           <Image src={image} />
         </Box>
         }
         <Heading lg mt={0} fontWeight={300}>
           {name}
         </Heading>
         <Paragraph fontSize={[1]} mb={[25]}>
           {tagline}
         </Paragraph>
       </Box>
   
       <Box card flex={1} p={10} py={80} >
         <BackgroundGradient gradient='gray'/>
         <Flex between fullWidth>
           <Span><Button xs>Start Quest</Button></Span>
           <Panel content={<div />} label='Quest Details'>
               <Button sm>Details</Button>
           </Panel>
         </Flex>
       </Box>
     </Flex>
   </Box>
   </Flex>
 )
 }

const MarkdownExample = `

# Beginner Quest
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

#### Getting Started Is Easy
In ac dapibus dolor. Maecenas eu tortor fermentum felis malesuada vehicula. Phasellus vel aliquet felis. Aliquam erat volutpat. Nulla ullamcorper fringilla tortor nec gravida. Suspendisse et rutrum tellus. Curabitur faucibus ultrices urna, eu finibus nisl molestie et.
`

QuestCard.defaultProps = {
  name: 'Quest Starter',
  tagline: 'The Everybody Starter Quest',
  summary: 'The Everybody Starter Quest',
  content: MarkdownExample,
  image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  tag: 'beginner',
  category: 'general',
}

QuestCard.propTypes = {
  name: PropTypes.string,
  tagline: PropTypes.string,
  summary: PropTypes.string,
  content: PropTypes.string,
  image: PropTypes.string,
  imageCover: PropTypes.string,
  tag: PropTypes.string,
  category: PropTypes.string,
}


export default Home