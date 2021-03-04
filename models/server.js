const express =require('express');
const cors = require('cors');

class server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath ='/api/usuarios'
        this.middleware();
        this.routes();
    }
    middleware(){
      this.app.use(cors());
      this.app.use(express.json());
      this.app.use(express.static('public'));
    }

    routes(){
      this.app.use(this.usuariosPath,require('../routes/usuarios.routes'));

    }

    listen(callback){
        this.app.listen(this.port,callback);
        
    }
}

module.exports = server;