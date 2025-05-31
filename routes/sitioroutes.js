const express = require('express');
const router = express.Router();
const sitioController = require('../controllers/sitioController');

router.get('/', sitioController.obtenerSitios);
router.get('/:id', sitioController.obtenerSitioPorId);
router.post('/', sitioController.crearSitio);
router.put('/:id', sitioController.actualizarSitio);
router.delete('/:id', sitioController.eliminarSitio);

module.exports = router;
