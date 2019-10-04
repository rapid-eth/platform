import idx from 'idx';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Box, Button, Flex, Heading, Span } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'


const AdventureList = ({ box, styled, ...props }) => {
  const [ listItems, setList ] = useState()
  const [ isDispatched, setDispatched ] = useState()
  
  useEffect( () => {
    if (!listItems && !isDispatched && idx(box, _=>_.spaces[props.space].instance)) {
      box.get({
        space: props.space,
        key: props.key,
        access: props.access
      })
      setDispatched(true)
    }
  }, [box.spaces])

  useEffect( () => {
    if (!listItems && idx(box, _=>_.spaces[props.space].public[props.key])) {
      const list = idx(box, _=>_.spaces[props.space].public[props.key])
      setList(list) 
    }
  }, [box.spaces])

  return (
    !listItems
    ? props.loadingInformation ? <Span>No listItems</Span> : null
    : (
    <Flex column>
      {
        listItems && Object.keys(listItems).length > 0 &&
        Object.values(listItems)
        .map(item => (
          <Item {...item}/>
      ))}
    </Flex>
    )
  );
}

AdventureList.defaultProps = {
  listItemsKey: 'listItems',
  key: 'adventure',
  access: 'public'
}

AdventureList.propTypes = {
  append: PropTypes.string,
  space: PropTypes.string,
  access: PropTypes.string,
}

const Item = ({ importHandler, deleteHandler, styled, ...props}) => { 
 return(
  <Flex card between m={3} width='100%'>
    {console.log(props, 'adventure item')}
    <Box>
      <Heading>id: {props.id}</Heading>
      <Heading sm thin>type: {props.type}</Heading>
    </Box>
    <Flex>
      <Button xs variant='white' m={2}>Fields</Button>
    </Flex>
  </Flex>
)}

export default props =>
  <BoxWrapper>
    <AdventureList {...props} />
  </BoxWrapper>
