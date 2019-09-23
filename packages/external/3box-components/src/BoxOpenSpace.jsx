/* --- Global Dependencies --- */
import React from 'react'
import { Span} from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxOpenSpace = ({ box, children, space, ...props }) =>
<Span onClick={() => box.openSpace(space)} >{children}</Span>

export default props =>
<BoxWrapper>
  <BoxOpenSpace {...props} />
</BoxWrapper>
