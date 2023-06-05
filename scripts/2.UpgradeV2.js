import { ethers } from "hardhat";
import { upgrades } from "hardhat";

const proxyAddress = '0x9fe46736679d2d9a65f0992f2272de9f3c7fa6e0'
// const proxyAddress = '0x1CD0c84b7C7C1350d203677Bb22037A92Cc7e268'

async function main() {
  console.log(proxyAddress," original first(proxy) address")
  const FirstV2 = await ethers.getContractFactory("firstV2")
  console.log("upgrade to firstV2...")
  const firstV2 = await upgrades.upgradeProxy(proxyAddress, FirstV2)
  console.log(firstV2.address," firstV2 address(should be the same)")

  console.log(await upgrades.erc1967.getImplementationAddress(firstV2.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(firstV2.address), " getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})