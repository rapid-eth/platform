import React from 'react';
import PropTypes from 'prop-types'
import {  Flex, Heading, Image, BackgroundImage, Tabs,
  Paragraph, Box, Container, Button, Card, HorizontalRule, Panel, Absolute, Link
} from '@horizin/design-system';

import {  BoxSpaceOpen} from '@kames/3box-components/dist'

const Home = ({ styled, ...props }) =>
<>
<Container mt={100}>
      <Box textCenter>
        <Heading xxl heavy>Choose A Path</Heading>
        <Heading md thin>Select an adventure that is right for you.</Heading>
      </Box>
    </Container>
    <Container my={70}>
      <Flex gutter2>
      <AdventureCardPill
        alias='compose'
        title='Function Composability'
        imageCover='https://cdn.dribbble.com/users/1780890/screenshots/5672197/illu1_1x_4x.jpg'
      />
      <AdventureCardPill
        alias='scaricity'
        title='Digital Scaricity'
      />
      </Flex>
    </Container>
</>


const SetupDecentralizedProfile = ({ space, styled, ...props}) => { 
  return(
    <>
      <Flex center column>
  
          <Box card minWidth={250}>
            <Flex center column>
              <Flex card circle maxWidth={420} width={470} minHeight={130} mt={-80} mb={20} mx={80}>
                <BackgroundImage
                  borderRadius={70} boxShadow='sunset' ratio={.35} styledContainer={{overflow:'visible'}}
                  src='https://cdn.dribbble.com/users/548267/screenshots/7111037/media/4d7376a05741d008464edb7d126d7334.png' />
              </Flex>
              <Box my={3} textCenter>
                <Heading lg>Composability</Heading>
                <Paragraph>
                  Join the growing community of Web3 Developers.<br/><strong>Find a project you love!</strong>
                </Paragraph>
                <Link to='/adventure/compose'>
                  <Heading>Start Adventure</Heading>
                </Link>
              </Box>
            </Flex>
            <Flex between bg='gray' p={3}>
              <Panel
                  content={<div>hello</div>}
                  styled={{
                  }}
                >
                <Button xs>Adventure Preview</Button>
              </Panel>
              <Panel
                  content={<div>hello</div>}
                  styled={{
                  }}
                >
                <Button xs>Requirements</Button>
              </Panel>
            </Flex>
          </Box>
      </Flex>
    </>
  )}
  
  const DeployDeveloperContracts = ({ space, styled, ...props}) => { 
  return(
    <>
      <Flex center column my={30}>
          <Box card minWidth={250}>
            <Flex center column>
              <Flex card overflow='hidden' boxShadow='sunset' borderRadius={70} maxWidth={420} width={470} minHeight={130} mt={-80} mb={20} mx={80}>
                <BackgroundImage
                   ratio={.75}
                  src='https://cdn.dribbble.com/users/1780890/screenshots/5672197/illu1_1x_4x.jpg' />
              </Flex>
              <HorizontalRule dash center />
              <Box my={3} textCenter>
                <Heading lg>Deploy Developer Contracts</Heading>
                <Paragraph>
                 New to Ethereum? Developer? <br/><strong>Checkout smart contract examples.</strong>
                </Paragraph>
                <BoxSpaceOpen space={space}>
                  <Button variant='green' my={3}>View Developer Quests</Button>
                </BoxSpaceOpen>
              </Box>
            </Flex>
            <Flex between bg='gray' p={3}>
              <Button xs>How It Works</Button>
              <Button xs>Open Source</Button>
              <Button xs>Find A Team</Button>
            </Flex>
          </Box>
      </Flex>
    </>
  )}
  
  
const ShareOpenSourceProject = ({  alias, title, summary, space, styled, ...props}) => { 
return(
  <>
    <Flex center column p={60} width='100%'>

        <Box card minWidth={250}>
          <Flex center column>
            <Flex card circle maxWidth={420} width={470} minHeight={130} mt={-80} mb={20} mx={80}>
              <BackgroundImage
                borderRadius={70} boxShadow='sunset' ratio={.05}
                src='https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg' />
            </Flex>
            <HorizontalRule dash center />
            <Box my={3} textCenter>
              <Heading lg>{title}</Heading>
              <Paragraph>
                {props.summary}
              </Paragraph>
              <BoxSpaceOpen space={space}>
                <Button variant='orange' my={3}>Share Project</Button>
              </BoxSpaceOpen>
            </Box>
          </Flex>
          <Flex between bg='gray' p={3}>
            <Button xs>How It Works</Button>
            <Button xs>Open Source</Button>
            <Button xs>Find A Team</Button>
          </Flex>
        </Box>
    </Flex>
  </>
)}

const AdventureCardPill = ({ space, styled, ...props}) => { 
return(
  <>
    <Flex center column p={60}>

        <Box card minWidth={250}>
          <Flex center column>
            <Flex card circle borderRadius={70} boxShadow='sunset' maxWidth={420} width={470} minHeight={130} mt={-80} mb={20} mx={80} overflow='hidden' >
              <BackgroundImage
                ratio={.65}
                src={props.imageCover} />
            </Flex>
            <HorizontalRule dash center />
            <Box my={3} textCenter>
              <Heading lg>{props.title}</Heading>
              <Paragraph px={4}>
                {props.summary}
              </Paragraph>
              <Link to={`/adventure/${props.alias}`}>
                <Button variant='green'>Start Adventure</Button>
              </Link>
            </Box>
          </Flex>
        </Box>
    </Flex>
  </>
)}

AdventureCardPill.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
}

AdventureCardPill.propTypes = {
  alias: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.string,
  imageCover: PropTypes.string,
}

export default Home

