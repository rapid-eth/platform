"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _reactPerfectScrollbar = _interopRequireDefault(require("react-perfect-scrollbar"));

var _reactContextTabs = require("react-context-tabs");

var _meshidResolver = require("meshid-resolver");

var _io = require("react-icons/io");

var _md = require("react-icons/md");

var _fi = require("react-icons/fi");

var _BoxProvider = require("context/Providers/BoxProvider");

var _atoms = require("atoms");

var _molecules = require("molecules");

var _components = require("components");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

_react.default.createElement(_atoms.Flex, {
  ac: true,
  zIndex: 10
}, _react.default.createElement(_atoms.Box, null, _react.default.createElement(Avatar, {
  src: loginLogo,
  width: 40,
  borderRadius: 9999
})), _react.default.createElement(_atoms.Flex, {
  center: true,
  column: true,
  zIndex: 5
}, _react.default.createElement(_atoms.Span, {
  xs: true,
  pointer: true,
  zIndex: 0,
  bg: "#eb9400",
  color: "white",
  borderRadius: "0 5px px 0",
  px: 10,
  py: "5px",
  ml: '-10px'
}, isLoading ? _react.default.createElement(_atoms.Span, {
  pl: 10,
  pr: 10
}, "Loading...") : _react.default.createElement(_atoms.Span, {
  pl: 10,
  pr: 10
}, "Login"))));
/* --- React Component --- */


var _default = (_ref) => {
  var {
    children,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["children", "styled"]);

  return _react.default.createElement(_BoxProvider.BoxContext.Consumer, null, box => box.requests ? _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_components.Popover, {
    content: _react.default.createElement(Open, {
      box: box,
      requests: box.requests,
      spaces: box.spaces,
      threads: box.threads,
      requestConfirm: box.requestConfirm,
      requestConfirmAll: box.requestConfirmAll,
      requestReject: box.requestReject,
      requestRejectAll: box.requestRejectAll
    })
  }, _react.default.createElement(_atoms.Box, styled, _react.default.createElement(_atoms.Absolute, {
    top: true,
    right: true,
    mt: -10,
    mr: -10
  }, _react.default.createElement(_atoms.Flex, {
    circle: true,
    center: true,
    column: true,
    bg: "blue",
    p: "5px",
    width: 20,
    height: 20
  }, _react.default.createElement(_atoms.Span, {
    xs: true
  }, box.requests.length))), _react.default.createElement(_atoms.Span, {
    md: true,
    color: "white"
  }, _react.default.createElement(_io.IoIosNotifications, null))))) : null);
};

exports.default = _default;

