import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { Image, Box, Heading, Flex, Modal, Span, Link, } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxThreadPostDelete, BoxAccess } from '@kames/3box-components/dist'

import QuestCompleteForm from './components/QuestCompleteForm'

const QuestCatalogAdd = ({ box,...props }) => {
  const [ dispatched, setDispatch ] = useState()
  const [ list, setList ] = useState()

  /**
   * @function GetThreadLocal
   */
  useEffect( () => {
    if( !list && idx(box, _=>_.threads[props.threadName].posts)) {
      setList(idx(box, _=>_.threads[props.threadName].posts))
    }
  }, [list, box.threads])
  
  /**
   * @function GetThreadDispatch
   */
  useEffect( () => {
    if(!dispatched) {
      box.getThread({
        space: props.space,
        threadName: props.threadName,
        firstModerator: props.address,
        members: true,
      })
      setDispatch(true)
    }
  }, [box.threads, dispatched])

  return (
    <>
      <Flex column>
        { 
          list && Array.isArray(list) &&
          list.map( item => (
            <QuestFeaturedItem
              box={box}
              alias={item.message.data}
              threadName={props.threadName}
              postId={item.postId}
              {...item} />
          ))
        }
      </Flex>
    </>
  );
}

QuestCatalogAdd.defaultProps = {
  space: 'eth',
  threadName: 'quest_catalog',
  members: true
}


const QuestFeaturedItem = ({ box, styled, ...props}) => { 
  return(
   <Flex alignCenter between card flex={1} m={2} width='100%'>
     <QuestSelector box={box} postId={props.postId} alias={props.alias} space='eth' threadName={props.threadName} selector='quest'/>
   </Flex>
 )
 }


const QuestSelector = ({ box, styled, ...props}) => { 
  const [ item, setItem ] = useState()

  console.log(item, 'quest selector')
  /**
   * @function Selector
   */
  useEffect( () => { 
    if( !item && idx(box, _=>_.spaces[props.space].public[props.selector])) {
      const list = box.spaces[props.space].public[props.selector]
      const item = list.filter( ITEM => ITEM.alias === props.alias).map(i => i)
      if(item.length > 0) setItem(item[0].properties)
    }
  }, [item, box.spaces])

  return(
    !item
    ? <BoxAccess
        spaceAuto threadAuto
        level='thread'
        space={props.space}
        threadName={props.threadName}
        optionsThread={{
          members: true
        }}
      >
        <BoxThreadPostDelete threadName={props.threadName} postId={props.postId} />
      </BoxAccess>
    :
        <Flex between width='100%'>
          <Flex alignCenter flex={3} >


            <Span><Image maxWidth={45} src={item.image} /></Span>
            <Box ml={2} textAlign='left'>
              <Heading noMargin sm heavy >
                {item.name}
              </Heading>
              <Heading noMargin xs>
                {item.tagline}
              </Heading>
            </Box>
          </Flex>

          <Flex alignCenter flex={1} justifyContent='flex-end'>
          <Link to={`/quest/${props.alias}`}>
            <Span pointer justifySelf='flex-end' xxs tag='white'>View</Span>
          </Link>
            <Modal
              content={<FeaturedQuestDetails threadName={props.threadName} postId={props.postId} item={item} />}
              position='fullScreen'
              variant='fullScreen'
              styled={{
                position: 'fullScreen',
                m: 80
              }}
            >
              <Span pointer justifySelf='flex-end' xxs mx={3} tag='white'>Manage</Span>
            </Modal>
            <Modal
              content={<QuestCompleteForm threadName={props.threadName} postId={item.postId} />}
              position='default'
              variant='default'
              styled={{
                position: 'default',
                m: 80
              }}
            >
              <Span pointer xxs justifySelf='flex-end' mx={2} tag='red'>Complete</Span>
            </Modal>
          </Flex>
        </Flex>
)}
QuestSelector.defaultProps = {
  space: 'eth',
  access: 'public',
  selector: 'quest_catalog'
}

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

      <Span><Image maxWidth={45} src={props.item.image} /></Span>
      <Box ml={2} textAlign='left'>
        <Heading noMargin sm heavy >
          {props.item.name}
        </Heading>
        <Heading noMargin xs>
          {props.item.tagline}
        </Heading>
      </Box>
      </Flex>
    </Flex>
  </Flex>
)
}
 
export default props =>
  <BoxWrapper>
    <QuestCatalogAdd {...props} />
  </BoxWrapper>
