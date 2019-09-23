import idx from 'idx'
import React from 'react';
import { Box, Button, Flex, Form, Span } from '@horizin/design-system'
import { TextArea, Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const BoxThreadPostCreate = ({ box, threadName, ...props}) =>
{
  const onSubmit = (values) => {
    console.log(values, 'valuess')
    box.threadPost({ threadName, post: values })
  }
  
  return (
    !idx(box, _=>_.threads[threadName].instance)
    ? <Button><Span>Join Thread</Span></Button>
    : <Box card m={10}>
      <Form callback={onSubmit}>
          <Field
            name="title"
            placeholder="Title"
          />
          <Field
            name="tagline"
            placeholder="Tagline"
          />
          <Field
            name="summary"
            placeholder="Summary"
          />
          <Field
            name="image"
            placeholder="Image"
          />
          <Field
            name="imageFeatured"
            placeholder="Featured Image"
          />
          <Button type="submit" sm variant='green'>Create Post</Button>
    </Form>
    </Box>
  );
}

export default props =>
<BoxWrapper>
  <BoxThreadPostCreate {...props} />
</BoxWrapper>
