/* eslint-disable no-negated-condition */
import React from 'react';
import PropTypes from 'prop-types'
import { BoxWrapper } from '@kames/3box-hooks/dist'
import {
  Router, Box,
} from '@horizin/design-system';
import Page from './page'
import ProjectRetrieve from './ProjectRetrieve'
const Account = props => {
  return (
    <Box width='100%'>
      <Router>
        <Page path='/' />
        <ProjectRetrieve path='/project/:alias' />
      </Router>
    </Box>
  )
}

Account.defaultProps = {

}

Account.propTypes = {

}

export default props =>
<BoxWrapper>
  <Account {...props} />
</BoxWrapper>