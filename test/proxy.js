
const { ethers } = require ("hardhat");
const { expect } = require ("chai");
const { upgrades } = require ("hardhat");

describe("Upgradeable Contract", function () {
  let first;

  beforeEach(async function () {
    const First = await ethers.getContractFactory("First");
    first = await upgrades.deployProxy(First, []);
    await first.deployed();
  });

  it("should have the correct initial implementation", async function () {
    expect(await first.retrieve()).to.equal(0);
  });

  it("should upgrade to the second version", async function () {
    const FirstV2 = await ethers.getContractFactory("FirstV2");
    const upgradedContract = await upgrades.upgradeProxy(first.address, FirstV2);
    await upgradedContract.deployed();

    expect(await upgradedContract.retrieve()).to.equal(0);

    await upgradedContract.increment();
    expect(await upgradedContract.retrieve()).to.equal(1);
  });

  it("should upgrade to the third version", async function () {
    const FirstV3 = await ethers.getContractFactory("FirstV3");
    const upgradedContract = await upgrades.upgradeProxy(first.address, FirstV3);
    await upgradedContract.deployed();

    expect(await upgradedContract.retrieve()).to.equal(0);

    await upgradedContract.increment();
    expect(await upgradedContract.retrieve()).to.equal(1);
    expect(await upgradedContract.name()).to.equal("FirstV3");
  });

  it("should upgrade to the fourth version", async function () {
    const FirstV4 = await ethers.getContractFactory("FirstV4");
    const upgradedContract = await upgrades.upgradeProxy(first.address, FirstV4);
    await upgradedContract.deployed();

    expect(await upgradedContract.retrieve()).to.equal(0);

    await upgradedContract.increment();
    expect(await upgradedContract.retrieve()).to.equal(1);
    expect(await upgradedContract.name()).to.equal("FirstV4");
  });
});
