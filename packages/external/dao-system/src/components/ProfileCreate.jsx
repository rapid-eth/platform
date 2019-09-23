import idx from 'idx'
import React, { useState } from 'react';
import { Box, Button, Flex, Form, Span, Heading, Paragraph } from '@horizin/design-system'
import { TextArea, Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import Image from '@horizin/design-system/dist/atoms/Image';
var shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f';

const BoxThreadPostCreate = ({ box, threadName, ...props }) => {
  const [loading, setLoading] = useState(false)
  const onSubmit = (values) => {
    setLoading(true)
    box.threadPost({ threadName, post: values })
  }

  return (
    loading
      ? <Flex center column>
        <Flex color='charcoal' card center column rounded p={4}>
          <Heading as='h5' noMargin md thin center>Generating<br /><strong>Decentralized Identity</strong></Heading>
          <Image src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif' width={30} my={20} />
          <Span>Prepare for an Adventure</Span>
        </Flex>
      </Flex>
      : <Box fullWidth>

        <Box card boxShadow='sunset'>
          <Flex center column mt={-50}>
            <Box borderRadius={9999} boxShadow={'sunset'} circle gradient='white' p={20} maxWidth={120}>
              <Image src='https://static.thenounproject.com/png/2309777-200.png' maxWidth={70} width={1} />
            </Box>
            <Paragraph center heavy xs color='charcoal'>Upload Avatar</Paragraph>
          </Flex>
          <Form callback={onSubmit}>
            <Field
              name="name"
              placeholder="Full Name"
            />
            <Field
              name="role"
              placeholder="Role"
            />
            <Flex center column>
              <Paragraph center color='charcoal'>{box.addressShortened}</Paragraph>
            </Flex>
            <Flex evenly fullWidth>
              <Flex center column>
                <Paragraph center xs color='charcoal'>infura<br /><Span heavy>provider</Span></Paragraph>
              </Flex>
              <Flex center column>
                <Paragraph center xs color='charcoal'>extension<br /><Span heavy>wallet</Span></Paragraph>
              </Flex>
              <Flex center column>
                <Paragraph center xs color='charcoal'>ipfs<br /><Span heavy>storage</Span></Paragraph>
              </Flex>
            </Flex>
            <Span xs color='charcoal' center onClick={box.logout}>Logout</Span>
            <Button mb={-30} mt={20} ml='auto' type="submit" gradient='green' onClick={box.open} fullWidth>Create Profile</Button>
          </Form>
        </Box>

      </Box>
  );
}

export default props =>
  <BoxWrapper>
    <BoxThreadPostCreate {...props} />
  </BoxWrapper>
