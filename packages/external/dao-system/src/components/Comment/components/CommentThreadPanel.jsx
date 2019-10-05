/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Box, Heading } from '@horizin/design-system'
import { BoxAccess } from '@kames/3box-components/dist'
import DateTime from 'luxon/src/datetime.js'

/* --- Local Dependencies --- */
import CommentPublish from '../CommentPublish'
import CommentList from '../CommentList'
import CommentItemMinimal from './CommentItemMinimal'

/**
 * @function CommentThreadPanel
 * @description Manage a decentralized comment thread in panel.
 * @return {Function} A comment component
 */
const CommentThreadPanel = ({ box, styled, ...props}) => { 

  /* -------------------- */
  /* Comment Thread Panel
  /* A comment thread panel to display nested comments.
  /* type: 'comment_minimal'
  /* version: 1.0.0.
  /* -------------------- */
  return(
    <Box p={4} minWidth={380} maxWidth={380}>
      <Heading>Comment Thread</Heading>
      <CommentList
        component={CommentItemMinimal}
        space={props.space} threadName={props.threadName}  firstModerator={props.firstModerator}
      />
      <BoxAccess
        spaceAuto threadAuto
        level='thread'
        space={props.space}
        threadName={props.threadName}
        optionsThread={{
          members: false,
          firstModerator: props.firstModerator
        }}
      >
      <CommentPublish 
        threadName={props.threadName} space={props.space} firstModerator={props.firstModerator} 
        />
      </BoxAccess>
    </Box>
)}

CommentThreadPanel.defaultProps = {
  styled: {}
}

CommentThreadPanel.propTypes = {
  box: PropTypes.object,
}

export default CommentThreadPanel