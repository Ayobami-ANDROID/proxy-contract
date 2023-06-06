// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./first.sol";
 
contract FirstV2 is First {
    // Increments the stored value by 1
    function increment() public {
        store(retrieve() + 1);
    }
}