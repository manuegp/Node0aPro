const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      const tarea = this._listado[key];
      listado.push(tarea);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }

  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }

  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    this.listadoArr.forEach((tarea, index) => {
      console.log(
        `${++index}.`.green +
          ` ${tarea.desc} :: ${
            tarea.completadoEn ? "Completada".green : "Pendiente".red
          }`
      );
    });
  }

  listarPendientesCompletadas(completadas = true) {
    if (completadas) {
      this.listadoArr.forEach((tarea, index) => {
        if (tarea.completadoEn) {
          console.log(
            `${++index}.`.green +
              ` ${tarea.desc} :: ${
                tarea.completadoEn ? "Completada ".green +`${tarea.completadoEn} ` : "Pendiente".red
              }`
          );
        }
      });
    } else {
      this.listadoArr.forEach((tarea, index) => {
        if (!tarea.completadoEn) {
          console.log(
            `${++index}.`.green +
              ` ${tarea.desc} :: ${
                tarea.completadoEn ? "Completada".green : "Pendiente".red
              }`
          );
        }
      });
    }
  }

  toggleCompletadas(ids =[]){
    ids.forEach(id =>{
      const tarea = this._listado[id];
      if( !tarea.completadoEn ){
        tarea.completadoEn = new Date().toISOString();
      }
    })

    this.listadoArr.forEach(tarea => {
      if(!ids.includes(tarea.id)){
        this._listado[tarea.id].completadoEn = null;
        
      }
    })
  }
}

module.exports = Tareas;
