/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { Box, Label, Heading } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
/* --- React Component --- */
const BoxThreadManageDetails = ({ box, threadAddress, threadName, styled, ...props }) => 
!idx(box, _=>_.threads[threadName].instance)
? null
:
<Box card m={10} {...styled}>
  <Label label={'name'}>
    {idx(box, _=>_.threads[threadName].instance._name)}
  </Label>
  <Label label={'space'}>
    {idx(box, _=>_.threads[threadName].instance.space)}
  </Label>
  <Label label={'moderator'}>
    {idx(box, _=>_.threads[threadName].instance._firstModerator)}
  </Label>
  <Label label={'private'}>
    {idx(box, _=>_.threads[threadName].instance._members ? 'Yes' : 'No') }
  </Label>
  <Label label={'address'} fontSize={0} palette={['gray', 2]} >
    {idx(box, _=>_.threads[threadName].instance._address)}
    </Label>
</Box>




export default props =>
<BoxWrapper>
  <BoxThreadManageDetails {...props} />
</BoxWrapper>
