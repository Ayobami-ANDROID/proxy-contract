const { ethers, upgrades } = require("hardhat");

async function main() {
  const FirstV2 = await ethers.getContractFactory("FirstV2");
  const proxyAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // Replace with the proxy contract's address
  const firstV2 = await upgrades.upgradeProxy(proxyAddress, FirstV2);
  await firstV2.deployed();

  console.log("FirstV2 contract upgraded. Proxy address:", firstV2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
