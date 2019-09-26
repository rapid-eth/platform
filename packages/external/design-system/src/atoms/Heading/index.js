import styled from 'styled-components'
import is from 'styled-is';
import Text from '../Text'

const Heading = styled(Text)
  `
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
font-size: 22px;
`};
${is('lg')`
font-size: 28px;
`};
${is('xl')`
font-size: 36px;
line-height: 
`};
${is('xxl')`
font-size: 42px;
`};
${is('mega')`
font-size: 54px;
`};

${is('center')`
  text-align: center;
`};
`

Heading.defaultProps = {
  as: 'h3',
  m: 0,
  mb: 10
}

export default Heading