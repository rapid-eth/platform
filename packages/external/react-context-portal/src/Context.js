import { createContext } from 'react';

const Context = createContext({
  isOpen: false,
  open: () => { },
  close: () => { },
  Content: () => null,
});

export default Context;
