import React from 'react';
import { Box, Router } from '@horizin/design-system';

import AdventurePage from './AdventurePage'

const AdventureRoutes = ({ styled, ...props}) => { 
 return(
  <Box>
    <Router>
      {
        Object.values(adventures).map( adv => <AdventurePage key={adv.alias} path={`/${adv.alias}`} {...adv} /> )
      }
    </Router>
  </Box>
)}

export default AdventureRoutes

const MarkdownExample = `

# Beginner Quest
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.

#### Getting Started Is Easy
In ac dapibus dolor. Maecenas eu tortor fermentum felis malesuada vehicula. Phasellus vel aliquet felis. Aliquam erat volutpat. Nulla ullamcorper fringilla tortor nec gravida. Suspendisse et rutrum tellus. Curabitur faucibus ultrices urna, eu finibus nisl molestie et.
`

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
