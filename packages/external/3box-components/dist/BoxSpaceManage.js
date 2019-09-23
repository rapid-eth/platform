"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireDefault(require("react"));

var _designSystem = require("@horizin/design-system");

var _BoxLoginButton = _interopRequireDefault(require("./BoxLoginButton"));

var _BoxOpenSpace = _interopRequireDefault(require("./BoxOpenSpace"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* --- React Component --- */
var _default = (_ref) => {
  var {
    box,
    space,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "space", "children"]);

  return !box.isLoggedIn ? _react.default.createElement(IsNotLoggedIn, {
    box: box,
    isLoggedIn: box.isLoggedIn,
    open: box.open
  }) : box.spaces[space] ? _react.default.createElement(SpaceIsOpen, {
    sm: true,
    box: box,
    space: box.spaces[space]
  }) : _react.default.createElement(SpaceOpen, {
    box: box,
    space: space
  });
};

exports.default = _default;

var IsNotLoggedIn = (_ref2) => {
  var {
    box,
    isLoggedIn,
    loading,
    open
  } = _ref2;
  return _react.default.createElement(_BoxLoginButton.default, {
    variant: "blue",
    box: box
  });
};

var SpaceOpen = (_ref3) => {
  var {
    box,
    space,
    children
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["box", "space", "children"]);

  return _react.default.createElement(_BoxOpenSpace.default, {
    openSpace: box.openSpace,
    space: space
  }, children ? children : _react.default.createElement(_designSystem.Button, {
    xs: true,
    white: true
  }, "Open ", space, " Space"));
};

class SpaceIsOpen extends _react.default.Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: undefined
    };
  } // Mounted


  componentDidMount() {
    this.props.box.get({
      keys: 'all',
      access: 'public',
      space: 'meshhub',
      all: true
    });

    if ((0, _idx.default)(this.props.space, _ => _.data.credentials)) {
      this.setState({
        credentials: (0, _idx.default)(this.props, _ => _.space.data.credentials)
      });
    }
  }

  componentDidUpdate(prevProps) {
    if ((0, _idx.default)(this.props.space, _ => _.data.credentials) && !this.state.credentials) {
      this.setState({
        credentials: (0, _idx.default)(this.props, _ => _.space.data.credentials)
      });
    }

    if ((0, _idx.default)(this.props.space, _ => _.data.credentials) !== (0, _idx.default)(prevProps, _ => _.space.data.credentials)) {
      this.setState({
        credentials: (0, _idx.default)(this.props, _ => _.space.data.credentials)
      });
    }
  }

  render() {
    var {
      credentials
    } = this.state;
    return null;
  }

}