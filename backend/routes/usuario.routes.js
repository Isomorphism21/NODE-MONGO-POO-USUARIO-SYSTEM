const express = require('express');
const { getUsuario, postUsuario } = require('../controllers/usuario.controllers.js');


const app = express.Router();

app.get("/all", getUsuario);
app.post("/post", postUsuario);


module.exports = app;