import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from 'styled-components'
import { variant } from 'styled-system'
import is from 'styled-is'
import { Span } from '@horizin/design-system'

import Context from "../Context";
const TabStyled = styled(Span)`
${ props =>
  variant({
    variants: {
      default: {
        borderRadius: '0',
        px: 10,
        py: 10,
        "&.isSelected": {
          bg: 'white',
        }
      },

      shadow: {
        bg: props.colorBackground,
        px: 10,
        py: 10,
        "&.isSelected": {
          bg: props.colorBackgroundSelected,
          boxShadow: `
            34px -21px 10px -34px #00000047,
            40px -5px 10px -34px #00000024,
            40px 5px 10px -34px #00000024,
            34px 21px 10px -34px #00000047
          `
        },
        "&:hover": {
          boxShadow: `
            34px -21px 10px -34px #00000017,
            40px -5px 10px -34px #00000010,
            40px 5px 10px -34px #00000010,
            34px 21px 10px -34px #00000017
          `
        },
        "&.isSelected:hover": {
          bg: props.colorBackgroundSelected,
          boxShadow: `
            34px -21px 10px -34px #00000047,
            40px -5px 10px -34px #00000024,
            40px 5px 10px -34px #00000024,
            34px 21px 10px -34px #00000047
          `
        }
      },
      border: {
        borderLeftWidth: !props.borderLeft ? 0 : `${ typeof props.borderLeft === 'string' ? props.borderLeft : '2px'} !important`,
        borderRightWidth: !props.borderRight ? 0 : `${ typeof props.borderRight === 'string' ? props.borderRight : '2px'} !important`,
        borderTopWidth:  !props.borderTop ? 0 : `${ typeof props.borderRight === 'string' ? props.borderRight : '2px'} !important`,
        borderBottomWidth:  !props.borderBottom ? 0 : `${ typeof props.borderBottom === 'string' ? props.borderBottom : '2px'} !important`,
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: props.colorHighlight,
        px: 10,
        py: 10,
        "&.isSelected": {
          bg: props.colorBackgroundSelected,
          borderColor: props.colorHighlightSelected,
        },
        "&:hover": {
          bg: props.colorBackgroundHover,
          borderColor: props.colorHighlightHover,
        },
        "&.isSelected:hover": {
          bg: props.colorBackgroundSelected,
        }
      },

      card: {
        bg: props.colorBackground,
        borderRadius: 0,
        px: 10,
        py: 10,
        "&:hover": {
          bg: props.colorBackgroundHover,
          borderColor: props.colorHighlightHover,
          borderWidth: 0,
          borderStyle: 'solid',
          borderTopWidth: '1px',
          borderColor: 'gray',
        },
        "&.isSelected": {
          bg: 'white',
          bg: props.colorBackgroundSelected,
          borderTop: '1px solid blue' ,
          borderColor: props.colorHighlightSelected,
        }
      },
      // ...props.templates
    }
  })
}
display: inline-block;
`

const Tab = ({
  id,
  disabled,
  hoverActivate,
  tabId,
  variant,
  className,
  styled,
  children,
  ...props
}) => {

  const state = useContext(Context)
  const { dispatch, variantDefault, inputs, tabs, selectedTabId, tabVariant } = state // Grab Data from Global state.
  const isSelected = tabs && tabs[id] && tabs[id].selectedTabId === tabId; // Check IF selected tab.
  const template = variant || variantDefault // Ranked variant input. 
  const inputSelected = inputs && inputs[template] ? inputs[template] : {} // Check global inputs for template type.

  return (
    <TabStyled
      pointer
      isSelected={isSelected} {...tabVariant} {...props} {...styled} variant={template} {...inputSelected}
      className={classNames("tab", className, {
        isDisabled: disabled,
        isSelected
      })}
      onClick={()=> dispatch({type: 'setTabSelected', id: id, tabId: tabId})}
      onMouseEnter={( ()=> !hoverActivate ? null : dispatch({type: 'setTabSelected', tabId: tabId}) )}
    >
      {children}
    </TabStyled>
  )
};

Tab.propTypes = {
  isSelected: PropTypes.bool,
  color: PropTypes.string,
  colorBackground: PropTypes.string,

  colorBackgroundSelected: PropTypes.string,
  colorBackgroundHover: PropTypes.string,

  colorHighlight: PropTypes.string,
  colorHighlightSelected: PropTypes.string,
  colorHighlightHover: PropTypes.string,

  variant: PropTypes.string,
};

Tab.defaultProps = {
  color: 'inherit',
  colorSelected: 'blue',
  colorHover: 'blue',
  colorBackground: 'transparent',
  colorBackgroundSelected: 'white',
  colorBackgroundHover: 'rgba(255,255,255, 0.25)',
  colorHighlight: 'white',
  colorHighlightSelected: 'blue',
  colorHighlightHover: 'blue',
  display: 'inline-block',
}

export default Tab;
