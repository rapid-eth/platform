"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dotPropImmutableChain = _interopRequireDefault(require("dot-prop-immutable-chain"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxVerified = (_ref) => {
  var {
    box,
    loadingMessage,
    display,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "loadingMessage", "display", "styled"]);

  var [address, setAddress] = (0, _react.useState)(props.address);
  var [verifications, setVerifications] = (0, _react.useState)();
  var [isEmail, setIsEmai] = (0, _react.useState)(false);
  var [isEmailVerified, setIsEmailVerified] = (0, _react.useState)(false);
  var [isGithub, setIsGithub] = (0, _react.useState)(false);
  var [isTwitter, setIsTwitter] = (0, _react.useState)(false);
  /**
   * @function VerificationsState
   * @description Manage the state of verifications
   */

  (0, _react.useEffect)(() => {
    if ((0, _dotPropImmutableChain.default)(box).get("data.profiles.".concat(address)).value()) {
      var _verifications = (0, _dotPropImmutableChain.default)(box).get("data.profiles.".concat(address, ".verifications")).value();

      setVerifications(_verifications);
      var keys = Object.keys(_verifications);
      setIsEmai(keys.includes('email'));
      setIsGithub(keys.includes('github'));
      setIsTwitter(keys.includes('twitter'));
    }
  }, [(0, _dotPropImmutableChain.default)(box).get("data.profiles.".concat(address)).value()]);
  return !verifications ? loadingMessage ? _react.default.createElement(_designSystem.Span, null, loadingMessage) : null : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Flex, {
    between: true
  }, !isGithub ? _react.default.createElement(_designSystem.Span, {
    xxs: true,
    thin: true,
    tag: "white"
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    maxWidth: 18,
    mr: 2
  }), _react.default.createElement(_designSystem.Span, null, "Unverified"))) : _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, _react.default.createElement("a", {
    target: "_blank",
    href: "https://github.com/".concat(verifications.github.username)
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    src: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    maxWidth: 18,
    mr: 2
  }), _react.default.createElement(_designSystem.Span, null, verifications.github.username)))), !isTwitter ? _react.default.createElement(_designSystem.Span, {
    xxs: true,
    thin: true,
    tag: "white",
    mx: 2
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    src: "http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png",
    maxWidth: 18,
    mr: 2
  }), _react.default.createElement(_designSystem.Span, null, "Unverified"))) : _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white",
    color: "blue",
    mx: 3
  }, _react.default.createElement("a", {
    target: "_blank",
    href: "https://twitter.com/".concat(verifications.twitter.username)
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    src: "http://goinkscape.com/wp-content/uploads/2015/07/twitter-logo-final.png",
    maxWidth: 18,
    mr: 2
  }), _react.default.createElement(_designSystem.Span, null, verifications.twitter.username)))), !isEmail ? _react.default.createElement(_designSystem.Span, {
    xxs: true,
    thin: true,
    tag: "white"
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Image, {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST0XdyBBhy5KQBP2sIrvFsWIBMwOxz064mxn-2SR6Tl_MlQ5e8",
    maxWidth: 18,
    mr: 2
  }), _react.default.createElement(_designSystem.Span, null, "Locked"))) : isEmailVerified ? _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, "Email Verified") : _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, "Verify Email")));
};

BoxVerified.propTypes = {
  loadingMessage: _propTypes.default.string,
  display: _propTypes.default.oneOf(['did', 'ethereum', 'twitter', 'github'])
};
BoxVerified.defaultProps = {
  display: ['twitter', 'github']
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxVerified, props));

exports.default = _default;