import React from 'react'
import { BackgroundImage, Flex, Box, Button, Container, Heading, Paragraph } from '../../index.js'
const Hero = ({ title, tagline, summary, button, image, styled, styledBackground, children, ...props }) =>
  <Box gradient='blue' py={[150]} {...styled} overflow='hidden'>
    <BackgroundImage
      ratio={0.45}
      opacity={0.20}
      src={'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80'} />
    <BackgroundImage
      ratio={0.15}
      opacity={0.05}
      src={'https://ethwallpaper.co/static/wallpapers/536b8c21-f278-4727-a2eb-a3a6b8de7701.jpg'} />
    <BackgroundImage
      ratio={0.25}
      opacity={0.10}
      transform='rotate(0deg) translate(0px, 50px) scale(2)'
      src={image} />
    <Container maxWidth={1080}>
      <Flex alignCenter {...styled} fullWidth>
        <Box flex={1} fullWidth>
          <Heading xxl thin noMargin>{title}</Heading>
          <Heading md heavy>{tagline}</Heading>
          <Paragraph sm thin>{summary}</Paragraph>
          <Flex mt={40}>
            <Button>How It Works</Button>
            <Button variant='orange' ml={15}>Getting Started</Button>
          </Flex>
        </Box>
        <Box flex={1}>
          {children}
        </Box>
      </Flex>
    </Container>
  </Box>

Hero.defaultProps = {
  title: 'Captivating Title',
  tagline: 'An Interesting Tagline & Introduction',
  summary: ' Cras in ipsum blandit, consectetur ex ac, malesuada est. Nullam aliquet dolor non fringilla ornare. Cras lobortis pulvinar arcu pellentesque accumsan.',
  button: 'Call To Action',
  image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80'
}

export default Hero