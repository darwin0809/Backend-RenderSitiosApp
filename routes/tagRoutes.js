const express = require('express');
const router = express.Router();
const { registrarTag, obtenerTags } = require('../controller/tagController');
const { verificarToken } = require('../middleware/authMiddleware');

router.post('/', verificarToken, registrarTag);
router.get('/', verificarToken, obtenerTags);

module.exports = router;
