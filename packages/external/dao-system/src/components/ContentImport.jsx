import idx from 'idx';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { Button } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'

const ContentTypeList = ({ box, styled, ...props }) => {
  const [ index, setIndex ] = useState()
  const [ isDispatched, setDispatched ] = useState()
  
  /**
   * @function importHandler
   * @param {String} keyChild 
   */
  const importHandler = (keyChild) => {
    window.fetch(props.url)
    .then( res => {
      if(res.json) {
        res.json()
        .then( jsonified => {
          console.log(jsonified, 'jsonified')
          box.set({
            space: props.space,
            keys: [props.keys],
            inputs: [jsonified.data],
            access: 'public',
            update: props.update
          })
        })
      }
    })
  }
  /**
   * @function deleteHandler
   * @param {String} keyChild 
   */
  const deleteHandler = (keyChild) => {
    box.delete({
      space: props.space,
      key: 'index',
      keyChild: keyChild,
      access: 'public'
    })
  }

  useEffect( () => {
    if (!index && !isDispatched && idx(box, _=>_.spaces[props.space].instance)) {
      box.get({
        space: props.space,
        key: 'index',
        access: 'public'
      })
      setDispatched(true)
    }
  }, [box.spaces])

  useEffect( () => {
    if (!index && idx(box, _=>_.spaces[props.space].public.index.payload)) {
      const index = idx(box, _=>_.spaces[props.space].public.index.payload)

      Object.values(index).forEach( ii => {
        box.get({
          space: props.space,
          key: ii.id,
          access: 'public'
        })
      })

      setIndex(index) 
    }
  }, [box.spaces])

  return (
    <Button xs variant='blue' {...styled} onClick={importHandler} >Import Content</Button>
  )
}

ContentTypeList.defaultProps = {
  indexKey: 'index'
}

ContentTypeList.propTypes = {
  append: PropTypes.string,
  space: PropTypes.string,
  access: PropTypes.string,
  privateTeam: PropTypes.bool
}

export default props =>
  <BoxWrapper>
    <ContentTypeList {...props} />
  </BoxWrapper>