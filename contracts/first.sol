// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract First is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
    uint256 private _value;

    event ValueChanged(uint256 newValue);

    function initialize() public initializer {
        __ERC20_init_unchained("MyToken", "MTK");
        __Ownable_init_unchained();
    }

    function store(uint256 newValue) public onlyOwner {
        _value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}

    // Additional custom functions or overrides can be added as needed
}