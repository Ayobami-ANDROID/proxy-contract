import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0'
// const proxyAddress = '0x1CD0c84b7C7C1350d203677Bb22037A92Cc7e268'
async function main() {
  console.log(proxyAddress," original first(proxy) address")
  const FirstV3 = await ethers.getContractFactory("firstV3")
  console.log("upgrade to firstV3...")
  const firstV3 = await upgrades.upgradeProxy(proxyAddress, FirstV3)
  console.log(firstV3.address," firstV3 address(should be the same)")

  console.log(await upgrades.erc1967.getImplementationAddress(firstV3.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(firstV3.address), " getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})