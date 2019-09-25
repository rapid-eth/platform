pragma solidity ^0.5.0;

import "../cryptography/ECDSA.sol";

contract TrustAnchorRoles {
    using ECDSA for bytes32;

    struct roleOwner {
        mapping (bytes32 => bool) roles;
    }
    mapping (address => roleOwner) roleOwners;
    
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

    modifier hasPermission(string memory _auth, bytes memory sig) {
        bytes32 hash = keccak256(abi.encodePacked(_auth,address(this),msg.sender));
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

    function removeRoleOwner(address _account, string memory _roleName) internal {
        bytes32 roleHash = keccak256(abi.encodePacked(_roleName));
        roleOwners[_account].roles[roleHash] = false;
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