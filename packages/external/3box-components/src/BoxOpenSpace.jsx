/* --- Global Dependencies --- */
import React, { useState } from 'react'
import { Button, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxOpenSpace = ({ box, children, space, variant, ...props }) => {
  const [ loading, setLoading ] = useState(false)
  return (
    loading 
    ? <Button variant={variant}><Span>Loading Space...</Span></Button>
    : <Span onClick={() => { box.openSpace(space) ; setLoading(true) }}>{children}</Span>
  )
}

export default props =>
<BoxWrapper>
  <BoxOpenSpace {...props} />
</BoxWrapper>
