const Tag = require('../models/Tag');

const registrarTag = async (req, res) => {
  const { sitio, personaje } = req.body;
  const tag = new Tag({
    sitio,
    personaje,
    usuario: req.usuario.id
  });
  await tag.save();
  res.status(201).json(tag);
};

const obtenerTags = async (req, res) => {
  const tags = await Tag.find({ usuario: req.usuario.id })
    .populate('sitio')
    .populate('personaje')
    .populate('usuario');
  res.json(tags);
};

module.exports = { registrarTag, obtenerTags };
