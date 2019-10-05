import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Form, Span, Modal, Heading, Image } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxAccess, BoxLoginButton, BoxThreadJoin, BoxThreadPostDelete } from '@kames/3box-components/dist'

const QuestFeatured = ({ box, ...props }) => {
  const [ dispatched, setDispatch ] = useState()
  const [ list, setList ] = useState()

  /**
   * @function GetThread
   */
  useEffect( () => {
    if( !list && idx(box, _=>_.threads[props.threadName].posts)) {
      setList(idx(box, _=>_.threads[props.threadName].posts))
    }
  }, [list, box.threads])
  /**
   * @function GetThread
   */
  useEffect( () => {
    if(!dispatched) {
      box.getThread({
        space: props.space,
        threadName: props.threadName,
        firstModerator: props.root,
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


QuestFeatured.defaultProps = {
  space: 'eth',
  threadName: 'featured',
  firstModerator: 'eth',
  members: true
}

export const QuestFeaturedAdd = ({ box, styled, ...props}) => { 
 return(
  <BoxAccess
    spaceAuto threadAuto
    level='thread'
    space={props.space}
    threadName={props.threadName}
    optionsThread={{
      members: props.members,
      firstModerator: props.firstModerator
    }}
    members={props.members}
  >
    <FormCreateQuestFeatured
      space={props.space}
      threadName={props.threadName}
      members={props.members}
      box={box}  
    />
  </BoxAccess>
)}

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

const FormCreateQuestFeatured = ({ box,...props }) => {
  const onSubmit = (values) => {
    box.threadPost({ 
      threadName: props.threadName,
      threadName: props.threadName,
      firstModerator: props.root,
      members: props.members,
      post: {
        type: 'reference',
        reference: 'quest',
        alias: values.alias
      }
    })
  }

  return (
    <Form callback={onSubmit}>
      <Field
        name="alias"
        placeholder="Alias"
      />
    </Form>
  );
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
)}


export default props =>
  <BoxWrapper>
    <QuestFeatured {...props} />
  </BoxWrapper>
