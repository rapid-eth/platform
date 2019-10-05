import React from 'react';
import PropTypes from 'prop-types'
import {  Flex, Heading, Image, BackgroundImage, Tabs,
  Paragraph, Box, Container, Button, Card, HorizontalRule, Panel, Absolute, Link
} from '@horizin/design-system';
import { BoxAccess } from '@kames/3box-components/dist'
import {
  AdventureList
} from '@kames/dao-system'
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

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
        <AdventureList address={ROOT} space={SPACE} />
      </Flex>
    </Container>
</>

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

