const Plato = require('../models/plato');

// Crear plato
const crearPlato = async (req, res) => {
  try {
    const plato = new Plato(req.body);
    await plato.save();
    res.status(201).json(plato);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear plato', error });
  }
};

// Obtener platos (con filtro por ciudad opcional)
const obtenerPlatos = async (req, res) => {
  try {
    const filtro = {};

    if (req.query.ciudad) {
      filtro.ciudad = req.query.ciudad;
    }

    const platos = await Plato.find(filtro)
      .populate('sitio')
      .populate('ciudad');

    res.json(platos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener platos', error });
  }
};

// Obtener plato por ID
const obtenerPlatoPorId = async (req, res) => {
  try {
    const plato = await Plato.findById(req.params.id)
      .populate('sitio')
      .populate('ciudad');
    if (!plato) return res.status(404).json({ mensaje: 'Plato no encontrado' });
    res.json(plato);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener plato', error });
  }
};

// Actualizar plato
const actualizarPlato = async (req, res) => {
  try {
    const plato = await Plato.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('sitio')
      .populate('ciudad');
    if (!plato) return res.status(404).json({ mensaje: 'Plato no encontrado' });
    res.json(plato);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar plato', error });
  }
};

// Eliminar plato
const eliminarPlato = async (req, res) => {
  try {
    const plato = await Plato.findByIdAndDelete(req.params.id);
    if (!plato) return res.status(404).json({ mensaje: 'Plato no encontrado' });
    res.json({ mensaje: 'Plato eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar plato', error });
  }
};

module.exports = {
  crearPlato,
  obtenerPlatos,
  obtenerPlatoPorId,
  actualizarPlato,
  eliminarPlato
};
