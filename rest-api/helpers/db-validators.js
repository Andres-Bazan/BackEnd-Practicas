const Usuario = require("../models/usuario");

const emailExiste = async (email = "") => {
  //pregunto a la base de datos con el (findOne) si el email que ingreso ya existe
  const existeEmail = await Usuario.findOne({ email });

  //luego de que pregunto si existe el email o no, hago el condicional
  if (existeEmail) {
    throw new Error(`El email ${email} ya se encuentra registrado`);
  }
};

const idExiste = async (id) => {
  const existeUsuario = await Usuario.findById(id);

  if(!existeUsuario){
    throw new Error(`El id ${id} no existe`)
  }
};

module.exports = {
  emailExiste,
  idExiste
};
