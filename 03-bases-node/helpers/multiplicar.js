const fs = require("fs");
const colors = require('colors')
const crearArchivo = async (base, lista = false, hasta ) => {
  try {
    console.log(typeof base);
    if (typeof base == "string") {
      throw "Es un string no se admiten strings";
    }
    

    let salida = "";
    hasta++
    for (let i = 1; i < hasta; i++) {
      
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    if (lista) {
      console.log('============================'.rainbow);
      console.log(`      Tabla del ${base}    `.rainbow);
      console.log("============================".rainbow);
      console.log(salida.rainbow)
    }
    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
