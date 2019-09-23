/* --- Global Dependencies --- */

/* --- Local Dependencies --- */
import { logoEthereumOpaque } from 'assets/images'
import styled  from 'styled-components'
import { borderColor, boxShadow, space, width } from 'styled-system'
import { palette } from 'styled-theme'
import is from 'styled-is';

/* --------------------------- Styled Component ----------------------------- */
const HorizontalRule = styled.hr`
  border-color: ${palette('grayscale', 1, true)};
  ${boxShadow}
  ${borderColor}
  border-style: solid;
  position: relative;
  overflow: visible;
  ${space}
  ${width}
  ${is('thin')`border-bottom: none;`};
  
  ${is('dash')`
    width: 20px;
  `};

  ${is('center')`
    margin-left: auto;
    margin-right: auto;
  `};
  // Icon

  ${is('iconic')`
    &:after {
      background-color: #FFF;
      background-image: url('${logoEthereumOpaque}');
      background-size: 10px;
      background-position:  center;
      background-repeat: no-repeat
      border-radius: 99999px;
      border-color: ${palette('grayscale', 1, true)};
      border-style: solid;
      border-width: 1px;
      content: '';
      display: block;
      margin: 0 auto;
      position: absolute;
      overflow: hidden;
      right: 0;
      left: 0;
      top: -9.5px;
      height: 17px;
      width: 25px;
    }
  `};
  ${is('or')`
    &:after {
      background-color: #FFF;
      color: ${palette('grayscale', 1, true)};
      content: 'OR';
      display: block;
      margin: 0 auto;
      position: absolute;
      overflow: hidden;
      right: 0;
      left: 0;
      top: -9.5px;
      height: 17px;
      text-align: center
      width: 55px;
    }
  `};
  
`

HorizontalRule.defaultProps = {
  borderColor: 'grayLine',
  width: 1,
  style: {
    borderImageSlice: 1
  }
}
export default HorizontalRule