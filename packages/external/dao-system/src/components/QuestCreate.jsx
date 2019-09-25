import idx from 'idx'
import React, { useState } from 'react';
import { Box, Button, Flex, Form, Span } from '@horizin/design-system'
import { TextArea, Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxLoginButton, BoxThreadJoin } from '@kames/3box-components/dist'
import BoxOpenSpace from '@kames/3box-components/dist/BoxOpenSpace';

const BoxThreadPostCreate = ({ box, space, threadName, ...props }) => {


  const { isLoggedIn } = box

  let spaceLoaded = idx(box, _=>_.spaces[space].instance)
  let threadLoaded = idx(box, _=>_.threads[threadName].instance)

  const onSubmit = (values) => {
    box.threadPost({ threadName, post: values })
  }

  return (
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
      <Field
        name="content"
        as='textarea'
        minHeight={200} fullWidth
        placeholder="Content"
      />
      <Box>
        {
          !isLoggedIn && !spaceLoaded && !threadLoaded &&
            <BoxLoginButton styled={{sm: true}} variant='blue' />
          }
        {
          isLoggedIn && !spaceLoaded &&
          <BoxOpenSpace space='meshhub'>
            <Button sm variant='blue'>Open {space} Space</Button>
          </BoxOpenSpace>
        }
        {
          isLoggedIn && spaceLoaded && !threadLoaded &&
          <BoxThreadJoin threadName={threadName} space={space}>
            <Button sm variant='blue'>Join {threadName} Thread</Button>
          </BoxThreadJoin>
        }
        {
          isLoggedIn && spaceLoaded && threadLoaded &&
          <Button type="submit" variant='green'>Create Quest</Button>
        }
      </Box>
    </Form>
  );
}

export default props =>
  <BoxWrapper>
    <BoxThreadPostCreate {...props} />
  </BoxWrapper>
