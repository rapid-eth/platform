import { createContext } from 'react';

const Context = createContext({
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    transactions: [],
    wallets: [],
  },
  address: undefined,
  walletShortened: undefined,
  wallet: undefined,
  signMessage: () => { },
  sendTrnsaction: () => { },
});

export default Context;
