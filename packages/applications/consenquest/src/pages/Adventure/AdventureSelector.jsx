import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { Box, Flex, Span, Heading, Image, Absolute, Button, Link } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const AdventureSelector = ({ box, styled, ...props}) => { 
  const [ item, setItem ] = useState()
  console.log(props, 'adsss')
  /**
   * @function Selector
   */
  useEffect( () => { 
    if( !item && idx(box, _=>_.spaces[props.space].public[props.selector])) {
      const list = box.spaces[props.space].public[props.selector]
      const item = list.filter( ITEM => ITEM.alias === props.alias).map(i => i)
      console.log(item, 'item selection')
      if(item.length > 0) setItem(item[0].properties)
    }
  }, [ box, props.alias, props.selector, item, box.spaces ])

  return(
    item
    ?<Flex column>
      <Absolute layout='topRight' mt={-4} mr={-4} ><Image maxWidth={45} src={item.image} /></Absolute>
      <Heading xs>Step {props.count}.</Heading>
      <Box textAlign='left'>
        <Heading noMargin md >
          {item.name}
        </Heading>
        <Heading noMargin xs>
          {item.tagline}
        </Heading>
      </Box>
      <Flex mt={3}>
        <Link to={`/quest/${props.alias}`}>
          <Button xs mt='auto' justifySelf='flex-end'>View</Button>
        </Link>
        <Button xs variant='red' mt='auto' mx={3} justifySelf='flex-end'>Start</Button>
      </Flex>
    </Flex>
    : 'no deta'
)}

{/* <Box>
      <Flex column card cardHover p={4} >
        <Heading xs>Step {index}.</Heading>
        <AdventureSelector alias={alias} />
        <Flex>
          <Link to={`/quest/${alias}`}>
            <Button xs mt='auto' justifySelf='flex-end'>View</Button>
          </Link>
          <Button xs variant='red' mt='auto' mx={3} justifySelf='flex-end'>Start</Button>
        </Flex>
        <Absolute layout='topRight' m={-2}>
          <Span xxs tag='green'>{tag}</Span>
        </Absolute>
      </Flex>
    </Box> */}

AdventureSelector.defaultProps = {
  space: 'eth',
  selector: 'quest'
}

export default props =>
<BoxWrapper>
  <AdventureSelector {...props} />
</BoxWrapper>
