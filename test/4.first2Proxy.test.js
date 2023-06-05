import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("first (proxy) V2", function () {
  let first = Contract
  let firstV2 = Contract

  beforeEach(async function () {
    const First = await ethers.getContractFactory("first")
    const FirstV2 = await ethers.getContractFactory("firstV2")

    //initialize with 42
    first = await upgrades.deployProxy(First, [42], {initializer: 'store'})
    // console.log(first.address," first/proxy")
    // console.log(await upgrades.erc1967.getImplementationAddress(first.address)," getImplementationAddress")
    // console.log(await upgrades.erc1967.getAdminAddress(first.address), " getAdminAddress")   

    firstV2 = await upgrades.upgradeProxy(first.address, FirstV2)
    // console.log(firstV2.address," first/proxy after upgrade")
    // console.log(await upgrades.erc1967.getImplementationAddress(firstV2.address)," getImplementationAddress after upgrade")
    // console.log(await upgrades.erc1967.getAdminAddress(firstV2.address)," getAdminAddress after upgrade")   
  })

  it("should retrieve value previously stored and increment correctly", async function () {
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('42'))

    await firstV2.increment()
    //result = 42 + 1 = 43
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('43'))

    await firstV2.store(100)
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('100'))
  })

})