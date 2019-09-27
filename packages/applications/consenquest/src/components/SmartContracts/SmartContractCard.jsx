/* --- Global Dependencies --- */
import React from "react";
import {
  Button, Link,
  BackgroundImage, BackgroundGradient, Box, Flex, Image,
  Heading, Span, Paragraph , Panel } from '@horizin/design-system'
/* ------- Component ------- */
const shadowBlue = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4'
const shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f'

const Card = ({
  address, title, tagline, id, to,
  actionLabel, content, summary, image, images, imageFeatured,
}) => 
<Box cardHover  p={0}>
  <Flex column height='100%' >
    <Flex column flex={1} p={2} minHeight={10}>
      <BackgroundGradient gradient='purpink' gradientDir='140' />
    </Flex>

    <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
    {image &&
      <Box inlineBlock circle boxShadow={shadowSunset} p={15} gradient='white' maxWidth={150} mx='auto' mt={-70}>
        <Image circle src={image} boxShadow={shadowSunset} p={20}/>
      </Box>
      }
      <Heading lg mt={-20} fontWeight={300}>
        {title}
      </Heading>
      <Paragraph fontSize={[1]}>
        {tagline}
      </Paragraph>
      <Flex column>
        <Panel content={<div>yo</div>} label='Credential Type Details'>
          <Link to={`${to}/${id}`}>
            <Button sm variant='green'>Connect to Contract</Button>
  
          </Link>
        </Panel>
      </Flex>
      <Paragraph xs mt={[25]} px={40}>
        {summary}
      </Paragraph>
    </Box>

    <Box card flex={1} p={10} >
      <BackgroundGradient gradient='gray'/>
      <Flex between fullWidth>
        <Span><Button xs>0xfA67ddE98...34a48cE</Button></Span>
        <Span><Button xs>View on Etherscan</Button></Span>
      </Flex>
    </Box>
  </Flex>
</Box>

Card.defaultProps = {
  title: 'Interesting Title',
  tagline: 'A Tagline to To Intrigue',
  address: '0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE',
  functions: [],
  image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
  imageFeatured: 'https://images.unsplash.com/photo-1519995451813-39e29e054914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
}

export default Card