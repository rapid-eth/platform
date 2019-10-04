/* --- Global Dependencies --- */
import idx from 'idx'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variant } from 'styled-system'
import { border, position, color, layout, flexbox, grid, background, typography, shadow, system, space } from 'styled-system'
import is from 'styled-is';
import { withoutProps, ignoreList } from '../../utils'

const Box = styled(withoutProps(ignoreList)('div'))
`box-sizing: border-box;
${flexbox}
${grid}
${position}
/* --------------- */
/*     Card     */
/* --------------- */
${is('card')`
  background-color: #FFF;
  background: ${props => props.theme.gradient['white'][0]};
  background-image: -webkit-linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}`});
  background-image: linear-gradient(${props => props.gradientDir ? props.gradientDir : '180'}deg , ${props => `${props.theme.gradient['white'][0]}, ${props.theme.gradient['white'][1]}`} );
  ${props => `box-shadow: ${props.theme.shadows[0]};`}
  border-radius: 5px;
  padding: 15.5px;
`};

${is('shadowMedium')`
  ${props => `box-shadow: ${props.theme.shadows[4]};`}
`}

${is('cardHover')`
&:hover {
  box-shadow: ${props => idx(props, _ => _.theme.shadows['lightHover'])};
  transform: scale(1.025);
}
`};

${
  variant({
    prop: 'layout',
    variants: {
      toast: {
        position: 'fixed !important',
        top: 0,
        right: 0,
        marginTop: 20,
        marginRight: 20,
        minWidth: 180
      },
      panel: {
        position: 'fixed !important',
        top: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        minWidth: 360,
        maxWidth: 360
      },
      panelRight: {
        position: 'fixed !important',
        relative: false,
        top: 0,
        bottom: 0,
        right: 0,
        height: '100%',
        minWidth: 360,
        maxWidth: 360
      },
      panelLeft: {
        position: 'fixed !important',
        relative: false,
        top: 0,
        bottom: 0,
        left: 0,
        height: '100%',
        minWidth: 360,
        maxWidth: 360
      },
    }
  })
  }
  ${
    variant({
      prop: 'gem',
      variants: {
        white: {
          background: 'linear-gradient(120deg ,#FFF,#efe8dc)',
          borderColor: '#64627e80',
          borderWidth: 2,
          borderStyle: 'solid',
          color: '#3e3e3e',
          bg: '#FFF',
          "&:hover": {
            color: '#3e3e3e !important',
          }
        },
        primary: {
          bg: 'primary',
          color: '#ffffffe6'
        },
        secondary: {
          bg: 'secondary',
          color: '#ffffffe6'
        },
        tertiary: {
          bg: 'tertiary',
          color: '#ffffffe6'
        },
    
      }
      })
    }
  ${is('gem')`
    border-radius: 20px 5px 20px 10px;
    text-transform: uppercase;
    font-weight: normal;
    fontSize: 0;
    padding: 8px;
    &:hover {
      color: #FFF;
      top: -1px;
    }
  `};
/* --------------- */
/*     General     */
/* --------------- */
${is('cardHeader')`
  background: #f3f3f3;
  padding: 15px;
  border-radius: 10px 10px 0 0;
  margin-top: -16px;
  margin-left: -16px;
  margin-right: -16px;
  margin-bottom: 10px;
`}
${is('fullWidth')`
  width: 100%;
`}
${is('fill')`
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`}
${is('relative')`
  position: relative
`}
${is('absolute')`
  position: absolute !important;
`}

${is('fixed')`
  position: fixed !important;
`}

${is('noPadding')`
  padding: 0px !important;
`}

${is('noMargin')`
  margin: 0px !important;
`}

${is('wordBreakAll')`
  word-break: break-all;
`}



/* --------------- */
/*     Helpers     */
/* --------------- */
${is('pointer')`
  cursor: pointer;
`};

${is('rounded')`
  border-radius: 8px;
`};
${is('borderRoundedBottom')`
  border-radius: 0 0 8px 8px !important;
`};
${is('borderRoundedTop')`
  border-radius: 8px 8px 0 0 !important;
`};

