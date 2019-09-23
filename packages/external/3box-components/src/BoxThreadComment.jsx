/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span, Flex } from '@horizin/design-system'
import BoxThreadPostDelete from './BoxThreadPostDelete'
/* --- React Component --- */

export default ({ box, variant, children, ...props }) => 
!box.instance
? <Box card {...styled}>
    <Paragraph>
      {message}
    </Paragraph>
    <Heading sm right>{author}</Heading>
    <Flex between>
      <Button xs white>Trace</Button>
      <BoxThreadPostDelete thread={thread} postId={postId}/>
    </Flex>
  </Box>
: null