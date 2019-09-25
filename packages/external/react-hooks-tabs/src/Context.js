import { createContext } from 'react';

const Context = createContext({
  selectedTabId: undefined,
  prevSelectedTabId: undefined,
  variantDefault: undefined,
  setSelectedTabId: () => {/* empty */},
});

export default Context;
