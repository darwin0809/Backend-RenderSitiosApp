const express = require('express');
const router = express.Router();
const platoController = require('../controller/platoController');

router.get('/', platoController.obtenerPlatos);
router.get('/:id', platoController.obtenerPlatoPorId);
router.post('/', platoController.crearPlato);
router.put('/:id', platoController.actualizarPlato);
router.delete('/:id', platoController.eliminarPlato);

module.exports = router;
