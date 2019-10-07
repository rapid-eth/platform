"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _box = _interopRequireDefault(require("3box/dist/3box"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 3Box Context
 * @description Global application interface for 3Box.
 */
var Context = (0, _react.createContext)({
  config: {
    cms: {
      address: '0xfA67ddE98346d6033f3Da0b157b70fe8434a48cE',
      space: 'eth'
    }
  },
  // Middleware for outbound requests to 3Box
  requests: [],
  // Manage dispatched requests.
  store: {
    open: {},
    spaces: [],
    threads: [],
    profiles: [],
    posts: [],
    gets: [],
    sets: [],
    removes: [],
    inserts: []
  },
  // Authentiation data storage.
  auth: {
    profile: {},
    spaces: {}
  },
  // General data storage.
  data: {
    profiles: {},
    spaces: {},
    threads: {}
  },
  // Register onUpdate (listening) requests.
  listening: {},
  // Deprecate
  profile: undefined,
  profiles: {},
  verified: {},
  spaces: {},
  threads: {},
  // Library
  instance: _box.default,
  // Login initializes instances.
  static: _box.default,
  utils: _box.default.idUtils,
  // Global Helpers
  address: undefined,
  addressShortened: undefined,
  addressTrimmed: undefined,
  // Boolean
  isInitialized: false,
  isRequestOpen: false,
  isLoginAuto: true,
  isLoggedIn: false,
  isLoggingIn: false,
  isLoggingOut: false,
  isDebugging: false,

  /* --- Functions --- */
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