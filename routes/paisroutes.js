const express = require('express');
const router = express.Router();
const { crearPais, obtenerPaises } = require('../controller/paiscontroller');

router.get('/', obtenerPaises);
router.post('/', crearPais);

module.exports = router;
