import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box, Flex, Span, Absolute } from '@horizin/design-system/dist'
import { CSSTransition } from 'react-transition-group';

const Toast = styled(Box)
`
${
  variant({
    prop: 'location',
    variants: {
      topRight: {
        top: 0,
        right: 0,
        m: 20
      },
      topLeft: {
        top: 0,
        left: 0,
        m: 20
      },
      bottomLeft: {
        top: 0,
        left: 0,
        m: 20
      },
    }
  })
}
`

Toast.defaultProps = {
  location: 'topRight'
}

const ToastActions = ({ portal, label, content, closeOnClick, closeTimer, styled, styledLabel, id, ...props}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const actionHandler = () => {
    setIsAnimating(false)
    setTimeout(() => {
      portal.closeToast({id})
    }, 300);
  }
  useEffect( () => { 
    if(closeTimer) {
      setTimeout(() => {
        actionHandler({id})
      }, closeTimer);
    }
  }, [closeTimer])
  useEffect(() => {
    if(!isOpening && !isAnimating) {
      setIsOpening(true)
      setIsAnimating(true)
    }
  }, [isOpening, isAnimating])
  return (
    <CSSTransition
      in={(isAnimating)}
      timeout={300}
      classNames="alert"
      >
        {
          !isOpening ? <div></div> :
          <Toast card p={3} portal={portal} id={id} open {...styled} {...styled}>
            <Box>
              {label && <Span xs>{label}</Span>}
              <Absolute layout='topRight' m={-3}>
                <Span pointer xxs thin circle p={2} bg='white' alignSelf='flex-end' onClick={actionHandler}>X</Span>
              </Absolute>
            </Box>
            <Box onClick={closeOnClick ? actionHandler : null} >
              {
                content && React.isValidElement(content)
                  ? React.cloneElement(content)
                  : content
              }
            </Box>
          </Toast>
        }
    </CSSTransition>
  )
}

ToastActions.defaultProps = {
  closeOnClick: false,
  closeTimer: undefined
}

export default ToastActions