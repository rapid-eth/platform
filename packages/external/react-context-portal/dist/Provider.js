"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Context = _interopRequireDefault(require("./Context"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

class Provider extends _react.Component {
  constructor(props) {
    super(props);

    this.open = (Content, position, positionStyle) => this.setState({
      isOpen: true,
      Content: Content,
      position,
      positionStyle
    });

    this.close = () => this.setState({
      isOpen: false
    });

    this.state = {
      isOpen: false,
      close: this.close,
      open: this.open,
      position: 'modal',
      Content: () => null
    };
    _api.default.close = this.close;
    _api.default.open = this.open;
  }

  render() {
    return _react.default.createElement(_Context.default.Provider, {
      value: this.state
    }, this.props.children);
  }

}

Provider.propTypes = {
  children: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array, _propTypes.default.string])
};
var _default = Provider;
exports.default = _default;