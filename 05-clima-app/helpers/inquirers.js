const inquirer = require("inquirer");
require("colors");

const menuOpts = [
  {
    type: "list",
    name: "opcion",
    message: "¿Que desea hacer?",
    choices: [
      {
        value: 1,
        name: `${"1".green}. Buscar ciudad`,
      },
      {
        value: 2,
        name: `${"2".green}. Historial`,
      },
      {
        value: 0,
        name: `${"0".green}. Salir`,
      }
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("=============================".green);
  console.log("     Seleccione una opcion   ".green);
  console.log("============================= \n".green);

  const { opcion } = await inquirer.prompt(menuOpts);

  return opcion;
};

const pausa = async () => {
  const confirmar = [
    {
      type: "input",
      name: "confirmar",
      message: `Presione ${"ENTER".green} para continuar`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(confirmar);
};

const leerInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "desc",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Por favor ingrese un valor";
        }
        return true;
      },
    },
  ];
  const desc = await inquirer.prompt(question);
  return desc;
};

const listarLugares = async (lugares = []) => {
  const choices = lugares.map((lugar, id) => {
    return {
      value: lugar.id,
      name: `${++id} ${lugar.nombre}`,
    };
  });

  choices.unshift({
      value: '0',
      name: '0.'.green + 'Cancelar'
  })
  const preguntas = [
    {
      type: "list",
      name: "id",
      message: "Seleccione lugar",
      choices,
    },
  ];
  const { id } = await inquirer.prompt(preguntas);
  return id;
};

const confirmar =  async (message) =>{
    const question =[
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const {ok } = await inquirer.prompt(question);
    return ok;
}


const mostrarlistadoChecklist = async (tareas = []) => {
    const choices = tareas.map((tarea, id) => {
      return {
        value: tarea.id,
        name: `${++id} ${tarea.desc}`,
        checked: (tarea.completadoEn) ? false : true
      };
    });

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccion',
            choices
        }
    ]
  
    const {ids} = await inquirer.prompt(pregunta)
    return ids;
    
  };

module.exports = {
  inquirerMenu,
  pausa,
  leerInput,
  listarLugares,
  confirmar,
  mostrarlistadoChecklist
};
