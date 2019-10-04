import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PortalCreate from './PortalCreate'
import { BackgroundImage, BackgroundGradient, Flex, Box, Button, Container, Heading, Span } from '@horizin/design-system/dist'

import PortalContext from '../Context'
import ModalView from './styled/Modal'
import PanelView from './styled/Panel'
import ToastView from './styled/Toast'

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
  return (
    <PortalContext.Consumer>
      {
        portal => (
        <>
          {
            
            <PortalCreate id='portal'>
              {/*
                Panels
              */}

              {
                portal.isActive && portal.store.panels && Array.isArray(portal.store.panels) && portal.store.panels.length > 0 &&
                <>
                  
                  {
                    portal.store.panels.map( panel => <PanelView portal={portal} {...panel}/>)
                  }
                </>
              }

              {
                portal.isActive && portal.store.modals && Array.isArray(portal.store.modals) && portal.store.modals.length > 0 &&
                <>
                  {/* <BackgroundGradient bg='black' fixed={true} absolute={false} opacity={.25} onClick={portal.closeModals} /> */}
                  {
                    portal.store.modals.map( modal => <ModalView portal={portal} {...modal}/>)
                  }
                </>
              }
              
              {/*
                Toasts
              */}

              {
                portal.store.toasts && Array.isArray(portal.store.toasts) && portal.store.toasts.length > 0 &&
                <>
                  <Box position='fixed !important' relative={false} top='0' right='0'>
                    {
                      portal.store.toasts.map( (panel, key) => <ToastView key={panel.delta} id={key} portal={portal} {...panel}/>)
                    }
                  </Box>
                </>
              }
            </PortalCreate>
          }
        </>
      )
    }
    </PortalContext.Consumer>
  )
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

