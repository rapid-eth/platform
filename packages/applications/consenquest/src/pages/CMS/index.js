import React from 'react';
import { PropTypes } from 'prop-types'
import { BackgroundImage, Button, Box, Flex, Heading, Menu, Image, HorizontalRule, Paragraph, Container, Span } from '@horizin/design-system';

const Page = ({ styled, ...props }) => {

  return (
    <Flex minHeight={500} >
      <Flex gradient='gray' flex={2}>
        <Menu
          items={[
            {
              label: 'Overview',
              to: '/cms'
            },
            {
              label: 'Adventures',
              to: '/cms/adventures'
            },
            {
              label: 'Quests',
              to: '/cms/quests'
            },
          ]}
        />
      </Flex>
      <Flex flex={6}>
        CMS
      </Flex>
    </Flex>
  )
}


Page.defaultProps = {

}

Page.propTypes = {
  styled: PropTypes.object
}

export default Page