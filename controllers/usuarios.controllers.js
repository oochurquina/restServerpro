
const {request,response} = require('express');
const usuariosGet = (req=request, res=response) =>{
    const {q,nombre='no nombre',apiKey} = req.query;
    res.status(200).json({
        msg: 'get api',
        q,
        nombre,
        apiKey
    })
}

const usuariosPost = (req=request, res=response)=> {
    const {nombre,edad} = req.body;
    res.status(200).json({
      msg: 'post api',
      nombre,
      edad
    });
}

const usuariosPut = (req= request, res= response) => {
    const {id }= req.params;

    res.status(400).json({
      msg: 'put api',
      id
  })
}

const usuariosPatch = (req=request, res=response) => {
    res.status(200).json({
      msg: 'Patch api'
  })
}

const usuariosDelete = (req= request, res= response) => {
    res.status(400).json({
        msg: 'Delete api'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}