const express = require('express');
const router = express.Router();
const ciudadController = require('../controller/ciudadController');

router.get('/', ciudadController.obtenerCiudades);
router.get('/:id', ciudadController.obtenerCiudadPorId);
router.post('/', ciudadController.crearCiudad);
router.put('/:id', ciudadController.actualizarCiudad);
router.delete('/:id', ciudadController.eliminarCiudad);

module.exports = router;
