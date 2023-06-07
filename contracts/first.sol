pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract First is Initializable, ERC20Upgradeable, UUPSUpgradeable, OwnableUpgradeable {
    // Change to private visibility
    uint256 private _value1;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Initializes the contract
    function initialize() public initializer {
        __Context_init_unchained();
        __ERC20_init_unchained("MyToken", "MTK");
        __Ownable_init_unchained();
    }

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        _value1 = newValue; // Update the state variable
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return _value1; // Retrieve the updated state variable
    }

    // Overrides the _beforeTokenTransfer function from ERC20Upgradeable
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal override(ERC20Upgradeable) {
        super._beforeTokenTransfer(from, to, amount);

        // Additional custom logic for token transfer
    }

    // Overrides the upgradeTo function from UUPSUpgradeable
    function _authorizeUpgrade(address newImplementation)
        internal
        override
        onlyOwner
    {}

    // Additional custom functions or overrides can be added as needed
}
