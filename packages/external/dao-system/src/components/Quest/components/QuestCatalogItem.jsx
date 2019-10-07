import React, { useState, useEffect } from 'react';
import { Image, Box, Heading, Flex, Modal, Span, Link, } from '@horizin/design-system'
import { BoxThreadPostDelete, BoxAccess } from '@kames/3box-components/dist'


import QuestCompleteForm from './QuestCompleteForm'
import QuestCompleteFormTransaction from './QuestCompleteFormTransaction'


const QuestCatalogItem = ({ styled, ...props}) => {
return(
!props.properties ? 'no props' :
<Flex between card width='100%' {...styled} {...props} >
  <Flex alignCenter flex={3} >

    <Span><Image maxWidth={45} src={props.properties.image} /></Span>
    <Box ml={2} textAlign='left'>
      <Heading noMargin sm heavy >
        {props.properties.name}
      </Heading>
      <Heading noMargin xs>
        {props.properties.tagline}
      </Heading>
    </Box>
  </Flex>

  {console.log(props, 'qciisiqi')}

  <Flex alignCenter flex={1} justifyContent='flex-end'>
  <Link to={`/quest/${props.alias}`}>
    <Span pointer justifySelf='flex-end' xxs tag='white'>View</Span>
  </Link>
    <Modal
      content={<FeaturedQuestDetails threadName={props.threadName} postId={props.postId} {...props} />}
      position='fullScreen'
      variant='fullScreen'
      styled={{
        position: 'fullScreen',
        m: 80
      }}
    >
      <Span pointer justifySelf='flex-end' xxs mx={3} tag='white'>Manage</Span>
    </Modal>


    {/* COMPLETE QUEST Lambdas */}

      {
        props.validation &&
        <FormSelection {...props} />
      }
  </Flex>
</Flex>
)}

const FormSelection = ({ styled, ...props}) => { 
 return(
  <Box>
    {
      props.validation.type === 'balance'
      ? <Modal
        content={<QuestCompleteForm threadName={props.threadName} postId={props.postId}  lambo={props.validation.lambdaURL} />}
        position='default'
        variant='default'
        styled={{
          position: 'default',
          m: 80
        }}
      >
        <Span pointer xxs justifySelf='flex-end' mx={2} tag='red'>Submit Balance</Span>
      </Modal>
      : <Modal
        content={<QuestCompleteFormTransaction threadName={props.threadName} postId={props.postId} lambo={props.validation.lambdaURL} />}
        position='default'
        variant='default'
        styled={{
          position: 'default',
          m: 80
        }}
      >
        <Span pointer xxs justifySelf='flex-end' mx={2} tag='red'>Submit Transaction</Span>
      </Modal>
    }
  </Box>
)}


const FeaturedQuestDetails = ({ styled, ...props}) => { 
  return(
    <Flex height='100%' width='100%' bg='white'>
      <Flex alignCenter  gradient='gray' flex={1}>
        <Box p={3}>
          <BoxAccess
            spaceAuto threadAuto
            level='thread'
            space='eth'
            threadName={props.threadName}
          >
          <BoxThreadPostDelete threadName={props.threadName} postId={props.postId}/>
          </BoxAccess>
        </Box>
      </Flex>
      <Flex flex={4} p={3}>
      <Flex alignCenter flex={3} >
  
        <Span><Image maxWidth={45} src={props.properties.image} /></Span>
        <Box ml={2} textAlign='left'>
          <Heading noMargin sm heavy >
            {props.properties.name}
          </Heading>
          <Heading noMargin xs>
            {props.properties.tagline}
          </Heading>
        </Box>
        </Flex>
      </Flex>
    </Flex>
  )
  }

export default QuestCatalogItem