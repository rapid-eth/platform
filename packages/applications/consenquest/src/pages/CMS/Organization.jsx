import React from 'react';
import { PropTypes } from 'prop-types'
import {
  Button, Box, Flex, Heading, Image, Span,  Link, Modal
} from '@horizin/design-system';

import {
  BoxGetSpace,
  BoxList,
  BoxAccess,
} from '@kames/3box-components/dist'

import {
  AdventureCreate, ContentImport, ContentDelete, OrganizationPublish, OrganizationList
} from '@kames/dao-system'
import { Tab, TabPanel, TabList } from '@horizin/react-hooks-tabs';

// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

/**
 * @function CMSAdventure
 * @param {Object} props props
 * @return {Obect} component
 */
const Adventure = ({ styled, ...props }) => {
  return (
    <Flex column {...styled} flex={1}>

      <Flex column mt={10} flex={1}>
        <Box mt={-4} mb={3}>
          <TabList tabGroup='crm_organization' tabIdSelected='manage'>
            <Tab tabId='manage' >Manage</Tab>
            <Tab tabId='create' >Create</Tab>
            <Tab tabId='archive'>Archive</Tab>
          </TabList>
        </Box>

        <TabPanel tabGroup='crm_organization' tabId='create'>
          <OrganizationPublish />
        </TabPanel>
        <TabPanel tabGroup='crm_organization' tabId='archive'>
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
                keys='organization' access='public' space={SPACE}
                update='organization'
                url='https://raw.githubusercontent.com/ConsenSys/million-devs/content/content/quests/adventuresInit.json?token=AA2AD2R5MVIAHJ2CIQXIJQS5T6YXS'
              />
            </Span>
            <ContentDelete
              keys='organization' access='public' space={SPACE}
            />
          </BoxAccess>
        </Flex>
        </TabPanel>
        <TabPanel tabGroup='crm_organization' tabId='manage'>
            <BoxGetSpace space={SPACE} access='public' address={ROOT}  />
            <OrganizationList address={ROOT} space={SPACE}  />
            <Flex column width='100%'>
              <BoxList
                component={ListItem} entity='organization'
                access='public' space='eth' id='organization'
              >
                <Modal variant='fullScreen' styled={{m: 80}} content={<CreatePanel {...props} />} >
                  <Button xs variant='white' >Edit Quest</Button>
                </Modal>
            </BoxList>
            </Flex>
        </TabPanel>
      </Flex>
    </Flex>
  )
}


Adventure.defaultProps = {
  styled: {}
}

Adventure.propTypes = {
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
          <Link to={`/adventure/${props.alias}`}>
            <Heading sm thin noMargin>{props.name}</Heading>
          </Link>
          <Heading xs thin noMargin>{props.tagline}</Heading>
        </Box>
      </Flex>
    }
    <AdventureCreate space='eth' defaultValues={props} />
  </Box>
)
}

const ListItem = ({ styled, ...props}) => { 
  return(
   <Flex alignCenter between card width='100%' my={1}>
     <Flex alignCenter>
       <Image src={props.image} maxWidth={28} mr={3} />
       <Box>
         <Link to={`/adventure/${props.alias}`}>
           <Heading sm thin noMargin>{props.name}</Heading>
         </Link>
         <Heading xs thin noMargin>{props.tagline}</Heading>
       </Box>
     </Flex>
     <Flex>
       <Link to={`/adventure/${props.alias}`}>
         <Button xs variant='green' mx={3}>View Quest</Button>
       </Link>
       {props.children}
     </Flex>
   </Flex>
 )}

export default Adventure