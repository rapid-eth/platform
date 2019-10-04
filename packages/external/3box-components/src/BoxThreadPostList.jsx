/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import BoxThreadPost from './BoxThreadPost'
/* --- React Component --- */
const BoxThreadPosts = ({ box, component, variant, members, threadAddress, threadName, space, children, ...props }) => {
const Component = component ? component : BoxThreadPost
const [posts, setPosts] = useState()
const [isMembers, setMembers] = useState(members)
/**
 * @function UpdateThreadList
 */
useEffect( () => { 
  if(box.threads[threadName]) {
    setPosts(box.threads[threadName])
  }
}, [box.threads, box.threads[threadName]])

useEffect(() => {
  const runEffect = async() => {
    if (!posts && box.address) {
      let post
      if(threadAddress) {
        post = await box.static.getThreadByAddress(threadAddress)
      } else {
        post = await box.static.getThread(
          space,
          threadName,
          box.address,
          members
        )
      }
      setPosts(post)
    }
    if (posts) {
      setPosts(posts)
    }
    if(box.threads && box.threads[threadName] && box.threads[threadName].posts) {
      setPosts(box.threads[threadName].posts)
    }
  }
  runEffect()
}, [box.address, threadAddress, box.threads])

return (
  !posts
    ? null
    : <>
        {
          posts && Array.isArray(posts) &&
          posts.map( post => <Component threadName={threadName} {...post} />)
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