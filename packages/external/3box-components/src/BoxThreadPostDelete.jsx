/* --- Global Dependencies --- */
import React from 'react'
import { Button, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxThreadPostDelete = ({ threadName, postId, box, variant, children, ...props }) =>
{
  const clickHandler = async ({threadName, postId}) => {
    box.threadPostDelete({threadName, postId})
  }
  return (
    box.instance
    ? children 
      ? <Span onClick={() => clickHandler({threadName, postId})}>{children}</Span> 
      : <Button xs variant='red' onClick={() => clickHandler({threadName, postId})} >Delete Post</Button>
    : null
  )
}

export default props =>
<BoxWrapper>
  <BoxThreadPostDelete {...props} />
</BoxWrapper>
