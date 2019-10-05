/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Box } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxSpaceOpen, BoxThreadJoin } from './index'
import BoxLoginButton from './BoxLoginButton'

/* --- React Component --- */
const BoxAccess = ({
  box, level, ...props 
}) => {
  return (
    <>

    {
      level === 'disabled' &&
      props.children
    }
    {
      level === 'login' &&
      <LevelLogin box={box} componentLogin={props.componentLogin} {...props} />
    }
    {
      level === 'space' &&
      <LevelSpace box={box} {...props} />
    }
    {
      level === 'thread' &&
      <LevelThread box={box} {...props} />
    }
      
    </>
  )
}

BoxAccess.defaultProps = {
  componentLogin: <BoxLoginButton />,
  threadName: undefined,
  spaceAuto: false,
  threadAuto: false,
  isisLoginDisabled: true,
  level: 'login',
  styledLogin: {
    variant: 'blue',
    width: '100%'
  },
  styledSpace: {
    variant: 'blue',
    width: '100%'
  },
  styledThread: {
    variant: 'blue',
    width: 1
  }
}

BoxAccess.propTypes = {
  space: PropTypes.string.isRequired,
  threadName: PropTypes.string,
  level: PropTypes.string
}

export default props =>
<BoxWrapper>
  <BoxAccess {...props} />
</BoxWrapper>

/**
 * @function LevelLogin
 * @param {*} props 
 */
const LevelLogin = ({
  box, styled, styledLogin,
  isLoginDisabled, variant,
  componentLogin, children, ...props
}) => { 
  const { isLoggedIn } = box
 return(
  <>
    {
      !isLoggedIn
      ? componentLogin
        ? componentLogin
        : isLoginDisabled ? null :  null
      : children
    }
  </>
)}

/**
 * @function LevelSpace
 * @param {*} props 
 */
const LevelSpace = ({
  box,
  space, threadName, threadAuto, spaceAuto, variant,
  styled, styledLogin, styledSpace, isLoginDisabled, componentSpace, componentLogin,
  children, ...props
}) => { 
  const { isLoggedIn } = box

  const [ spaceLoaded, setSpace ] = useState()

  useEffect( () => {
    if(idx(box, _=>_.spaces[space].instance)) {
      setSpace(true)
    }
  }, [idx(box, _=>_.spaces[space].instance)])
 return(
  <>
      {
        !isLoggedIn && !spaceLoaded
        ? componentLogin
          ? componentLogin
          : isLoginDisabled ? null :  null
        : null
      }

      {
        isLoggedIn && !spaceLoaded &&
        <BoxSpaceOpen
          auto={spaceAuto}
          space={space}
        >
          <>
              {
                componentSpace
                ? componentSpace
                : <Button {...styledSpace}>open {space} space</Button>
              }
            </>
        </BoxSpaceOpen>
      }

      {
        
        isLoggedIn && spaceLoaded &&
        children
      }
    </>
)}

/**
 * @function LevelThread
 * @param {*} props 
 */
const LevelThread = ({
  box,
  space, threadName, threadAuto, spaceAuto, variant,
  styled, styledLogin, styledSpace, styledThread,
  isLoginDisabled,
  componentSpace, componentThread, componentLogin, ...props
}) => { 
  const { isLoggedIn } = box
  const [ threadLoaded, setThread ] = useState()
  const [ spaceLoaded, setSpace ] = useState()

  useEffect( () => {
    if(idx(box, _=>_.spaces[space].instance)) {
      setSpace(true)
    }
  }, [idx(box, _=>_.spaces[space].instance)])

  useEffect( () => {
    
    if(idx(box, _=>_.threads[threadName].instance)) {
      setThread(true)
    }
  }, [idx(box, _=>_.threads[threadName])])

  console.log(spaceLoaded, 'spaceLoaded')
  console.log(threadLoaded, 'threadLoaded')
 return(
  <>
  {
        !isLoggedIn && !spaceLoaded && !threadLoaded 
        ? componentLogin
          ? componentLogin
          : isLoginDisabled ? null :  null
        : null
      }

      {
        isLoggedIn && !spaceLoaded &&
        <BoxSpaceOpen
          auto={spaceAuto}
          space={space}
        >
          <>
              {
                componentSpace
                ? componentSpace
                : <Button {...styledSpace}>open {space} space</Button>
              }
            </>
        </BoxSpaceOpen>
      }

      {
        isLoggedIn && spaceLoaded && !threadLoaded &&
        <BoxThreadJoin 
          auto={threadAuto}
          threadName={threadName}
          members={props.members}
          firstModerator={props.firstModerator}
          space={space}
          options={{
            members: true
          }}
          >
            <>
              {
                componentThread
                ? componentThread
                : <Button {...styledThread}>Join {threadName} Thread</Button>
              }
            </>
          
        </BoxThreadJoin>
      }

      {
        
        isLoggedIn && spaceLoaded && threadLoaded &&
        props.children
      }
      
    </>
)}