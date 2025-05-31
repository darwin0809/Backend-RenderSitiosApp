const express = require('express');
const router = express.Router();
const { registrar, login, eliminarUsuario } = require('../controller/authController'); // ajusta el nombre si es necesario

router.post('/register', registrar);
router.post('/login', login);
router.delete('usuarios/:id', eliminarUsuario);
router.get('/usuarios', verificarToken, obtenerUsuarios); 

module.exports = router;
