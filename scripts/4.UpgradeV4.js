const { ethers, upgrades } = require("hardhat");

async function main() {
  const FirstV4 = await ethers.getContractFactory("FirstV4");
  const proxyAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9"; // Replace with the proxy contract's address
  const firstV4 = await upgrades.upgradeProxy(proxyAddress, FirstV4);
  await firstV4.deployed();

  console.log("FirstV4 contract upgraded. Proxy address:", firstV4.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
