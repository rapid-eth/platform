/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import { Button, Card, Span, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import { BoxThreadPost } from '@kames/3box-components/dist'
/* --- React Component --- */
const BoxThreadPosts = ({ box, component, to, variant, threadAddress, threadName, space, children, ...props }) => {
  const Component = component ? component : BoxThreadPost
  const [quests, setQuests] = useState([])

  const newQuest = idx(box, _ => _.threads["3box.thread.meshhub.meshhub"].posts)

  if (Array.isArray(newQuest) && newQuest.length > quests.length) {
    setQuests(newQuest)
  }
  useEffect(() => {
    const posts = box.static.getThreadByAddress(threadAddress)
    if (posts) {
      posts.then(res => {
        setQuests(res)
      })
    }
  }, [newQuest])
  return (
    !quests
      ? null
      : <>

        {
          quests && Array.isArray(quests) && quests.length > 0 &&
          quests.map(post => <Component id={[post.postId]} to={to} threadName={threadName} {...post.message} background={post.message.imageFeatured} />)
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