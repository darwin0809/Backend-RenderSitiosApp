const Visita = require('../models/Visita');

const registrarVisita = async (req, res) => {
  const { sitio } = req.body;
  const visita = new Visita({
    sitio,
    usuario: req.usuario.id
  });
  await visita.save();
  res.status(201).json(visita);
};

const obtenerVisitas = async (req, res) => {
  const visitas = await Visita.find({ usuario: req.usuario.id })
    .populate('sitio')
    .populate('usuario');
  res.json(visitas);
};

module.exports = { registrarVisita, obtenerVisitas };
