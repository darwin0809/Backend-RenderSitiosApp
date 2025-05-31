const PersonaFamosa = require('../models/PersonaFamosa');

// Crear persona famosa
const crearPersona = async (req, res) => {
  try {
    const persona = new PersonaFamosa(req.body);
    await persona.save();
    res.status(201).json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al crear persona', error });
  }
};

// Obtener personas (con filtro opcional por ciudad)
const obtenerPersonas = async (req, res) => {
  try {
    const filtro = {};

    if (req.query.ciudad) {
      filtro.ciudadNacimiento = req.query.ciudad;
    }

    const personas = await PersonaFamosa.find(filtro).populate('ciudadNacimiento');
    res.json(personas);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener personas', error });
  }
};

// Obtener persona por ID
const obtenerPersonaPorId = async (req, res) => {
  try {
    const persona = await PersonaFamosa.findById(req.params.id).populate('ciudadNacimiento');
    if (!persona) return res.status(404).json({ mensaje: 'Persona no encontrada' });
    res.json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener persona', error });
  }
};

// Actualizar persona
const actualizarPersona = async (req, res) => {
  try {
    const persona = await PersonaFamosa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!persona) return res.status(404).json({ mensaje: 'Persona no encontrada' });
    res.json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar persona', error });
  }
};

// Eliminar persona
const eliminarPersona = async (req, res) => {
  try {
    const persona = await PersonaFamosa.findByIdAndDelete(req.params.id);
    if (!persona) return res.status(404).json({ mensaje: 'Persona no encontrada' });
    res.json({ mensaje: 'Persona eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar persona', error });
  }
};

module.exports = {
  crearPersona,
  obtenerPersonas,
  obtenerPersonaPorId,
  actualizarPersona,
  eliminarPersona
};
