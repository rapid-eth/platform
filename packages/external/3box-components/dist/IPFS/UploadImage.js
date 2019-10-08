"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _box = _interopRequireDefault(require("3box/dist/3box"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Buffer = require('buffer/').Buffer;
/* --- Local --- */


var Component = props => {
  var uploadHandler = () => {
    var reader = new FileReader();
    reader.onloadend =
    /*#__PURE__*/
    _asyncToGenerator(function* () {
      // const ipfs = window.IpfsApi('localhost', 5001) // Connect to IPFS
      var buf = Buffer(reader.result); // Convert data into buffer

      var ipfs = yield _box.default.getIPFS();
      console.log(ipfs);
      ipfs.add(buf, (err, result) => {
        // Upload buffer to IPFS
        if (err) {
          console.error(err);
          return;
        }

        var url = "https://ipfs.io/ipfs/".concat(result[0].hash);
        console.log("Url --> ".concat(url));
      });
    });
    reader.readAsArrayBuffer(photo.files[0]); // Read Provided File
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("fieldset", null, _react.default.createElement("legend", null, "Upload photo"), _react.default.createElement("input", {
    type: "file",
    name: "photo",
    id: "photo"
  }), _react.default.createElement("button", {
    type: "button",
    onClick: uploadHandler
  }, "Upload")));
};

Component.defaultProps = {
  string: undefined
};
Component.propTypes = {
  string: _propTypes.default.string
};
var _default = Component;
exports.default = _default;