import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import classNames from "classnames";
import{ Button, Absolute, BackgroundGradient, Box, Flex, Text, Span } from '@horizin/design-system'


// const  = atoms
const Component = ({
  isOpen,
  close,
  Content,
  className,
  activeClassName,
  backgroundClassName,
  label,
  layoutDefault,
  position,
  positionStyle,
  styled,
  styledBackground,
  styledModal,
  ...props
}) => {
  const portalElement = document.createElement('div');

  ReactDOM.createPortal(
    React.createElement(<div>hello</div>),
    document.getElementById("portal")
  )

  return !isOpen ? null :
  <>
  <PortalInjection id='portal'>
  <div className={classNames(className, {[activeClassName]: isOpen})}>
    <BackgroundGradient bg='blue' opacity={.42} onClick={close}/>
    
    {
      position == 'toast'
      && <Box card noPadding layout={positionStyle || layoutDefault || position  } {...styledModal}>
          <div>
            {
              label &&
              <Flex alignCenter between gradient='blue' color='white' p={10} fullWidth>
                <Span fontSize={[3]}>{label}</Span>
                <Span pointer sm heavy pointer onClick={close}>X</Span>
              </Flex>
            }
            <Box p={10}>
              {
                Content && React.isValidElement(Content)
                ? React.cloneElement(Content)
                : Content
              }
            </Box>
          </div>
        </Box>
    }
    {
      position == 'panel'
      && <Box card noPadding height='100%' layout={positionStyle || position } {...styledModal}>
          <div>
            {
              label &&
              <Flex alignCenter between gradient='blue' color='white' p={10} fullWidth>
                <Span fontSize={[3]}>{label}</Span>
                <Span pointer sm heavy pointer onClick={close}>X</Span>
              </Flex>
            }
            <Box p={20}>
              {
                Content && React.isValidElement(Content)
                ? React.cloneElement(Content)
                : Content
              }
            </Box>
          </div>
        </Box>
    }
    {
      position === 'modal' &&
      <Box {...styledModal}>
          <div className="portal-content">
            {
              label &&
              <Flex alignCenter borderRoundedTop between gradient='blue' color='white' p={10} fullWidth>
                <Span fontSize={[3]}>{label}</Span>
                <Span pointer sm heavy pointer onClick={close}>X</Span>
              </Flex>
            }
            <Box bg='white' card borderCurvedBottom>
              {
                Content && React.isValidElement(Content)
                ? React.cloneElement(Content)
                : Content
              }
            </Box>
          </div>
      </Box>
    }
    
  </div>
  </PortalInjection>
  </>
};

Component.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  open: PropTypes.func,
  Content: PropTypes.func,
  className: PropTypes.string,
  activeClassName: PropTypes.string,
  backgroundClassName: PropTypes.string
};

export default Component;
