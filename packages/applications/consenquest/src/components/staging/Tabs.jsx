<Tabs  
  tabs={[
    {
      tabId: 'first',
      title: 'First'
    },
    {
      tabId: 'first',
      title: 'Second'
    },
  ]}
  panels={[
    {
      tabId: 'first',
      component: <StepOne />,
    },
    {
      tabId: 'second',
      component: <StepTwo />,
    },
  ]}
/>