const Ciudad = require('../models/ciudad');

// Crear ciudad
const crearCiudad = async (req, res) => {
  try {
    const ciudad = new Ciudad(req.body);
    await ciudad.save();
    res.status(201).json(ciudad);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear ciudad', error });
  }
};

// Obtener todas las ciudades
const obtenerCiudades = async (req, res) => {
  try {
    const ciudades = await Ciudad.find().populate('pais');
    res.json(ciudades);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener ciudades', error });
  }
};

// Obtener ciudad por ID
const obtenerCiudadPorId = async (req, res) => {
  try {
    const ciudad = await Ciudad.findById(req.params.id).populate('pais');
    if (!ciudad) return res.status(404).json({ mensaje: 'Ciudad no encontrada' });
    res.json(ciudad);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener ciudad', error });
  }
};

// Actualizar ciudad
const actualizarCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ciudad) return res.status(404).json({ mensaje: 'Ciudad no encontrada' });
    res.json(ciudad);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar ciudad', error });
  }
};

// Eliminar ciudad
const eliminarCiudad = async (req, res) => {
  try {
    const ciudad = await Ciudad.findByIdAndDelete(req.params.id);
    if (!ciudad) return res.status(404).json({ mensaje: 'Ciudad no encontrada' });
    res.json({ mensaje: 'Ciudad eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar ciudad', error });
  }
};

module.exports = {
  crearCiudad,
  obtenerCiudades,
  obtenerCiudadPorId,
  actualizarCiudad,
  eliminarCiudad
};
