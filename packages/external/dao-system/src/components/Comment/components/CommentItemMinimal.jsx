import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Box, Flex, HorizontalRule, Span } from '@horizin/design-system'
import { BoxProfileRetrieve } from '@kames/3box-components/dist'
import DateTime from 'luxon/src/datetime.js'

/**
 * @function CommentItemMinimal
 * @description Manage a generic decentralized comment system.
 * @return {Function} A comment component
 */
const CommentItemMinimal = ({ box, styled, ...props}) => { 
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
      time
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
  /* Comment Minimal
  /* A minimal comment display component.
  /* type: 'comment_minimal'
  /* version: 1.0.0.
  /* -------------------- */
  return(
    <Flex flex={1} column>
      <Flex flex={1}>
        <BoxProfileRetrieve address={props.author} />
      </Flex>
      <Span xxs tag='white'>{timeFormatted} </Span>
      <HorizontalRule />
      <Box my={3}>
        {props.message && props.message.data}
      </Box>
    </Flex>
)}

CommentItemMinimal.defaultProps = {
  styled: {}
}

CommentItemMinimal.propTypes = {
  box: PropTypes.object,
}

export default CommentItemMinimal