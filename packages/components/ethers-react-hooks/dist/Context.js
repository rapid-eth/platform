"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var Context = (0, _react.createContext)({
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    transactions: [],
    wallets: []
  },
  address: undefined,
  walletShortened: undefined,
  wallet: undefined,
  signMessage: () => {},
  sendTrnsaction: () => {}
});
var _default = Context;
exports.default = _default;