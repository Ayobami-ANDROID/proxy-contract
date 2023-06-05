// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./first2.sol";
 
contract firstV4 is firstV2{
    string private name;
 
    event NameChanged(string name);
    function setName(string memory _name) public {
        name = _name;
        emit NameChanged(name);
    }

   function getName() public view returns(string memory){
    //   return string(abi.encodePacked("Name: ",name));
      // return string(bytes.concat("Name: ", bytes(name)));

      // Solidity 0.8.12   String concatenation
      return string.concat("Name: ", name);
    }
}