var Open = (_ref2) => {
  var {
    box,
    requests,
    hub,
    spaces,
    threads,
    requestConfirm,
    requestConfirmAll,
    requestReject,
    requestRejectAll
  } = _ref2;
  return _react.default.createElement(_reactContextTabs.Tabs, {
    defaultTabId: "3box"
  }, _react.default.createElement(_atoms.Box, {
    card: true,
    p: 0,
    maxWidth: 380,
    width: 380,
    mr: 30
  }, _react.default.createElement(_atoms.Box, {
    rounded: true,
    gradient: "gray",
    pt: 10
  }, _react.default.createElement(_atoms.Flex, {
    evenly: true
  }, _react.default.createElement(_molecules.Tab, {
    tabId: '3box',
    button: true,
    activeColor: "blue"
  }, _react.default.createElement(_atoms.Span, {
    sm: true,
    normal: true,
    pointer: true
  }, "BOX")), _react.default.createElement(_molecules.Tab, {
    tabId: 'spaces',
    button: true,
    activeColor: "blue"
  }, _react.default.createElement(_atoms.Span, {
    sm: true,
    normal: true,
    pointer: true
  }, "SPACES")), _react.default.createElement(_molecules.Tab, {
    tabId: 'threads',
    button: true,
    activeColor: "blue"
  }, _react.default.createElement(_atoms.Span, {
    sm: true,
    normal: true,
    pointer: true
  }, "THREADS")))), _react.default.createElement(_atoms.Flex, {
    column: true,
    p: 20,
    maxHeight: 300,
    height: "100%"
  }, _react.default.createElement(_reactPerfectScrollbar.default, null, _react.default.createElement(_reactContextTabs.TabPanel, {
    tabId: '3box'
  }, requests && Array.isArray(requests) && requests.length > 0 ? requests.filter(rq => rq.status !== 'rejected').map((request, index) => _react.default.createElement(RequestPreview, _extends({}, request, {
    box: box,
    index: index,
    requestConfirm: requestConfirm,
    requestReject: requestReject
  }))) : _react.default.createElement(_atoms.Flex, {
    center: true,
    column: true,
    p: 15
  }, _react.default.createElement(_atoms.Span, {
    color: "blue",
    lg: true
  }, _react.default.createElement(_io.IoMdGlobe, null)), _react.default.createElement(_atoms.Span, {
    sm: true,
    thin: true
  }, "No active requests... Refreshing!"), _react.default.createElement(_atoms.Span, {
    pointer: true,
    xs: true,
    thin: true,
    mt: 15
  }, "Scan Network"))), _react.default.createElement(_reactContextTabs.TabPanel, {
    tabId: 'spaces'
  }, spaces && Array.isArray(Object.keys(spaces)) && Object.keys(spaces).length > 0 ? Object.keys(spaces).map(space => _react.default.createElement(SpacePreview, _extends({
    name: space
  }, spaces[space]))) : _react.default.createElement(_atoms.Flex, {
    center: true,
    column: true,
    p: 15
  }, _react.default.createElement(_atoms.Span, {
    color: "blue",
    lg: true
  }, _react.default.createElement(_io.IoMdGitNetwork, null)), _react.default.createElement(_atoms.Span, {
    sm: true,
    thin: true
  }, "Blank Canvas"), _react.default.createElement(_atoms.Span, {
    pointer: true,
    xs: true,
    thin: true,
    mt: 15
  }, "Create Space"))), _react.default.createElement(_reactContextTabs.TabPanel, {
    tabId: 'threads'
  }, threads && Array.isArray(threads) && threads.length > 0 ? threads.map(request => _react.default.createElement(RequestPreview, request)) : _react.default.createElement(_atoms.Flex, {
    center: true,
    column: true,
    p: 15
  }, _react.default.createElement(_atoms.Span, {
    color: "blue",
    lg: true
  }, _react.default.createElement(_io.IoMdGlobe, null)), _react.default.createElement(_atoms.Span, {
    sm: true,
    thin: true
  }, "No active requests... Refreshing!"), _react.default.createElement(_atoms.Span, {
    pointer: true,
    xs: true,
    thin: true,
    mt: 15
  }, "Scan Network"))))), _react.default.createElement(_atoms.Flex, {
    card: true,
    gradient: "gray",
    evenly: true,
    my: 10
  }, _react.default.createElement(_atoms.Button, {
    tag: true,
    xs: true,
    white: true,
    onClick: requestConfirmAll
  }, "Approve All"), _react.default.createElement(_atoms.Button, {
    xs: true,
    white: true,
    onClick: requestRejectAll
  }, "Reject All"))));
};

var SpacePreview = (_ref3) => {
  var {
    name,
    styled,
    data,
    instance
  } = _ref3,
      props = _objectWithoutProperties(_ref3, ["name", "styled", "data", "instance"]);

  return _react.default.createElement(_atoms.Flex, {
    alignCenter: true,
    between: true,
    mb: 10
  }, console.log(props, 'space props'), _react.default.createElement(_atoms.Heading, {
    sm: true,
    thin: true,
    slim: true
  }, name), _react.default.createElement(_components.Panel, {
    content: _react.default.createElement(SpaceStoragePreview, {
      data: data
    })
  }, _react.default.createElement(_atoms.Button, {
    xs: true,
    white: true
  }, "Space Storage")));
};

var SpaceStoragePreview = (_ref4) => {
  var {
    data,
    styled
  } = _ref4,
      props = _objectWithoutProperties(_ref4, ["data", "styled"]);

  return _react.default.createElement(_atoms.Box, null, console.log(props, 'space storage props'), _react.default.createElement(_atoms.Heading, null, "Storage Space"), console.log(data), data && Array.isArray(Object.keys(data)) && Object.keys(data).length > 0 ? _react.default.createElement(_components.Branch, {
    data: data
  }) : _react.default.createElement(_atoms.Flex, {
    center: true,
    column: true,
    p: 15
  }, _react.default.createElement(_atoms.Span, {
    color: "blue",
    lg: true
  }, _react.default.createElement(_io.IoMdGitNetwork, null)), _react.default.createElement(_atoms.Span, {
    sm: true,
    thin: true
  }, "Blank Canvas"), _react.default.createElement(_atoms.Span, {
    pointer: true,
    xs: true,
    thin: true,
    mt: 15
  }, "Create Space")));
};

