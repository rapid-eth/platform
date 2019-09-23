import is from 'styled-is';
import styled from 'styled-components'
import Box from '../Box'

const Text = styled(Box)
`
  ${is('center')`
    text-align: center;
  `};
  ${is('right')`
      text-align: right;
  `};
  ${is('pointer')`
    cursor: pointer;
  `};

  ${is('block')`
    display: block;
  `}
  ${is('inlineBlock')`
    display: inline-block;
  `}
  ${is('round')`
    border-radius: 9999px;
  `}
  ${is('circle')`
    border-radius: 9999px;
  `}

  ${is('thin')`
    font-weight: 300;
  `}
  ${is('normal')`
    font-weight: normal;
  `}
  ${is('strong')`
    font-weight: strong;
  `}
  ${is('heavy')`
    font-weight: 700;
  `}
  ${is('thick')`
    font-weight: 900;
  `}

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
    font-size: 36px;
  `};
  ${is('xl')`
    font-size: 42px;
  `};

  ${is('uppercase')`
    text-transform: uppercase;
  `};

  ${is('wordBreakAll')`
    word-break: break-all;
  `}
`

Text.defaultProps = {
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal',
  width: 'auto',
}

export default Text