${is('curved')`
  border-radius: 40px;
`};
${is('borderCurvedTop')`
  border-radius: 15px 15px 0 0 !important;
`};
${is('borderCurvedBottom')`
  border-radius: 0 0 15px 15px !important;
`};

${is('circle')`
  border-radius: 99999px;
`};


${is('borderNone')`
  border-radius: 0 !important;
`};

  /* --------------- */
  /*       Text      */
  /* --------------- */
  ${is('uppercase')`
    text-transform: uppercase;
  `};
  ${is('textCenter')`
    text-align: center;
  `};
  ${is('textRight')`
    text-align: right;
  `};

  /* --------------- */
  /*     Gradient     */
  /* --------------- */
  ${props =>
    props.gradient && idx(props, _ => _.theme.gradient[props.gradient])
      ? `
      background: ${idx(props, _ => _.theme.gradient[props.gradient][0])};
      background-image: -webkit-linear-gradient(${props.gradientDir ? props.gradientDir : '180'}deg , ${idx(props, _ => _.theme.gradient[props.gradient])});
      background-image: linear-gradient(${props.gradientDir ? props.gradientDir : '180'}deg , ${idx(props, _ => _.theme.gradient[props.gradient])});
      `
      : null
  }
  &:hover {
    ${props => idx(props, _ => _.hover.boxShadow) && `box-shadow: ${idx(props, _ => _.theme.shadows[props.hover.boxShadow])};`}
    ${props => idx(props, _ => _.hover.zIndex) > 0 && `z-index: ${props.hover.zIndex}`}
  }


  /* --------------- */
  /*     General     */
  /* --------------- */
  ${is('row')`
    flex-direction: row; /* default */
  `};

  ${is('rowReverse')`
    flex-direction: row-reverse;
  `};

  ${is('column')`
    flex-direction: column;
  `};

  ${is('columnReverse')`
    flex-direction: column-reverse;
  `};

  /* --------------- */
  /*       Wrap      */
  /* --------------- */

  ${is('nowrap')`
    flex-wrap: nowrap; /* default */
  `};

  ${is('wrap')`
    flex-wrap: wrap;
  `};

  ${is('wrapReverse')`
    flex-wrap: wrap-reverse;
  `};

  /* --------------- */
  /*     Justify     */
  /* --------------- */

  ${is('justifyStart')`
    justify-content: flex-start; /* default */
  `};

  ${is('justifyEnd')`
    justify-content: flex-end;
  `};

  ${is('justifyCenter')`
    justify-content: center;
  `};

  ${is('justifyBetween')`
    justify-content: space-between;
  `};

  ${is('justifyAround')`
    justify-content: space-around;
  `};

  /* --------------- */
  /*      Align      */
  /* --------------- */

  ${is('contentStart')`
    align-content: flex-start;
  `};

  ${is('contentEnd')`
    align-content: flex-end;
  `};

  ${is('contentCenter')`
    align-content: center;
  `};

  ${is('contentSpaceBetween')`
    align-content: space-between;
  `};

  ${is('contentSpaceAround')`
    align-content: space-around;
  `};

  ${is('contentStretch')`
    align-content: stretch; /* default */
  `};

  ${is('alignStart')`
    align-items: flex-start;
  `};

  ${is('alignEnd')`
    align-items: flex-end;
  `};

  ${is('alignCenter')`
    align-items: center;
  `};

  ${is('alignBaseline')`
    align-items: baseline;
  `};

  ${is('alignStretch')`
    align-items: stretch;
  `};
  
  ${is('baselineChildren')`
    & > * {
      align-self: baseline;
    }
  `};

  /* --------------- */
  /*      System     */
  /* --------------- */
  ${system({
    opacity: {
      property: 'opacity',
    },
    transform: {
      property: 'transform',
    },
    cursor: {
      property: 'cursor',
    },
  
  })}
  ${border}
  ${background}
  ${typography}
  ${color}
  ${shadow}
  ${space}
  ${layout}
`

Box.propTypes = {
  curved: PropTypes.string,
  rounded: PropTypes.string,
  pointer: PropTypes.string
}

Box.defaultProps = {
  relative: true,
  zIndex: 10
}

export default Box