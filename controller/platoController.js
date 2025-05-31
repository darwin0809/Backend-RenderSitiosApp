const Plato = require('../models/plato');

const crearPlato = async (req, res) => {
  const plato = new Plato(req.body);
  await plato.save();
  res.status(201).json(plato);
};

const obtenerPlatos = async (req, res) => {
  const platos = await Plato.find().populate('sitio');
  res.json(platos);
};

module.exports = { crearPlato, obtenerPlatos };
