/* --- Global Dependencies --- */
import React, { useState } from "react";
import { Match } from '@reach/router'
import styled from 'styled-components'

/* --- Local Dependencies --- */
import { Flex, Heading, Link, Span } from "../../index";
/* ------- Styled Component ------- */

const StyledMenuItem = styled(Flex)`
  opacity: 0.75;
  &:hover {
    background: rgba(0,0,0, 0.035);
    opacity: 1;
  }
`

const ChildContainer = styled(Flex)`
  padding: 4px;

  & .grandchild {
    opacity: 0.75;
  }

  & .grandchild:hover {
    opacity: 1;
  }

  &:hover {
    background: rgba(0,0,0, 0.035);
    opacity: 1;

    & .child {
      opacity: 1;
    }
  
  }

  & ul {
    margin: 0;
    margin-top: 10px;
    padding-left: 25px;
  }

  & li {
    opacity: 0.75;
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 7px;

    &:hover {
      opacity: 1;
    }
  }
`
const LinkStyledChild = styled(Link)`
  color: inherit;
  display: block;
  font-size: 14px;
  margin-left: 8px;
  text-decoration: none;
  opacity: 0.75;
  &:hover {
    opacity: 1;
  }
`

const MenuItem = ({ children, label, to,  icon, vertical, ...props }) => {
const state = useState(true);
const isOpen = state[0]
const setOpen = state[1]

return (
  vertical
  ?<Flex column fullWidth width={1}>
    <StyledMenuItem alignCenter fullWidth>
      {icon && icon}

      <WrapperLink
        p={10}
        styled={{
          color: '#788fa5',
          fontSize: '1.2em',
          fontWeight: 'normal',
          p: 10
        }}
        active={{
          color: '#595959',
        }}
        getProps={({ isCurrent, isPartiallyCurrent }) => ({style:{
            background: isPartiallyCurrent ? props.activeBackground : "inherit",
            color: isPartiallyCurrent ? props.activeColor : "inherit"
          }})
        }
        to={to}>
      {label}
      </WrapperLink>

      {
        /* Menu Item Children */
        children &&
        <Span pointer width={30} ml='auto' onClick={()=>setOpen(!isOpen)}>
          <Span fontSize={[1]} transform={isOpen ? 'rotate(90deg)' : ''}>{isOpen? '▶' : '▶'}</Span>
        </Span>
      }
    </StyledMenuItem>

  { 
    isOpen && children &&
    children.map( c =>
    <ChildContainer column> 
        <WrapperLink
        styled={{
          p: 2,
          width: '100%'
        }}
        active={{
          bg: 'rgba(0,0,0, 0.035)',
        }} className='child' to={c.to}>
          <Flex alignCenter between px={2}>
            <Span sm>{c.label}</Span>
            <Span>{c.icon && c.icon}</Span>
          </Flex>
        </WrapperLink>
    </ChildContainer>)
  }
</Flex>
  
  
  : <Horizontal />
)}

const WrapperLink = ({ to, children, active, styled }) => (
  <Match path={`${to}`}>
    {props => (
      props.match
      ? <Link fullWidth active to={to} {...styled} {...active}> {children}</Link>
      : <Link to={to} {...styled}>{children}</Link>
    )}
  </Match>
)

const Horizontal = ({ styled, label, children, icon, to, ...props}) => { 
  const state = useState(props.isOpen);
  const isOpen = state[0]
  const setOpen = state[1]
 return(
  <Flex >
  <WrapperLink
    p={10}
    active={{
      bg: 'blue',
      color: 'white'
    }}
    getProps={({ isCurrent, isPartiallyCurrent }) => ({style:{

        background: isPartiallyCurrent ? props.activeBackground : "inherit",
        color: isPartiallyCurrent ? props.activeColor : "inherit"
      }})
    }
    to={to}>
    <Flex ac>
      {icon && <Span mr={10}>{icon}</Span>}
      <Span>{label}</Span>
    </Flex>
    </WrapperLink>
  { children &&
    <Span pointer width={30}  alignSelf='flex-end' ml='auto' onClick={()=>setOpen(!isOpen)}>
      <Span fontSize={[1]} transform={isOpen ? 'rotate(90deg)' : ''}>{isOpen? '↴' : '▶'}</Span>
    </Span>
  }
{ isOpen && children &&
  children.map( c =>
  <ChildContainer>
    <Flex alignCenter mb='8px'>
      {c.icon && c.icon}
      <LinkStyledChild className='child' to={c.to}>
        {c.label}
      </LinkStyledChild>
    </Flex>
      <Flex column>
        { c.children &&
          <Flex column ml='8px'>
            {c.children.map( i =>
              <Link to={i.to}>
                <Flex alignCenter className='grandchild' my='4px'>
                  {i.icon}
                  <Span fontSize={1} ml='8px'>{i.label}</Span>
                </Flex>
              </Link>
            )}
          </Flex>
        }
      </Flex>
  </ChildContainer>)
}
</Flex>
)
}


/* ------- Component ------- */
export default ({ items, label, vertical, fullWidth, ...props }) => 
<Flex column overflow='auto' fullWidth {...props}>
  {
    label &&
    <>
    <Heading fontSize={[0]} p={10}>
      {label}
    </Heading>

    </>
  }
  {console.log(items, )}
  <Flex column>
    {
      Array.isArray(items) && items.length > 0 &&
      items.map( item => <MenuItem vertical={vertical} {...item} {...props} />)
    }
  </Flex>
</Flex>
