const express = require('express');
const {check} = require('express-validator');
const {validateDocuments} = require('../middlewares/validate.documents.js');
const { getUsuario, postUsuario } = require('../controllers/usuario.controllers.js');
const Rol = require('../modelos/Role.js');

const app = express.Router();

app.get("/all", getUsuario);
app.post("/post",[
    check('nombre', 'El nombre no es valido').not().isEmpty(),
    check('password', 'Password debe ser de almenos 6 caracteres').isLength({min: 6}),
    check('email', 'El correo no es valido').isEmail(),
    /* check('rol', 'no es un rol valido').isIn(['ADMIN', 'USER']), */
    check('rol').custom(async(rol= '')=>{
        const existeRol = await Rol.findOne({rol});
        if(!existeRol){
            throw new Error(`El rol ${rol}, no esta registrado en la base de datos`)
        }
    }),
    validateDocuments

] ,postUsuario);


module.exports = app;