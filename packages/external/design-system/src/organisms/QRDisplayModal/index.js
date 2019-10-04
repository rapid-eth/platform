import React from 'react'
import { Modal, Toast } from '../../index'
import QRDisplay from '../QRDisplay'

const QRDisplayModal = ({ value, styled, styledContainer, children, ...props}) => {
  return (
    <Modal content={<QRDisplay value={value} styled={styled} styledContainer={styledContainer} />}>
      {children}
    </Modal>
  )
}


export default QRDisplayModal