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
  return (promesa = new Promise((res, rej) => {
    const empleado = empleados.find((e) => e.id === id)?.nombre;
    empleado ? res(empleado) : rej(`Empleado con id ${id} no existe`);
  }));
};

const getSalario = (id) => {
  return (promesa = new Promise((res, rej) => {
    const salario = salarios.find((e) => e.id === id)?.salario;
    salario ? res(salario) : rej(`Empleado con id ${id} no tiene salario`);
  }));
};

const id = 3;

const getInfoUsuario = async (id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
  
    return `El empleado ${empleado} tiene un salario de ${salario}`;
  } catch (error) {
      throw error
  }
};

getInfoUsuario(id)
  .then((msg) => {
    console.log('TODO BIEN')  
    console.log(msg)
    })
  .catch((err) => {
    console.log('TODO MAL')  
    console.log(err)
    });
