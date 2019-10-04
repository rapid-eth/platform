import idx from 'idx';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import useForm from "react-hook-form";
import { Box, Button, Flex, Heading, Span } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'


const ContentTypeList = ({ box, styled, ...props }) => {
  const [ index, setIndex ] = useState()
  const [ isDispatched, setDispatched ] = useState()
  
  useEffect( () => {
    if (!index && !isDispatched && idx(box, _=>_.spaces[props.space].instance)) {
      box.get({
        space: props.space,
        key: 'index',
        access: 'public'
      })
      setDispatched(true)
    }
  }, [box.spaces])

  useEffect( () => {
    if (!index && idx(box, _=>_.spaces[props.space].public.index.payload)) {
      const index = idx(box, _=>_.spaces[props.space].public.index.payload)
      setIndex(index)
    }
  }, [box.spaces])

  return (
    <Heading sm>
      Index Keys: 
      {
        index && Array.isArray(Object.keys(index)) && Object.keys(index).length > 0 &&
        Object.values(index)
        .map(item => (
          <IndexItem {...item}/>
      ))}
    </Heading>
  );
}

const IndexItem = ({ importHandler, deleteHandler, styled, ...props}) => { 
  return(
   <Span xxs tag='white' >{props.id}</Span>
 )}

export default props =>
<BoxWrapper>
  <ContentTypeList {...props} />
</BoxWrapper>