
/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from "react";
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { Absolute, Box, Button, Flex, Image, Heading, Span, Paragraph } from '@horizin/design-system'
import { GenerateImage } from './utilities'

/* ------- Component ------- */
const BoxProfileRetrieve = ({ box, address, small, styled, ...props }) => {
  const [ profile, setProfile ] = useState()
  /**
   * @function ProfileRetrieve
   * @description Send message signing request to current Web3 provider.
   */
  useEffect( () => {
    if(address && !profile) {
      box.getProfile(address)
    } else if(idx(box, _=>_.profiles[address])) {
      // setProfile(idx(box, _=>_.profiles[address]))
    }
  }, [ address, profile])
  
  useEffect( () => {
    if(!profile) {
      setProfile(idx(box, _=>_.profiles[address]))
    } 
  }, [ profile, idx(box, _=>_.profiles[address])])


  return (
    <ProfileCard small={small} profile={profile} />
)}

const ProfileCard = ({ profile, small, ...props}) => {
  return (
    profile
    ?<>
      <Flex alignCenter>
        <Span><Image variant='avatar' src={GenerateImage(idx(profile, _=>_.image))} width={48}/></Span>
        <Box ml={10}>
          <Heading md heavy noMargin>
            {idx(profile, _=>_.name)}
          </Heading>
          <Heading sm thin noMargin level={4}>{idx(profile, _=>_.job)}</Heading>
        </Box>
      </Flex>
    </>
    : <Flex alignCenter>
        <Span><Image card circle src='https://static.thenounproject.com/png/2348501-200.png' border='none' bg='white' width={70}/></Span>
        <Box ml={10}>
          <Box borderRadius={40} bg='gray' p={2} width={320} />
          <Box borderRadius={40} bg='gray' p={1} width={220} mt={20} />
        </Box>
      </Flex>
  )
}

export default props =>
<BoxWrapper>
  <BoxProfileRetrieve {...props} />
</BoxWrapper>