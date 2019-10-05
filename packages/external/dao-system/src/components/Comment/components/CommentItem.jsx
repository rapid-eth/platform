/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import { Box, Flex, Button,Panel, Paragraph, Heading } from '@horizin/design-system'
import { BoxThreadPostDelete, BoxProfileRetrieve } from '@kames/3box-components/dist'

import DateTime from 'luxon/src/datetime.js'

/* --- Local Dependencies --- */
import CommentPublish from '../CommentPublish'
import CommentList from '../CommentList'
import CommentThreadPanel from './CommentThreadPanel'
import CommentItemMinimal from './CommentItemMinimal'

/**
 * @function CommentItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const CommentItem = ({ box, styled, ...props}) => { 
  const [ timeFormatted, setTimeFormated ] = useState()

  /* -------------------- */
  /* Effects
  /* -------------------- */
  /**
   * @function GetThreadLocal
   * @description Watch global state for thread post list.
   */
  const CalculateTime = () => useEffect( () => {
    if(props.timestamp) {
      let time = DateTime
      .fromMillis(props.timestamp * 1000)
      .toLocaleString({
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit' 
      })
      setTimeFormated(time)
    }
  }, [props])


  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */
  CalculateTime()

  /* -------------------- */
  /* Comment Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
   <Flex alignCenter between card flex={1} m={2} width='100%'>
     <Flex column width='100%'>
      <Box cardHeader>
        <Flex alignCenter between>
          <BoxProfileRetrieve address={props.author} />
          <BoxThreadPostDelete threadName={props.threadName} postId={props.postId} />
        </Flex>
      </Box>
      <Box my={3}>
        <Paragraph>
          {props.message && props.message.data}
        </Paragraph>
      </Box>
     <Flex flex={1} gradient='gray' p={3} mx={-15} mb={-15}>
      <Flex alignCenter between flex={1}>
        <Box>
          {timeFormatted}
        </Box>
        <Flex>
          <Panel
            content={<CommentThreadPanel space={'eth'} threadName={props.postId} firstModerator={props.firstModerator} postId={props.postId}/>}
          >
            <Button xxs variant='white'>Comment Thread</Button>
          </Panel>
        </Flex>
      </Flex>
     </Flex>
     </Flex>
   </Flex>
)}

export default CommentItem