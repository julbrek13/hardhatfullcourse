function main() {
  //async function because the function await deploy prior to ejecuting.
  //in javascript using promises because predominality is async in this case.
  async function main() {
    console.log(txt);
    let txt = "entendiendo el deploy";
  }
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
