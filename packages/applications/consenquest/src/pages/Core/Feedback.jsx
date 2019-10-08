/* --- Global --- */
import React from 'react';
import { Container, Box, Flex, Heading,Markdown, BackgroundImage, Paragraph, HorizontalRule, Span, Loading, Link } from '@horizin/design-system';
import { Messaging, BoxProfileRetrieve, BoxThreadPostDelete, Access } from '@kames/3box-components/dist'
import { FeedbackPost } from '@kames/dao-system'
/* --- Local --- */
import { Feedback } from './content'
// CMS Global Configs
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

const FeedbackPage = () => 
<>
  {/* Header */}
  <Box color='white' gradient='blue' p={150}>
    <BackgroundImage ratio={.35} src='https://cdn.dribbble.com/users/562996/screenshots/4498979/the_cryptographer_v01_800.gif' opacity={0.2} />
    <Flex center column>
      <Heading giga>
        Feedback
      </Heading>
      <Heading md thin>
        Provide feedback to help make Ethereum better.
      </Heading>
    </Flex>
  </Box>

  {/* Content */}
  <Container maxWidth={700}>
    <Box card p={4} mt={-100}>
      <Markdown>
        {Feedback}
      </Markdown>
      <FeedbackPost
        space={SPACE}
        threadName='feedback'
        optionsThread={{
          members: false,
          firstModerator: ROOT
        }}
      />
      <Paragraph >
        Are you a developer looking to contribute? <Link to='/contribute'><strong>Join One Million Developers today.</strong></Link>
      </Paragraph>

      <Span mt={5}><Heading xxl>Public Feedback</Heading></Span>
      <HorizontalRule />
      <Messaging
        space={SPACE}
        threadName='feedback'
        firstModerator={ROOT}
        members={false}
        component={FeedbackItem}
        pass={{
          threadName: 'feedback',
        }}
      />
    </Box>
  </Container>
</>


const FeedbackItem = ({ styled, ...props}) => { 
 return(
  <Box card my={2}>
    {
      props.message && props.message.data &&
        <Markdown>
          {props.message.data}
        </Markdown>
    }
    {console.log(props, 'feedback item')}
    <Box textRight>
      <Access threadAuto spaceAuto level='thread' space={props.space} threadName={props.threadName} componentLoading={<Loading type='ring' />}>
        <BoxThreadPostDelete threadName={props.threadName} postId={props.postId} >
          <Span pointer xxs>Delete Post</Span>
        </BoxThreadPostDelete>
      </Access>
    </Box>
    <HorizontalRule />
    <Flex alignCenter between>
      <BoxProfileRetrieve address={props.author}/>
      <Box>
        {/* <Panel content={<CommentThread postId={props.postId} />} >
          <Button xs >Comment Thread</Button>
        </Panel> */}
      </Box>
    </Flex>
  </Box>
)}

const CommentThread = ({ styled, ...props}) => { 
 return(
  <Box minWidth={280} maxWidth={400}>
    <Heading>Feedback Discussion</Heading>
    <HorizontalRule my={3} />
    <FeedbackPost
      space={SPACE}
      threadName={`feedback-${props.postId}`}
      optionsThread={{
        members: false,
        firstModerator: ROOT
      }}
    />
    
    <Messaging
      space={SPACE}
      threadName={`feedback-${props.postId}`}
      firstModerator={ROOT}
      members={false}
      component={FeedbackItem}
      pass={{
        threadName: `feedback-${props.postId}`,
      }}
    />


  </Box>
)}

export default FeedbackPage