const { ethers, upgrades } = require("hardhat");

async function main() {
    const First = await ethers.getContractFactory("First");
    const first = await upgrades.deployProxy(First, []);
    await first.deployed();
  
    console.log("First contract deployed to:", first.address);
  
    // Store the proxy contract's address for future use
    console.log("Proxy address:", first.address);

    const FirstV2 = await ethers.getContractFactory("FirstV2");
    const firstV2 = await upgrades.upgradeProxy(first.address, FirstV2);
    await firstV2.deployed();
  
    console.log("FirstV2 contract upgraded. Proxy address:", firstV2.address);

const FirstV3 = await ethers.getContractFactory("FirstV3");
  const firstV3 = await upgrades.upgradeProxy(first.address, FirstV3);
  await firstV3.deployed();
  console.log("FirstV3 contract upgraded. Proxy address:", firstV3.address);

  const FirstV4 = await ethers.getContractFactory("FirstV4");
  const firstV4 = await upgrades.upgradeProxy(first.address, FirstV4);
  await firstV4.deployed();

  console.log("FirstV4 contract upgraded. Proxy address:", firstV4.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });