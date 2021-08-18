const { Router } = require("express");
const { check } = require("express-validator");
const router = Router();

//controladores
const { validarCampos } = require("../middlewares/validar-campos");

//Funcion para controlar los emails registrados
const { emailExiste, idExiste } = require("../helpers/db-validators");

const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
} = require("../controllers/usuarios");

router.get("/", usuariosGet);

//Funcion para subir o mandar informacion a una base de datos
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "Debe tener una contraseña").not().isEmpty().trim(),
    check("password", "Debe tener un minimo de 5 caracteres").isLength({
      min: 6,
    }),
    check("email", "El correo ingresado es invalido").isEmail(),
    check("email").custom(emailExiste),
    check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    //una vez termino de hacer toda las validaciones ejecuto la funcion (validaCampos)
    validarCampos,
  ],
  usuariosPost
);

//Funcion para actualizar la informacion
router.put(
  "/:id",
  [
    check("id", "No es un Id valido").isMongoId(),
    //este check id nos manda el (id) que lo utilizaremos en "db-validator"
    check("id").custom(idExiste),
    validarCampos,
  ],
  usuariosPut
);

//Funcion para eliminar informacion, en esta caso (usuarios mediante un ID)
router.delete("/:id", usuariosDelete);

module.exports = router;
