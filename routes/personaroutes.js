const express = require('express');
const router = express.Router();
const { crearPersona, obtenerPersonas } = require('../controller/personacontroller');

router.get('/', obtenerPersonas);
router.post('/', crearPersona);

module.exports = router;
