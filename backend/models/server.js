const express = require('express');
const cors = require(`cors`);
const mongoose = require(`mongoose`);
class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.mongo_uri = process.env.MONGO_URI;
        this.CryptoPath = "/api/crypto";
        this.UsuarioPath = "/api/usuario"
        this
        //Middlewares
        this.middlewares();
        //Rutas
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.static(`public`));
    }

    routes(){
        this.app.use(this.CryptoPath, require(`../routes/crypto.routes.js`));
        this.app.use(this.UsuarioPath, require("../routes/usuario.routes.js"));
    }
    

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`SERVER RUNNING ON PORT: ${this.port}`);
        })
    }
}

module.exports = Server;
