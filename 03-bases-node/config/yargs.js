const argv = require("yargs")
  .option("b", {
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Numero a multiplicar"
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un numero";
    }
    return true;
  })
  .option("l", {
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Mostrar lista"
  }).option("h", {
    alias: "hasta",
    type: "number",
    default: 10,
    describe: "Cantidad de numeros"
  })
  .argv;

  module.exports = {
    yargs: argv,
  };