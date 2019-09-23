import idx from 'idx'
import React, { useState } from 'react';
import { Box, Button, Flex, Form, Span } from '@horizin/design-system'
import { TextArea, Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import Image from '@horizin/design-system/dist/atoms/Image';

const BoxThreadPostCreate = ({ box, threadName, ...props }) => {
  const [loading, setLoading] = useState(false)
  const onSubmit = (values) => {
    setLoading(true)
    box.threadPost({ threadName, post: values })
  }

  return (
    loading
      ? <Flex center column>
        <Flex card center column rounded p={4}>
          <Span md thin>Creating Guild</Span>
          <Image src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif' width={30} my={20} />
          <Span>Prepare for Adventure</Span>
        </Flex>
      </Flex>
      : <Box fullWidth>
        <Form callback={onSubmit}>
          <Field
            name="threadName"
            placeholder="Guild Name"
          />
          <Field
            name="summary"
            placeholder="Description"
          />
          <Field
            name="image"
            placeholder="Image"
          />
          <Button type="submit" sm variant='green' fullWidth>Create Guild</Button>
        </Form>
      </Box>
  );
}

export default props =>
  <BoxWrapper>
    <BoxThreadPostCreate {...props} />
  </BoxWrapper>
