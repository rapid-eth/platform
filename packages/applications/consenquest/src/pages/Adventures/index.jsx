/* --- Global Dependencies --- */
import React from 'react';
import {
  BackgroundImage, Box, HorizontalRule, Flex, Heading,
} from '@horizin/design-system';
import {
  AdventureList, AdventureItemSmall
} from '@kames/dao-system'

/* --- CMS Global Configs --- */
const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE

/**
 * @function Adventure
 * @description Adventure Page
 * @return {Object} React Component
 */
const Adventure = () =>
<Flex minHeight='60vh'>
  <Flex column gradient='gray' flex={2}>
      <Flex center column color='white' bg='purpleDark' gradientDir='145' p={4} minHeight={200}>
        <BackgroundImage
          opacity={.2} ratio={.4}
          src='https://images.ui8.net/uploads/blockchain_platform_1_1527438484516.jpg' />
        <Heading lg>Adventures</Heading>
      </Flex>
    <Box p={30}>
      <Box textCenter>
        <Heading center>Featured</Heading>
        <HorizontalRule dash center my={3}/>

      </Box>
      <Box mt={4}>
        <Heading center>Popular</Heading>
        <HorizontalRule dash center my={3}/>

      </Box>
    </Box>
  </Flex>
  <Flex column flex={6}>
    <Box p={50}>
      <Flex gutter2>
        <AdventureList address={ROOT} space={SPACE} component={AdventureItemSmall} />
      </Flex>
    </Box>
  </Flex>
</Flex>

export default Adventure