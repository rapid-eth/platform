import React from 'react';
import styled from 'styled-components'
import { variant } from 'styled-system'
import { border, position, color, layout, flexbox, grid, background, typography, shadow, system, space } from 'styled-system'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const TabStyled = styled(Tab)`
${ props =>
  variant({
    variants: {
      tag: {
        borderColor: '#ffffff45',
        borderWidth: 1,
        borderStyle: 'inset',
        borderRadius: 80,
        bg: props.highlight,
        padding: 2,
        px: 3,
        textTransform: 'uppercase',
        fontWeight: 700,
        fontSize: 0
      }
    }
  })
}
${flexbox}
${grid}
${position}
${border}
${background}
${typography}
${color}
${shadow}
${space}
${layout}
`

TabStyled.defaultProps = {
  as: 'TabStyled',
  display: 'inline-block',
  bg: 'white',
  border: 'none',
  p: 5,
  '&.ireact-tabs__tab--selected': {
    bg: 'blue'
  }
}

export default props =>
<Tab>
  <TabStyled {...props} />
</Tab>