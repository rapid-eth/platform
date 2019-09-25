import React, { useContext } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styled from 'styled-components'
import { variant } from 'styled-system'
import { Box, Flex } from '@horizin/design-system'

import Context from "../Context";

const TabPanel = ({
  id,
  isActive,
  tabId,
  variant,
  children,
  styled,
  ...props
}) => {
  const state = useContext(Context)
  const { selectedTabId, setSelectedTabId, tabs, } = state // Grab Data from Global state.
  const isSelected = tabs && tabs[id] && tabs[id].selectedTabId === tabId; // Check IF selected tab.
  // const isSelected = selectedTabId === tabId; // Check IF selected tab.

  return (
    isSelected

    ? <Box isActive={isActive} variant={variant} {...styled} {...props}>
        {children}
      </Box>
    : null
  )
};

TabPanel.propTypes = {
  isActive: PropTypes.bool,
  variant: PropTypes.string,
};

export default TabPanel;
