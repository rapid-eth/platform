
/* --- Global Dependencies --- */
import dot from 'dot-prop-immutable-chain'
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types'
import { Span, Flex, Image } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

/* ------- Component ------- */
const BoxVerified = ({box, loadingMessage, display, styled, ...props }) => {
  const [ address, setAddress ] = useState(props.address)
  const [ verifications, setVerifications ] = useState()
  const [ isEmail , setIsEmai, ] = useState(false)
  const [ isEmailVerified, setIsEmailVerified ] = useState(false)
  const [ isGithub , setIsGithub ] = useState(false)
  const [ isTwitter , setIsTwitter ] = useState(false)
  /**
   * @function VerificationsState
   * @description Manage the state of verifications
   */
  useEffect( () => { 
    if(dot(box).get(`data.profiles.${address}`).value()) {
      const verifications = dot(box).get(`data.profiles.${address}.verifications`).value()
      setVerifications(verifications)
      const keys = Object.keys(verifications)
        setIsEmai(keys.includes('email'))
        setIsGithub(keys.includes('github'))
        setIsTwitter(keys.includes('twitter'))
    }
  }, [ dot(box).get(`data.profiles.${address}`).value()])

return !verifications
? loadingMessage ? <Span>{loadingMessage}</Span> : null
: <>
    <Flex between>
      {
        !isGithub
        ? <Span xxs thin tag='white'>
            <Flex alignCenter>
              <Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' maxWidth={18} mr={2}/>
              <Span>Unverified</Span>
            </Flex>
          </Span>
        : <Span xxs tag='white'>
            <a target='_blank' href={`https://github.com/${verifications.github.username}`}>
              <Flex alignCenter>
                <Image src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' maxWidth={18} mr={2}/>
                <Span>{verifications.github.username}</Span>
              </Flex>
            </a>
          </Span>
      }
      {
        !isTwitter
        ? <Span xxs thin tag='white' mx={2}>
            <Flex alignCenter>
              <Image src='http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png' maxWidth={18} mr={2}/>
              <Span>Unverified</Span>
            </Flex>
          </Span>
        : <Span xxs tag='white' color='blue' mx={3}>
            <a target='_blank' href={`https://twitter.com/${verifications.twitter.username}`}>
                <Flex alignCenter>
                  <Image src='http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png' maxWidth={18} mr={2}/>
                  <Span>{verifications.twitter.username}</Span>
                </Flex>
              </a>
          </Span>
      }
      {
        !isEmail
        ? <Span xxs thin tag='white'>
            <Flex alignCenter>
              <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0XdyBBhy5KQBP2sIrvFsWIBMwOxz064mxn-2SR6Tl_MlQ5e8' maxWidth={18} mr={2}/>
              <Span>Locked</Span>
            </Flex>
          </Span>
        : isEmailVerified
          ? <Span xxs tag='white'>Email Verified</Span>
          : <Span xxs tag='white'>Verify Email</Span>
      }
    </Flex>
  </>
}

BoxVerified.propTypes = {
  loadingMessage: PropTypes.string,
  display: PropTypes.oneOf([
    'did',
    'ethereum',
    'twitter',
    'github'
  ])
}

BoxVerified.defaultProps = {
  display: ['twitter', 'github'],
}

export default props =>
<BoxWrapper>
  <BoxVerified {...props} />
</BoxWrapper>