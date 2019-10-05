import idx from 'idx'
import React, { useState, useEffect } from 'react';
import { Box, Flex, Span, Heading, Image, Absolute, Button, Link, Panel } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxAccess } from '@kames/3box-components/dist'
import Paragraph from '@horizin/design-system/dist/atoms/Paragraph';
import { QuestCatalogAdd } from '@kames/dao-system'
/* --- CMS Global Configs --- */
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

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
        <Panel content={<AddQuestToSpace alias={props.alias} />} label='Start Quest'>
            <Button xs variant='green' mt='auto' mx={3} justifySelf='flex-end'>Start Quest</Button>
          </Panel>
      </Flex>
    </Flex>
    : 'no deta'
)}

const AddQuestToSpace = ({ styled, ...props}) => { 
  return(
   <Box width={350} p={4}>
     <Heading md heavy>Quest Journal</Heading>
     <Paragraph sm>
       <strong>Save quests to personal journal.</strong>
       <br/> Keep track of your journey.
     </Paragraph>
 
     <BoxAccess
       spaceAuto threadAuto
       level='thread'
       space={SPACE}
       threadName='quest_catalog'
       optionsThread={{
         members: true,
       }}
     >
       <QuestCatalogAdd alias={props.alias} />
     </BoxAccess>
   </Box>
)}

AdventureSelector.defaultProps = {
  space: 'eth',
  selector: 'quest'
}

export default props =>
<BoxWrapper>
  <AdventureSelector {...props} />
</BoxWrapper>
