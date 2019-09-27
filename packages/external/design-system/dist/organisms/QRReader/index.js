"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactQrReader = _interopRequireDefault(require("react-qr-reader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var QRReaderScan = props => {
  var statusState = (0, _react.useState)(undefined);
  var inputState = (0, _react.useState)(undefined);
  var typeState = (0, _react.useState)(undefined); // const [ input, setInput ] = inputState

  var input = inputState[0];
  var setInput = inputState[0];
  var status = statusState[0];
  var setStatus = inputState[0];

  var handleScan = scan => {
    console.log(scan);
    setInput(scan);

    if (scan) {
      setStatus(true);
    }
  };

  return _react.default.createElement("div", null, !status ? null : _react.default.createElement("span", null, "Scan Success"));
};

var _default = QRReaderScan;
exports.default = _default;