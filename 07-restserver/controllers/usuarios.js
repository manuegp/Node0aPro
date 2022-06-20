const { response } = require('express');

const usuariosGet = (req, res) =>{

    const {q, nombre, apikey} = req.query;
    
    res.json({
        msg: 'get API-controlador',
        q,
        nombre,
        apikey
    })
}


const usuariosPost = (req, res = response) =>{
    console.log(req.body)
    const body = req.body;


    res.json({
        msg: 'post API-usuariosPost',
        body
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