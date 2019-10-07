
import React, { useState, useEffect } from 'react';
import { Button, Loading, Span, Flex } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Access } from '@kames/3box-components/dist'

const UserAddToThread = ({ box,...props }) => {

  console.log(props, 'user folo pros')
  const followHandler = (values) => {
    box.threadPost({
      space: props.space,
      threadName: props.threadName.toLowerCase(), // Target user ETH address.
      post: {
        object: 'address_reference',
        data: box.address, // Follower ETH address.
        meta: {
          parent_type: 'array',
        },
        schema: {
          reference: 'user',
          version: '1.0.0.',
        }
      }
    })
    /**
     * @function SaveFollowReference
     * @desciption Store a reference of following threads published messages.
     * @todo Add set_insert to provide.
     */
    // box.insert({
    //   space: props.space,
    //   access: 'public',
    //   keys: []
    // })
  }

  return (
    <Access
      spaceAuto threadAuto loginAuto
      componentLoading={LoadingComponent}
      optionsThread={{
        members: false,
        firstModerator: props.firstModerator
      }}
      level='thread' space={'eth'} threadName={props.threadName.toLowerCase()} >
        <Button xs onClick={followHandler} variant='green' width='100%'>Follow</Button>
    </Access>
  );
}

UserAddToThread.defaultProps = {

}

const LoadingComponent = ({ styled, ...props}) => { 
 return(
  <Button xs variant='white' width='100%'>
    <Flex alignCenter>
      <Span>Follow</Span> <Span color='#000' ml={2}><Loading type='ring'/></Span> 
    </Flex>
  </Button>
)}

export default props =>
  <BoxWrapper>
    <UserAddToThread {...props} />
  </BoxWrapper>
