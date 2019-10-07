"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAddress = exports.GenerateImagefromHash = exports.GenerateImage = void 0;

var _idx = _interopRequireDefault(require("idx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GenerateImage = image => {
  var IPFSFile = hash => "https://ipfs.io/ipfs/".concat(hash);

  var imageipfs = (0, _idx.default)(image, _ => _[0].contentUrl['/']) ? IPFSFile((0, _idx.default)(image, _ => _[0].contentUrl['/'])) : null;
  return imageipfs;
};

exports.GenerateImage = GenerateImage;

var GenerateImagefromHash = image => "https://ipfs.io/ipfs/".concat(image);
/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean} sinof
*/


exports.GenerateImagefromHash = GenerateImagefromHash;

var isAddress = address => {
  if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    return false;
  } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    return true;
  }
  /* TODO: SHAD ADDRESS
    We should also SHA the addresses, but the sha_512 is not the correct one.
    And, I can't find the correct implmementation online. So if it fits, we ships! - @kamescg  */
  // return isChecksumAddress(address);


  return true;
};
/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
*/


exports.isAddress = isAddress;

var isChecksumAddress = function isChecksumAddress(address) {
  // Check each case
  address = address.replace('0x', '');
  var addressHash = utils.keccak256(address.toLowerCase());

  for (var i = 0; i < 40; i++) {
    // the nth letter should be uppercase if the nth digit of casemap is 1
    if (parseInt(addressHash[i], 16) > 7 && address[i].toUpperCase() !== address[i] || parseInt(addressHash[i], 16) <= 7 && address[i].toLowerCase() !== address[i]) {
      return false;
    }
  }

  return true;
};