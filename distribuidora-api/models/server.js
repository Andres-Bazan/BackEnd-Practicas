//Archivo principal tendra toda la logica de la coneccion a mi servidor
//desde aqui manejo toda la logica de la coneccion a mi servidor
//Tammbien se maneja la coneccion con las rutas y levantamos todo para que funcione nuestro servidor

const express = require("express");

class Server {
  constructor() {
    //Aqui inicalizan todo cuando se levanta el server
    this.app = express();

    //midlewares
    this.middlewares();

    //rutas
    this.routes();
  }
  middlewares() {
    this.app.use(express.static("public"));
  }

  routes() {
    //aqui uso mi (app.use) osea un middleware
    this.app.use(require("../routes/usuarios"))
  }

  listen() {
    this.app.listen(process.env.PORT, () => {
      console.log("Servidor online en el puerto", process.env.PORT);
    });
  }
}

// Exporto la clase
module.exports = Server;
