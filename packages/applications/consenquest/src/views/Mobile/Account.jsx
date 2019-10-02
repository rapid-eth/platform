import React from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Flex, Card, Box, Menu, Heading, HorizontalRule, Button, Container, Panel, Span } from '@horizin/design-system';
import {
  BoxAccess, BoxThreadPostList, BoxSpaceOpen, BoxProfileRetrieve, BoxThreadPostDelete,
  BoxLoginCard, BoxLoginButton, BoxVerified } from '@kames/3box-components/dist'
  

import {
  FormWebLandStatus
} from "../../components/3Box";

const Account = ({ styled, ...props }) =>
  <>
    <Box>
      <Flex gradient='purpink' gradientDir='145' >
      <BackgroundImage
        boxShadow='sunset' overflow='hidden' ratio={.3} opacity={.1}
        src='https://cdn.dribbble.com/users/548267/screenshots/7111037/media/4d7376a05741d008464edb7d126d7334.png' />

      <BoxLoginCard isFooterActive={false} styled={{width: '100%'}} />
    </Flex>
    <Container py={30} maxWidth={780}>
      <Box>
        <BoxAccess threadAuto spaceAuto space='web3' threadName='myupdates'>
          <Heading cardHeader>Create A Post</Heading>
          <FormWebLandStatus threadName='myupdates' />
        </BoxAccess>

        <BoxThreadPostList
          threadName='pledges' component={Pledge}
          threadAddress='/orbitdb/zdpuB3CYqBnBkyS7ZCyh5VpWgjsbHejfRz26ZKFvHkf3fBea5/3box.thread.web3.myupdates'
        />
      </Box>
    </Container>
    </Box>
  </>


Account.defaultProps = {

}

Account.propTypes = {
  space: PropTypes.string.isRequired,
}

const Pledge = ({ styled, ...props}) => { 
  return(
   <Flex alignCenter column between fullWidth m={3}>
     <Box card width='100%' p={0}>
     <Box bg='gray' borderRoundedTop p={3} width='100%'>
       <Flex alignCenter between width='100%'>
         <BoxProfileRetrieve address={props.author} />
         <Span><BoxThreadPostDelete threadName='pledges' postId={props.postId}/></Span>
       </Flex>
     </Box>
     <Box p={3}>
      {props.message.update}
     </Box>
     <Flex between gradient='gray' p={20} width='100%'>
       <Flex column>
         <Span>Created: {props.timestamp}</Span>
         <Span xs>{props.postId}</Span>
       </Flex>
       <Panel label='Comment Thread' content={<CommentThread/>}>
        <Button xs alignSelf='flex-end'>Comment Thread</Button>
      </Panel>
     </Flex>
     </Box>
       
   </Flex>
 )
 }

const CommentThread = ({ styled, ...props}) => { 
 return(
  <Box>
    <BoxAccess threadAuto spaceAuto space='web3' threadName='myupdates'>
      <Heading cardHeader>Create A Post</Heading>
      <FormWebLandStatus threadName='myupdates' />
    </BoxAccess>
  </Box>
)
}

export default Account