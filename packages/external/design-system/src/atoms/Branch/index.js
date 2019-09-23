/* --- Global Dependencies --- */
import React from "react";
import { Box, Flex, Span } from '../../index'

const Branch = ({data}) => {
  console.log(data, 'branch')
return ( 
<Flex column>
  { 
    Array.isArray(data) 
    ? <>
      <Span xs normal>(Array)</Span>
      <Span xs>[</Span>
        {data.map(d =>
        <>
          <Branch data={d}/>
        </>)}
      <Span xs>]</Span>
      </>
    : typeof data === 'object'
      ? Object.keys(data).map( d => 
        <>
          <Span xs heavy>{d}</Span>
          <Box ml={10}>
            <Branch data={data[d]}/>
          </Box>
        </>)
      : <Span xs normal>{data}</Span>
  }
</Flex>
)}
export default Branch