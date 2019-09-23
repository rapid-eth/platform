/* --- Global Dependencies --- */
import React from "react"
import styled from 'styled-components'
import { Box, Flex } from '../../index'
import { PortalInjection } from '@horizin/react-context-portal/dist'
/* --- Local Dependencies --- */
export const AsideStyled = styled(Box)`
  background-color: #1e1e2d;
  background-image: -webkit-linear-gradient( 180deg, #1e1e2d, #31314e);
  background-image: linear-gradient( 0deg, #1e1e2d, #31314e);
  color: #FFF;
`

AsideStyled.defaultProps = {
  id: 'dashboard--aside',
  as: 'aside',
  flex: 2,
}

export const HeaderStyled = styled(Box)`
  background-color: #2e2e48;
  border-bottom: 3px solid #dc448d;
  color: #FFF;
  height: 70px;
  padding: 12px 20px;
  width: 100%;
  z-index: 1000;
`
HeaderStyled.defaultProps = {
  id: 'dashboard--header',
  as: 'div',
}

export const MainStyled = styled(Flex)`
  background-color: #ecebf2;
  display: flex;
  flex-direction: column;
  height: 100%;

  & > div {
    // height: 100%;
  }
`

MainStyled.defaultProps = {
  id: 'dashboard--main',
  overflow: 'auto',
  flex: 12,
}
export const MainInnerStyled = styled(Box)`
  overflow-y:auto;
  width: 100%;
  & > div {
    height: 100%;
    width: 100%;
  }
`

MainInnerStyled.defaultProps = {
  id: 'dashboard--main-inner',
  flex: 1
}

export const Header = ({ children, ...props }) =>
<PortalInjection id='dashboard--header'>
 {children}
</PortalInjection>

export const Main = ({ children, ...props }) =>
<PortalInjection id='dashboard--main'>
  {children}
</PortalInjection>

export const MainInner = ({ children, ...props }) =>
<PortalInjection id='dashboard--main-inner'>
  {children}
</PortalInjection>

export const Aside = ({ children, ...props }) =>
<PortalInjection id='dashboard--aside'>
 {children}
</PortalInjection>

export default ({ children }) =>
<Flex className='dashboard' height={'100vh'} overflow='hidden'>
  <AsideStyled/>
  
  <MainStyled column >
    <HeaderStyled/>
    <MainInnerStyled id='dashboard--main-inner'/>
    {/* <HeaderStyled/> */}
    
      {children}
  </MainStyled>
</Flex>
