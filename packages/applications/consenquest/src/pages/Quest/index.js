import idx from 'idx';
import React, { useState, useEffect } from 'react';
import { Box, Router } from '@horizin/design-system';
import { BoxWrapper } from '@kames/3box-hooks/dist'
import { BoxGetSpace } from '@kames/3box-components/dist'

import Page from './Page'

const ROOT = process.env.REACT_APP_DEFAULT_ROOT
const SPACE = process.env.REACT_APP_DEFAULT_SPACE
const INDEX = process.env.REACT_APP_DEFAULT_INDEX

const QuestRoutes = ({ box, styled, ...props}) => {
  const [ listItems, setList ] = useState()

  useEffect( () => {
    if (!listItems && idx(box, _=>_.spaces[props.space].public[props.key])) {
      const list = idx(box, _=>_.spaces[props.space].public[props.key])
      setList(list) 
    }
  }, [box, props.key, props.space])

 return(
  <Box width='100%'>
    <BoxGetSpace space={SPACE} access='public' address={ROOT}  width='100%'/>
    {
      listItems && 
      <>
      <Router primary={false}>
        {
          listItems.map( item => <Page path={`/${item.alias}`} {...item} {...item.properties} /> )
        }
      </Router>
      </>
    }
  </Box>
)}

QuestRoutes.defaultProps = {
  space: 'eth',
  access: 'public',
  key: 'quest'
}

export default props =>
<BoxWrapper>
  <QuestRoutes {...props} />
</BoxWrapper>
