pragma solidity ^0.5.0;

import "./ERC20Certificate.sol";
import "./cryptography/ECDSA.sol";
import "./math/SafeMath.sol";

/**
 * @dev Implementation of `ERC20Certificate`
 */
contract QuestDevCoin is ERC20Certificate  {

    using ECDSA for bytes32;
    using SafeMath for uint256;

    string public name;
    uint8 public decimals;
    string public symbol;
    
    constructor
    (
        string  memory _tokenName,
        string memory _tokenSymbol,
        uint8   _decimalUnits,
        uint256 _capLimit
    )
     public  {
         name = _tokenName;
         symbol = _tokenSymbol;
         decimals = _decimalUnits;
        require(_capLimit > 0, "ERC20Capped: cap is 0");
        _cap = _capLimit;
    }


    // CAPPED Functionality Stolen from ERC20Capped (openzeppelin)
    // capped contract was not created to be further extended

    uint256 private _cap;

    /**
     * @dev Returns the cap on the token's total supply.
     */
    function cap() public view returns (uint256) {
        return _cap;
    }

    /**
     * @dev See `ERC20Mintable.mint`.
     *
     * Requirements:
     *
     * - `value` must not cause the total supply to go over the cap.
     */
    function _mint(address account, uint256 value) internal {
        require(totalSupply().add(value) <= _cap, "ERC20Capped: cap exceeded");
        super._mint(account, value);
    }


}