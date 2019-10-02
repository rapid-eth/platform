import styled from 'styled-components'
import Text from '../Text'
import is from 'styled-is';
import { variant } from 'styled-system'
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

`

TabStyled.defaultProps = {
  as: 'TabStyled',
  display: 'inline-block',
}

export default TabStyled