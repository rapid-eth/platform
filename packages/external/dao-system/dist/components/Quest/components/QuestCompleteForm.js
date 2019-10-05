"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ResourceItem = (_ref) => {
  var {
    box
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box"]);

  var [certificate, setCertificate] = (0, _react.useState)();
  /* -------------------- */

  /* Actions
  /* -------------------- */

  /**
   * @function SubmitHandler
   * @description Connect to Quest Backend System
   */

  var submitHandler = values => {
    var url = 'https://brn68gkbcf.execute-api.us-east-1.amazonaws.com/cors/verify-balance';
    window.fetch(url, {
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "questId": "12",
        "address": window.ethereum.selectedAddress
      })
    }).then(res => {
      if (res.json) {
        res.json().then(json => {
          setCertificate(json);
        });
      }
    });
  };
  /* -------------------- */

  /* Effects
  /* -------------------- */

  /* -------------------- */

  /* Initialize Effects
  /* -------------------- */

  /* -------------------- */

  /* Resource Item
  /* A default comment display component.
  /* type: 'comment'
  /* version: 1.0.0.
  /* -------------------- */


  return certificate ? _react.default.createElement(_designSystem.Flex, {
    card: true,
    center: true,
    column: true
  }, _react.default.createElement(_designSystem.Heading, {
    lg: true,
    heavy: true
  }, "Quest Complete"), _react.default.createElement(_designSystem.Heading, {
    md: true,
    thin: true
  }, "Congratulations on completing a quest!"), _react.default.createElement(_designSystem.Flex, {
    card: true,
    column: true,
    wordBreakAll: true
  }, _react.default.createElement(_designSystem.Span, {
    xxs: true,
    my: 2
  }, _react.default.createElement("strong", null, "ID: "), certificate.certificateId), _react.default.createElement(_designSystem.Span, {
    xxs: true
  }, _react.default.createElement("strong", null, "Certifiate:"), " ", certificate.signature)), _react.default.createElement(_designSystem.Flex, {
    between: true,
    width: "100%",
    my: 3
  }, _react.default.createElement(_designSystem.Toast, {
    content: _react.default.createElement(RedeemCertificateForm, {
      signature: certificate.signature
    })
  }, _react.default.createElement(_designSystem.Button, {
    variant: "green"
  }, "Redeem Certifiate")), _react.default.createElement(_designSystem.Toast, {
    label: "Certificate Saved"
  }, _react.default.createElement(_designSystem.Button, null, "Save Certificate")))) : _react.default.createElement(_designSystem.Box, {
    card: true
  }, _react.default.createElement(_designSystem.Heading, null, "Complete Quest"), _react.default.createElement(_designSystem.Form, {
    callback: submitHandler
  }, _react.default.createElement(_designSystem.Field, {
    name: "address",
    minHeight: 60,
    defaultValue: window.ethereum.selectedAddress,
    placeholder: "Address"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    variant: "green",
    width: "100%"
  }, "Complete Quest")));
};

ResourceItem.defaultProps = {
  alias: 'test',
  title: 'Start The Quest',
  summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Nam blandit dapibus aliquet.',
  imageCover: 'https://cdn.dribbble.com/users/1780890/screenshots/5672231/illu2_4x.jpg'
};
ResourceItem.propTypes = {
  alias: _propTypes.default.string,
  title: _propTypes.default.string,
  summary: _propTypes.default.string,
  imageCover: _propTypes.default.string
};

var RedeemCertificateForm = (_ref2) => {
  var {
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["styled"]);

  return _react.default.createElement(_designSystem.Box, {
    maxWidth: 300
  }, _react.default.createElement(_designSystem.Heading, null, "Redeem Certificate"), _react.default.createElement(_designSystem.Paragraph, {
    sm: true
  }, "Exchange a token certificate for tokens."), _react.default.createElement(_designSystem.Form, null, _react.default.createElement(_designSystem.Field, {
    name: "signature",
    minHeight: 60,
    defaultValue: props.signature,
    placeholder: "Certificate"
  }), _react.default.createElement(_designSystem.Button, {
    type: "submit",
    variant: "green",
    width: "100%"
  }, "Redeem")));
};

var _default = ResourceItem;
exports.default = _default;