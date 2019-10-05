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
        icon: <Image maxWidth={22} circle src='https://pbs.twimg.com/profile_images/1073665743332376576/mieiV3TZ.jpg' />,
        label: 'Maker DAO',
        to: '/resources/maker'
      },
      {
        icon: <Image maxWidth={22} circle src='data:image/jpeg;base64,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' />,
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
        icon: <Image maxWidth={22} circle src='https://pbs.twimg.com/profile_images/1125210143484985344/6Kae1Al3_400x400.png' />,
        label: '3Box',
        to: '/resources/maker'
      },
      {
        icon: <Image maxWidth={22} circle src='https://miro.medium.com/fit/c/96/96/2*qCbGCTVMFqwqx9B1v2tiZQ.png' />,
        label: 'uPort',
        to: '/resources/maker'
      },
      // {
      //   icon: <Image maxWidth={22} circle src='https://pbs.twimg.com/profile_images/1073665743332376576/mieiV3TZ.jpg' />,
      //   label: 'Civic',
      //   to: '/resources/maker'
      // },
    ]
  },
  {
    icon: <Span mx={3} mt={3}><Heading lg >🕹️</Heading></Span>,
    label: 'Gaming',
    to: '/resources/gaming',
    children: [
      {
        icon: <Image maxWidth={22} circle src='http://www.esportsgroup.net/wp-content/uploads/2017/02/firstblood_logo_shield-e1487767956401.png' />,
        label: 'First Blood',
        to: '/resources/maker'
      },
      {
        icon: <Image maxWidth={22} circle src='https://pbs.twimg.com/profile_images/1153995184901804032/8sxtHKc4_400x400.png' />,
        label: 'Gods Unchained',
        to: '/resources/maker'
      },
      {
        icon: <Image maxWidth={22} circle src='https://cryptozombies.io/course/static/image/preview-zombie.png' />,
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