import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0'
// const proxyAddress = '0x1CD0c84b7C7C1350d203677Bb22037A92Cc7e268'
async function main() {
  console.log(proxyAddress," original First(proxy) address")
  const FirstV4 = await ethers.getContractFactory("firstV4")
  console.log("Preparing upgrade to FirstV4...");
  const firstV4Address = await upgrades.prepareUpgrade(proxyAddress, FirstV4);
  console.log(firstV4Address, " FirstV4 implementation contract address")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})