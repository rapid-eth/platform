"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-components/dist");

var _utilities = require("../../utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var UserItemCard = props => {
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Box, {
    flex: 1
  }, _react.default.createElement(_designSystem.Flex, _extends({
    column: true,
    height: "100%",
    p: 0
  }, props.styled, props), _react.default.createElement(_designSystem.Flex, {
    flex: 1,
    p: 2,
    minHeight: 120,
    width: "100%"
  }, _react.default.createElement(_designSystem.BackgroundGradient, {
    gradient: "purpink",
    gradientDir: "140 "
  }), _react.default.createElement(_designSystem.Absolute, {
    layout: "bottomRight",
    zIndex: 100
  }), props.coverPhoto ? _react.default.createElement(_designSystem.BackgroundImage, {
    bg: "white",
    src: (0, _utilities.GenerateImage)(props.coverPhoto),
    opacity: 0.2
  }) : _react.default.createElement(_designSystem.BackgroundImage, {
    bg: "white",
    src: "https://s3.envato.com/files/f209c8a8-c7fc-49be-a948-6aa185b7fb4b/inline_image_preview.jpg",
    opacity: 0.2
  })), _react.default.createElement(_designSystem.Flex, {
    column: true,
    card: true,
    borderNone: true,
    flex: 1,
    textAlign: "center",
    p: 15,
    py: 30,
    zIndex: 20
  }, _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true,
    alignSelf: "center"
  }, props.image ? _react.default.createElement(_designSystem.Flex, {
    circle: true,
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    border: "2px solid #FFF",
    mt: -120,
    overflow: "hidden",
    width: 100,
    height: 100,
    maxWidth: 154,
    maxWidth: 154
  }, _react.default.createElement(_designSystem.BackgroundImage, {
    ratio: .5,
    variant: "avatar",
    src: (0, _utilities.GenerateImage)(props.image)
  })) : _react.default.createElement(_designSystem.Flex, {
    circle: true,
    center: true,
    column: true,
    boxShadow: 0,
    p: 2,
    border: "2px solid #FFF",
    mt: -120,
    overflow: "hidden",
    width: 100,
    height: 100,
    maxWidth: 154,
    maxWidth: 154
  }, _react.default.createElement(_designSystem.BackgroundImage, {
    ratio: .5,
    variant: "avatar",
    src: "https://images.assetsdelivery.com/compings_v2/mingirov/mingirov1904/mingirov190400568.jpg"
  })), _react.default.createElement(_designSystem.Box, {
    mb: 10,
    mt: props.isImage ? -30 : -2
  }, _react.default.createElement(_designSystem.QRDisplayModal, {
    value: "ethereum:".concat(props.address),
    styledContainer: {
      card: true
    }
  }, _react.default.createElement(_designSystem.Span, {
    pointer: true
  }, _react.default.createElement(_designSystem.Image, {
    card: true,
    circle: true,
    p: 1,
    maxWidth: 32,
    src: "https://cdn0.iconfinder.com/data/icons/material-style/48/qrcode-512.png"
  })))), props.name && _react.default.createElement(_designSystem.Heading, {
    heavy: true,
    md: true,
    mt: -20,
    fontWeight: 300,
    children: props.name
  }), props.job && _react.default.createElement(_designSystem.Span, {
    textCenter: true,
    mb: 3,
    fontSize: [2]
  }, props.job, " ", props.employer && _react.default.createElement(_designSystem.Span, null, "at ", props.employer))), _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Button, {
    xs: true
  }, props.addressShort))), props.isFooterActive && _react.default.createElement(_designSystem.Flex, {
    center: true,
    card: true,
    flex: 1,
    p: 10,
    justifySelf: "flex-end",
    maxHeight: 50
  }, _react.default.createElement(_designSystem.BackgroundGradient, {
    gradient: "gray"
  }), _react.default.createElement(_designSystem.Flex, {
    between: true,
    width: 320,
    maxWidth: 320,
    fullWidth: true
  }, _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "white"
  }, "Follow"), _react.default.createElement(_designSystem.Span, {
    xxs: true,
    tag: "green"
  }, "Message")))), _react.default.createElement(_designSystem.Span, {
    my: 2
  }, _react.default.createElement(_dist.BoxThreadPostDelete, {
    threadName: props.threadName,
    postId: props.postId
  }))));
};

UserItemCard.defaultProps = {
  isFooterActive: true
};
UserItemCard.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};
var _default = UserItemCard;
exports.default = _default;