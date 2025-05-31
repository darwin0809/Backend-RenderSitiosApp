const mongoose = require('mongoose');

const CiudadSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  pais: { type: mongoose.Schema.Types.ObjectId, ref: 'Pais', required: true },
  imagen: { type: String } // 👈 URL de imagen opcional
});

module.exports = mongoose.model('Ciudad', CiudadSchema);

