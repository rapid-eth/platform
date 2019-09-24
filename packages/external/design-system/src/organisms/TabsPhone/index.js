/* --- Global Dependencies --- */
import PropTypes from 'prop-types'
import React, { useState } from "react"

/* --- Local Dependencies --- */
import { Flex, Box, Image, Heading, HorizontalRule, Paragraph, Responsive } from '@horizin/design-system/dist'
import { TabList, Tab, Tabs, TabPanel } from '@horizin/react-hooks-tabs'
import { Smartphone } from '@horizin/design-system/dist'

/* ============================= */
// Default Component
/* ============================= */
/**
 * @func FeaturesWithPhoneCenter 
 * @description A list of product features with large featured image.
 * @param {String|Component} title
 * @param {String|Component} content
 * @param {String|Component} image
 * @param {Array} list
 * @param {Array} images
 * @responsive
 *   @mobile <ProductFeaturesMobile/>
 *   @desktop <ProductFeaturesDesktop/>
 */
const FeaturesWithPhoneCenter = ({ title, content, image, images, list, styledTitle, styledContent }) =>
  <>
    <Flex center column>
      {title && React.isValidElement(title) ? title : <Heading lg {...styledTitle}>{title}</Heading>}
      {content && React.isValidElement(content) ? content : <Paragraph children={content} {...styledContent} />}
      {/* { (title || content) && <HorizontalRule dash my={30}/> } */}
    </Flex>
    <Desktop list={list} title={title} content={content} />}
  {/* <Responsive
    mobile={<Mobile list={list} title={title} content={content} image={image} images={images} />}
    desktop={<Desktop list={list} title={title} content={content}/>}
  /> */}
  </>

FeaturesWithPhoneCenter.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.element),
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  images: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ])
}

export default FeaturesWithPhoneCenter


/* ============================= */
// Responsive Components
/* ============================= */
/** 
 * @function Mobile
 */
export const Mobile = ({ title, content, image, list, styledTitle, styledContent }) =>
  <>
    {title && React.isValidElement(title) ? title : <Heading lg {...styledTitle}>{title}</Heading>}
    {content && React.isValidElement(content) ? content : <Paragraph children={content} {...styledContent} />}
    {/* { (title || content) && <HorizontalRule dash my={30}/> } */}
    {image && React.isValidElement(image) ? image : <Image src={image} />}
    <Flex column>
      {list && Array.isArray(list) && list.map((item, index) =>
        <Feature
          title={item.tab.title}
          content={item.tab.content}
          image={item.tab.image}
        />
      )}
    </Flex>
  </>

/** 
 * @function Desktop
 */
export const Desktop = ({ list, title, content, styledTitle, styledContent }) => {
  // const statenes = useState(0);
  // const [index, setIndex] = statenes
  return (
    <Tabs
      className='tabs simple'
    >
      <Flex alignCenter>
        <Flex column flex={3} p={20}>

        </Flex>

        <Flex flex={2} mx={20}>
          <Smartphone>

            <Heading>hello</Heading>
          </Smartphone>
        </Flex>

        <Flex column flex={3} p={20}>

        </Flex>
      </Flex>
    </Tabs>
  )
}




const Feature = ({ styled, ...props }) =>
  <Box>
    test
</Box>