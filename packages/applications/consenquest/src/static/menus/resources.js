import React from 'react';
import { Buton, Blockquote, Span, Modal, Flex, Heading, Image, BackgroundImage, Paragraph, Box, Container, Button, Card } from '@horizin/design-system';


export default [
  {
    icon: <Span mx={3} mt={3}><Heading lg >📚</Heading></Span>,
    label: 'Resources',
    to: '/resources'
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🏦</Heading></Span>,
    label: 'Finance',
    to: '/resources/decentralized-finance',
    children: [
      {
        label: 'Maker DAO',
        to: '/resources/maker'
      },
      {
        label: 'Compound',
        to: '/resources/maker'
      },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🆔</Heading></Span>,
    label: 'Identity',
    to: '/resources/identity',
    children: [
      {
        label: '3Box',
        to: '/resources/maker'
      },
      {
        label: 'uPort',
        to: '/resources/maker'
      },
      {
        label: 'Civic',
        to: '/resources/maker'
      },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🕹️</Heading></Span>,
    label: 'Gaming',
    to: '/resources/gaming',
    children: [
      {
        label: 'First Blood',
        to: '/resources/maker'
      },
      {
        label: 'Gods Unchained',
        to: '/resources/maker'
      },
      {
        label: 'Crypto Zombines',
        to: '/resources/maker'
      },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >💌</Heading></Span>,
    label: 'Collectibles',
    to: '/resources/collectibles',
    children: [
      {
        label: 'Gitcoin Kudos',
        to: '/resources/maker'
      },
      {
        label: 'Crypto Kitties',
        to: '/resources/maker'
      },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🛠️</Heading></Span>,
    label: 'Future of Work',
    to: '/resources/future-of-work',
    children: [
      {
        label: 'Bounties Network',
        to: '/resources/maker'
      },
      {
        label: 'Gitcoin',
        to: '/resources/maker'
      },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🗳️</Heading></Span>,
    label: 'Wisdom',
    to: '/resources/governance',
    children: [
      {
        label: 'Augur',
        to: '/resources/maker'
      },
      {
        label: 'Helena (Gnosis)',
        to: '/resources/maker'
      },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🗳️</Heading></Span>,
    label: 'Voting',
    to: '/resources/governance'
  },

]

// DeFi, Gaming, Learning, Wisdom of the Crowds, Collectibles, Future of Work, Gambling, Identity