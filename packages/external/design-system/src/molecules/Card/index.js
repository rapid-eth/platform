/* --- Global Dependencies --- */
import React from "react";
import {
  Button, Link,
  BackgroundImage, BackgroundGradient, Box, Flex, Image,
  Heading, Span, Paragraph , Panel } from '../../index'
/* ------- Component ------- */
const shadowBlue = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #066ebe, 0px -4px 3px -2px #2cc7b1, -5px -4px 4px -6px #46eca4'
const shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f'

const Card = ({ title, tagline, id, to, actionLabel, content, summary, image, images, imageFeatured, }) => 
<Box cardHover  p={0}>
  <Flex column height='100%' >
    <Flex column flex={1} p={15} minHeight={120}>
      <BackgroundGradient gradient='blue'/>
      <BackgroundImage src={imageFeatured} opacity={0.2} ratio={0.3} />
      <Flex alignCenter between>
        <Box>
          <Span xs color='white' highlight='blue' alignSelf='flex-start'>Feb 27, 2019</Span>
        </Box>
        <Span variant='tag' highlight='green' alignSelf='flex-end'>Tag</Span>
      </Flex>
    </Flex>

    <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
    {image &&
      <Box inlineBlock circle boxShadow={shadowSunset} p={35} gradient='white' maxWidth={150} mx='auto' mt={-70}>
        <Image src={image}/>
      </Box>
      }
      <Heading lg mt={0} fontWeight={300}>
        {title}
      </Heading>
      <Paragraph fontSize={[1]} mb={[25]}>
        {tagline}
      </Paragraph>
      <Flex column>
        <Panel content={<div>yo</div>} label='Credential Type Details'>
          <Link to={`${to}/${id}`}>
            <Button sm variant='green'>	Details</Button>
          </Link>
        </Panel>
      </Flex>
    </Box>

    <Box card flex={1} p={10} >
      <BackgroundGradient gradient='gray'/>
      <Flex between fullWidth>
        <Span><Button xs>0xfA67ddE98...34a48cE</Button></Span>
        <Span><Button xs>Share</Button></Span>
      </Flex>
    </Box>
  </Flex>
</Box>

Card.defaultProps = {
  title: 'Interesting Title',
  tagline: 'A Tagline to To Intrigue',
  image: 'https://static.thenounproject.com/png/1603446-200.png',
  background: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80'
}

export default Card