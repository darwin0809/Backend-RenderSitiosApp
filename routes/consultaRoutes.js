const express = require('express');
const router = express.Router();
const { consultaFamosos, topSitiosVisitados, sitiosPorCiudad, usuariosActivos } = require('../controller/consultasController');

router.get('/famosos', consultaFamosos);
router.get('/sitios-mas-visitados', topSitiosVisitados);
router.get('/sitios-por-ciudad', sitiosPorCiudad); // adicional
router.get('/usuarios-mas-activos', usuariosActivos); // adicional

module.exports = router;
