import React from 'react';
import { Box, Flex, Span } from '@horizin/design-system';

import { BoxThreadPostList, BoxProfileRetrieve, BoxThreadPostDelete } from '@kames/3box-components/dist'
const PledgeList = ({ styled, ...props }) =>
<Box>
  <Flex height='100%'>
    <Flex gradient='gray'  minHeight={500} flex={1}>
      
    </Flex>
    <Flex flex={4}>
      <Box p={50} fullWidth>
        <BoxThreadPostList
          threadName='pledges' component={Pledge}
          threadAddress='/orbitdb/zdpuAkmTo9MDSrxoMHWCu1PrWaPHvLZF4QoxFuXKqXpC4924D/3box.thread.web3.pledges'
        />
      </Box>
    </Flex>
  </Flex>
</Box>

const Pledge = ({ styled, ...props}) => { 
 return(
  <Flex alignCenter between fullWidth card m={3}>
    <BoxProfileRetrieve address={props.author} />
    <Span><BoxThreadPostDelete threadName='pledges' postId={props.postId}/></Span>
  </Flex>
)
}

export default PledgeList