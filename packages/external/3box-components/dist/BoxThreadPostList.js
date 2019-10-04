"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _dist = require("@kames/3box-hooks/dist");

var _BoxThreadPost = _interopRequireDefault(require("./BoxThreadPost"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var BoxThreadPosts = (_ref) => {
  var {
    box,
    component,
    variant,
    members,
    threadAddress,
    threadName,
    space,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "component", "variant", "members", "threadAddress", "threadName", "space", "children"]);

  var Component = component ? component : _BoxThreadPost.default;
  var [posts, setPosts] = (0, _react.useState)();
  var [isMembers, setMembers] = (0, _react.useState)(members);
  /**
   * @function UpdateThreadList
   */

  (0, _react.useEffect)(() => {
    if (box.threads[threadName]) {
      setPosts(box.threads[threadName]);
    }
  }, [box.threads, box.threads[threadName]]);
  (0, _react.useEffect)(() => {
    var runEffect =
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(function* () {
        if (!posts && box.address) {
          var post;

          if (threadAddress) {
            post = yield box.static.getThreadByAddress(threadAddress);
          } else {
            post = yield box.static.getThread(space, threadName, box.address, members);
          }

          setPosts(post);
        }

        if (posts) {
          setPosts(posts);
        }

        if (box.threads && box.threads[threadName] && box.threads[threadName].posts) {
          setPosts(box.threads[threadName].posts);
        }
      });

      return function runEffect() {
        return _ref2.apply(this, arguments);
      };
    }();

    runEffect();
  }, [box.address, threadAddress, box.threads]);
  return !posts ? null : _react.default.createElement(_react.default.Fragment, null, posts && Array.isArray(posts) && posts.map(post => _react.default.createElement(Component, _extends({
    threadName: threadName
  }, post))));
};

BoxThreadPosts.defaultProps = {
  variant: 'green'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPosts, props));

exports.default = _default;