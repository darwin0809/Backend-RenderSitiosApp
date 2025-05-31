const express = require('express');
const router = express.Router();
const { crearPlato, obtenerPlatos } = require('../controller/platoController');

router.post('/', crearPlato);
router.get('/', obtenerPlatos);

module.exports = router;
