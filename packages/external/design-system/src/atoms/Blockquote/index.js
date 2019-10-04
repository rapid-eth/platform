import styled from 'styled-components'
import is from 'styled-is';
import Box from '../Box'

const Heading = styled(Box)
`
& cite {
  font-size: 0.9em;
  font-style: normal;
}

${is('card')`
  padding: 60px;
  &::before {
    content: "";
    background-color: #FFF;
    background: ${props => props.theme.gradient['white'][0]};
    background-image: -webkit-linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}` });
    background-image: linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}`} );
    ${props =>`box-shadow: ${props.theme.shadows[0]};`}
    border-radius: 5px;
    padding: 15.5px;
    position: absolute; left: 0; right: 0; top: 0 ; bottom: 0;
    // left: -70px;
    // right: -70px;
    // top: -70px;
    // bottom: -70px;
    z-index: -1;
  }

  &::after {
    color: #d4d4d4;
    content: '"';
    font-size: 8.5em !important;
    font-weight: normal;
    position: absolute;
    line-height: normal;
    // left: -49px;
    // top: -63px;
    left: 15px;
    top: -10px;
    opacity: 1;
  }
`};
`

Heading.defaultProps = {
  as: 'blockquote',
  fontFamily: 'Ubuntu',
  fontWeight: 'normal',
  lineHeight: 'normal'
}

export default Heading