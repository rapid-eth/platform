/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Box, Label, Flex } from '@horizin/design-system'
import BoxThreadJoin from './BoxThreadJoin'
import BoxThreadPosts from './BoxThreadPostList'
import BoxThreadPostCreate from './BoxThreadPostCreate'

/* --- React Component --- */
export default ({ box, thread, space, children, styled, ...props }) => 
!idx(box, _=>box.spaces[space].threads)
? null
: <Box  {...styled} width={1}>
    {
      box.spaces[space].threads && Array.isArray(box.spaces[space].threads) &&
      box.spaces[space].threads.map( (thread, key) => <ThreadItem box={box} {...thread} threadName={thread.name} threadAddress={thread.address} space={space} /> )
    }
  </Box>

const ThreadItem = ({ box, address, firstModerator, members, space, name, threadAddress, threadName, styled, ...props}) =>
<Box card>
  <Flex>
    <Box flex={6} p={10}>
      <Label styled={{fontSize: 3}} flexDirection='row' noMargin label={'space'}>{space}</Label>
      <Label styled={{fontSize: 4}} noMargin label={'name'}>{name}</Label>
    </Box>

    <Flex column flex={3} p={10}>

      <BoxThreadJoin
        box={box}
        threadAddress={threadAddress}
        threadName={threadName}
        space='meshhub'/>
    </Flex>
  </Flex>
  <BoxThreadPostCreate threadName={threadName}/>
  <Box>
    <BoxThreadPosts threadName={threadName}/>
  </Box>
</Box>