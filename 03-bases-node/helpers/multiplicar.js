const fs = require("fs");

const crearArchivo = async (base) => {
  try {
      console.log(typeof base)
      if(typeof base == 'string'){
        throw 'Es un string no se admiten strings'
      }
    console.log("============================");
    console.log(`      Tabla del ${base}    `);
    console.log("============================");

    let salida = "";

    for (let i = 1; i < 11; i++) {
      salida += `${base} x ${i} = ${base * i} \n`;
    }

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
      throw err
  }
};

module.exports = {
  crearArchivo: crearArchivo,
};
