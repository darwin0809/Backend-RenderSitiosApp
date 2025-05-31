const Sitio = require('../models/sitio');

// Crear sitio
const crearSitio = async (req, res) => {
  try {
    const sitio = new Sitio(req.body);
    await sitio.save();
    res.status(201).json(sitio);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear sitio', error });
  }
};

// Obtener sitios (filtro opcional por ciudad)
const obtenerSitios = async (req, res) => {
  try {
    const filtro = {};

    if (req.query.ciudad) {
      filtro.ciudad = req.query.ciudad;
    }

    const sitios = await Sitio.find(filtro).populate('ciudad');
    res.json(sitios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener sitios', error });
  }
};

// Obtener sitio por ID
const obtenerSitioPorId = async (req, res) => {
  try {
    const sitio = await Sitio.findById(req.params.id).populate('ciudad');
    if (!sitio) return res.status(404).json({ mensaje: 'Sitio no encontrado' });
    res.json(sitio);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener sitio', error });
  }
};

// Actualizar sitio
const actualizarSitio = async (req, res) => {
  try {
    const sitio = await Sitio.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('ciudad');
    if (!sitio) return res.status(404).json({ mensaje: 'Sitio no encontrado' });
    res.json(sitio);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar sitio', error });
  }
};

// Eliminar sitio
const eliminarSitio = async (req, res) => {
  try {
    const sitio = await Sitio.findByIdAndDelete(req.params.id);
    if (!sitio) return res.status(404).json({ mensaje: 'Sitio no encontrado' });
    res.json({ mensaje: 'Sitio eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar sitio', error });
  }
};

module.exports = {
  crearSitio,
  obtenerSitios,
  obtenerSitioPorId,
  actualizarSitio,
  eliminarSitio
};
