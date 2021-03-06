"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

var _dist2 = require("@kames/3box-components/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var UserAddToThread = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  console.log(props, 'user folo pros');

  var followHandler = values => {
    box.threadPost({
      space: props.space,
      threadName: props.threadName.toLowerCase(),
      // Target user ETH address.
      post: {
        object: 'address_reference',
        data: box.address,
        // Follower ETH address.
        meta: {
          parent_type: 'array'
        },
        schema: {
          reference: 'user',
          version: '1.0.0.'
        }
      }
    });
    /**
     * @function SaveFollowReference
     * @desciption Store a reference of following threads published messages.
     * @todo Add set_insert to provide.
     */
    // box.insert({
    //   space: props.space,
    //   access: 'public',
    //   keys: []
    // })
  };

  return _react.default.createElement(_dist2.Access, {
    threadAuto: true,
    componentLoading: LoadingComponent,
    optionsThread: {
      members: false,
      firstModerator: props.firstModerator
    },
    level: "thread",
    space: 'eth',
    threadName: props.threadName.toLowerCase()
  }, _react.default.createElement(_designSystem.Button, _extends({
    variant: "green",
    width: "100%"
  }, props.styled, {
    onClick: followHandler
  }), "Follow"));
};

UserAddToThread.defaultProps = {};

var LoadingComponent = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "white",
    width: "100%"
  }, _react.default.createElement(_designSystem.Flex, {
    alignCenter: true
  }, _react.default.createElement(_designSystem.Span, null, "Follow"), " ", _react.default.createElement(_designSystem.Span, {
    color: "#000",
    ml: 2
  }, _react.default.createElement(_designSystem.Loading, {
    type: "ring"
  }))));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(UserAddToThread, props));

exports.default = _default;