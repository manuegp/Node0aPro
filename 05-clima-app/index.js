

const { leerInput, inquirerMenu, pausa, listarLugares } = require("./helpers/inquirers");
const Busquedas = require("./models/busquedas");


const main = async () => {
    const busquedas = new Busquedas();
    let opt;

  do {
    opt = await inquirerMenu();
    switch(opt){
        case 1:
            //Mostrar mensaje
            const lugar =  await leerInput('Ciudad: ');
            

            //Buscar los lugares
            const lugares = await busquedas.ciudad(lugar)
            const id = await listarLugares(lugares);
            const lugarSel = lugares.find( l => l.id == id );
            
            //Seleccionar el lugar
            //Clima
            //Mostrar resultados
            console.log('\nInformacion de la ciudad\n'.green)
            console.log('Ciudad: ',lugarSel.nombre);
            console.log('Lat: ', lugarSel.lat);
            console.log('Lng: ', lugarSel.lng);
            console.log('Temperatura: ',);
            console.log('Minima: ',);
            console.log('Maxima: ',);
        break;
    }

    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();