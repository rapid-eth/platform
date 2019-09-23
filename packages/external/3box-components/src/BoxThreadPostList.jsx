/* --- Global Dependencies --- */
import idx from 'idx'
import React from 'react'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import BoxThreadPost from './BoxThreadPost'
/* --- React Component --- */
const BoxThreadPosts = ({ box, component, variant, threadAddress, threadName, space, children, ...props }) => {
const Component = component ? component : BoxThreadPost

return (
  !idx(box, _=>_.threads[threadName].posts)
    ? null
    : <>

      {
        box.threads[threadName].posts && Array.isArray(box.threads[threadName].posts) &&
        box.threads[threadName].posts.map( post => <Component threadName={threadName} {...post} />)
      }

    </>
  )
}

BoxThreadPosts.defaultProps = {
  variant: 'green'
}

export default props =>
<BoxWrapper>
  <BoxThreadPosts {...props} />
</BoxWrapper>