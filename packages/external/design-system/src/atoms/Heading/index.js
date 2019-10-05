import styled from 'styled-components'
import is from 'styled-is';
import Text from '../Text'

const Heading = styled(Text)
  `
  margin-top: 0;
  margin-bottom: 10px;
  ${is('noMargin')`
    margin: 0;
  `};
  ${is('pointer')`
    cursor: pointer;
  `};
  ${is('xs')`
    font-size: 12px;
  `};
  ${is('sm')`
    font-size: 14px;
  `};
  ${is('md')`
    font-size: 18px;
  `};
  ${is('lg')`
    font-size: 26px;
  `};
  ${is('xl')`
    font-size: 32px;
    line-height: 
  `};
  ${is('xxl')`
    font-size: 42px;
  `};
  ${is('mega')`
    font-size: 54px;
  `};
  ${is('giga')`
    font-size: 68px;
  `};
  ${is('ultra')`
    font-size: 84px;
  `};

  ${is('center')`
    text-align: center;
  `};
`

Heading.defaultProps = {
  as: 'h3',
}

export default Heading