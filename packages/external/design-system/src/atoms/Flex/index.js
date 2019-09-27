/* --- Global Dependencies --- */
import styled from 'styled-components'
import is from 'styled-is';
import { down} from 'styled-breakpoints';

/* --- Local Dependencies --- */
import Box from '../Box'

const Flex = styled(Box)`
  display: flex;


  /* --------------- */
  /*    Shorthand    */
  /* --------------- */

  ${is('between')`
  justify-content: space-between;
  `};

  ${is('evenly')`
  justify-content: space-evenly;
  `};

  ${is('center')`
    align-items: center;
    justify-content: center;
  `};

  ${is('jc')`
    justify-content: center;
  `};

  ${is('ac')`
    align-items: center;
  `};

  ${is('full')`
    width: 100%;
    height: 100%;
    flex-basis: 100%;
  `};
  /* --------------- */
  /*     Gutters     */
  /* --------------- */

  // Gutter 2
  ${is('gutter2')`
    flex-wrap: wrap;
    & > * {
      flex: 1;
      width: 45%;
      margin-right: 5%;
      max-width: 50%;
    }
    & > *:nth-child(2n) {
      margin-right: 0;
    }
  `};

  // Gutter 3
  ${is('gutter3')`
    flex-wrap: wrap;
    & > * {
      width: 30%;
      margin-right: 5%;
    }
    & > *:nth-child(3n) {
      // align-self: flex-end;
      margin-right: 0;
    }
    & > *:nth-child(n+4) {
      margin-top: 50px;
    }
  `};

  // Gutter 4
  ${is('gutter4')`
    flex-wrap: wrap;
    & > * {
      flex: 1;
      width: 22%;
      margin-right: 30px;
    }
    & > *:nth-child(4) {
      margin-right: 0;
    }
    & > *:nth-child(n+5) {
      margin-top: 30px;
    }

    ${down('desktop')} {
      flex-wrap: wrap;
      & > * {
        width: 45%;
        margin-right: 30px;
      }
      & > *:nth-child(2) {
        margin-right: 0;
      }

      & > *:nth-child(n+3) {
        margin-top: 20px;
      }
    }

    ${down('tablet')} {
      & > * {
        margin: 0;
        width: 100% !important;
      }
      & > *:nth-child(n+1) {
        margin-top: 10px;
      }
    }
  `};

`

Flex.propTypes = {
}

Flex.defaultProps = {
  width: 'auto'
}

export default Flex