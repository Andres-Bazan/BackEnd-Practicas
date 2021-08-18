// *RUTA DE USUARIOS*
//Archivo para Crear, modificar, y eliminar usuarios

//Importo el metodo Router de express
const { Router } = require("express");

//Asigno a la variable lo que importe de express
const router = Router;

router.get("/usuarios", function (req, res) {
  //funcion para traer informacion
  res.json({
    msg: "GET usuarios",
  });
});

router.post("/usuarios", function (req, res) {
  //funcion para mandar informacion (como por ej: crear usuario)
  res.json({
    msg: "POST usuarios",
  });
});

router.put("/usuarios", function (req, res) {
  //funcion para actualizar un usuario
  res.json({
    msg: "PUT usuarios",
  });
});

router.delete("/usuarios", function (req, res) {
  //con el (delete) elimino los usuarios
  res.json({
    msg: "DELETE usuarios",
  });
});

//para poder usar Router tengo que exportalo
module.exports = router;
