import React from 'react';
import { Span,Heading, Image } from '@horizin/design-system';

export default [
  {
    icon: <Image maxWidth={28} m={3} src='https://image.flaticon.com/icons/svg/1673/1673639.svg' />,
    label: 'Activity',
    to: '/tokens'
  },
  {
    icon: <Image maxWidth={28} m={3} src='https://image.flaticon.com/icons/svg/138/138222.svg' />,
    label: 'Earn',
    to: '/tokens/earn',
    children: [
      {
        icon: <Image maxWidth={32} src='https://image.flaticon.com/icons/svg/1673/1673636.svg' />,
        label: 'Quests',
        to: '/tokens/earn/quests',
      },
      {
        icon: <Image maxWidth={32} src='https://image.flaticon.com/icons/svg/1673/1673604.svg' />,
        label: 'Community',
        to: '/tokens/earn/community',
      },
    ]
  },

]
