// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
  const simplestorage = await SimpleStorage.deploy();
  console.log("deploying contract...");
  await simplestorage.deployed();
  const txt = simplestorage.address;
  console.log(`contract deploy to adress: ${txt}`);

  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
}
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });

