/* --- Global Dependencies --- */
import React from "react"
import styled from 'styled-components'
import { Box, Flex } from '../../index'
import { PortalInjection } from '@horizin/react-hooks-portal/dist'

/* --- Local Dependencies --- */
export const HeaderStyled = styled(Box)`
  background-color: #2e2e48;
  border-bottom: 3px solid #dc448d;
  color: #FFF;
  padding: 12px 20px;
  width: 100%;
  z-index: 1000;
`
HeaderStyled.defaultProps = {
  id: 'site--header',
  as: 'header',
}

export const MainStyled = styled(Flex)`
  background-color: #FFF;
  display: flex;
  flex-direction: column;
  height: 100%;
`

MainStyled.defaultProps = {
  id: 'site--main',
  as: 'main'
}

export const FooterStyled = styled(Box)`
  background-color: #1e1e2d;
  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);
  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);
  border-top: 3px solid #dc448d;
  color: #FFF;
`

FooterStyled.defaultProps = {
  id: 'site--footer',
  as: 'footer',
  py: 50
}

export const SiteHeader = ({ children, ...props }) =>
  <PortalInjection id='site--header'>
    <Box {...props}>
      {children}
    </Box>
  </PortalInjection>

export const SiteMain = ({ children, ...props }) =>
  <PortalInjection id='site--main'>
    {children}
  </PortalInjection>

export const SiteFooter = ({ children, ...props }) =>
  <PortalInjection id='site--footer'>
    {children}
  </PortalInjection>

export default ({ children }) =>
  <Flex column className='site' minHeight={'100vh'}>
    <HeaderStyled />
    <MainStyled column >
      {children}
    </MainStyled>
    <FooterStyled />
  </Flex>
