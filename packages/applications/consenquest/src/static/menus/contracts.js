import React from 'react';
import { Span,Heading, Image } from '@horizin/design-system';

export default [
  {
    icon: <Image maxWidth={28} m={3} src='https://image.flaticon.com/icons/svg/1673/1673643.svg' />,
    label: 'Interact',
    to: '/contracts'
  },
  {
    icon: <Image maxWidth={28} m={3} src='https://image.flaticon.com/icons/svg/1673/1673632.svg' />,
    label: 'Deploy',
    to: '/contracts/deploy'
  },
  {
    icon: <Image maxWidth={28} m={3} src='https://image.flaticon.com/icons/svg/1673/1673620.svg' />,
    label: 'Manage',
    to: '/contracts/manage'
  },
]
