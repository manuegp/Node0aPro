const { response } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


const usuariosGet = (req, res) =>{

    const {q, nombre, apikey} = req.query;
    
    res.json({
        msg: 'get API-controlador',
        q,
        nombre,
        apikey
    })
}


const usuariosPost = async (req, res = response) =>{
   
    const {nombre, correo, password, rol} = req.body;
    const usuario = new Usuario({nombre, correo, password, rol});

    //Verificar si el correo existe

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync(); 
    usuario.password = bcryptjs.hashSync(password, salt)


    //Guardar en DB
    await usuario.save();

    res.json({
        msg: 'post API-usuariosPost',
        usuario
    })
}

const usuariosPut = (req, res) =>{

    const id = req.params.id;

    res.json({
        msg: 'put API-put',
        id
    })
}

const usuariosPatch = (req, res) =>{
    res.json({
        msg: 'patch API-patch'
    })
}

const usuariosDelete = (req, res) =>{
    res.json({
        msg: 'get API-delete'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete
}