const { request, response } = require("express");

//traigo los modelos de usuario
const Usuario = require("../models/usuario");

//libreria para encriptar las contraseñas
const bcrypt = require("bcryptjs");

const usuariosGet = (req = request, res = response) => {
  res.json({
    msg: "GET usuarios",
  });
};

const usuariosPost = async (req = request, res = response) => {
  const { nombre, email, password, rol } = req.body;

  //aqui se encripta la contraseña
  const usuario = new Usuario({ nombre, email, password, rol });

  const salt = bcrypt.genSaltSync(); //Si no le paso nada por defecto es 10

  usuario.password = bcrypt.hashSync(password, salt);

  await usuario.save();

  res.json({
    msg: "Usuario creado",
    usuario,
  });
};
const usuariosPut = async (req = request, res = response) => {
  const id = req.params.id;
  const { _id, email, rol, password, ...resto } = req.body;

  if (password) {
    const salt = bcrypt.genSaltSync();
    resto.password = bcrypt.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto, { new: true });

  res.json({
    msg: "PUT usuarios",
    usuario,
  });
};
const usuariosDelete = async (req = request, res = response) => {
  const id = req.params.id;
  //para borrar
  // const usuario = await Usuario.findByIdAndDelete(id);

  const usuario = await Usuario.findByIdAndUpdate(id, { estado: false });
  res.json({
    msg: "Delete usuarios",
    usuario,
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
};
