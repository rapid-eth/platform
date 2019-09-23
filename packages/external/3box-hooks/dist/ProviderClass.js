"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _box = _interopRequireDefault(require("3box/dist/3box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Context = _interopRequireDefault(require("./Context"));

var _api = _interopRequireDefault(require("./api"));

var _utilities = _interopRequireDefault(require("./utilities"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @function Provider
 * @description Pass BoxProvider state to children component props.
 * @param {Object} props 
 */
class Provider extends _react.Component {
  constructor(props) {
    var _this;

    super(props);
    _this = this;
    var address = window.ethereum.selectedAddress || '';
    var addressShortened = !address ? null : _utilities.default.shortenAddress(address, 7);
    this.state = {
      address,
      addressShortened,
      static: _box.default,
      utils: _box.default.idUtils,
      isDebugging: false,
      isInitialized: false,
      isRequestOpen: false,
      isLoggedIn: _box.default.isLoggedIn(address),
      isLoggingIn: false,
      box: undefined,
      instance: undefined,
      listening: {},
      profile: undefined,
      profiles: {},
      verified: {},
      requests: [],
      spaces: {},
      threads: {},

      /* ---------------------- */
      // Personal Account APIs

      /* ---------------------- */
      addRequest: function () {
        var _addRequest = _asyncToGenerator(function* (req) {
          _this.setState({
            isRequestOpen: true,
            requests: [..._this.state.requests, req]
          });
        });

        function addRequest(_x) {
          return _addRequest.apply(this, arguments);
        }

        return addRequest;
      }(),
      requestConfirm: function () {
        var _requestConfirm = _asyncToGenerator(function* (index) {
          var req = _this.state.requests[index];

          if (req && req.payload) {
            switch (req.type) {
              case 'set':
                _this.state.set(req.payload);

                break;

              default:
                break;
            }

            var requests = _this.state.requests;
            requests.splice(index, index + 1);

            _this.setState({
              requests
            });
          }
        });

        function requestConfirm(_x2) {
          return _requestConfirm.apply(this, arguments);
        }

        return requestConfirm;
      }(),
      requestConfirmAll: function () {
        var _requestConfirmAll = _asyncToGenerator(function* () {
          var requests = _this.state.requests;
          requests.map(request => {
            if (requqest && requqest.payload) {
              switch (req.type) {
                case 'set':
                  _this.state.set(req.payload);

                  break;

                default:
                  break;
              }

              var _requests = _this.state.requests;

              _requests.splice(index, index + 1);

              _this.setState({
                requests: _requests
              });
            }
          });
        });

        function requestConfirmAll() {
          return _requestConfirmAll.apply(this, arguments);
        }

        return requestConfirmAll;
      }(),
      requestReject: function () {
        var _requestReject = _asyncToGenerator(function* (index) {
          var requests = _this.state.requests;
          requests.splice(index, index + 1);

          _this.setState({
            requests
          });
        });

        function requestReject(_x3) {
          return _requestReject.apply(this, arguments);
        }

        return requestReject;
      }(),
      requestRejectAll: function () {
        var _requestRejectAll = _asyncToGenerator(function* () {
          _this.setState({
            requests: []
          });
        });

        function requestRejectAll() {
          return _requestRejectAll.apply(this, arguments);
        }

        return requestRejectAll;
      }(),
      // 3Box

      /* ---------------------- */
      open: function () {
        var _open = _asyncToGenerator(function* () {
          try {
            _this.setState({
              isLoggingIn: true
            });

            var profile = yield _box.default.openBox(address, window.web3.currentProvider);

            _this.setState({
              box: profile,
              instance: profile
            });
          } catch (error) {
            _this.setState({
              isLoggedIn: false,
              isLoggingIn: false
            });
          }
        });

        function open() {
          return _open.apply(this, arguments);
        }

        return open;
      }(),
      logout: function () {
        var _logout = _asyncToGenerator(function* () {
          yield _this.state.box.logout();

          _this.setState({
            box: undefined,
            instance: undefined,
            isLoggedIn: false,
            spaces: {},
            threads: {}
          });
        });

        function logout() {
          return _logout.apply(this, arguments);
        }

        return logout;
      }(),
      verified: function () {
        var _verified = _asyncToGenerator(function* (_ref) {
          var {
            request,
            input
          } = _ref;
          var result = yield _this.state.box.verified[request](input);

          _this.setState({
            verified: _objectSpread({}, _this.state.spaces, {
              [request]: result
            })
          });
        });

        function verified(_x4) {
          return _verified.apply(this, arguments);
        }

        return verified;
      }(),
      // Write

      /* ---------------------- */
      get: function () {
        var _get = _asyncToGenerator(function* (_ref2) {
          var {
            key,
            space,
            access = 'public',
            all = false
          } = _ref2;
          var value;

          try {
            if (space) {
              all ? value = yield _this.state.spaces[space].instance[access].all() : value = yield _this.state.spaces[space].instance[access].get(key);

              _this.setState({
                spaces: _objectSpread({}, _this.state.spaces, {
                  [space]: _objectSpread({}, _this.state.spaces[space], {
                    data: all ? value : _objectSpread({}, _this.state.spaces[space], {
                      [key]: value
                    })
                  })
                })
              });
            } else {
              value = yield _this.state.box[access].get(key);
              console.log(key, value, 'GETTING');

              _this.setState({
                profile: _objectSpread({}, _this.state.profile, {
                  [key]: value
                })
              });
            }
          } catch (error) {}
        });

        function get(_x5) {
          return _get.apply(this, arguments);
        }

        return get;
      }(),
      remove: function () {
        var _remove = _asyncToGenerator(function* (_ref3) {
          var {
            index,
            space,
            access,
            list
          } = _ref3;

          if (space) {
            var data = yield _this.state.spaces[space].instance[access].get(list);

            if (data && Array.isArray(data)) {
              var removed = data.splice(Number(index), Number(index + 1));
              var listNew = yield _this.state.spaces[space].instance[access].set(list, data);

              _this.setState({
                spaces: _objectSpread({}, _this.state.spaces, {
                  [space]: _objectSpread({}, _this.state.spaces[space], {
                    data: _objectSpread({}, _this.state.spaces[space].data, {
                      [list]: data
                    })
                  })
                })
              });
            }
          } else {}
        });

        function remove(_x6) {
          return _remove.apply(this, arguments);
        }

        return remove;
      }(),

      /**
       * @function removeItem
       * @description 
       */
      removeItem: function () {
        var _removeItem = _asyncToGenerator(function* (_ref4) {
          var {
            index,
            space,
            access,
            list,
            backup
          } = _ref4;

          if (space) {
            var data = yield _this.state.spaces[space].instance[access].get(list);

            if (data && Array.isArray(data)) {
              var removed = data.splice(Number(index), Number(index + 1));
              yield _this.state.spaces[space].instance[access].set(list, data);

              _this.setState({
                spaces: _objectSpread({}, _this.state.spaces, {
                  [space]: _objectSpread({}, _this.state.spaces[space], {
                    data: _objectSpread({}, _this.state.spaces[space].data, {
                      [list]: data
                    })
                  })
                })
              });
              /**
               * When deleting data users might want to first make a 
               * backup/copy in case it was a mistake. The backup key
               * is the place to store that information. 
               */


              if (backup) {
                _this.state.set({
                  keys: 'backup',
                  inputs: removed,
                  space: 'meshhub',
                  append: true
                });
              }
            }
          } else {}
        });

        function removeItem(_x7) {
          return _removeItem.apply(this, arguments);
        }

        return removeItem;
      }(),
      set: function () {
        var _set = _asyncToGenerator(function* (_ref5) {
          var {
            keys,
            inputs,
            space,
            access,
            append,
            override
          } = _ref5;

          try {
            if (space) {
              if (append) {
                var data = yield _this.state.spaces[space].instance[access].get(append);
                var listUpdated = Array.isArray(data) ? [...data, inputs] : [data, inputs];
                Array.isArray(data) ? yield _this.state.spaces[space].instance[access].set(append, listUpdated) : !override // todo set system for overriding data... add to backup space? 
                ? yield _this.state.spaces[space].instance[access].set(append, listUpdated) : null;

                _this.setState({
                  spaces: _objectSpread({}, _this.state.spaces, {
                    [space]: _objectSpread({}, _this.state.spaces[space], {
                      data: _objectSpread({}, _this.state.spaces[space].data, {
                        [append]: listUpdated
                      })
                    })
                  })
                });
              } else {
                yield _this.state.spaces[space].instance[access].setMultiple(keys, inputs);
              }
            } else {
              console.log(keys, inputs, 'setting multiple');
              yield _this.state.box[access].setMultiple(keys, inputs); // await this.state.box[access].set(keys, inputs)
            }
          } catch (error) {
            console.log(error);
          }
        });

        function set(_x8) {
          return _set.apply(this, arguments);
        }

        return set;
      }(),
      publicSetMultiple: function () {
        var _publicSetMultiple = _asyncToGenerator(function* (key, value, sapce) {
          try {
            yield _this.state.box.public.setMultiple(key, value);
            toast("Profile Updated");
          } catch (error) {
            console.log(error);
          }
        });

        function publicSetMultiple(_x9, _x10, _x11) {
          return _publicSetMultiple.apply(this, arguments);
        }

        return publicSetMultiple;
      }(),
      publicGet: function () {
        var _publicGet = _asyncToGenerator(function* (key, options, space) {
          try {
            var value = yield _this.state.box.public.get(key, options);

            if (value) {
              _this.setState({
                profile: _objectSpread({}, _this.state.profile, {
                  [key]: value
                })
              });
            } else {}
          } catch (error) {
            console.log(error);
          }
        });

        function publicGet(_x12, _x13, _x14) {
          return _publicGet.apply(this, arguments);
        }

        return publicGet;
      }(),
      // Link

      /* ---------------------- */
      listAddressLinks: function () {
        var _listAddressLinks = _asyncToGenerator(function* () {
          try {
            var status = _this.state.box && (yield _this.state.box.listAddressLinks());

            if (status) {} else {}
          } catch (error) {}
        });

        function listAddressLinks() {
          return _listAddressLinks.apply(this, arguments);
        }

        return listAddressLinks;
      }(),
      isAddressLinked: function () {
        var _isAddressLinked = _asyncToGenerator(function* (queries) {
          try {
            var status = _this.state.box && (yield _this.state.box.isAddressLinked(queries));

            if (status) {} else {}
          } catch (error) {}
        });

        function isAddressLinked(_x15) {
          return _isAddressLinked.apply(this, arguments);
        }

        return isAddressLinked;
      }(),
      linkAddress: function () {
        var _linkAddress = _asyncToGenerator(function* (name) {
          try {
            var status = _this.state.box && (yield _this.state.box.linkAddress(name));

            if (status) {} else {}
          } catch (error) {}
        });

        function linkAddress(_x16) {
          return _linkAddress.apply(this, arguments);
        }

        return linkAddress;
      }(),
      removeAddressLink: function () {
        var _removeAddressLink = _asyncToGenerator(function* (address) {
          try {
            var status = _this.state.box && (yield _this.state.box.removeAddressLink(address));

            if (status) {} else {}
          } catch (error) {}
        });

        function removeAddressLink(_x17) {
          return _removeAddressLink.apply(this, arguments);
        }

        return removeAddressLink;
      }(),
      // Spaces

      /* ---------------------- */
      openSpace: function () {
        var _openSpace = _asyncToGenerator(function* (name) {
          try {
            var space = yield _this.state.box.openSpace(name);
            console.log(space, 'spacespacespace');
            var threads = yield space.subscribedThreads();

            _this.setState({
              spaces: _objectSpread({}, _this.state.spaces, {
                [name]: {
                  instance: space,
                  threads
                }
              })
            }); // if(threads && Array.isArray(threads) && threads.length > 0 ) {
            //   threads.forEach( thread =>this.state.joinThreadByAddress(thread.address))
            // }

          } catch (error) {}
        });

        function openSpace(_x18) {
          return _openSpace.apply(this, arguments);
        }

        return openSpace;
      }(),
      listSpaces: function () {
        var _listSpaces = _asyncToGenerator(function* (address) {
          var list = yield _box.default.listSpaces(address);
          var spaces = {};
          list.forEach(element => {
            spaces[element] = undefined;
          });

          _this.setState({
            spaces: _objectSpread({}, spaces, {}, _this.state.spaces)
          });
        });

        function listSpaces(_x19) {
          return _listSpaces.apply(this, arguments);
        }

        return listSpaces;
      }(),
      // Threads

      /* ---------------------- */
      subscribedThreads: function () {
        var _subscribedThreads = _asyncToGenerator(function* (name, options, space) {
          var threads = _this.state.spaces['meshhub'].instance.subscribedThreads();

          _this.setState({
            threads: _objectSpread({}, threads, {}, _this.state.threads)
          });
        });

        function subscribedThreads(_x20, _x21, _x22) {
          return _subscribedThreads.apply(this, arguments);
        }

        return subscribedThreads;
      }(),
      joinThread: function () {
        var _joinThread = _asyncToGenerator(function* (_ref6) {
          var {
            threadAddress,
            threadName,
            options,
            space
          } = _ref6;

          try {
            var thread, members, moderators;

            if (threadAddress) {
              thread = yield _this.state.spaces['meshhub'].instance.joinThreadByAddress(threadAddress, options);
            } else {
              thread = yield _this.state.spaces['meshhub'].instance.joinThread(threadName, options);
            }

            var posts = yield thread.getPosts();

            if (thread._members) {
              members = yield thread.listMembers();
              moderators = yield thread.listModerators();
            }

            _this.setState({
              threads: _objectSpread({}, _this.state.threads, {
                [threadName]: {
                  instance: thread,
                  posts,
                  members,
                  moderators
                }
              })
            });
          } catch (error) {}
        });

        function joinThread(_x23) {
          return _joinThread.apply(this, arguments);
        }

        return joinThread;
      }(),
      joinThreadByAddress: function () {
        var _joinThreadByAddress = _asyncToGenerator(function* (name, options, space) {
          try {
            var members = '',
                moderators = '';
            var thread = yield _this.state.spaces['meshhub'].instance.joinThreadByAddress(name, options);
            thread.onUpdate(TestingThis);
            var posts = yield thread.getPosts();

            if (thread._members) {
              members = yield thread.listMembers();
              moderators = yield thread.listModerators();
            }

            _this.setState({
              threads: _objectSpread({}, _this.state.threads, {
                [name]: {
                  instance: thread,
                  posts,
                  members,
                  moderators
                }
              })
            });
          } catch (error) {}
        });

        function joinThreadByAddress(_x24, _x25, _x26) {
          return _joinThreadByAddress.apply(this, arguments);
        }

        return joinThreadByAddress;
      }(),
      threadPost: function () {
        var _threadPost = _asyncToGenerator(function* (_ref7) {
          var {
            threadName,
            post
          } = _ref7;

          try {
            yield _this.state.threads[threadName].instance.post(post);
            var posts = yield _this.state.threads[threadName].instance.getPosts();

            _this.setState({
              threads: _objectSpread({}, _this.state.threads, {
                [threadName]: _objectSpread({}, _this.state.threads[threadName], {
                  posts
                })
              })
            });
          } catch (error) {
            console.log(error);
          }
        });

        function threadPost(_x27) {
          return _threadPost.apply(this, arguments);
        }

        return threadPost;
      }(),
      threadPostDelete: function () {
        var _threadPostDelete = _asyncToGenerator(function* (thread, postID) {
          console.log(postID, 'postID');
          yield _this.state.threads[thread].instance.deletePost(postID);
          var posts = yield _this.state.threads[thread].instance.getPosts();

          _this.setState({
            threads: _objectSpread({}, _this.state.threads, {
              [thread]: _objectSpread({}, _this.state.threads[thread], {
                posts
              })
            })
          });
        });

        function threadPostDelete(_x28, _x29) {
          return _threadPostDelete.apply(this, arguments);
        }

        return threadPostDelete;
      }(),
      threadListen: function () {
        var _threadListen = _asyncToGenerator(function* (thread, callback) {
          _this.state.threads[thread].onUpdate(callback);

          _this.setState({
            listening: _objectSpread({}, _this.state.listening, {
              [name]: true
            })
          });
        });

        function threadListen(_x30, _x31) {
          return _threadListen.apply(this, arguments);
        }

        return threadListen;
      }(),
      threadAddModerator: function () {
        var _threadAddModerator = _asyncToGenerator(function* (thread, id) {
          try {
            console.log(thread, id, 'add mod');
            yield _this.state.threads[thread].instance.addModerator(id);
          } catch (error) {
            console.log(error);
          }
        });

        function threadAddModerator(_x32, _x33) {
          return _threadAddModerator.apply(this, arguments);
        }

        return threadAddModerator;
      }(),
      threadAddMember: function () {
        var _threadAddMember = _asyncToGenerator(function* (thread, id) {
          try {
            console.log(thread, id, 'add member');
            yield _this.state.threads[thread].instance.addMember(id);
          } catch (error) {
            console.log(error);
          }
        });

        function threadAddMember(_x34, _x35) {
          return _threadAddMember.apply(this, arguments);
        }

        return threadAddMember;
      }(),

      /* ---------------------- */
      // Utility Methods

      /* ---------------------- */
      // Profile 
      getProfile: function () {
        var _getProfile = _asyncToGenerator(function* (address) {
          var profile = yield _box.default.getProfile(address);

          _this.setState({
            profile
          });
        });

        function getProfile(_x36) {
          return _getProfile.apply(this, arguments);
        }

        return getProfile;
      }(),
      lookupProfile: function () {
        var _lookupProfile = _asyncToGenerator(function* (address) {
          if (address) {
            var profile = yield _box.default.getProfile(address);

            _this.setState({
              profiles: _objectSpread({}, _this.state.profiles, {
                [address]: _objectSpread({}, _this.state.profiles[address], {
                  profile
                })
              })
            });
          }
        });

        function lookupProfile(_x37) {
          return _lookupProfile.apply(this, arguments);
        }

        return lookupProfile;
      }(),
      getThread: function () {
        var _getThread = _asyncToGenerator(function* (space, name, firstModerator, members, opts) {
          var thread = yield _box.default.getThread(space, name, firstModerator, members, opts);

          _this.setState({
            threads: _objectSpread({}, _this.state.threads, {
              [name]: thread
            })
          });
        });

        function getThread(_x38, _x39, _x40, _x41, _x42) {
          return _getThread.apply(this, arguments);
        }

        return getThread;
      }(),
      getThreadByAddress: function () {
        var _getThreadByAddress = _asyncToGenerator(function* (address, name) {
          var thread = yield _box.default.getThreadByAddress(address, name);

          _this.setState({
            threads: _objectSpread({}, _this.state.threads, {
              [name]: thread
            })
          });
        });

        function getThreadByAddress(_x43, _x44) {
          return _getThreadByAddress.apply(this, arguments);
        }

        return getThreadByAddress;
      }(),
      getConfig: function () {
        var _getConfig = _asyncToGenerator(function* (address, opts) {
          var config = yield _box.default.getConfig(address, opts);

          _this.setState({
            profiles: _objectSpread({}, _this.state.profiles, {
              [address]: _objectSpread({}, _this.state.profiles[address], {
                config
              })
            })
          });
        });

        function getConfig(_x45, _x46) {
          return _getConfig.apply(this, arguments);
        }

        return getConfig;
      }(),
      // Utilities
      getVerifiedAccounts: function () {
        var _getVerifiedAccounts = _asyncToGenerator(function* (address) {
          if (address) {
            var profile = _this.state.profiles[address] && _this.state.profiles[address].profile;

            if (profile) {
              var verified = yield _box.default.getVerifiedAccounts(profile);

              _this.setState({
                profiles: _objectSpread({}, _this.state.profiles, {
                  [address]: _objectSpread({}, _this.state.profiles[address], {
                    verified
                  })
                })
              });
            } else {
              profile = yield _box.default.getProfile(address);

              var _verified2 = yield _box.default.getVerifiedAccounts(profile);

              _this.setState({
                profiles: _objectSpread({}, _this.state.profiles, {
                  [address]: _objectSpread({}, _this.state.profiles[address], {
                    verified: _verified2
                  })
                })
              });
            }
          } else {
            if (_this.state.profile) {
              var _verified3 = yield _box.default.getVerifiedAccounts(_this.state.profile);

              _this.setState({
                profile: _objectSpread({}, _this.state.profile, {
                  verified: _verified3
                })
              });
            } else {
              return false;
            }
          }
        });

        function getVerifiedAccounts(_x47) {
          return _getVerifiedAccounts.apply(this, arguments);
        }

        return getVerifiedAccounts;
      }()
    };
  } // Component Did Mount


  componentDidMount() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      var address = window.ethereum && window.ethereum.selectedAddress || null;

      if (address) {
        var isLoggedIn = _box.default.isLoggedIn(address);

        _this2.state.getProfile(address); // IF : Session is active open box.


        if (isLoggedIn && !_this2.state.box) {
          // this.state.open(address)
          _this2.state.listSpaces(address);
        }

        _this2.state.listSpaces(address); // Active Spaces List

      }
    })();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state, 'Box Provider'); // Request

    if (this.state.requests.length == 0 && prevState.requests.length > 0) {
      this.setState({
        isRequestOpen: false
      });
    } // Initial Component Loading


    if (this.state.box && !this.state.isInitialized) {
      this.state.listSpaces();
      this.state.publicGet('credential');
      this.state.getVerifiedAccounts();
      this.setState({
        isInitialized: true
      });
      this.state.get({
        key: 'job',
        access: 'public'
      });
      this.state.get({
        key: 'employer'
      });
      this.state.get({
        key: 'role'
      });
      this.state.get({
        key: 'proof_email',
        access: 'private'
      });
      this.state.verified({
        request: 'email'
      });
    }
  }

  render() {
    var {
      isInitialized,
      isLoggedIn,
      isRequestOpen,
      requestConfirm,
      openSpace,
      requests,
      instance,
      spaces
    } = this.state;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Context.default.Provider, {
      value: this.state
    }, this.props.children), isRequestOpen && isLoggedIn && isInitialized && null // <Modal
    //   isSlim
    //   label='Profile Update Request(s)'
    //   content={
    //     <RequestManage
    //       instance={instance}
    //       spaces={spaces}
    //       openSpace={openSpace}
    //       requestConfirm={requestConfirm}
    //       requests={requests}
    //     />}
    //   isOpen={isRequestOpen}
    // />
    );
  }

}

Provider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.string])
};
var _default = Provider;
exports.default = _default;