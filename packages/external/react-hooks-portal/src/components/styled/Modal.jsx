import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { BackgroundGradient, Box, Flex, Span } from '@horizin/design-system/dist'
import { CSSTransition } from 'react-transition-group';

const Modal = styled(Flex)
`
${
  variant({
    variants: {
      default: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      fullScreen: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        borderRadius: 0,
        overflow: 'auto',
        // width: '100%',
        // height: '100%',
      },
    }
  })
}
`

Modal.defaultProps = {
  column: true,
  boxShadow: 0,
  fixed: true,
  relative: false,
  variant: 'default'
}

const ModalInner = styled(Flex)
`
${
  variant({
    variants: {
      default: {
        center: true,
        column: true,
        height: '50%',
        width: '50%'
      },
      fullScreen: {
        width: '100%',
        height: '100%',
      },
    }
  })
}
`

ModalInner.defaultProps = {
  variant: 'default'
}

const ModalActions = ({ portal, label, content, styled, styledLabel, variant, variantInner, id, ...props}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const closeHandler = () => {
    setIsAnimating(false)
    setTimeout(() => {
      portal.closeModals()
    }, 300);
  }

  useEffect(() => {
    if(!isOpening && !isAnimating) {
      setIsOpening(true)
      setIsAnimating(true)
    }
  }, [isOpening, isAnimating])
  console.log(variant, 'varr')
  return (
    <>
      


      <CSSTransition in={(isAnimating)} timeout={300} classNames="fadeIn">
        {
          !isOpening ? <div></div> :
          <Modal center column {...styled} {...styled} variant={variant} >
            {/* <CSSTransition in={(isAnimating)} timeout={300} classNames="fadeIn"> */}
              {
                // !isOpening ? <div></div> :
                <BackgroundGradient bg='black' fixed={true} absolute={false} transform='scale(2)' opacity={.2} onClick={closeHandler} />
              }
            {/* </CSSTransition> */}
           <ModalInner position={variant} variant={variantInner} >
              {
                label &&
                <Flex alignCenter between fullWidth gradient='gray' p={10} {...styledLabel}>
                  <Span fontSize={[3]}>{label}</Span>
                  <Span pointer md heavy pointer onClick={closeHandler}>X</Span>
                </Flex>
              }
              <Flex column flex={1} height='100%' fullWidth>
                {
                  content && React.isValidElement(content)
                    ? React.cloneElement(content)
                    : content
                }
              </Flex>
           </ModalInner>
          </Modal>
        }
      </CSSTransition>
    </>
  )
}

export default ModalActions

