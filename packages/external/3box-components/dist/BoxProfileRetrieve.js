"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _dist = require("@kames/3box-hooks/dist");

var _designSystem = require("@horizin/design-system");

var _utilities = require("./utilities");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var BoxProfileRetrieve = (_ref) => {
  var {
    box,
    address,
    small,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "address", "small", "styled"]);

  var [profile, setProfile] = (0, _react.useState)();
  /**
   * @function ProfileRetrieve
   * @description Send message signing request to current Web3 provider.
   */

  (0, _react.useEffect)(() => {
    if (address && !profile) {
      box.getProfile(address);
    } else if ((0, _idx.default)(box, _ => _.profiles[address])) {// setProfile(idx(box, _=>_.profiles[address]))
    }
  }, [address, profile]);
  (0, _react.useEffect)(() => {
    if (!profile) {
      setProfile((0, _idx.default)(box, _ => _.profiles[address]));
    }
  }, [profile, (0, _idx.default)(box, _ => _.profiles[address])]);
  return _react.default.createElement(ProfileCard, {
    small: small,
    profile: profile
  });
};

var ProfileCard = (_ref2) => {
  var {
    profile,
    small
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["profile", "small"]);

  return profile ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    variant: "avatar",
    src: (0, _utilities.GenerateImage)((0, _idx.default)(profile, _ => _.image)),
    width: 48
  })), _react.default.createElement(_designSystem.Box, {
    ml: 10
  }, _react.default.createElement(_designSystem.Heading, {
    md: true,
    heavy: true,
    noMargin: true
  }, (0, _idx.default)(profile, _ => _.name)), _react.default.createElement(_designSystem.Heading, {
    sm: true,
    thin: true,
    noMargin: true,
    level: 4
  }, (0, _idx.default)(profile, _ => _.job))))) : _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, null, _react.default.createElement(_designSystem.Image, {
    card: true,
    circle: true,
    src: "https://static.thenounproject.com/png/2348501-200.png",
    border: "none",
    bg: "white",
    width: 70
  })), _react.default.createElement(_designSystem.Box, {
    ml: 10
  }, _react.default.createElement(_designSystem.Box, {
    borderRadius: 40,
    bg: "gray",
    p: 2,
    width: 320
  }), _react.default.createElement(_designSystem.Box, {
    borderRadius: 40,
    bg: "gray",
    p: 1,
    width: 220,
    mt: 20
  })));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(BoxProfileRetrieve, props));

exports.default = _default;