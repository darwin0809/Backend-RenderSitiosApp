const express = require('express');
const router = express.Router();
const { registrarVisita, obtenerVisitas } = require('../controller/visitaController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, registrarVisita);
router.get('/', verificarToken, obtenerVisitas);

module.exports = router;
