const express = require('express');
const router = express.Router();
const {
    crearPais,
    obtenerPaises,
    obtenerPaisPorId,
    actualizarPais,
    eliminarPais
} = require('../controller/paiscontroller');

router.get('/', obtenerPaises);
router.get('/:id', obtenerPaisPorId);
router.post('/', crearPais);
router.put('/:id', actualizarPais);
router.delete('/:id', eliminarPais);

module.exports = router;
