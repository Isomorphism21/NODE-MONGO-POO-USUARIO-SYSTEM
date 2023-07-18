const Usuario = require("../modelos/Usuario.js");
const bcryptjs = require("bcryptjs");
const {validationResult} = require('express-validator');



const getUsuario = async (req, res)=>{
    try {
        const datos = await Usuario.find();
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
};

const postUsuario = async (req, res)=>{

    const {nombre, email, password, rol} = req.body
    const UsuarioBody = new Usuario({nombre, email, password, rol})
    try {
        //Verificar si el correo ya existe
        const existeEmail = await Usuario.findOne({email})
        if(existeEmail){
            return res.status(400).json({
                mesg: "Email ya existente"
            })
        }
        //Encriptar nuestra contraseña
        const salt = bcryptjs.genSaltSync();
        UsuarioBody.password = bcryptjs.hashSync(UsuarioBody.password, salt);
        const nuevoEquipo = await UsuarioBody.save();
        res.json(nuevoEquipo);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteUsuario = async(req, res)=>{
    try {
        await Usuario.deleteOne({_id:req.params.id});
        res.status(200).send();
    } catch (error) {
        res.status(500);
        res.send({error:"Categoria no existe"});
    }
}

const patchUsuario = async (req, res)=>{
    try {
        const UsuarioBODY = await Usuario.findOne({_id:req.params.id});
        if (req.body.Nombre){
            UsuarioBODY.Nombre = req.body.Nombre;
        }
        if (req.body.tipo){
            UsuarioBODY.tipo = req.body.tipo;
        }
        await UsuarioBODY.save();
        res.send(UsuarioBODY);        
    } catch (error) {
        console.log(error);
    }
}

const getUsuarioOne = async (req, res) => {
    try {
        const datos = await Usuario.findOne({_id:req.params.id})
        res.json(datos)
    } catch (error) {
        console.log(error);
    }
}

module.exports = {getUsuario, deleteUsuario, postUsuario, patchUsuario, getUsuarioOne}