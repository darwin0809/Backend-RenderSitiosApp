const mongoose = require('mongoose');

const PersonaFamosaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  tipoFama: { type: String, enum: ['Deportista', 'Actor', 'Político', 'Cantante', 'Otro'], required: true },
  ciudadNacimiento: { type: mongoose.Schema.Types.ObjectId, ref: 'Ciudad', required: true },
  imagen: { type: String }
});

module.exports = mongoose.model('PersonaFamosa', PersonaFamosaSchema);
