import React from 'react';
import PropTypes from 'prop-types'
import { BackgroundImage, Flex, Card, Box, Menu, Heading, HorizontalRule, Button, Container, Panel, Span } from '@horizin/design-system';
import {
  BoxAccess, BoxThreadPostList, BoxSpaceOpen, BoxProfileRetrieve, BoxThreadPostDelete,
  BoxLoginCard, BoxLoginButton, BoxVerified } from '@kames/3box-components/dist'
 
  import {
    Messaging, Reference, Access, Storage
  } from '@kames/3box-components/dist'
  import {
    QuestCatalogItem, ItemSmall
  } from '@kames/dao-system'
    
import {
  FormWebLandStatus
} from "../../components/3Box";
import QuestCatalog from '../QuestCatalog'
  const SPACE = process.env.REACT_APP_DEFAULT_SPACE
  // CMS Global Configs

const Account = ({ styled, ...props }) =>
  <>
      <Flex center column bg='dark' gradientDir='145' py={80} p={30} minHeight={300} >
        <BackgroundImage
          boxShadow='sunset' overflow='hidden' ratio={.3} opacity={.1}
          src='https://static.vecteezy.com/system/resources/previews/000/202/998/original/ethereum-currency-illustration-based-on-world-map-background-vector.jpg' />

        <BoxLoginCard isFooterActive={false} styled={{width: '100%'}} />
      </Flex>
      <Box p={5}>
        <Access level='enabled'>
          <BoxAccess threadAuto isLoginHidden spaceAuto level='space' space='web3' threadName='myupdates'>
            <FormWebLandStatus threadName='myupdates' />
          </BoxAccess>
          <QuestCatalog address={window.ethereum && window.ethereum.selectedAddress} />
        </Access>
        {
          window.ethereum && window.ethereum.selectedAddress &&
          <Messaging
          space={SPACE}
          threadName='quest_catalog'
          firstModerator={window.ethereum.selectedAddress}
          component={Reference}
          styled={{my: 3}}
          pass={{
            space:SPACE, threadName: 'quest_catalog', access:'public', index:'quest',
            component: QuestCatalogItem,
            pass: {
              space: SPACE, threadName: 'quest_catalog',
              optionsThread: {
                members: true,
                firstModerator: window.ethereum.selectedAddress
              },
              styled: {
                m: 2,
                p: 2
              }
            }
          }}
          />
        }
      </Box>
  </>


Account.defaultProps = {

}

Account.propTypes = {
  space: PropTypes.string.isRequired,
}

export default Account