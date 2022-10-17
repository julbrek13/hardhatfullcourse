const fs = require("fs-extra");
const ethers = require("ethers");
require("dotenv").config();
async function main() {
  const wallet = new ethers.Wallet(process.env.private_key);
  const encryptedJsonKey = await wallet.encrypt(
    process.env.private_key_password,
    process.env.private_key
  );
  console.log(encryptedJsonKey);
  fs.writeFileSync("./.encryptedKey.json", encryptedJsonKey);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
