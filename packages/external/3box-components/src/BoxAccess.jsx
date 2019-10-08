/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button, Loading } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxSpaceOpen, BoxThreadJoin } from './index'
import BoxLoginButton from './BoxLoginButton'
import Component from './CMS/Component'

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
      level === 'enabled' &&
      <LevelEnabled box={box} {...props} />
    }
    {
      level === 'login' &&
      <LevelLogin box={box} {...props} />
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
  componentLoading: null,
  threadName: undefined,
  loginAuto: false,
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
 * @function LevelEnabled
 * @param {*} props 
 */
const LevelEnabled = ({ box, children }) => box.isEnableSuccess ? children : null

/**
 * @function LevelLogin
 * @param {*} props 
 */
const LevelLogin = ({
  box, styled, styledLogin, variant,
  componentLogin, children, ...props
}) => { 
  const { isLoggedIn } = box
 return(
  props.isLoginHidden ? null :
  !isLoggedIn
  ? componentLogin
    ? componentLogin
    : props.isLoginDisabled ? null :  null
  : children
)}

/**
 * @function LevelSpace
 * @param {*} props 
 */
const LevelSpace = ({
  box,
  space, threadName, threadAuto, spaceAuto, variant,
  styled, styledLogin, styledSpace, componentSpace, componentLogin,
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
        ? props.isLoginDisabled ? null 
          : componentLogin
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

 return(
  <>

      {
        props.componentLoading ?
        !spaceLoaded && !spaceAuto
          : props.componentLoading
      }

      {
        !isLoggedIn && !spaceLoaded && !threadLoaded 
        ? props.isLoginDisabled ? null 
          : componentLogin
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
          space={space}
          threadName={threadName}
          options={props.optionsThread}
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
        
        isLoggedIn && spaceLoaded && threadLoaded 
        ? props.children
        :  null
      }
      
    </>
)}