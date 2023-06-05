import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("first (proxy) V3 with name", function () {
  let first = Contract
  let firstV2 =Contract
  let firstV3 = Contract

  beforeEach(async function () {
    const First = await ethers.getContractFactory("first")
    const FirstV2 = await ethers.getContractFactory("firstV2")
    const FirstV3 =  await ethers.getContractFactory("firstV3")

    //initialize with 42
    first = await upgrades.deployProxy(First, [42], {initializer: 'store'})
    firstV2 = await upgrades.upgradeProxy(first.address, FirstV2)
    firstV3 = await upgrades.upgradeProxy(first.address, FirstV3)
  })

  it("should retrieve value previously stored and increment correctly", async function () {
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('42'))
    await firstV3.increment()
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('43'))

    await firstV2.store(100)
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('100'))
  })

  it("should set name correctly in V3", async function () {
    expect(await firstV3.name()).to.equal("")

    const firstname="my firstname V3"
    await firstV3.setName(firstname)
    expect(await V3.name()).to.equal(firstname)
  })

})
