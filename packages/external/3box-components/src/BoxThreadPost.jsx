/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Branch, Box, Card, Flex, Paragraph, Heading, Label } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import BoxThreadPostDelete from './BoxThreadPostDelete'
/* --- React Component --- */
const BoxThreadPosts = ({ box, message, author, timestamp, threadName, postId,  children, styled, ...props }) => 
<Flex card column mb={10} {...styled} >
  <Box>
    <Card {...message} />
    <Box card mt={20}>
      <Heading cardHeader md >Post Data Structure</Heading>
      <Branch data={message}/>
    </Box>
  </Box>
  <Box mt={20}>
    <Label styled={{fontSize: 2}} noMargin label={'author'}>
      {author}
    </Label>
    {/* <Flex>
      <Label styled={{fontSize: 2}} noMargin label={'timestamp'}>
        {timestamp}
      </Label>
      <Label styled={{fontSize: 1, ml: 20}} noMargin label={'post id'}>
        {postId}
      </Label>
    </Flex> */}
  </Box>
  <Flex alignEnd>
    <BoxThreadPostDelete threadName={threadName} postId={postId} />
  </Flex>
</Flex>

BoxThreadPosts.defaultProps = {
  variant: 'green'
}

export default props =>
<BoxWrapper>
  <BoxThreadPosts {...props} />
</BoxWrapper>