const Ciudad = require('../models/ciudad');

const crearCiudad = async (req, res) => {
  const ciudad = new Ciudad(req.body);
  await ciudad.save();
  res.status(201).json(ciudad);
};

const obtenerCiudades = async (req, res) => {
  const ciudades = await Ciudad.find().populate('pais');
  res.json(ciudades);
};

module.exports = { crearCiudad, obtenerCiudades };
