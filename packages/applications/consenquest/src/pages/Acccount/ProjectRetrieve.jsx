/* --- Global Dependencies --- */
import React from 'react';
import { Tab, TabList, TabPanel } from '@horizin/react-hooks-tabs'
import {
  BackgroundImage, Box, Image, Flex, Heading, Menu, Markdown, Absolute, Button, Span, Paragraph
} from '@horizin/design-system';
import { Storage } from '@kames/3box-components/dist';

/* --- Local Dependencies --- */
// CMS Global Configs
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const ProjectRetrieve = ({ styled, ...props}) => { 
 return(
  <Box width='100%'>
    <Storage
      space={SPACE}
      address={props.address}
      selector={`eth.public.projects.${props.alias}`}
      component={ProjectView}
      styled={{m:3}}
      pass={{
        toPrepend: `account/project/`,
      }}
    />
  </Box>
)}

const ProjectView = ({ styled, ...props}) => {
  console.log(props,' pvpvpvp')
 return(
  <Flex column width='100%'>
    <Flex bg='dark' p={4} width='100%' minHeight={230}>
      <Flex flex={1} width='100%'>
        <Flex flex={3} p={3}>
          
        </Flex>
        <Flex color='white' flex={8} p={3}>
          <Absolute layout='topRight'>
            <Flex alignCenter>
              <Span><Span xxs tag='white'>Ask for Code Review</Span></Span>
              <Button xs mx={3} variant='green'>Add Contributor</Button>
              <Button xs variant='red'>Promote Project</Button>
            </Flex>
          </Absolute>
          <Absolute layout='bottomLeft'>
            <Heading xxl heavy>{props.name}</Heading>
            <Heading md thin>{props.tagline}</Heading>
          </Absolute>
        </Flex>
      </Flex>
    </Flex>
    <Flex width='100%'>
      <Flex gradient='gray' flex={3} p={3}>
        <Box card borderRoundedTop p={4} mt={-140} minHeight={300} flex={1}>
        {
          props.summary &&
            <Paragraph>
              {props.summary}
            </Paragraph>
        }
        </Box>
      </Flex>
      <Flex column flex={8}>
        <TabList tabGroup='account' tabIdSelected='overview'>
          <Tab tabId='overview'>
            <Flex alignCenter center>
              <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1679/1679754.svg' /></Span>
              <Span ml={3}>Overview</Span>
            </Flex>
          </Tab>
          <Tab tabId='updates'>
            <Flex alignCenter center>
              <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1679/1679169.svg' /></Span>
              <Span ml={3}>Updates</Span>
            </Flex>
          </Tab>
          <Tab tabId='documentation'>
            <Flex alignCenter center>
              <Span circle card width={38} p={2} ><Image src='https://image.flaticon.com/icons/svg/1673/1673599.svg' /></Span>
              <Span ml={3}>Documentation</Span>
            </Flex>
          </Tab>
        </TabList>

        {/* Tabs */}
        <Box p={3}>
          <TabPanel tabGroup='account' tabId='overview'>
            <Box p={3}>
            {
              props.content &&
              <Markdown>
                {props.content}
              </Markdown>
            }
            </Box>
          </TabPanel>
          <TabPanel tabGroup='account' tabId='updates'>
            <Heading>Updates</Heading>

          </TabPanel>
          <TabPanel tabGroup='account' tabId='documentation'>
            <Heading>Documentation</Heading>
          </TabPanel>
        </Box>
      </Flex>
    </Flex>
  </Flex>
)}

export default ProjectRetrieve