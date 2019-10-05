/* --- Global Dependencies --- */
import React from 'react';
import {
    HorizontalRule, Span, Flex, Heading, Image, BackgroundImage, Paragraph, Box,  Panel, Link
} from '@horizin/design-system';
import {
  BoxGetSpace,
  BoxList,
  BoxAccess,
} from '@kames/3box-components/dist'
import {
  QuestCatalogAdd, QuestFeatured,
  QuestList,
} from '@kames/dao-system'

/* --- CMS Global Configs --- */
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE


const Home = ({ styled, ...props }) =>
  <>
    <Flex minHeight='60vh'>
      <Flex column gradient='gray' flex={2}>
          <Flex center column color='white' bg='purpleDark' gradientDir='145' p={4} minHeight={200}>
            <BackgroundImage opacity={.2} ratio={.4} src='https://images.ui8.net/uploads/blockchain_platform_6_1527438185419.jpg'/>
            <Heading lg>Quests</Heading>
            <Span tag='green' xxs>Bonus DEVTOKENs Payout</Span>
            <Span my={2}>Make Prediction on Gnosis</Span>
          </Flex>
        <Box p={30}>
          <Box textCenter>
            <Heading center>Featured Quests</Heading>
            <HorizontalRule dash center my={3}/>
            <QuestFeatured space={SPACE} threadName='featured' root={ROOT} members={true} firstModerator={ROOT} />
          </Box>
          <Box mt={4}>
            <Heading center>Popular Quests</Heading>
            <HorizontalRule dash center my={3}/>
            <QuestFeatured space={SPACE} threadName='featured' root={ROOT} members={true} firstModerator={ROOT} />
          </Box>
        </Box>
      </Flex>
      <Flex column flex={6}>
        <Box p={50}>
          <BoxGetSpace space={SPACE} access='public' address={ROOT}  />
          <Flex gutter3>
            <QuestList address={ROOT} space={SPACE}  access='public' id='quest' />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  </>


const QuestCardMini = ({
  styled, ...props
}) => { 
 return(
  <Flex column p={0}>
    <Flex between center column card borderNone boxShadow='sunset' flex={1} textAlign='center' p={0} zIndex={20}>
      <Flex center column card circle width={180} mt={-20} boxShadow='sunset'>
        <Image bg='white' maxWidth={62} src={props.image} />
      </Flex>
      <Box p={3}>
        <Heading md fontWeight={300}>
          {props.name}
        </Heading>
        <Paragraph fontSize={[1]}>
          {props.tagline}
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
)
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

QuestCardMini.defaultProps = {
  name: 'Add Quest Name',
  tagline: 'Add Quest Tagline Stuff',
  image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'
}

const QuestCardLineItem = ({
  alias,
  address, title, tagline, id, to, name,
  actionLabel, content, summary, image, images, imageFeatured,
  styled, ...props
}) => { 
 return(
  <Flex alignCenter between card flex={1} m={2} width='100%'>
    <Flex>
      <Span><Image maxWidth={25} src={image} /></Span>
      <Box ml={2}>
        <Heading noMargin sm>
          {name}
        </Heading>
        <Heading noMargin xs>
          {tagline}
        </Heading>
      </Box>
    </Flex>
    <Span justifySelf='flex-end' xxs tag='white'>View</Span>
  </Flex>
)
}

QuestCardLineItem.defaultProps = {
  name: 'Add Quest Name',
  tagline: 'Add Quest Tagline Stuff',
  image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'
}

export default Home