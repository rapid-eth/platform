pragma solidity ^0.5.0;

import "./token/ERC20/ERC20Mintable.sol";
import "./math/SafeMath.sol";

/**
 * @dev Implementation of `ERC20Mintables`
 */
contract MintableToken is ERC20Mintable  {

    using SafeMath for uint256;

    string public name;
    uint8 public decimals;
    string public symbol;
    string public meta;

    constructor
    (
        string  memory _tokenName,
        string memory _tokenSymbol,
        uint8   _decimalUnits,
        string memory _meta
    )
     public  {
         name = _tokenName;
         symbol = _tokenSymbol;
         decimals = _decimalUnits;
         meta = _meta;
    }

    function updateMeta(string memory _meta) public onlyMinter {
        meta = _meta;
    }
}