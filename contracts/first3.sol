// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./first2.sol";
 
contract firstV3 is firstV2 {
    string public name;
 
    event NameChanged(string name);
    function setName(string memory _name) public {
        name = _name;
        emit NameChanged(name);
    }
}