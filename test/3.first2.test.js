import { Contract, BigNumber } from "ethers"

describe("first V2", function () {
  let firstV2 = Contract

  beforeEach(async function () {
    const FirstV2 = await ethers.getContractFactory("firstV2")
    firstV2 = await FirstV2.deploy()
    await firstV2.deployed()
  });

  it("should retrievevalue previously stored", async function () {
    await firstV2.store(42)
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('42'))

    await firstV2.store(100)
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('100'))
  });

  it('should increment value correctly', async function () {
    await firstV2.store(42)
    await firstV2.increment()
    expect(await firstV2.retrieve()).to.equal(BigNumber.from('43'))
  })

})