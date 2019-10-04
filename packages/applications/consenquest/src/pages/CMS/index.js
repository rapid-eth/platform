import React from 'react';
import { PropTypes } from 'prop-types'
import { BackgroundImage, Button, Box, Flex, Heading, Menu, Image, HorizontalRule, Paragraph, Container, Span, Router } from '@horizin/design-system';

import {
  BoxAccess,
} from '@kames/3box-components/dist'

import {
  AdventureCreate,
  ContentTypeAdventure, 
  ContentTypeList,
  ContentTypeKeyList,
  ContentTypeInstall
} from '@kames/dao-system'

import Adventure from './Adventure'
import Quest from './Quest'
import Resource from './Resources'
import Curation from './Curation'

const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const INDEX = process.env.REACT_APP_DEFAULT_INDEX


const Page = ({ styled, ...props }) => {

  return (
    <Flex minHeight={500} >
      <Flex gradient='gray' flex={2}>
        <Menu
          vertical
          items={[
            {
              label: 'Overview',
              to: '/cms'
            },
            {
              label: 'Adventures',
              to: '/cms/adventures'
            },
            {
              label: 'Quests',
              to: '/cms/quests'
            },
            {
              label: 'Resources',
              to: '/cms/resources'
            },
            {
              label: 'Curation',
              to: '/cms/curation'
            },
          ]}
        />
      </Flex>
      <Flex flex={6}>
        <Box p={4} width='100%'>
          <CMSRoutes />
        </Box>
      </Flex>
    </Flex>
  )
}


Page.defaultProps = {

}

Page.propTypes = {
  styled: PropTypes.object
}

const CMSRoutes = ({ styled, ...props}) => { 
 return(
  <Router>
    <CMSOverview path='/' />
    <CMSAdventures path='/adventures' />
    <CMSQuests path='/quests' />
    <CMSResources path='/resources' />
    <Curation path='/curation' />
  </Router>
)
}

const CMSOverview = ({ styled, ...props}) => { 
 return(
  <Flex column width='100%'>
    <Flex column>
      <Heading sm>Root: <Span xxs tag='white'>{ROOT}</Span></Heading>
      <Heading sm my={2}>Default Space: <Span xxs tag='white'>{SPACE}</Span></Heading>
      <Heading sm>Site Index: <Span xxs tag='white'>{INDEX}</Span></Heading>
      <ContentTypeKeyList space={SPACE} />
    </Flex>
    <BoxAccess
      spaceAuto
      space={SPACE}
      level='space'
    >
      <Span my={3}><Heading sm heavy>Enabled Content Types</Heading></Span>
      <Box>
        <ContentTypeList space={SPACE} />
      </Box>
      <Span my={3}><Heading sm heavy mt={3}>Manage Content Types</Heading></Span>
      <Flex gutter3>
        <ContentTypeInstall space={SPACE} title='Adventure' contentType={CONTENT_TYPE_ADVENTURE} />
        <ContentTypeInstall space={SPACE} title='Quest' contentType={CONTENT_TYPE_QUEST} />
        <ContentTypeInstall space={SPACE} title='Resource' contentType={CONTENT_TYPE_RESOURCE} />
      </Flex>
  </BoxAccess>
  </Flex>
)}

const CMSAdventures = ({ styled, ...props}) => { 
 return(
  <Flex column width='100%'>
    <Adventure />
  </Flex>
)}

const CMSQuests = ({ styled, ...props}) => { 
 return(
  <Flex column width='100%'>
    <Quest />
  </Flex>
)}

const CMSResources = ({ styled, ...props}) => { 
 return(
  <Flex column width='100%'>
    <Resource />
  </Flex>
)}

export default Page

const CONTENT_TYPE_ADVENTURE = {
  id: 'adventure',
  type: 'content_type',
  schema: {
    title: 'String',
    tagline: 'String',
    summary: 'String',
    content: 'String',
    image: 'String',
    imageFeatured: 'String',
    imageCover: 'String',
  }
}

const CONTENT_TYPE_QUEST = {
  id: 'quest',
  type: 'content_type',
  schema: {
    title: 'String',
    tagline: 'String',
    summary: 'String',
    content: 'String',
    image: 'String',
    imageFeatured: 'String',
    imageCover: 'String',
  }
}

const CONTENT_TYPE_RESOURCE = {
  id: 'resource',
  type: 'content_type',
  schema: {
    title: 'String',
    tagline: 'String',
    summary: 'String',
    content: 'String',
    image: 'String',
    imageFeatured: 'String',
    imageCover: 'String',
  }
}