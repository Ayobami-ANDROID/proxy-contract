import { expect } from "chai"
import { ethers, upgrades } from "hardhat"
import { Contract, BigNumber } from "ethers"

describe("first (proxy)", function () {
  let first = Contract 

  beforeEach(async function () {
    const First = await ethers.getContractFactory("first")
    //initialize with 42
    first = await upgrades.deployProxy(First, [42], {initializer: 'store'})
    })

  it("should retrieve value previously stored", async function () {    
    // console.log(box.address," box(proxy)")
    // console.log(await upgrades.erc1967.getImplementationAddress(box.address)," getImplementationAddress")
    // console.log(await upgrades.erc1967.getAdminAddress(box.address), " getAdminAddress")   

    expect(await first.retrieve()).to.equal(BigNumber.from('42'))

    await first.store(100)
    expect(await first.retrieve()).to.equal(BigNumber.from('100'))
  })
  
})