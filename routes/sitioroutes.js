const express = require('express');
const router = express.Router();
const { crearSitio, obtenerSitios } = require('../controller/sitioController');
const { verificarToken, soloAdmin } = require('../middleware/authMiddleware');
router.post('/', verificarToken, soloAdmin, crearSitio);
router.get('/', obtenerSitios);

module.exports = router;
