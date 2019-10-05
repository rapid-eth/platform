/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import {  Link, Box, Flex, Paragraph, Heading, Span, Panel, Image } from '@horizin/design-system'
import {
  BoxAccess,
} from '@kames/3box-components/dist'

import QuestCatalogAdd from '../QuestCatalogAdd'

/* --- CMS Global Configs --- */
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
/**
 * @function QuestItem
 * @description A default decentralized comment component.
 * @return {Function} React component.
 */
const QuestItem = ({ box, styled, ...props}) => { 


  /* -------------------- */
  /* Effects
  /* -------------------- */

  /* -------------------- */
  /* Initialize Effects
  /* -------------------- */


  /* -------------------- */
  /* Quest Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */
  return(
    <Flex column p={0}>
      <Flex between center column card borderNone boxShadow='sunset' flex={1} textAlign='center' p={0} zIndex={20}>
        <Flex center column card circle width={180} mt={-20} boxShadow='sunset'>
          <Image bg='white' maxWidth={62} src={props.properties.image} />
        </Flex>
        <Box p={3}>
          <Heading md fontWeight={300}>
            {props.properties.name}
          </Heading>
          <Paragraph fontSize={[1]}>
            {props.properties.tagline}
          </Paragraph>
        <Flex alignCenter evenly >
          <Panel content={<AddQuestToSpace alias={props.alias} />} label='Start Quest'>
            <Span xxs tag='green'>Start Quest</Span>
          </Panel>
          <Link to={`/quest/${props.alias}`}>
            <Span xxs tag='white'>Full Quest</Span>
          </Link>
        </Flex>
        </Box>

        <Flex alignCenter alignSelf='flex-end' between gradient='gray' width='100%' p={3} mt={'auto'} >
          <Flex alignCenter>
            <Image maxWidth={28}src='https://www.flaticon.com/premium-icon/icons/svg/1329/1329979.svg' />
            <Span mx={2}>Comment</Span>
          </Flex>
          <Flex alignCenter>
            <Span mx={2}>Like</Span>
            <Image maxWidth={15}src='https://www.flaticon.com/premium-icon/icons/svg/232/232456.svg' />
          </Flex>
        </Flex>

      </Flex>
    </Flex>
)}

QuestItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
}

QuestItem.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

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
 )
 }

export default QuestItem