var RequestPreview = (_ref5) => {
  var {
    index,
    box,
    type,
    payload,
    requestConfirm,
    requestReject
  } = _ref5;
  var {
    access,
    space,
    from,
    keys,
    append
  } = payload;
  return _react.default.createElement(_atoms.Flex, {
    column: true,
    wordBreak: true,
    borderBottom: "2px solid",
    borderColor: "gray",
    my: 10,
    py: '10px'
  }, _react.default.createElement(_atoms.Flex, {
    alignCenter: true,
    between: true
  }, _react.default.createElement(_atoms.Heading, {
    sm: true,
    thin: true,
    slim: true
  }, _react.default.createElement("strong", null, "created:"), " ", from || 'self'), _react.default.createElement(_atoms.Span, {
    xs: true
  }, "4 Seconds Ago")), _react.default.createElement(_atoms.Flex, {
    my: '8px'
  }, space && _react.default.createElement(_atoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_md.MdStoreMallDirectory, {
    fontSize: ".9em"
  }), _react.default.createElement(_atoms.Heading, {
    xs: true,
    thin: true,
    slim: true,
    ml: "5px",
    mr: 10
  }, " ", _react.default.createElement("strong", null, "space:"), " ", space)), type && _react.default.createElement(_atoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_md.MdUpdate, {
    fontSize: ".9em"
  }), _react.default.createElement(_atoms.Heading, {
    xs: true,
    thin: true,
    slim: true,
    ml: '5px'
  }, _react.default.createElement("strong", null, "type:"), " ", type))), _react.default.createElement(_atoms.Flex, {
    alignCenter: true,
    between: true,
    my: '5px',
    mt: 15
  }, _react.default.createElement(_atoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_atoms.Span, {
    pointer: true,
    heavy: true,
    tag: true,
    green: true,
    xs: true,
    onClick: () => requestConfirm(index)
  }, _react.default.createElement(_atoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_fi.FiCheckCircle, {
    fontSize: "1.5em"
  }), _react.default.createElement(_atoms.Span, {
    xs: true,
    ml: 10
  }, "Confirm"))), _react.default.createElement(_atoms.Span, {
    pointer: true,
    heavy: true,
    tag: true,
    red: true,
    xs: true,
    ml: 10,
    onClick: () => requestReject(index)
  }, _react.default.createElement(_atoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_md.MdNotInterested, {
    fontSize: "1.5em"
  }), _react.default.createElement(_atoms.Span, {
    xs: true,
    ml: 10
  }, "Reject")))), _react.default.createElement(_components.Modal, {
    content: _react.default.createElement(RequestDetails, {
      type: type,
      payload: payload,
      box: box
    })
  }, _react.default.createElement(_atoms.Button, {
    xs: true,
    white: true
  }, _react.default.createElement(_atoms.Span, {
    xs: true
  }, "Details")))));
};

var RequestDetails = (_ref6) => {
  var {
    type,
    payload,
    box,
    styled
  } = _ref6,
      props = _objectWithoutProperties(_ref6, ["type", "payload", "box", "styled"]);

  return _react.default.createElement(_atoms.Box, null, RequestTypes(type, payload, box));
};

var RequestTypes = (type, payload, box) => ({
  set: _react.default.createElement(RequestSetType, _extends({}, payload, box)),
  credential: _react.default.createElement(CredentialPopover, payload)
})[type || 'default'];

