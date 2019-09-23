"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = require("../../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* --- Global Dependencies --- */
var Branch = (_ref) => {
  var {
    data
  } = _ref;
  console.log(data, 'branch');
  return _react.default.createElement(_index.Flex, {
    column: true
  }, Array.isArray(data) ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Span, {
    xs: true,
    normal: true
  }, "(Array)"), _react.default.createElement(_index.Span, {
    xs: true
  }, "["), data.map(d => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Branch, {
    data: d
  }))), _react.default.createElement(_index.Span, {
    xs: true
  }, "]")) : typeof data === 'object' ? Object.keys(data).map(d => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.Span, {
    xs: true,
    heavy: true
  }, d), _react.default.createElement(_index.Box, {
    ml: 10
  }, _react.default.createElement(Branch, {
    data: data[d]
  })))) : _react.default.createElement(_index.Span, {
    xs: true,
    normal: true
  }, data));
};

var _default = Branch;
exports.default = _default;