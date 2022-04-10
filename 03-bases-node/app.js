
const { crearArchivo } = require("./helpers/multiplicar");
const {yargs} = require("./config/yargs")





crearArchivo(yargs.b, yargs.l, yargs.h)
  .then((nombreArchivo) => {
    console.log(nombreArchivo, "creado wey");
  })
  .catch((err) => {
    console.log(err);
  });
