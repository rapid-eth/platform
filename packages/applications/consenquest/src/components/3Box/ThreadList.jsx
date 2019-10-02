/* eslint-disable no-negated-condition */
/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import { Button, Card, Span, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import { BoxThreadPost } from '@kames/3box-components/dist'
/* --- React Component --- */
const BoxThreadPosts = ({ box, component, to, variant, threadAddress, threadName, space, children, ...props }) => {
  const Component = component ? component : BoxThreadPost
  const [posts, setPosts] = useState([])

  const newPosts = idx(box, _ => _.threads[threadName].posts)

  if (Array.isArray(newPosts) && newPosts.length > posts.length) {
    setPosts(newPosts)
  }

  useEffect(() => {
    const posts = box.static.getThreadByAddress(threadAddress)
    if (posts) {
      posts.then(res => {
        setPosts(res)
      })
    }
  }, [newPosts])
  
  return (
    !posts
      ? null
      : <>

        {
          posts && Array.isArray(posts) && posts.length > 0 &&
          posts
          .map(post =>
            <Component
              key='test'
              threadName={threadName}
              {...post}
              />)
        }

      </>
  )
}

BoxThreadPosts.defaultProps = {
  variant: 'green',
  threadAddress: "/orbitdb/zdpuAkmTo9MDSrxoMHWCu1PrWaPHvLZF4QoxFuXKqXpC4924D/3box.thread.web3.pledges"
}

export default props =>
  <BoxWrapper>
    <BoxThreadPosts {...props} />
  </BoxWrapper>