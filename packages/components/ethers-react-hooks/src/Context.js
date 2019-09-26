import { createContext } from 'react';
import { ethers } from 'ethers';
var crypto = require('crypto-browserify');

const Context = createContext({
  instance: ethers,
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    transactions: [],
    wallets: [],
  },
  address: undefined,
  deployed: [],
  walletShortened: undefined,
  wallet: undefined,
  signMessage: () => { },
  sendTrnsaction: () => { },
});

export default Context;
