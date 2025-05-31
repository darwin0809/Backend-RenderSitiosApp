const Sitio = require('../models/sitio');

const crearSitio = async (req, res) => {
  const sitio = new Sitio(req.body);
  await sitio.save();
  res.status(201).json(sitio);
};

const obtenerSitios = async (req, res) => {
  const sitios = await Sitio.find().populate('ciudad');
  res.json(sitios);
};

module.exports = { crearSitio, obtenerSitios };
