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
  const filtro = {};

  if (req.query.usuario) {
    filtro.usuario = req.query.usuario;
  }

  const visitas = await Visita.find(filtro)
    .populate('sitio')
    .populate('usuario')
    .sort({ fecha: -1 });

  res.json(visitas);
};


module.exports = { registrarVisita, obtenerVisitas };
