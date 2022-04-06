const empleados = [
  {
    id: 1,
    nombre: "Fernando",
  },
  {
    id: 2,
    nombre: "Maria",
  },
  {
    id: 3,
    nombre: "Paco",
  },
];

const salarios = [
  {
    id: 1,
    salario: 1000,
  },
  {
    id: 2,
    salario: 1500,
  },
];

const getEmpleado = (id) => {
  const promesa = new Promise((res, rej) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? res(empleado) : rej(`Empleado con id ${id} no existe`);
  });

  return promesa;
};

const getSalario = (id) => {
  const promesa = new Promise((res, rej) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario ? res(salario) : rej(`Empleado con id ${id} no tiene salario`);
  });

  return promesa;
};

const id = 2;

// getEmpleado(id).then((empleado) => console.log(empleado))
//                .catch(err => console.log(err));

// getSalario(id).then((salario) => console.log(salario))
//                .catch(err => console.log(err));

//Promesas HELL!!!!
// getEmpleado(id)
//   .then((empleado) => {
//     getSalario(id)
//             .then((salario) => {
//                 console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let nombre;

getEmpleado(id)
  .then((empleado) => {
      nombre = empleado
    return getSalario(id);
  })
  .then((salario) => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
  .catch(err => console.log(err))
