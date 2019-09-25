import React from 'react';
import { Box, Button, Flex, Heading, Paragraph, Markdown } from '@horizin/design-system/dist'
import { Container, Image } from '@horizin/design-system/dist/atoms';
import { BoxThreadPostRetrieve } from '@kames/3box-components/dist'

const QuestItem = ({ title, tagline, summary, content, image, images, imageBackgroud, imageFeatured, token, collectible, styled, ...props}) =>
<>
<Box gradient='gray' py={[100]}>
  <Container maxWidth={[720]} >
    <Flex>
      <Box flex={1} textCenter>
        <Image circle card src={image} opacity={1} maxWidth={90} />
        <Heading mega thin noMargin>{title}</Heading>
        <Heading lg normal  my={20}>{tagline}</Heading>
        <Paragraph sm normal>{summary}</Paragraph>
          <Flex fullWidth evenly>
            <Button variant='green' >Start Quest</Button>
            <Button variant='orange' >Share Quest</Button>
          </Flex> 
      </Box>
    </Flex>
  </Container>
</Box>
<Box>
  <Container width={[1]} maxWidth={720} py={50} >
    
    {/* <Image src={imageFeatured}/> */}
    <Markdown>
      {content}
    </Markdown>
  </Container>
</Box>
</>
    
const contentExample = `

# A Large Title
Quisque nulla justo, sagittis ac nunc in, tincidunt dignissim quam. Donec non pretium tortor. Vestibulum vel nunc ligula. Suspendisse nec convallis odio, feugiat pharetra metus. Duis tristique varius lorem a luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in placerat augue. Suspendisse nibh justo, aliquet sit amet diam quis, finibus rhoncus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris malesuada sem felis, vitae convallis arcu ornare sit amet. Fusce ut maximus sapien, eget tincidunt libero. Mauris nisl magna, viverra sit amet velit sit amet, auctor congue quam.

## Tagline Worth Remembering
Quisque nulla justo, sagittis ac nunc in, tincidunt dignissim quam. Donec non pretium tortor. Vestibulum vel nunc ligula. Suspendisse nec convallis odio, feugiat pharetra metus. Duis tristique varius lorem a luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in placerat augue. Suspendisse nibh justo, aliquet sit amet diam quis, finibus rhoncus orci. 

### Just Getting Started with the Information
Quisque nulla justo, sagittis ac nunc in, tincidunt dignissim quam. Donec non pretium tortor. Vestibulum vel nunc ligula. Suspendisse nec convallis odio, feugiat pharetra metus. Duis tristique varius lorem a luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer in placerat augue. Suspendisse nibh justo, aliquet sit amet diam quis, finibus rhoncus orci. 
`

QuestItem.defaultProps = {
  title: 'A New Quest',
  tagline: 'Earn Tokens While Completing Cool Quests',
  summary: 'Suspendisse nibh justo, aliquet sit amet diam quis, finibus rhoncus orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris malesuada sem felis, vitae convallis arcu ornare sit amet. Fusce ut maximus sapien, eget tincidunt libero. Mauris nisl magna, viverra sit amet velit sit amet, auctor congue quam.',
  content: contentExample,
  image: 'https://static-assets.coinbase.com/earn/campaigns/dai/asset-logo.png',
  imageFeatured: '',
  imageBackgroud: 'https://images.unsplash.com/photo-1533988902751-0fad628013cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80'
}

// export default QuestItem
export default ({ id }) => <BoxThreadPostRetrieve postId={id} component={QuestItem} />

