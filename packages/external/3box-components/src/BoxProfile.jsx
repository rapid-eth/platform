
/* --- Global Dependencies --- */
import idx from 'idx'
import React from "react";
import { Absolute, Box, Button, Flex, Image, Heading, Span, Paragraph } from '@horizin/design-system'
import { GenerateImage } from './utilities'

/* ------- Component ------- */
export default ({box, styled, ...props }) => {
return !box.profile ? null
:
<>
  <ProfileCard profile={box.profile}/>
</>
}

const ProfileCard = ({ profile, ...props}) => {
  return (
    profile
    ?<>
      <Flex alignCenter>
        <Span><Image variant='avatar' src={GenerateImage(idx(profile, _=>_.image))} width={120}/></Span>
        <Box ml={10}>
          <Heading md heavy noMargin>
            {idx(profile, _=>_.name)}
          </Heading>
          <Heading sm thin noMargin level={4}>{idx(profile, _=>_.job)}</Heading>
        </Box>
      </Flex>
    <Flex column mt={10}>
      <Heading xs thin my={'7px'} level={5}><Span heavy>employer:</Span> <br/> {idx(profile, _=>_.employer)}</Heading>
      <Heading xs thin my={'7px'} level={5}><Span heavy>school:</Span> <br/> {idx(profile, _=>_.school)}</Heading>
      <Heading xs thin my={'7px'} level={5}><Span heavy>summary:</Span> <br/> {idx(profile, _=>_.description)}</Heading>
      
    </Flex>
    </>
    : null
  )
}


const VerifiedPanel = ({ name, job, employer, role, description, ...props}) =>
<Flex>
  <Heading>Verified</Heading>
</Flex>
const ProfileInteract = ({ name, job, employer, role, description, ...props}) =>
<Flex>
  <Box flex={3} mr={30}>
      <Heading lg thin>
        {name}
      </Heading>
      <Paragraph fontSize={[1]} mb={[25]}>
        {name} | {employer} | {role}
      </Paragraph>
      <Span color='white' heavy fontSize={[2]}>	{job}</Span>
    <Span color='white' thin fontSize={[2]}>	{employer}</Span>
      <p>{description}</p>
  </Box>
</Flex>