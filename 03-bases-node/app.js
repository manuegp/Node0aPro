
const {crearArchivo} = require('./helpers/multiplicar')
console.clear()

const base = 23;

crearArchivo(base).then((nombreArchivo) => {
  console.log(nombreArchivo,'creado wey')
}).catch((err) => {
  console.log(err)
});