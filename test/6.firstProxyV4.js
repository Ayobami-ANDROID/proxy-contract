import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("first (proxy) V4 with getName", function () {
  let first = Contract
  let firstV2 = Contract
  let firstV3 = Contract
  let firstV4 = Contract
    
  beforeEach(async function () {
    const First = await ethers.getContractFactory("first")
    const FirstV2 = await ethers.getContractFactory("firstV2")
    const FirstV3 =  await ethers.getContractFactory("firstV3")
    const FirstV4 =  await ethers.getContractFactory("firstV4")

    //initialize with 42
    first = await upgrades.deployProxy(First, [42], {initializer: 'store'})
    firstV2 = await upgrades.upgradeProxy(first.address, FirstV2)
    firstV3 = await upgrades.upgradeProxy(first.address, FirstV3)
    firstV4 = await upgrades.upgradeProxy(first.address, FirstV4)
  })

  it("should retrieve value previously stored and increment correctly", async function () {
    expect(await firstV4.retrieve()).to.equal(BigNumber.from('42'))
    await firstV4.increment()
    expect(await firstV4.retrieve()).to.equal(BigNumber.from('43'))

    await firstV2.store(100)
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('100'))
  })

  it("should setName and getName correctly in V4", async function () {
    //name() removed, getName() now

    expect(firstV4.name).to.be.undefined
    expect(await firstV4.getName()).to.equal("Name: ")
    
    const firstname="my First V4"
    await firstV4.setName(firstname)
    expect(await firstV4.getName()).to.equal("Name: "+firstname)
  })

})