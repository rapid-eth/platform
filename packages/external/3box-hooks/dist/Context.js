"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _box = _interopRequireDefault(require("3box/dist/3box"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Context = (0, _react.createContext)({
  store: {
    spaces: {},
    threads: [],
    profiles: {},
    gets: {},
    sets: {}
  },
  async: {
    spaces: {},
    threads: {}
  },
  address: undefined,
  addressShortened: undefined,
  box: undefined,
  instance: _box.default,
  isDebugging: false,
  isInitialized: false,
  isRequestOpen: false,
  isLoginAuto: true,
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  listening: {},
  profile: undefined,
  profiles: {},
  verified: {},
  spaces: {},
  threads: {},
  requests: [],
  static: _box.default,
  utils: _box.default.idUtils,
  open: () => {
    /*empty */
  },
  logout: () => {
    /*empty */
  },
  addRequest: () => {
    /*empty */
  },
  confirmRequest: () => {
    /*empty */
  },
  confirmAllRequests: () => {
    /*empty */
  },
  openSpace: () => {
    /*empty */
  },
  listSpaces: () => {
    /*empty */
  },
  subscribedThreads: () => {
    /*empty */
  },
  getThread: () => {
    /*empty */
  },
  getThreadByAddress: () => {
    /*empty */
  },
  getConfig: () => {
    /*empty */
  },
  getVerifiedAccounts: () => {
    /*empty */
  },
  joinThread: () => {
    /*empty */
  },
  joinThreadByAddress: () => {
    /*empty */
  },
  threadPost: () => {
    /*empty */
  },
  threadPostDelete: () => {
    /*empty */
  },
  threadListen: () => {
    /*empty */
  },
  threadAddModerator: () => {
    /*empty */
  },
  threadAddMember: () => {
    /*empty */
  },
  getProfile: () => {
    /*empty */
  },
  lookupProfile: () => {
    /*empty */
  },
  rejectRequest: () => {
    /*empty */
  },
  verified: () => {
    /*empty */
  },
  get: () => {
    /*empty */
  },
  remove: () => {
    /*empty */
  },
  removeItem: () => {
    /*empty */
  },
  set: () => {
    /*empty */
  },
  setMultiple: () => {
    /*empty */
  },
  listAddressLinks: () => {
    /*empty */
  },
  isAddressLinked: () => {
    /*empty */
  },
  linkAddress: () => {
    /*empty */
  },
  removeAddressList: () => {
    /*empty */
  }
});
var _default = Context;
exports.default = _default;