const { ethers, upgrades } = require("hardhat");

async function main() {
    const First = await ethers.getContractFactory("First");
    const instance = await upgrades.deployProxy(First, { initializer: 'initialize' });
    console.log("Deployed at:", instance.address);

    const FirstV2 = await ethers.getContractFactory("FirstV2");
    const upgraded = await upgrades.upgradeProxy(instance.address, FirstV2);
    console.log("Upgraded to v2 at:", upgraded.address);

    const FirstV3 = await ethers.getContractFactory("FirstV3");
    const upgradedV3 = await upgrades.upgradeProxy(upgraded.address, FirstV3);
    console.log("Upgraded to v3 at:", upgradedV3.address);

    const FirstV4 = await ethers.getContractFactory("FirstV4");
    const upgradedV4 = await upgrades.upgradeProxy(upgradedV3.address, FirstV4);
    console.log("Upgraded to v4 at:", upgradedV4.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });