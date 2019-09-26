"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _ethers = require("ethers");

var crypto = require('crypto-browserify');

var Context = (0, _react.createContext)({
  instance: _ethers.ethers,
  store: {
    contracts: [],
    deploy: [],
    messages: [],
    transactions: [],
    wallets: []
  },
  address: undefined,
  deployed: [],
  walletShortened: undefined,
  wallet: undefined,
  signMessage: () => {},
  sendTrnsaction: () => {}
});
var _default = Context;
exports.default = _default;