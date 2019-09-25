pragma solidity ^0.5.0;

import "./ownership/owned.sol";
import "../cryptography/ECDSA.sol";

contract TrustAnchorPermissions is owned {
    using ECDSA for bytes32;

    struct roleOwner {
        mapping (bytes32 => bool) roles;
    }
    mapping (address => roleOwner) roleOwners;
    
    mapping (bytes32 => bool) public singleUseCheck;

    modifier hasRole(string memory _roleName) {
        bytes32 roleHash = keccak256(abi.encodePacked(_roleName));
        require(roleOwners[msg.sender].roles[roleHash]);
        _;
    }

    modifier hasARole(string[] memory _roleArray) {
        for (uint i = 0; i < _roleArray.length; i++) {
            bytes32 roleHash = keccak256(abi.encodePacked(_roleArray[i]));
            if (roleOwners[msg.sender].roles[roleHash]) _;
        }
    }

    modifier basicPermission(string memory _auth, bytes memory sig) {
        bytes32 hash = keccak256(abi.encodePacked(_auth,address(this),msg.sender));
        require(isAnchorSigned(hash,sig,_auth));
        _;
    }

    modifier paramPermission(string memory _auth, bytes memory sig, bytes32 h) {
        bytes32 hash = keccak256(abi.encodePacked(_auth,address(this),msg.sender, h));
        require(isAnchorSigned(hash,sig,_auth));
        _;
    }

    modifier singleUsePermission(string memory _auth, bytes memory sig) {
        bytes32 hash = keccak256(abi.encodePacked(_auth,address(this),msg.sender));
        require(!singleUseCheck[hash]);
        singleUseCheck[hash] = true;
        require(isAnchorSigned(hash,sig,_auth));
        _;
    }

    modifier singleUseParamPermission(string memory _auth, bytes memory sig, bytes32 h) {
        bytes32 hash = keccak256(abi.encodePacked(_auth,address(this),msg.sender,h));
        require(!singleUseCheck[hash]);
        singleUseCheck[hash] = true;
        require(isAnchorSigned(hash,sig,_auth));
        _;
    }

    modifier timePermission(string memory _auth, bytes memory sig, uint256 deadline) {
        require(now<deadline);
        bytes32 deadlineHash = keccak256(abi.encodePacked(deadline));
        bytes32 hash = keccak256(abi.encodePacked(_auth,address(this),msg.sender, deadlineHash));
        require(isAnchorSigned(hash,sig,_auth));
        _;
    }

    function isAnchorSigned(bytes32 msgHash, bytes memory signature, string memory _auth) private view returns (bool) {
        return isRoleOwner(msgHash.toEthSignedMessageHash().recover(signature), _auth);
    }

    /// ROLES
    function addRoleOwner(address _account, string memory _roleName) internal {
        bytes32 roleHash = keccak256(abi.encodePacked(_roleName));
        roleOwners[_account].roles[roleHash] = true;
    }

    function renounceRole(string memory _roleName) public {
        bytes32 roleHash = keccak256(abi.encodePacked(_roleName));
        roleOwners[msg.sender].roles[roleHash] = false;    
    }

    function isRoleOwner(address _account, string memory _roleName) public view returns (bool) {
        bytes32 roleHash = keccak256(abi.encodePacked(_roleName));
        return roleOwners[_account].roles[roleHash];
    }

}