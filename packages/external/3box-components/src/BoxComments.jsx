/* --- Global Dependencies --- */
import React from 'react'
import { Box, Button, Heading, Span, Field, Form, Flex, Image } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { GenerateImagefromHash } from './utilities'
import BoxLoginButton from './BoxLoginButton'
import BoxThreadPostList from './BoxThreadPostList'

/* --- React Component --- */
const BoxCommentList = ({ 
  threadName, space, component, members,
  box, image, role, employer,
  variant, children, styled,
   ...props 
}) => {

const actionHandler = (values) => {
  try {
    box.threads[threadName].instance.post(values)
  } catch (error) {
    
  }
}
  
return(
<>
  <Box>
    <Form callback={actionHandler} >
      <Field
        name='comment'
        inputAs='textarea' minHeight='200px'
        placeholder='Comment'
      /> 
      <Button variant='dark' width='100%'>Create Comment</Button>
    </Form>

    <BoxThreadPostList
      threadName={threadName} component={component}
      space={space} members={members}
    />
  </Box>
</>
)}

BoxCommentList.defaultProps = {
  component: BoxComment
}

const BoxComment = ({ styled, ...props}) => { 
 return(
  <Box>
    <Heading>Comment</Heading>
  </Box>
)
}


BoxCommentList.defaultProps = {
  image: "QmYGh4a6cjH7a3mw9xSYezp2WenGb3d7wj7Wwo9TV44knE",
  name: 'Kames Geraghty',
  role: 'Fullstack Javascript Developer',
  employer: 'ConsenSys',
}

export default props =>
<BoxWrapper>
  <BoxCommentList {...props} />
</BoxWrapper>