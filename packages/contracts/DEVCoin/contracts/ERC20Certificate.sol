pragma solidity ^0.5.0;

import "./token/ERC20/ERC20.sol";
import "./cryptography/ECDSA.sol";
import "./math/SafeMath.sol";
import "./access/ownership/owned.sol";

/**
 * @dev Extension of `ERC20` that allows an owner to create certificates
 * to allow users to redeem/mint their own tokens according to certificate parameters
 */
contract ERC20Certificate is ERC20, owned  {

    using ECDSA for bytes32;
    using SafeMath for uint256;

    /// ###########################
    /// ##    Certificates       ##
    /// ###########################
    mapping (bytes32 => certificateType) public certificateTypes;

    struct certificateType {
        uint256 amount;
        string metadata;
        mapping (address => bool) delegates;
        mapping (address => bool) claimed;
    }

    /**
     * @dev Verifies that the msg.sender is a valid recipeint for the certificate
     *
     * Requirements:
     *
     * - the `signature` must match the hash data
     * - the signer of the signature must be a delegate for a `_certificateID`
     * - the certificate can not be already claimed by the msg.sender
     */
    modifier allowRedeem(bytes32 _certificateID, bytes memory _signature) {
        bytes32 hash = keccak256(abi.encodePacked(_certificateID, address(this), msg.sender));
        require(_isDelegateSigned(hash, _signature, _certificateID), "Not Delegate Signed");
        require(!certificateTypes[_certificateID].claimed[msg.sender], "Cert already claimed");
        _;
    }

    /**
     * @dev Creates a certificate type where users can redeem the certificate
     * to receive `_amount` of tokens. Any of the `_delegates` can sign a certificate
     * for a given address.
     *
     * `_metadata` field is meant to be an IPFS hash or URI which will
     * resolve to display unique information about a particular certificate
     *
     * Can only be called by owner of contract
     *
     * Emits a `CertificateTypeCreated` event.
     */
    function createCertificateType(uint256 _amount, address[] memory _delegates, string memory _metadata) public onlyOwner {
        bytes32 certID = _getCertificateID(_amount, _delegates, _metadata);
        certificateTypes[certID].amount = _amount;
        certificateTypes[certID].metadata = _metadata;

        for (uint8 i = 0; i < _delegates.length; i++) {
            certificateTypes[certID].delegates[_delegates[i]] = true;
        }
        emit CertificateTypeCreated(certID, _amount, _delegates);
    }

    /**
     * @dev Allows caller to pass an `_anchorSignature` and a `_certificateID` to
     * mint tokens to their own address. The token amount minted is speficied in the
     * certificate. Can only be called once per caller, per certificate
     *
     * Emits a `CertificateRedeemed` event.
     */
    function redeemCertificate(bytes memory _anchorSignature, bytes32 _certificateID)
        public allowRedeem(_certificateID, _anchorSignature)
        returns (bool)
    {
        certificateTypes[_certificateID].claimed[msg.sender] = true;
        uint256 amount = certificateTypes[_certificateID].amount;
        _mint(msg.sender, amount);
        emit CertificateRedeemed(msg.sender, amount, _certificateID);
        return true;
    }

    // View Functions

    /**
     * @dev Returns the metadata string for a `_certificateID`
     */
    function getCertificateData(bytes32 _certificateID) public view returns (string memory) {
        return certificateTypes[_certificateID].metadata;
    }

    /**
     * @dev Calls internal function to return the ID for a certificate from parameters used to create certificate
     */
    function getCertificateID(uint _amount, address[] memory _delegates, string memory _metadata) public view returns (bytes32) {
        return _getCertificateID(_amount,_delegates, _metadata);
    }

    /**
     * @dev Calls internal function to return boolean of whether a message and signature matches a certificate
     */
    function isDelegateSigned(bytes32 _messageHash, bytes memory _signature, bytes32 _certificateID) public view returns (bool) {
        return _isDelegateSigned(_messageHash, _signature, _certificateID);
    }

    /**
     * @dev Returns boolean of whether a `_delegate` address is a valid delagate of a certificate
     */
    function isCertificateDelegate(bytes32 _certificateID, address _delegate) public view returns (bool) {
        return certificateTypes[_certificateID].delegates[_delegate];
    }

    /**
     * @dev Returns boolean of whether a certificate has been claimed by a `_recipient` address
     */
    function isCertificateClaimed(bytes32 _certificateID, address _recipient) public view returns (bool) {
        return certificateTypes[_certificateID].claimed[_recipient];
    }

    // Internal Functions

    /** @dev Packs an `_amount`, this contract's address, `_delegates` array, and string `_metadata`
     * and performs a keccak256 on the packed bytes and returns the bytes32 result
     */
    function _getCertificateID(uint256 _amount, address[] memory _delegates, string memory _metadata) internal view returns (bytes32) {
        return keccak256(abi.encodePacked(_amount,address(this),_delegates, _metadata));
    }

    /** @dev Checks a `_signature` with a `_messageHash` to verify if the signer is a delegate for a given `_certificateID`
     * and performs a keccak256 on the packed bytes and returns the bytes32 result
     */
    function _isDelegateSigned(bytes32 _messageHash, bytes memory _signature, bytes32 _certificateID) internal view returns (bool) {
        return certificateTypes[_certificateID].delegates[_messageHash.toEthSignedMessageHash().recover(_signature)];
    }

    /**
     * @dev Emitted when a new certificate is created for an `amount` that can have
     * any of the `delegates` for signing certificates
     */
    event CertificateTypeCreated(bytes32 indexed id, uint256 amount, address[] delegates);

    /**
     * @dev Emitted when a `caller` successfully redeems a certificate and receives `value` of tokens
     */
    event CertificateRedeemed(address indexed caller, uint256 value, bytes32 certificateID);

}