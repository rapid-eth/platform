/* --- Global Dependencies --- */
import React, { useState, useEffect } from 'react'
import { 
  BackgroundGradient, BackgroundImage, QRDisplayModal, 
  Box, Button, Heading, Span, Flex, Image, Toast} from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

import BoxLoginButton from './BoxLoginButton'
import BoxFormProfileBasics from './BoxFormProfileBasics'
import BoxVerified from './BoxVerified'
import { GenerateImage } from './utilities'
/* --- React Component --- */
const BoxLoginCard = ({ 
  box,
  isFooterActive,
  variant, children, styled, styledInner,
   ...props 
}) => {


  const [ profile, setProfile ] = useState()
  const [ isImage, setIsImage ] = useState()
  const [ isCover, setIsCover ] = useState()
  const [ isName, setIsName ] = useState()
  const [ isJob, setIsJob ] = useState()

  useEffect( () => { 
    console.log(box, props, 'submittinger referral')
    if(box.address && props.addressReferrer) {
      console.log(box, props, 'submittinger referral internal')
      const url = 'https://brn68gkbcf.execute-api.us-east-1.amazonaws.com/cors/verify-referral'
        window.fetch(url, {
          method: 'POST',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "referrerAddress":  props.addressReferrer,
            "userAddress": box.address
          })
        })
        .then(res => {
          if(res.json)
            res.json()
            .then (msg => {
              console.log(msg)
            })
        })
        .catch( err => {
          console.log(err)
        })
    }
  }, [box.address, props.addressReferrer])

  useEffect( () => { 
    if(box.profile) {
      setProfile(box.profile)
    }
  }, [box.profile])

  useEffect( () => { 
    if(profile) {
      if(profile.image) setIsImage(true)
      if(profile.coverPhoto) setIsCover(true)
      if(profile.name) setIsName(true)
      if(profile.job) setIsJob(true)
    }
  }, [profile])
  
return(
!box.address
? <BoxLoginButton />
: <>
    <Box p={0} {...styled} {...props}>
      reff
      <Box x column height='100%' {...styledInner}>

        <Flex flex={1} p={2} minHeight={isCover ? 150 : 50}>
          <BackgroundGradient gradient='purpink' gradientDir='140 ' />
          {
            isCover && 
            <BackgroundImage src={GenerateImage(profile.coverPhoto)} opacity={0.2} />
          }
        </Flex>

        <Flex column card borderNone flex={1} textAlign='center' p={15} py={30} zIndex={20}>
          <Box maxWidth={320} alignSelf='center'>
            { 
              isImage
              ? <Image circle card src={GenerateImage(profile.image)} boxShadow={'sunset'} p={20} maxWidth={140} mt={-180} />
              : <Image card circle boxShadow={'sunset'} p={20} maxWidth={80} mt={-80} src='https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg' />
                
            }
          <Box mb={10} mt={isImage ? -30 : -2}>
            <QRDisplayModal value={`ethereum:${box.address}`} styledContainer={{card: true}}>
              <Span pointer><Image card circle p={1} maxWidth={32} src='https://cdn0.iconfinder.com/data/icons/material-style/48/qrcode-512.png'/></Span>
            </QRDisplayModal>
          </Box>
          {isName && <Heading heavy md mt={-20} fontWeight={300} children={profile.name} />}
          {
            isJob &&
            <Span textCenter mb={3} fontSize={[2]}>
              {profile.job} { profile.employer && <Span>at {profile.employer}</Span>}
            </Span>
          }
          <Box textCenter>
          <Heading>Congratulations!</Heading>
          <Heading sm thin>You're Connected to the Referrer</Heading>
            {/* <BoxLoginButton mb={20} /> */}
          </Box>
          <BoxVerified />
          {
            !isName || !isJob && 
            <BoxFormProfileBasics />
          }
          </Box>
    
        </Flex>

        {
          isFooterActive &&
            <Flex center card flex={1} p={10} >
              <BackgroundGradient gradient='gray'/>
              <Flex between width={320} maxWidth={320} fullWidth>
                <Span><Button xs>{box.addressShortened}</Button></Span>
                
                <Toast
                  label='Profile Edit'
                  content={<ProfileEdit />}>
                    <Span pointer xxs tag='white'>
                      <Flex alignCenter>
                        <Image card circle p={1} maxWidth={24} src='https://cdn.iconscout.com/icon/free/png-512/account-185-461747.png'/>
                      <Span pointer mx={2}>
                        Edit Profile
                      </Span>
                      
                    </Flex></Span>
                </Toast>
              </Flex>
            </Flex >
        }
      </Box>
    </Box>
    </>
)}

BoxLoginCard.defaultProps = {
  isFooterActive: true,
  profile: {}
}

const ProfileEdit = ({ styled, ...props}) => { 
  return(
   <Box bg='white' p={20} minWidth={270}>
     <BoxFormProfileBasics />
   </Box>
 )}

export default props =>
<BoxWrapper>
  <BoxLoginCard {...props} />
</BoxWrapper>