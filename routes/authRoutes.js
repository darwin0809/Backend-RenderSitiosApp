const express = require('express');
const router = express.Router();
const { registrar, login, eliminarUsuario } = require('../controller/authController'); // ajusta el nombre si es necesario

router.post('/register', registrar);
router.post('/login', login);
router.delete('/:id', eliminarUsuario);

module.exports = router;
