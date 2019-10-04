import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { Image, Box, Heading, Flex, Modal, Span, } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxThreadPostDelete } from '@kames/3box-components/dist'

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
        members: props.members,
      })
      setDispatch(true)
    }
  }, [box.threads, dispatched])

  return (
    <>
      <Flex column>
        { 
          list && Array.isArray(list) &&
          list.map( item=> (
            <QuestFeaturedItem
              box={box}
              alias={item.message.alias}
              threadName={props.threadName}
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
     <QuestSelector box={box} alias={props.alias} space='eth' selector='quest'/>
     <Modal
       content={<FeaturedQuestDetails threadName={props.threadName} postId={props.postId} />}
       position='fullScreen'
       variant='fullScreen'
       styled={{
         position: 'fullScreen',
         m: 80
       }}
     >
       <Span justifySelf='flex-end' xxs tag='white'>View</Span>
     </Modal>
   </Flex>
 )
 }


const QuestSelector = ({ box, styled, ...props}) => { 
  const [ item, setItem ] = useState()
  /**
   * @function Selector
   */
  useEffect( () => { 
    if( !item && idx(box, _=>_.spaces[props.space].public[props.selector])) {
      const list = box.spaces[props.space].public[props.selector]
      const item = list.filter( ITEM => ITEM.alias === props.alias).map(i => i)
      console.log(item, 'item selection')
      if(item.length > 0) setItem(item[0].properties)
    }
  }, [item, box.spaces])
  return(
    !item
    ? 'No Item'
    : <Flex>
        <Span><Image maxWidth={45} src={item.image} /></Span>
        <Box ml={2} textAlign='left'>
          <Heading noMargin sm >
            {item.name}
          </Heading>
          <Heading noMargin xs>
            {item.tagline}
          </Heading>
        </Box>
      </Flex>
 )
 }

 const FeaturedQuestDetails = ({ styled, ...props}) => { 
  return(
   <Flex height='100%' width='100%' bg='white'>
     <Flex gradient='gray' flex={1}>
     <Box>
       <BoxThreadPostDelete threadName={props.threadName} postId={props.postId}/>
     </Box>
     </Flex>
     <Flex flex={4}>
       <Heading>Information</Heading>
     </Flex>
   </Flex>
 )
 }

 
export default props =>
  <BoxWrapper>
    <QuestCatalogAdd {...props} />
  </BoxWrapper>
