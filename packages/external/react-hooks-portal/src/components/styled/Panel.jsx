import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { BackgroundGradient, Box, Flex, Span } from '@horizin/design-system/dist'
import { CSSTransition } from 'react-transition-group';

const Panel = styled(Box)
`
${
  variant({
    prop: 'position',
    variants: {
      default: {
        right: 0,
        top: 0,
        bottom: 0,
        minHeight: 280,
        minWidth: [300,340, 450],
      },
      left: {
        left: 0,
        top: 0,
        bottom: 0,
        minWidth: 300
      },
      right: {
        right: 0,
        top: 0,
        bottom: 0,
        minWidth: 300
      },
      bottom: {
        bottom: 0,
        right: 0,
        left: 0,
      },
    }
  })
}
`

Panel.defaultProps = {
  bg: 'white',
  boxShadow: 0,
  fixed: true,
  relative: false,
  position: 'default',
  overflow: 'auto'
}

const PanelActions = ({ portal, label, content, styled, styledLabel, id, ...props}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const closeHandler = () => {
    setIsAnimating(false)
              setTimeout(() => {
                portal.closePanels()
              }, 300);
  }

  useEffect(() => {
    if(!isOpening && !isAnimating) {
      setIsOpening(true)
      setIsAnimating(true)
    }
  }, [isOpening, isAnimating])
  return (
    <>
      <CSSTransition in={(isAnimating)} timeout={300} classNames="fadeInLeft">
        <BackgroundGradient bg='black' fixed={true} absolute={false} opacity={.2} onClick={closeHandler} />
      </CSSTransition>

      <CSSTransition in={(isAnimating)} timeout={300} classNames="fadeInLeft">
        {
          !isOpening ? <div></div> :
          <Panel {...styled} {...styled}>
            {
              label &&
              <Flex alignCenter between fullWidth gradient='gray' p={10} {...styledLabel}>
                <Span fontSize={[3]}>{label}</Span>
                <Span pointer md heavy pointer onClick={closeHandler}>X</Span>
              </Flex>
            }
            <Box>
              {
                content && React.isValidElement(content)
                  ? React.cloneElement(content)
                  : content
              }
            </Box>
            </Panel>
        }
      </CSSTransition>
    </>
  )
}

export default PanelActions