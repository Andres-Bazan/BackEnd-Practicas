//Funcion que nos trae los errores
const { validationResult } = require("express-validator");

//Primero creo la funcion que conntiene el controldor
const validarCampos = (req, res, next) => {
  //Funcion que evalua si hay error
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.json({ errors: errores.array() });
  } 

  //verifico que no haya errores, si no los hay ejecuto la funcion (next)
  next();
};

module.exports = { validarCampos };
