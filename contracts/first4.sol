// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./first2.sol";
 
contract FirstV4 is FirstV2 {
    // Override the name function from ERC20Upgradeable
    function name() public pure override returns (string memory) {
        return "FirstV4";
    }

    // Additional custom functions or overrides can be added as needed
}