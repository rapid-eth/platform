import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const ContentTypeList = ({ box, styled, ...props }) => {
  /**
   * @function deleteHandler
   * @param {String} keyChild 
   */
  const deleteHandler = (keyChild) => {
    console.log(props, 'deleting')
    box.remove({
      space: props.space,
      key: props.keys,
      access: props.access || 'public'
    })
  }

  return (
    <Button xs variant='red' {...styled} onClick={deleteHandler}>Delete Content</Button>
  )
}

ContentTypeList.defaultProps = {
  indexKey: 'index'
}

ContentTypeList.propTypes = {
  append: PropTypes.string,
  space: PropTypes.string,
  access: PropTypes.string,
}

export default props =>
<BoxWrapper>
  <ContentTypeList {...props} />
</BoxWrapper>