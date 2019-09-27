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
  address, title, role, employer, job, id, to,
  actionLabel, content, summary, image, images, imageFeatured,
}) => 
<Box cardHover  p={0}>
  <Flex column height='100%' >
    <Flex column flex={1} p={2} minHeight={140}>
      <BackgroundGradient gradient='purpink' gradientDir='140' />
      <BackgroundImage src={imageFeatured} opacity={0.2} />
    </Flex>

    <Box card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
    {image &&
      <Image circle card src={image} boxShadow={shadowSunset} p={20} maxWidth={190} mt={-150} />
      }
      
      <Heading lg mt={-20} fontWeight={300}>
        {title}
      </Heading>
      <Paragraph fontSize={[2]}>
        {role} at {employer}
      </Paragraph>
      <Flex evenly maxWidth='70%' mx='auto'>
        <Panel content={<div>yo</div>} label='Credential Type Details'>
          <Link to={`${to}/${id}`}>
            <Button xs variant='blue'>Profile</Button>
          </Link>
        </Panel>
        <Panel content={<div>yo</div>} label='Credential Type Details'>
          <Link to={`${to}/${id}`}>
            <Button xs variant='green'>Details</Button>
          </Link>
        </Panel>
      </Flex>
      <Paragraph xs mt={[25]} px={40}>
        
      🔐{address}
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
  title: 'Joe Lubin',
  job: 'Chief',
  role: 'Founder',
  employer: 'ConsenSys',
  twitter: 'ethereumjoelubin',
  github: 'joelubin',
  tagline: 'A Tagline to To Intrigue',
  address: '0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE',
  image: 'https://pbs.twimg.com/profile_images/968150222760132608/Dzi20Mri_400x400.jpg',
  imageFeatured: 'https://i2.wp.com/content.consensys.net/wp-content/uploads/2018/10/consensys-home-hero.png?w=900&quality=100'
}

export default Card