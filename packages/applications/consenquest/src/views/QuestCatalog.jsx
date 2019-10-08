/* --- Global Dependencies --- */
import React from 'react';
import PropTypes from 'prop-types'
import {
  Box, HorizontalRule, Heading, Image, Span, Flex, Modal, Button,
} from '@horizin/design-system';
import {
  Messaging, Reference
} from '@kames/3box-components/dist'
import {
  QuestCatalogItem
} from '@kames/dao-system'


// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const QuestCatalog = props => { 

  return(
  <Messaging
    space={SPACE}
    threadName='quest_catalog'
    firstModerator={props.address}
    component={Reference}
    styled={{my: 3}}
    pass={{
      space:SPACE, threadName: 'quest_catalog', access:'public', index:'quest',
      component: QuestCatalogItem,
      pass: {
        space: SPACE, threadName: 'quest_catalog',
        optionsThread: {
          members: true,
          firstModerator: props.address
        },
        styled: {
          m: 2,
          p: 2
        }
      }
    }}
  />
)}

QuestCatalog.defaultProps = {

}

QuestCatalog.propTypes = {

}

export default QuestCatalog