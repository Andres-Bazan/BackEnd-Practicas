// const express = require("express");
require("dotenv").config(); //Llamando a nuestro entorno de trabajo con el puerto 2015
const Server = require("./models/server");

const server = new Server();

//Llamo a la funcion listen de mi (class Server)
server.listen();


