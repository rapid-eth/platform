/* --- Global Dependencies --- */
import React, { useState } from 'react';
import { Site, Span, Box, Flex, Heading, Link, Image, Absolute, Modal } from '@horizin/design-system'

import QuestCatalog from '../views/QuestCatalog'

/**
 * @function Drawer
 * @description Drawer Page
 * @return {Object} React Component
 */
const Drawer = () => {
  const [ isOpen, setOpen ] = useState(true)
  return (
<Box fixed left={0} bottom={isOpen ? 0 : -70} right={0} p={2} bg='dark' zIndex={1500} >
<Flex between>
  <Flex alignCenter color='white'>
    {/* <Heading noMargin>Adventures</Heading> */}
    <Flex ml={5}>

      <Modal
        variant='fullScreen'
        variantInner='fullScreen'
        styled={{
          m: 80
        }}
      content={<QuestCatalogModal />} >
        <Span pointer tag='white'>
          <Flex alignCenter>
            <Span width={12} ><Image src='https://image.flaticon.com/icons/svg/2082/2082491.svg' /></Span>
            <Span xs ml={2}>Quest Journal</Span>
          </Flex>
        </Span>
      </Modal>
    </Flex>
  </Flex>

  <Flex top={isOpen ? 0 : -60}>
    <Link to='/contribute'>
      <Span xxs mr={2} tag='blue'>Contribute</Span> 
    </Link>
    <Link to='/feedback'>
      <Span xxs tag='green'>Feedback</Span> 
    </Link>
  </Flex>
</Flex>
<Absolute top={isOpen ? -10 : -40} left={20} width={40} onClick={()=>setOpen(!isOpen)}>
    <Span pointer boxShadow='sunset' tag='white'>Ξ</Span>
    <Span xxs color='white'>Toggle</Span>
</Absolute>
</Box>
)}


const QuestCatalogModal = props => { 
  return(
   <Flex card column height='100%'>
     <Heading>Quest Journal</Heading>
     <Box>
       <Flex column>
         <QuestCatalog address={window.ethereum && window.ethereum.selectedAddress} />
       </Flex>
     </Box>
   </Flex>
 )}

export default Drawer