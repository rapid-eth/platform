import idx from 'idx';
import Box3 from '3box/dist/3box'
import React, { useState, useEffect } from 'react';
import { Box, Router, Container, BackgroundImage } from '@horizin/design-system';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxGetSpace } from '@kames/3box-components/dist'

import {
  ItemView,
} from '@kames/dao-system'

const QuestRoutes = ({ box, styled, ...props}) => {
  const [ dispatched, setDispatched ] = useState()
  const [ post, setPost ] = useState()

  useEffect( () => { 
    if(!dispatched) {
      const runEffect = async () => {
        console.log(box, 'box.static')
        const ipfs = await Box3.getIPFS()
        const post = await ipfs.dag.get(props.postId)
        const postValues = idx(post, _=>_.value.payload.value)
        if(postValues) {
          setPost({
            message: postValues.message,
            postId: props.postId,
            author: post.value.identity && post.value.identity.id,
            timestamp: postValues.timestamp
          })
        }
      }

      runEffect()
    }
  }, [dispatched])

 return(
  post ?
  <Box gradient='blue' py={4}>
    <BackgroundImage opacity={.16} ratio={.35} src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />
    {console.log(post, 'post render')}
    <Container maxWidth={720} my={4}>
      <ItemView isFullView {...post} />
    </Container>
  </Box>
  : null
)}

QuestRoutes.defaultProps = {
  space: 'eth',
  access: 'public',
  key: 'quest'
}

export default props =><BoxWrapper><QuestRoutes {...props} /></BoxWrapper>
