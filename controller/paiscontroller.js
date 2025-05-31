const Pais = require('../models/pais');

// Crear país
const crearPais = async (req, res) => {
  try {
    const pais = new Pais(req.body);
    await pais.save();
    res.status(201).json(pais);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear país', error });
  }
};

// Obtener todos los países
const obtenerPaises = async (req, res) => {
  try {
    const paises = await Pais.find();
    res.json(paises);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener países', error });
  }
};

// Obtener un país por ID
const obtenerPaisPorId = async (req, res) => {
  try {
    const pais = await Pais.findById(req.params.id);
    if (!pais) return res.status(404).json({ mensaje: 'País no encontrado' });
    res.json(pais);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener país', error });
  }
};

// Actualizar país
const actualizarPais = async (req, res) => {
  try {
    const pais = await Pais.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pais) return res.status(404).json({ mensaje: 'País no encontrado' });
    res.json(pais);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar país', error });
  }
};

// Eliminar país
const eliminarPais = async (req, res) => {
  try {
    const pais = await Pais.findByIdAndDelete(req.params.id);
    if (!pais) return res.status(404).json({ mensaje: 'País no encontrado' });
    res.json({ mensaje: 'País eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar país', error });
  }
};

module.exports = {
  crearPais,
  obtenerPaises,
  obtenerPaisPorId,
  actualizarPais,
  eliminarPais
};
