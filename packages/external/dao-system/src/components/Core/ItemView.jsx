/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import { Box, Flex, Button,Panel, Paragraph, Heading, Span, HorizontalRule, Link, Markdown } from '@horizin/design-system'
import { BoxThreadPostDelete, BoxProfileRetrieve } from '@kames/3box-components/dist'
import DateTime from 'luxon/src/datetime.js'

/* --- Local Dependencies --- */

/**
 * @function ItemItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const ItemItem = ({ box, styled, ...props}) => { 
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
  /* Item Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
   <Flex alignCenter between card flex={1} m={2} width='100%'>
     <Flex column width='100%'>
      <Box p={3} my={3}>
          <Flex alignCenter between>
            <Box>
              <Heading lg heavy>{props.message.data.name}</Heading>
            </Box>
            <Box textRight>
              <Box>
                <Span xs tag='green'>{props.message.data.category}</Span>
              </Box>
              <Flex alignCenter mt={2}>
                <Flex>
                  {
                    props.message.data.tags.split(',').map( item => <Span xxs ml={2} tag='blue'>{item}</Span> )
                  }
                </Flex>
              </Flex>
            </Box>
          </Flex>
          <HorizontalRule my={3}/>
          
          <Box>
            <Heading sm heavy>Summary</Heading>
            <Paragraph xs>
              {props.message && props.message.data.summary}
            </Paragraph>
          </Box>
        {
          props.isFullView
          ? <Box mb={3} >
              <Markdown>
                {props.message && props.message.data.content}
              </Markdown>
            </Box>
          : <Box maxHeight={240} overflow='hidden' mb={3} >
              <Markdown>
                {props.message && props.message.data.content}
              </Markdown>
            </Box>
        }
        

        <Flex alignCenter between width='100%'>
          <Link to={`/proposal/${props.postId}`}>
            <Button ><Span>View Full Post</Span></Button>
          </Link>
          <Box textRight>
            <BoxThreadPostDelete threadName={props.threadName} postId={props.postId}>
              <Span xxs tag='white'>Delete Proposal</Span>
            </BoxThreadPostDelete>
          </Box>
        </Flex>
      </Box>
     <Flex flex={1} gradient='gray' p={3} mx={-15} mb={-15}>
      <Flex alignCenter between flex={1}>
      <Flex alignCenter between>
          <BoxProfileRetrieve address={props.author} />
        </Flex>
        <Box>
          {timeFormatted}
        </Box>
      </Flex>
     </Flex>
     </Flex>
   </Flex>
)}

export default ItemItem
