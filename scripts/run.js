const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const AzeroNFT = await hre.ethers.getContractFactory("AzeroHeroes");
  const azero = await AzeroNFT.deploy();

  await azero.deployed();

  console.log("AzeroHeroes NFT deployed to:", azero.address);

  let txn = await azero.mintNFT();
  await txn.wait();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });