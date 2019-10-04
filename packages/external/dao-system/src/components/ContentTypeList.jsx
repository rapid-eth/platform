import idx from 'idx';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import useForm from "react-hook-form";
import { Box, Button, Flex, Heading, Span } from '@horizin/design-system'
import { Field } from '@horizin/design-system'
import { BoxWrapper } from '@kames/3box-hooks/dist'


const ContentTypeList = ({ box, styled, ...props }) => {
  const [ index, setIndex ] = useState()
  const [ isDispatched, setDispatched ] = useState()
  
  /**
   * @function importHandler
   * @param {String} keyChild 
   */
  const importHandler = (keyChild) => {
    const url = 'https://raw.githubusercontent.com/ConsenSys/million-devs/content/content/quests/curatedQuestsInit.json?token=AA2AD2SCU6RVKE6L3OGXNGK5T2FAE'
    window.fetch(url)
    .then( res => {
      if(res.json) {
        res.json()
        .then( jsonified => {
          console.log(jsonified)
          box.set({
            space: props.space,
            keys: ['adventure'],
            inputs: [jsonified.quests],
            access: 'public'
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
    !index
    ? null
    : (
      <Flex column>
        {
          index && Array.isArray(Object.keys(index)) && Object.keys(index).length > 0 &&
          Object.values(index)
          .map(item => (
            <IndexItem importHandler={importHandler} deleteHandler={deleteHandler} {...item}/>
          ))}
      </Flex>
    ));
}

const MarkdownExample = `

# Beginner Quest
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

#### Getting Started Is Easy
In ac dapibus dolor. Maecenas eu tortor fermentum felis malesuada vehicula. Phasellus vel aliquet felis. Aliquam erat volutpat. Nulla ullamcorper fringilla tortor nec gravida. Suspendisse et rutrum tellus. Curabitur faucibus ultrices urna, eu finibus nisl molestie et.
`


ContentTypeList.defaultProps = {
  indexKey: 'index'
}

ContentTypeList.propTypes = {
  append: PropTypes.string,
  space: PropTypes.string,
  access: PropTypes.string,
  privateTeam: PropTypes.bool
}

const IndexItem = ({ importHandler, deleteHandler, styled, ...props}) => { 
 return(
  <Flex card between my={3} width='100%'>
    <Box>
      <Heading>id: {props.id}</Heading>
      <Heading sm thin>type: {props.type}</Heading>
    </Box>
    <Flex>
      <Button xs variant='white' m={2}>Fields</Button>
      <Button xs variant='blue' m={2} onClick={()=>importHandler(props.id)}>Import</Button>
      <Button xs variant='red' m={2} onClick={()=>deleteHandler(props.id)}>Delete</Button>
    </Flex>
  </Flex>
)}

export default props =>
  <BoxWrapper>
    <ContentTypeList {...props} />
  </BoxWrapper>



const adventures = {
  compose: {
    alias: 'compose',
    title: 'Smart Contract Composability',
    tagline: 'Connect Smart Contract Features',
    summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Phasellus cursus nec tortor rhoncus commodo. Vivamus varius tellus at diam ultricies consectetur. Nam blandit dapibus aliquet.',
    content: MarkdownExample,
    image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    tag: 'beginner',
    category: 'general',
    reward: {
      token: '0x',
      title: 'Compose Master',
      type: 'OpenEmblem',
      summary: 'In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem',
    },
    quests: [
      {
        title: 'Deploy New Contract',
        summary: 'Connect Smart Contract Features',
        content: MarkdownExample,
        image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
      }
    ]
  },
  scaricity: {
    alias: 'scaricity',
    title: 'Digital Scaricity',
    tagline: 'A Global Computer to Track Digital Assets',
    summary: 'Before Bitcoin, the concept of Digital Scarcity did not exist, and humanity was reliant on primitive and unreliable means of scarcity to store value. Rare metals such as gold, along with centralized fiat currencies managed by world governments, were the defacto stores of value. Unfortunately, neither of these things were provably scare - despite being rare, we do not know how much gold there is in the universe, or how many dollars our government will print tomorrow!',
    content: MarkdownExample,
    image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    tag: 'beginner',
    category: 'general',
    reward: {
      token: '0x',
      title: 'Compose Master',
      type: 'OpenEmblem',
      summary: 'In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem',
    },
    quests: [
      {
        title: 'Deploy First Contract',
        summary: 'Connect Smart Contract Features',
        content: MarkdownExample,
        image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
      },
      {
        title: 'Deploy Second Contract',
        summary: 'Connect Smart Contract Features',
        content: MarkdownExample,
        image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
      },
      {
        title: 'Trigger Contracts',
        summary: 'Connect Smart Contract Features',
        content: MarkdownExample,
        image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
      },
    ]
  }
}
