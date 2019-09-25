import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box, Flex } from '@horizin/design-system'
import Context from "../Context";

const TabListStyled = styled(Flex)`
${
  variant({
    variants: {
      default: {
        bg: 'white',
        boxShadow: 1,
        borderRadius: '0 0 10px 10px',
        padding: 20
      }
    }
  })
  }

`

const TabList = ({
  id,
  tabIdSelected,
  template,
  isActive,
  variant,
  children,
  styled,
  ...props
}) => {
  const state = useContext(Context)
  /**
   * @function TemplateLoader
   * @description Load global tabs templates.
   */
  useEffect(() => {
    state.dispatch({
      type: 'setTabSelected',
      id: id,
      tabId: tabIdSelected
    })
  }, [state.dispatch])

  return (
    <TabListStyled flexDirection='row' variant={variant} {...styled} {...props}>
      {
        children && Array.isArray(children)
          ? children.map(child => React.isValidElement(child) ? React.cloneElement(child, { id, variant: template }) : null)
          : React.cloneElement(children, { id, variant: template })
      }
    </TabListStyled>
  )
};

TabList.propTypes = {
  isActive: PropTypes.bool,
  variant: PropTypes.string,

};

export default TabList;
