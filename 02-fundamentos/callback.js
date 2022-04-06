
// setTimeout(()=>{
//     console.log('hola mundo')
// },1000);
 
const getUsuarioById = ( id, callback ) =>{
    const usuario = {
        id,
        nombre: 'fernando'
    }

    setTimeout(()=>{
        callback(usuario)
    }, 1500)
}

getUsuarioById(10, (user) => {
    console.log(user)
    console.log(user.nombre.toUpperCase())
}); 