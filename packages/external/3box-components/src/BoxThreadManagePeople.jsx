/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Box, Heading } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import BoxMemberAdd from './BoxMemberAdd'
import BoxModeratorAdd from './BoxModeratorAdd'

/* --- React Component --- */
const BoxThreadManagePeople = ({ box, threadAddress, threadName, styled, ...props }) => 
!idx(box, _=>_.threads[threadName].instance)
? null // Add Empty Components
: 
<Box card m={10} {...styled}>
  <MemberAdd threadName={threadName} threadAddress={threadAddress} />
  <ModeratorAdd threadName={threadName} threadAddress={threadAddress}/>
</Box>




const MemberAdd = ({ threadAddress, threadName, styled, ...props}) =>
<Box>
  <Heading>Add Member</Heading>
  <BoxMemberAdd threadName={threadName} threadAddress={threadAddress}/>
</Box>

const ModeratorAdd = ({ threadAddress, threadName, styled, ...props}) =>
<Box>
  <Heading>Add Moderator</Heading>
  <BoxModeratorAdd threadName={threadName} threadAddress={threadAddress}/>
</Box>

export default props =>
<BoxWrapper>
  <BoxThreadManagePeople {...props} />
</BoxWrapper>
