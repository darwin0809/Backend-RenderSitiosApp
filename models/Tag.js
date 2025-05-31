const mongoose = require('mongoose');

const TagSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  sitio: { type: mongoose.Schema.Types.ObjectId, ref: 'Sitio', required: true },
  personaje: { type: mongoose.Schema.Types.ObjectId, ref: 'PersonaFamosa', required: true },
  fecha: { type: Date, default: Date.now }
  // Puedes agregar: ubicacion: { lat, lng }, foto: String, etc.
});

module.exports = mongoose.model('Tag', TagSchema);
