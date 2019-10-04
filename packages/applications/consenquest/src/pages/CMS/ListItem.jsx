import React from 'react';
import { PropTypes } from 'prop-types'
import {
  Button, Box, Flex, Heading, Image, Span,  Link, Panel, Modal
} from '@horizin/design-system';
const ListItem = ({ styled, ...props}) => { 
 return(
  <Flex alignCenter between card width='100%' my={1}>
    <Flex alignCenter>
      <Image src={props.image} maxWidth={28} mr={3} />
      <Box>
        <Link to={`/quest/${props.alias}`}>
          <Heading sm thin noMargin>{props.name}</Heading>
        </Link>
        <Heading xs thin noMargin>{props.tagline}</Heading>
      </Box>
    </Flex>
    <Flex>
      <Link to={`/quest/${props.alias}`}>
        <Button xs variant='green' mx={3}>View Quest</Button>
      </Link>
      {props.children}
    </Flex>
  </Flex>
)}


ListItem.defaultProps = {
  children: undefined,
  styled: {}
}

ListItem.propTypes = {
  children: PropTypes.array,
  styled: PropTypes.object
}

export default ListItem