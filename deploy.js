//ethers permit interactue whit abi in smartcontracts.
const ethers = require("ethers");
const fs = require("fs-extra");
//async function because the function await deploy prior to ejecuting.
//in javascript using promises because predominality is async in this case.
async function main() {
  //create variables whit ganache rpc url whit provider, and private kay for the wallet.
  const provider = new ethers.providers.JsonRpcBatchProvider(
    "HTTP://127.0.0.1:7545"
  );
  const wallet = new ethers.wallet(
    "7461964fc191d4a504582d31d02be54ba6f3363885fdcba99acd95728769f107"
  );
  //fs
  //ruta de archivo donde queremos leer la abi,utf8 es la codificacion del archivo
  const abi = fs.readFileSync("./Simplstorage_sol_SimpleStorage.abi", "utf8");
  //hacemos lo mismo con el binario
  const binary = fs.readFileSync(
    "./Simplstorage_sol_SimpleStorage.bin",
    "utf8"
  );
  console.log(txt);
  let txt = "entendiendo el deploy";
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
