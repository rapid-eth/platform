import React from "react"
import Markdown from 'markdown-to-jsx';
import {
  Button, Link,
  BackgroundImage, BackgroundGradient, Box, Flex, Image,
  Heading, Span, Paragraph , Panel } from '../../index'

const ComponentOverrides = {
  p: {
      component: Paragraph,
      props: {
          className: 'foo',
          serif: true
      },
  },
  h1: {
      component: Heading,
      props: {
          as: 'h1'
      },
  },
  h2: {
      component: Heading,
      props: {
          as: 'h2'
      },
  },
}

const MarkdownFormat = ({children }) => <Markdown options={{ overrides: ComponentOverrides}} children={children}/>

export default MarkdownFormat