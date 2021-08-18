const express = require("express");

const cors = require("cors");

//importar coneccion a base de datosv BD
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    //inicialicen cuando se levente el server
    this.app = express();
    this.usuariosPath = "/api/usuarios";

    //coneccion
    this.conectarDB();

    //middlewares
    this.middlewares();

    //rutas
    this.routes();
  }

  //funcion para conecatr la base de datos BD
  async conectarDB() {
    await dbConnection()
  }
 
  middlewares() {
    //Carpeta pública
    this.app.use(express.static("public"));

    //CORS
    this.app.use(cors());

    //Acceso al body, se usa para leer y parsear la data
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended:true}))
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/usuarios"));
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor online en puerto", process.env.PORT);
    });
  }
}

module.exports = Server;