var RequestSetType = (_ref7) => {
  var {
    keys,
    inputs,
    options,
    requestConfirm,
    index,
    space,
    spaces,
    openSpace
  } = _ref7;
  var [loading, setLoading] = (0, _react.useState)();
  var isSpaceOpen = spaces && spaces[space];
  return _react.default.createElement(_atoms.Box, null, _react.default.createElement(_atoms.Box, {
    p: 20
  }, _react.default.createElement(_atoms.Heading, {
    md: true,
    normal: true,
    level: 4
  }, "Access: ", _react.default.createElement(_atoms.Span, {
    thin: true
  }, "Public")), space ? _react.default.createElement(_atoms.Flex, {
    alignCenter: true
  }, _react.default.createElement(_atoms.Heading, {
    md: true,
    normal: true,
    slim: true,
    level: 4
  }, "Space: ", _react.default.createElement(_atoms.Span, {
    thin: true
  }, space)), isSpaceOpen ? _react.default.createElement(_atoms.Span, {
    color: "green",
    ml: 15
  }, "Open") : loading ? _react.default.createElement(_atoms.Span, {
    xs: true,
    pointer: true,
    color: "red",
    ml: 15
  }, "Loading Space") : _react.default.createElement(_atoms.Span, {
    xs: true,
    pointer: true,
    color: "red",
    ml: 15,
    onClick: () => {
      openSpace(space);
      setLoading(true);
    }
  }, "(Requires Open Confirmation - Click to Open)")) : null, _react.default.createElement(_atoms.Flex, {
    column: true,
    wordBreak: true,
    card: true,
    gradient: "white",
    p: 30,
    mt: 20
  }, keys && Array.isArray(keys) && keys.map((v, i) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_atoms.Heading, {
    sm: true,
    heavy: true,
    mt: 15
  }, v, _react.default.createElement("br", null), _react.default.createElement(_atoms.Span, {
    thin: true
  }, typeof inputs[i] === 'string' ? inputs[i] : _react.default.createElement(InputValue, inputs[i]))))))), _react.default.createElement(_atoms.Flex, {
    gradient: "gray",
    p: 20,
    evenly: true,
    mt: [25]
  }, _react.default.createElement(_atoms.Button, {
    sm: true,
    white: true,
    palette: "green",
    onClick: () => requestConfirm(index)
  }, "Confirm Request"), _react.default.createElement(_atoms.Button, {
    sm: true,
    palette: "red",
    onClick: () => requestConfirm(index)
  }, "Reject Request")));
};

var InputValue = (_ref8) => {
  var {
    claims
  } = _ref8;
  return _react.default.createElement(_atoms.Flex, {
    column: true
  }, Object.keys(claims).map(clm => typeof claims[clm] === 'object' ? _react.default.createElement(InputValue, claims[clm]) : _react.default.createElement(_atoms.Span, {
    xs: true,
    normal: true
  }, clm, ": ", claims[clm])));
};

var CredentialPopover = (_ref9) => {
  var {
    credential
  } = _ref9,
      props = _objectWithoutProperties(_ref9, ["credential"]);

  var [proof, setProof] = (0, _react.useState)(undefined);
  (0, _meshidResolver.verify)(credential).then(credential => setProof(credential));
  return _react.default.createElement(_atoms.Flex, {
    column: true
  }, _react.default.createElement(_atoms.Heading, null, "Credential"), proof && _react.default.createElement(CredentialObject, proof));
};

var CredentialObject = (_ref10) => {
  var {
    doc,
    issuer,
    jwt,
    payload,
    signer
  } = _ref10;
  return _react.default.createElement(_atoms.Flex, {
    column: true
  }, _react.default.createElement(_atoms.Heading, {
    sm: true,
    thin: true
  }, _react.default.createElement("strong", null, "Issuer:"), " ", issuer), _react.default.createElement(_atoms.Heading, {
    sm: true,
    thin: true
  }, _react.default.createElement("strong", null, "Subject:"), " ", payload.sub), _react.default.createElement(_atoms.Heading, {
    sm: true,
    thin: true
  }, _react.default.createElement("strong", null, "Issued:"), " ", payload.iat), _react.default.createElement(_atoms.Box, {
    card: true,
    p: 0,
    my: 20
  }, _react.default.createElement(_atoms.Box, {
    gradient: "gray",
    p: 20
  }, _react.default.createElement(_atoms.Heading, {
    xs: true,
    normal: true
  }, "Claim(s)")), _react.default.createElement(_atoms.Box, {
    p: 20
  }, _react.default.createElement(CredentialClaim, {
    claims: (0, _idx.default)(payload, _ => _.claim)
  }))), _react.default.createElement(_atoms.Heading, {
    xs: true,
    thin: true
  }, "Signer Algorithm: ", signer.type), _react.default.createElement(_atoms.Flex, {
    between: true,
    mt: 20
  }, _react.default.createElement(_atoms.Button, {
    xs: true,
    palette: "green"
  }, "Share Credential"), _react.default.createElement(_atoms.Button, {
    xs: true
  }, "Backup Credential"), _react.default.createElement(_atoms.Button, {
    xs: true,
    palette: "orange"
  }, "Publish Credential")));
};

var CredentialClaim = (_ref11) => {
  var {
    claims
  } = _ref11;
  return _react.default.createElement(_atoms.Flex, {
    column: true
  }, Object.keys(claims).map(clm => typeof claims[clm] === 'object' ? _react.default.createElement(CredentialClaim, claims[clm]) : _react.default.createElement(_atoms.Span, {
    xs: true,
    normal: true
  }, clm, ": ", claims[clm])));
};