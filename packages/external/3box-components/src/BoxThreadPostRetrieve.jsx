/* --- Global Dependencies --- */
import React, { useEffect, useState } from 'react'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* --- React Component --- */
const BoxThreadPostRetrieve = ({ box, variant, component, postId, threadAddress, threadName, space, children, ...props }) => {
  const [ message, setMessage ] = useState(undefined)
  useEffect( () => {
    if(box.instance && postId) {
      const runEffect = async () => {
        const ipfs = await box.static.getIPFS()
        const threadPost = await ipfs.dag.get(postId)
        if (threadPost) {
          setMessage(threadPost.value.payload.value.message)
        }
      };
      runEffect();
    }
  }, [postId])

  return (
    !message 
      ? null 
      :React.createElement(component, { ...message } )
  )
}

export default props =>
<BoxWrapper>
  <BoxThreadPostRetrieve {...props} />
</BoxWrapper>