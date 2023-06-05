import { ethers } from "hardhat"
import { upgrades } from "hardhat"

async function main() {

  const     First = await ethers.getContractFactory("first")
  console.log("Deploying first...")
  const first = await upgrades.deployProxy(First,[42], { initializer: 'store' })

  console.log(first.address," first(proxy) address")
  console.log(await upgrades.erc1967.getImplementationAddress(first.address)," getImplementationAddress")
  console.log(await upgrades.erc1967.getAdminAddress(first.address)," getAdminAddress")    
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
