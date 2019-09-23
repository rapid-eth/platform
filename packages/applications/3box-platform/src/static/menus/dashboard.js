export default [
  {
    label: 'Dashboard',
    to: '/dashboard'
  },
  {
    label: 'Account',
    to: '/dashboard/account'
  },
  {
    label: 'Quests',
    to: '/dashboard/quests'
  },
  {
    label: 'Credentials',
    to: '/dashboard/credentials',
    children: [
      {
        label: 'Create',
        to: '/dashboard/spaces/create'
      },
    ]
  },
  {
    label: 'Spaces',
    to: '/dashboard/spaces',
    children: [
      {
        label: 'Create',
        to: '/dashboard/spaces/create'
      },
    ]
  },
  {
    label: 'Threads',
    to: '/dashboard/threads',
    children: [
      {
        label: 'Create',
        to: '/dashboard/threads/create'
      },
    ]
  },
]