const { ethers, upgrades } = require("hardhat");

async function main() {
  const FirstV3 = await ethers.getContractFactory("FirstV3");
  const proxyAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // Replace with the proxy contract's address
  const firstV3 = await upgrades.upgradeProxy(proxyAddress, FirstV3);
  await firstV3.deployed();

  console.log("FirstV3 contract upgraded. Proxy address:", firstV3.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
