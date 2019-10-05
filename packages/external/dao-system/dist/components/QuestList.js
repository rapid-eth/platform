"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _dist2 = require("@kames/3box-components/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxThreadPosts = (_ref) => {
  var {
    box,
    component,
    to,
    variant,
    threadAddress,
    threadName,
    space,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "component", "to", "variant", "threadAddress", "threadName", "space", "children"]);

  var Component = component ? component : _dist2.BoxThreadPost;
  var [quests, setQuests] = (0, _react.useState)([]);
  var newQuest = (0, _idx.default)(box, _ => _.threads["3box.thread.meshhub.meshhub"].posts);

  if (Array.isArray(newQuest) && newQuest.length > quests.length) {
    setQuests(newQuest);
  }

  (0, _react.useEffect)(() => {
    var posts = box.static.getThreadByAddress(threadAddress);

    if (posts) {
      posts.then(res => {
        setQuests(res);
      });
    }
  }, [newQuest]);
  return !quests ? null : _react.default.createElement(_react.default.Fragment, null, quests && Array.isArray(quests) && quests.length > 0 && quests.map(post => _react.default.createElement(Component, _extends({
    id: [post.postId],
    to: to,
    threadName: threadName
  }, post.message, {
    background: post.message.imageFeatured
  }))));
};

BoxThreadPosts.defaultProps = {
  variant: 'green'
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPosts, props));

exports.default = _default;