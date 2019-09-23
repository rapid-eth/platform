"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _Image = _interopRequireDefault(require("@horizin/design-system/dist/atoms/Image"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var shadowSunset = '0px -6px 7px -5px #d6d6d6, 3px -4px 3px -3px #ca2ea5, 0px -4px 3px -2px #dc050f, -5px -4px 4px -6px #f3932f';

var BoxThreadPostCreate = (_ref) => {
  var {
    box,
    threadName
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "threadName"]);

  var [loading, setLoading] = (0, _react.useState)(false);

  var onSubmit = values => {
    setLoading(true);
    box.threadPost({
      threadName,
      post: values
    });
  };

  return loading ? _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Flex, {
    color: "charcoal",
    card: true,
    center: true,
    column: true,
    rounded: true,
    p: 4
  }, _react.default.createElement(_designSystem.Heading, {
    as: "h5",
    noMargin: true,
    md: true,
    thin: true,
    center: true
  }, "Generating", _react.default.createElement("br", null), _react.default.createElement("strong", null, "Decentralized Identity")), _react.default.createElement(_Image.default, {
    src: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/35771931234507.564a1d2403b3a.gif",
    width: 30,
    my: 20
  }), _react.default.createElement(_designSystem.Span, null, "Prepare for an Adventure"))) : _react.default.createElement(_designSystem.Box, {
    fullWidth: true
  }, _react.default.createElement(_designSystem.Box, {
    card: true,
    boxShadow: "sunset"
  }, _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true,
    mt: -50
  }, _react.default.createElement(_designSystem.Box, {
    borderRadius: 9999,
    boxShadow: 'sunset',
    circle: true,
    gradient: "white",
    p: 20,
    maxWidth: 120
  }, _react.default.createElement(_Image.default, {
    src: "https://static.thenounproject.com/png/2309777-200.png",
    maxWidth: 70,
    width: 1
  })), _react.default.createElement(_designSystem.Paragraph, {
    center: true,
    heavy: true,
    xs: true,
    color: "charcoal"
  }, "Upload Avatar")), _react.default.createElement(_designSystem.Form, {
    callback: onSubmit
  }, _react.default.createElement(_designSystem.Field, {
    name: "name",
    placeholder: "Full Name"
  }), _react.default.createElement(_designSystem.Field, {
    name: "role",
    placeholder: "Role"
  }), _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Paragraph, {
    center: true,
    color: "charcoal"
  }, box.addressShortened)), _react.default.createElement(_designSystem.Flex, {
    evenly: true,
    fullWidth: true
  }, _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Paragraph, {
    center: true,
    xs: true,
    color: "charcoal"
  }, "infura", _react.default.createElement("br", null), _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, "provider"))), _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Paragraph, {
    center: true,
    xs: true,
    color: "charcoal"
  }, "extension", _react.default.createElement("br", null), _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, "wallet"))), _react.default.createElement(_designSystem.Flex, {
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Paragraph, {
    center: true,
    xs: true,
    color: "charcoal"
  }, "ipfs", _react.default.createElement("br", null), _react.default.createElement(_designSystem.Span, {
    heavy: true
  }, "storage")))), _react.default.createElement(_designSystem.Span, {
    xs: true,
    color: "charcoal",
    center: true,
    onClick: box.logout
  }, "Logout"), _react.default.createElement(_designSystem.Button, {
    mb: -30,
    mt: 20,
    ml: "auto",
    type: "submit",
    gradient: "green",
    onClick: box.open,
    fullWidth: true
  }, "Create Profile"))));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxThreadPostCreate, props));

exports.default = _default;