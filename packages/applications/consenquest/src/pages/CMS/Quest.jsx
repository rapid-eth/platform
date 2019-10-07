import React from 'react';
import { PropTypes } from 'prop-types'
import {
  Button, Box, Flex, Heading, Image, Span,  Link, Panel, Modal
} from '@horizin/design-system';

import {
  BoxGetSpace,
  BoxList,
  BoxAccess,
} from '@kames/3box-components/dist'

import {
  QuestCreate, ContentImport, ContentDelete
} from '@kames/dao-system'

import ListItem from './ListItem'

// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const INDEX = process.env.REACT_APP_DEFAULT_INDEX

/**
 * @function CMSQuest
 * @param {Object} props props
 * @return {Obect} component
 */
const Quest = ({ styled, ...props }) => {
  return (
    <Flex column {...styled} >
      <Flex alignCenter between >
        <Heading>Quests</Heading>
        <Flex>
          <BoxAccess spaceAuto level='space' space={SPACE} >
            <Modal
              content={<CreatePanel {...props} />}
              variant='fullScreen'
              styled={{
                  position: 'fullScreen',
                  m: 80
                }} >
              <Button xs variant='white'>Create</Button>
            </Modal>
            <Span mx={4}>
              <ContentImport
                keys='quest' access='public' space={SPACE}
                update='quest'
                url='https://raw.githubusercontent.com/ConsenSys/million-devs/content/content/quests/curatedQuestsInit.json?token=AA2AD2SOO4CPCVPFF727T4C5UTC3U'
              />
            </Span>
            <ContentDelete
              keys='quest' access='public' space={SPACE}
            />
          </BoxAccess>
        </Flex>
      </Flex>
      <Flex mt={10}>
        <BoxGetSpace space={SPACE} access='public' address={ROOT}  />
        <Flex column width='100%'>
          <BoxList
            component={ListItem}
            access='public' space='eth' id='quest'
          >
            <Modal variant='fullScreen' styled={{m: 80}} content={<CreatePanel {...props} />} >
              <Button xs variant='white' >Edit Quest</Button>
            </Modal>
        </BoxList>
        </Flex>
      </Flex>
    </Flex>
  )
}


Quest.defaultProps = {
  styled: {}
}

Quest.propTypes = {
  styled: PropTypes.object
}

const CreatePanel = ({ styled, ...props}) => { 
 return(
  <Box minWidth={420}>
    {
      props.name &&
      <Flex alignCenter p={3}>
        <Image src={props.image} maxWidth={28} mr={3} />
        <Box>
          <Link to={`/quest/${props.alias}`}>
            <Heading sm thin noMargin>{props.name}</Heading>
          </Link>
          <Heading xs thin noMargin>{props.tagline}</Heading>
        </Box>
      </Flex>
    }
    <QuestCreate space='eth' defaultValues={props} />
  </Box>
)
}

export default Quest