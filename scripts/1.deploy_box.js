const { ethers } = require("hardhat");

async function main() {
  const First = await ethers.getContractFactory("First");
  const first = await upgrades.deployProxy(First, []);
  await first.deployed();

  console.log("First contract deployed to:", first.address);

  // Store the proxy contract's address for future use
  console.log("Proxy address:", first.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
