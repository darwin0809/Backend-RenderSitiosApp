const PersonaFamosa = require('../models/PersonaFamosa');

const crearPersona = async (req, res) => {
  const persona = new PersonaFamosa(req.body);
  await persona.save();
  res.status(201).json(persona);
};

const obtenerPersonas = async (req, res) => {
  const personas = await PersonaFamosa.find().populate('ciudadNacimiento');
  res.json(personas);
};

module.exports = { crearPersona, obtenerPersonas };
