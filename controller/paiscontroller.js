const Pais = require('../models/pais');

const crearPais = async (req, res) => {
  const pais = new Pais(req.body);
  await pais.save();
  res.status(201).json(pais);
};

const obtenerPaises = async (req, res) => {
  const paises = await Pais.find();
  res.json(paises);
};

module.exports = { crearPais, obtenerPaises };
