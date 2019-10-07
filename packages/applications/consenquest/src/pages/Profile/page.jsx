/* --- Global Dependencies --- */
import React from 'react';
import {
  BackgroundImage, Box, Span, Flex, Heading, Container, Absolute, Button, Toast,
} from '@horizin/design-system';

import {
  TeamCreate, UserItemVanity, UserFollow, UserVerifications
} from '@kames/dao-system'

/* --- Local Dependencies --- */
import ProfileTabs from './tabs'

/**
 * @function Profile
 * @param {Object} props
 * @description Profile Page
 * @return {Object} React Component
 */
const Profile = props => {

  return (
  <>
    <Flex gradient='blueDark' gradientDir='140' minHeight={300}>
        <Container maxWidth='90%' >
          <Flex fullWidth height='100%'>
            <Flex flex={3}>
              
            </Flex>
            <Flex color='white' flex={7}>
              <Box alignSelf='flex-end' p={4}>
              {props.name && <Heading heavy xxl mt={-20} fontWeight={300} children={props.name} />}
                {
                  props.job &&
                  <Heading md noMargin fontSize={[3]}>
                    {props.job} { props.employer && <Span>at {props.employer}</Span>}
                  </Heading>
                }
              </Box>

              <Absolute layout='topRight' m={4}>
                <Flex>
                  <Flex alignCenter>
                    <Box mr={4}>
                      <UserVerifications address={props.address}/>
                    </Box>
                  </Flex>
                  <Toast
                    content={<TeamCreate
                      space='eth'
                      styled={{minWidth: 300, minHeight: 200, center: true, column: true}}
                    />}
                  >
                    <Button xs variant='white' ml={3}>Influence</Button>
                  </Toast>
                </Flex>
              </Absolute>
              
              <Absolute layout='bottomRight' m={4}>
                <Flex>
                  <UserFollow threadName={props.address} firstModerator={props.address} />
                </Flex>
              </Absolute>

              <Absolute layout='topRight' m={3}>
                {/* <EarnCollectibles /> */}
              </Absolute>
            </Flex>
          </Flex>
        </Container>
    </Flex>

    <Container maxWidth='90%' >
    <Flex>
      <Flex width='100%'>
        <Flex flex={3} gradientDir='145' width='100%' >
          
          <Box mt={-240} width='100%'>
            <UserItemVanity isFooterActive styled={{width: '100%'}} {...props} />
          </Box>
        </Flex>
  
        <Box flex={7}>
          <ProfileTabs {...props} />
        </Box>
  
      </Flex>
      
    </Flex>
  </Container>
  </>
)}

Profile.propTypes = {

}

Profile.defaultProps = {

}

export default Profile