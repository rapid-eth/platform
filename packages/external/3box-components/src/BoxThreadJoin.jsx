/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
/* --- React Component --- */
const BoxThreadJoin = ({ box, variant, threadAddress, threadName, space, children, ...props }) => 
box.instance
? <Button xs variant={variant} onClick={()=>box.joinThread({
    threadAddress: threadAddress,
    threadName: threadName,
    space: space
  })}>
    Join Thread
  </Button>
: null

BoxThreadJoin.defaultProps = {
  variant: 'green'
}


export default props =>
<BoxWrapper>
  <BoxThreadJoin {...props} />
</BoxWrapper>