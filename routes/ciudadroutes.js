const express = require('express');
const router = express.Router();
const { crearCiudad, obtenerCiudades } = require('../controller/ciudadController');

router.get('/', obtenerCiudades);
router.post('/', crearCiudad);

module.exports = router;
