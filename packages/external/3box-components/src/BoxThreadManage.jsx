/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span, Flex } from '@horizin/design-system'

/* --- React Component --- */
export default ({ box, address, firstModerator, members, space, name, threadAddress, threadName, styled, ...props }) => 
!box.instance
? null
: 
<Box card>
  <Flex>
    <Box flex={6} p={10}>
      <Label styled={{fontSize: 4}} noMargin label={'name'}>{name}</Label>
      <Label styled={{fontSize: 3}} noMargin label={'space'}>{space}</Label>

      <Flex my={10}>
        <Modal content={<PostList/>}>
          <Button xs variant='green'>View Posts</Button>
        </Modal>
        <Modal content={<PostList/>}>
          <Button xs variant='orange' mx={[10]}>Archive Thread</Button>
        </Modal>
        <Modal content={<div>heelo</div>}>
          <Button xs variant='blue' mx={[10]}>Send Invitation</Button>
        </Modal>
      </Flex>

      <Label label={'moderator'}>{firstModerator}</Label>
      <Label label={'private'}>{members ? 'Yes' : 'No' }</Label>
      <Label label={'address'} fontSize={0} palette={['gray', 2]} >{address}</Label>
    </Box>

    <Flex column flex={3} p={10}>

      <BoxThreadJoin
        box={box}
        threadAddress={threadAddress}
        threadName={threadName}
        space='meshhub'/>

      <Heading underline>Add Member</Heading>
      <BoxMemberAdd/>

      <Heading underline >Add Moderator</Heading>
      <BoxModeratorAdd/>

    </Flex>
  </Flex>
  <Box>
    <Heading borderRoundedTop bg='gray' p={15} noMargin sm heavy>Add Post to Thread</Heading>
      <BoxThreadPostCreate
        threadName={threadName}
      />
  </Box>
</Box>

const PostList = ({ styled, ...props}) =>
<Box>
  <Heading>Posts</Heading>
</Box>
