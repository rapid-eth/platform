import React, { useState, useEffect } from 'react';
import { Image, Box, Heading, Flex, Modal, Span, Link, Loading, } from '@horizin/design-system'
import { BoxThreadPostDelete, BoxAccess, Access } from '@kames/3box-components/dist'


import QuestCompleteForm from './QuestCompleteForm'
import QuestCompleteFormTransaction from './QuestCompleteFormTransaction'


const QuestCatalogItem = ({ styled, ...props}) => {
return(
!props.properties ? 'no props' :
<Flex between card width='100%' {...styled} {...props} >
  <Flex alignCenter flex={3} >

    <Span><Image maxWidth={45} src={props.properties.image} /></Span>
    <Box ml={2} textAlign='left'>
      <Link to={`/quest/${props.alias}`}>
        <Heading noMargin sm heavy >
          {props.properties.name}
        </Heading>
      </Link>
      <Heading noMargin xs>
        {props.properties.tagline}
      </Heading>
    </Box>
  </Flex>



  <Flex alignCenter flex={2} justifyContent='flex-end'>
    {/* COMPLETE QUEST Lambdas */}

    {
        props.validation &&
        <FormSelection {...props} />
      }
  {/* <Link to={`/quest/${props.alias}`}>
    <Span pointer justifySelf='flex-end' xxs tag='white'>View</Span>
  </Link> */}
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
  </Flex>
</Flex>
)}

const FormSelection = ({ styled, ...props}) => { 
  console.log(props, 'form selection')
 return(
   <Access
    threadAuto
    level='thread'
    space={props.space}
    threadName={props.threadName}
    isLoginDisabled
    optionsThread={props.optionsThread}
    componentLoading={<>
      <Span xxs mr={2}>Loading Space to Submit Evidence</Span>
      <Loading type='ring' />
    </>}
   >
      <Box>
        {
          props.validation.type === 'balance'
          ? <Modal
            content={<QuestCompleteForm
              questId={props.id} 
              threadName={props.threadName}
              postId={props.postId}
              lambo={props.validation.lambdaURL}
            />}
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
            content={<QuestCompleteFormTransaction
              questId={props.id} 
              lambo={props.validation.lambdaURL} 
              threadName={props.threadName}
              postId={props.postId}
              />}
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
  </Access>
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