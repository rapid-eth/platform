"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _idx = _interopRequireDefault(require("idx"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _designSystem = require("@horizin/design-system");

var _dist = require("@kames/3box-hooks/dist");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ContentTypeList = (_ref) => {
  var {
    box,
    styled
  } = _ref,
      props = _objectWithoutProperties(_ref, ["box", "styled"]);

  var [index, setIndex] = (0, _react.useState)();
  var [isDispatched, setDispatched] = (0, _react.useState)();
  /**
   * @function importHandler
   * @param {String} keyChild 
   */

  var importHandler = keyChild => {
    box.set({
      space: props.space,
      keys: ['adventures'],
      inputs: [adventures],
      access: 'public'
    });
  };
  /**
   * @function deleteHandler
   * @param {String} keyChild 
   */


  var deleteHandler = keyChild => {
    box.delete({
      space: props.space,
      key: 'index',
      keyChild: keyChild,
      access: 'public'
    });
  };

  (0, _react.useEffect)(() => {
    if (!index && !isDispatched && (0, _idx.default)(box, _ => _.spaces[props.space].instance)) {
      box.get({
        space: props.space,
        key: 'index',
        access: 'public'
      });
      setDispatched(true);
    }
  }, [box.spaces]);
  (0, _react.useEffect)(() => {
    if (!index && (0, _idx.default)(box, _ => _.spaces[props.space].public.index)) {
      var _index = (0, _idx.default)(box, _ => _.spaces[props.space].public.index); // Object.values(index).forEach( ii => {
      //   box.get({
      //     space: props.space,
      //     key: ii.id,
      //     access: 'public'
      //   })
      // })


      setIndex(_index.payload);
    }
  }, [box.spaces]);
  return !index ? _react.default.createElement(_designSystem.Span, null, "No Index") : _react.default.createElement(_designSystem.Flex, {
    column: true
  }, index && Array.isArray(Object.keys(index)) && Object.keys(index).length > 0 && Object.values(index).map(item => _react.default.createElement(IndexItem, _extends({
    importHandler: importHandler,
    deleteHandler: deleteHandler
  }, item))));
};

var MarkdownExample = "\n\n# Beginner Quest\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id tempor dolor. Vestibulum tristique eget felis sed molestie. Pellentesque accumsan erat eget dignissim faucibus. Duis ac sapien nibh.\n\n#### Getting Started Is Easy\nIn ac dapibus dolor. Maecenas eu tortor fermentum felis malesuada vehicula. Phasellus vel aliquet felis. Aliquam erat volutpat. Nulla ullamcorper fringilla tortor nec gravida. Suspendisse et rutrum tellus. Curabitur faucibus ultrices urna, eu finibus nisl molestie et.\n";
ContentTypeList.defaultProps = {
  indexKey: 'index'
};
ContentTypeList.propTypes = {
  append: _propTypes.default.string,
  space: _propTypes.default.string,
  access: _propTypes.default.string,
  privateTeam: _propTypes.default.bool
};

var IndexItem = (_ref2) => {
  var {
    importHandler,
    deleteHandler,
    styled
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["importHandler", "deleteHandler", "styled"]);

  return _react.default.createElement(_designSystem.Flex, {
    card: true,
    between: true,
    m: 3,
    width: "100%"
  }, _react.default.createElement(_designSystem.Box, null, _react.default.createElement(_designSystem.Heading, null, "id: ", props.id), _react.default.createElement(_designSystem.Heading, {
    sm: true,
    thin: true
  }, "type: ", props.type)), _react.default.createElement(_designSystem.Flex, null, _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "white",
    m: 2
  }, "Fields"), _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "blue",
    m: 2,
    onClick: () => importHandler(props.id)
  }, "Import"), _react.default.createElement(_designSystem.Button, {
    xs: true,
    variant: "red",
    m: 2,
    onClick: () => deleteHandler(props.id)
  }, "Delete")));
};

var _default = props => _react.default.createElement(_dist.BoxWrapper, null, _react.default.createElement(ContentTypeList, props));

exports.default = _default;
var adventures = {
  compose: {
    alias: 'compose',
    title: 'Smart Contract Composability',
    tagline: 'Connect Smart Contract Features',
    summary: 'Suspendisse justo nunc, fermentum id finibus non, luctus vel urna. Proin ac tortor leo. Fusce quis metus sit amet libero tempor malesuada non ut turpis. Phasellus cursus nec tortor rhoncus commodo. Vivamus varius tellus at diam ultricies consectetur. Nam blandit dapibus aliquet.',
    content: MarkdownExample,
    image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    tag: 'beginner',
    category: 'general',
    reward: {
      token: '0x',
      title: 'Compose Master',
      type: 'OpenEmblem',
      summary: 'In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem'
    },
    quests: [{
      title: 'Deploy New Contract',
      summary: 'Connect Smart Contract Features',
      content: MarkdownExample,
      image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'
    }]
  },
  scaricity: {
    alias: 'scaricity',
    title: 'Digital Scaricity',
    tagline: 'A Global Computer to Track Digital Assets',
    summary: 'Before Bitcoin, the concept of Digital Scarcity did not exist, and humanity was reliant on primitive and unreliable means of scarcity to store value. Rare metals such as gold, along with centralized fiat currencies managed by world governments, were the defacto stores of value. Unfortunately, neither of these things were provably scare - despite being rare, we do not know how much gold there is in the universe, or how many dollars our government will print tomorrow!',
    content: MarkdownExample,
    image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    imageCover: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg',
    tag: 'beginner',
    category: 'general',
    reward: {
      token: '0x',
      title: 'Compose Master',
      type: 'OpenEmblem',
      summary: 'In diam ante, pulvinar eu congue in, accumsan sed est. Integer lobortis leo sed lorem'
    },
    quests: [{
      title: 'Deploy First Contract',
      summary: 'Connect Smart Contract Features',
      content: MarkdownExample,
      image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'
    }, {
      title: 'Deploy Second Contract',
      summary: 'Connect Smart Contract Features',
      content: MarkdownExample,
      image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'
    }, {
      title: 'Trigger Contracts',
      summary: 'Connect Smart Contract Features',
      content: MarkdownExample,
      image: 'https://icon-library.net/images/ethereum-icon/ethereum-icon-4.jpg'
    }]
  }
};