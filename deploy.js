const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main() {
  // First, compile this!
  // And make sure to have your ganache network up!
  let provider = new ethers.providers.JsonRpcProvider(
    "https://eth-goerli.g.alchemy.com/v2/TqutO7nFbD7m9veR4USCeJ5eezM48G95"
  );
  const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");
  let wallet = new ethers.Wallet.fromEncryptedJsonSync(
    encryptedJson,
    process.env.private_key_password
  );
  wallet = await wallet.connect(provider);
  // const encryptedJson = fs.readFileSync("./.encryptedKey.json", "utf8");
  // let wallet = new ethers.Wallet.fromEncryptedJsonSync(
  //   encryptedJson,
  //   process.env.PRIVATE_KEY_PASSWORD
  // );
  // wallet = wallet.connect(provider);
  const abi = fs.readFileSync("./Simplestorage_sol_SimpleStorage.json", "utf8");
  const binary = fs.readFileSync(
    "./Simplestorage_sol_SimpleStorage.bin",
    "utf8"
  );
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  const deploymentReceipt = await contract.deployTransaction.wait(1);
  console.log(`Contract deployed to ${contract.address}`);

  let currentFavoriteNumber = await contract.retrieve();
  console.log(`Current Favorite Number: ${currentFavoriteNumber}`);
  console.log("Updating favorite number...");
  let transactionResponse = await contract.store(7);
  let transactionReceipt = await transactionResponse.wait(1);
  currentFavoriteNumber = await contract.retrieve();
  console.log(`New Favorite Number: ${currentFavoriteNumber}`);
}
// // const contract = await contractFactory.deploy({ gasPrice: 100000000000 })
// const transactionReceipt = await contract.deployTrangitsaction.wait(1);
// console.log("Here is the transaction:");
// console.log(contract.deployTransaction);
// console.log("Here is the receipt:");
// console.log(deploymentReceipt);
// const nonce = await wallet.getTransactionCount();
// tx = {
//   nonce: nonce,
//   gasPrice: 100000000000,
//   gasLimit: 1000000,
//   to: null,
//   value: 0,

//   chainId: 1337,

//   // Additionally, there is a v,r,and s variable that ethers handles for us.
//   // This is the signature of the transaction.
//   // There is a lot of math going on with those values, but that's how it's gaurenteed that the transaction is signed!
//   // https://ethereum.stackexchange.com/questions/15766/what-does-v-r-s-in-eth-gettransactionbyhash-mean
// };
// There is also a v, r, and s component of the transaction that Ethers will handle for us.
// It's these three components that make up the cryptographic signature.
// We won't go into this, because it's a lot of math.

// console.log("Let's deploy another! Please wait...");
// let resp = await wallet.signTransaction(tx);
// const sentTxResponse = await wallet.sendTransaction(tx);
// console.log(resp);

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// synchronous [solidity]
// asynchronous [javascript]

// cooking
// Synchronous
// 1. Put popcorn in microwave -> Promise
// 2. Wait for popcorn to finish
// 3. Pour drinks for everyone

// Asynchronous
// 1. Put popcorn in the mircrowave
// 2. Pour drinks for everyone
// 3. Wait for popcorn to finish

// Promise
// Pending
// Fulfilled
// Rejected
