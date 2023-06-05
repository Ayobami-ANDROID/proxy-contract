import { expect } from "chai";
import { ethers } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("first", function () {
  let First = Contract;

  beforeEach(async function () {
    const first = await ethers.getContractFactory("first")
    First = await first.deploy()
    await First.deployed()
  })

  it("should retrieve value previously stored", async function () {
    await First.store(42)
    expect(await First.retrieve()).to.equal(BigNumber.from('42'))

    await First.store(100)
    expect(await First.retrieve()).to.equal(BigNumber.from('100'))
  })
})
